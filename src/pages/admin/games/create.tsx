import React, {useState} from "react";
import useUser from "../../../lib/useUser";
import {Hero, HeroHeading, MainContent} from "../../../components/Hero";
import {CreateGameFormValues, CreateGameResult} from "../../../types/types";
import {Field, Form, Formik, FormikErrors, FormikHelpers, FormikTouched, FormikValues} from "formik";
import {
    FormError,
    SelectInput,
    SubmitButton,
    SuccessMessage,
    TextAreaInput,
    TextInput,
    ValidationError
} from "../../../components/Form";
import Markdown from "../../../components/Markdown";
import {getJSDateFromGameDate} from "../../../utils";
import {CreateGameResultDecode} from "../../../types/io-ts-def";
import {MakeLeft} from "../../../utils/io-ts-helpers";
import {isLeft} from "fp-ts/Either";
import {ReactNode} from "react-markdown";
import Link from "next/link";

function GamePreview({ values }: { values: CreateGameFormValues }) {
    return <Markdown markdown={values.fullDescription} />
}

function FormErrorMessage({errors, touched}: {errors: FormikErrors<CreateGameFormValues>, touched: FormikTouched<CreateGameFormValues>}) {
    const errorDivs: React.ReactElement[] = [];

    const keys: [key: keyof CreateGameFormValues, label: string][] = [
        ['name', 'Game name'],
        ['designer', 'Designer'],
        ['type', 'Game type'],
        ['preamble', 'Preamble'],
        ['fullDescription', 'Full description'],
        ['date', 'Game date'],
        ['endDate', 'End date']
    ]

    for (let [key, label] of keys) {
        if (key == 'date') {
            if (errors.date && touched.date) {
                errorDivs.push(<li key={key}><strong>{label}</strong>: {errors.date.day}</li>)
            }
        } else if (key == 'endDate') {
            if (errors.endDate && touched.endDate) {
                errorDivs.push(<li key={key}><strong>{label}</strong>: {errors.endDate.day}</li>)
            }
        } else {
            if (errors[key] && touched[key]) {
                errorDivs.push(<li key={key}><strong>{label}</strong>: {errors[key]}</li>)
            }
        }
    }

    return <ValidationError showError={errorDivs.length > 0} id="form-errors">
        <ul className="pl-8 list-disc">{errorDivs}</ul>
    </ValidationError>
}

type SuccessMessage = {
    message: string,
    node?: ReactNode
}

export default function CreateGame() {
    // If the user isn't logged in, send them to the admin page
    const { user } = useUser({
        redirectTo: '/admin/login',
    });

    const [successMessage, setSuccessMessage] = useState<SuccessMessage>({message: ''});

    const initialValues: CreateGameFormValues = {
        name: '',
        designer: '',
        preamble: '',
        fullDescription: '',
        type: "",
        endDate: {
            year: (new Date()).getFullYear(),
            month: 1,
            day: 1
        },
        date: {
            year: (new Date()).getFullYear(),
            month: 1,
            day: 1
        },
    };

    const onSubmit = async (values: FormikValues, { setSubmitting, setErrors, setValues }: FormikHelpers<CreateGameFormValues>) => {
        try {
            setSuccessMessage({message:''});

            const postValues = values;

            const outerKeys: (keyof CreateGameFormValues)[]= ['date', 'endDate'];
            const innerKeys: (keyof CreateGameFormValues['date'])[]= ['day', 'month', 'year'];

            for (let key of outerKeys) {
                if (!postValues[key]) {
                    continue;
                }

                for (let innerKey of innerKeys) {
                    postValues[key][innerKey] = Number.parseInt(postValues[key][innerKey]);
                }
            }

            const response = await fetch(
                '/api/games/create',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(postValues)
                }
            );

            let data: CreateGameResult;

            try {
                const origData = await response.json();

                if (CreateGameResultDecode.is(origData)) {
                    data = origData;
                } else {
                    data = MakeLeft({
                        result: "Failure",
                        message: `Error when sending API request (unknown API result - ${origData})`
                    })
                }
            }
            catch (e) {
                data = MakeLeft({
                    result: "Failure",
                    message: 'Error when sending API request, please wait and try again'
                })
            }

            if (isLeft(data)) {
                setErrors({ name: data.left.message });
            } else {

                setSuccessMessage({
                    message: data.right.message,
                    node: <p><Link href={`/games/${data.right.game._id}`}><a>You may view this game here</a></Link></p>
                });
                setValues(
                    initialValues,
                    false
                );
            }
        }
        finally {
            setSubmitting(false);
        }
    }
    const validate = (values: FormikValues) => {
        const errors: FormError<CreateGameFormValues> = {};

        const requiredFields: (keyof CreateGameFormValues)[] = [
            'name',
            'designer',
            'type',
            'preamble',
            'fullDescription'
        ];

        for (let required of requiredFields) {
            if (!values[required]) {
                errors[required] = 'You must provide a value'
            }
        }

        const date: CreateGameFormValues['date'] = {
            year: values.date.year,
            month: values.date.month,
            day: values.date.day,
        }

        const jsDate = getJSDateFromGameDate(date);

        if (jsDate.getMonth() != (date.month - 1)) {
            // That means the day wasn't valid - set that as invalid
            if (!errors.date) {
                errors.date = {}
            }

            errors.date.day = 'That day does not exist for that month';
        }

        if (!values.type) {
            errors.type = 'You must provide a value'
        }

        if (values.type == 'Play-By-Email') {
            const endDate: CreateGameFormValues['endDate'] = {
                year: values.endDate.year,
                month: values.endDate.month,
                day: values.endDate.day,
            }
            const jsEndDate = getJSDateFromGameDate(endDate);

            if (jsEndDate.getMonth() != (endDate.month - 1)) {
                // That means the day wasn't valid - set that as invalid
                if (!errors.endDate) {
                    errors.endDate = {}
                }

                errors.endDate.day = 'That day does not exist for that month';
            }

            if (!errors.date && !errors.endDate && jsEndDate < jsDate) {
                errors.endDate = {day: 'The end date must be after the start date'}
            }
        }

        return errors;
    }

    // It's possible for this to be undefined if the user hasn't logged in yet
    // Since we have to wait for the api response, make sure this returns an empty page
    if (!user?.isLoggedIn) {
        return <MainContent><p>Loading admin page</p></MainContent>
    }

    return <React.Fragment>
        <Hero>
            <HeroHeading>
                Create game
            </HeroHeading>
        </Hero>
        <MainContent>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
            >
                {
                    props => {
                        return <div className="flex flex-col lg:flex-row">
                            <div className="px-2">
                                <Form>
                                    {
                                        successMessage.message
                                        && <SuccessMessage><p>{successMessage.message}</p>{successMessage.node}</SuccessMessage>
                                    }
                                    {
                                        <FormErrorMessage errors={props.errors} touched={props.touched} />
                                    }
                                    <TextInput
                                        label="Game name"
                                        name="name"
                                        type="text"
                                        value={props.values.name}
                                    />
                                    <TextInput
                                        label="Designer"
                                        name="designer"
                                        type="text"
                                        value={props.values.designer}
                                    />
                                    <SelectInput
                                        label="Game type"
                                        name="type"
                                        value={props.values.type}
                                    >
                                        <option value="">Select game type</option>
                                        <option value="Online game">Online game</option>
                                        <option value="Play-By-Email">Play-By-Email</option>
                                    </SelectInput>
                                    <div>

                                    </div>
                                    <TextInput
                                        label="Preamble"
                                        name="preamble"
                                        type="text"
                                        value={props.values.preamble}
                                    />
                                    <TextAreaInput
                                        label="Full description"
                                        name="fullDescription"
                                        value={props.values.fullDescription}
                                    />
                                    <div>
                                        <p>
                                            The game description is written using <a href="https://daringfireball.net/projects/markdown/">markdown</a>. A preview is shown, but the main thing is:
                                        </p>
                                        <ul className="pl-8 list-disc">
                                            <li>Links are written using <code className="code-snippet">[Link Text](http://link/goes/here)</code></li>
                                            <li>You can add list of items using a series of <code className="code-snippet">*</code> on a new lines, like so:
                                                <pre className="code-snippet">
                                                    * First item{'\n'}
                                                    * Second item{'\n'}
                                                    * Third item{'\n'}
                                                </pre>
                                            </li>
                                            <li>
                                                You can <em>*emphasise*</em> and <strong>**bold**</strong> things.
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p>Game date</p>
                                        <div>
                                            <label htmlFor="date.day" className="sr-only">Game date (day)</label>
                                            <Field name="date.day" as="select" className="mx-2"
                                                   value={props.values.date.day}>
                                                {
                                                    [
                                                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
                                                    ].map(val => <option key={val} value={`${val}`}>{val}</option>)
                                                }
                                            </Field>
                                            <ValidationError showError={Boolean(props.touched.date?.day && props.errors.date?.day)} id="date.day-validation" />
                                            <label htmlFor="date.month" className="sr-only">Game date (month)</label>
                                            <Field name="date.month" as="select" className="mx-2"
                                                   value={props.values.date.month}>
                                                {
                                                    [
                                                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
                                                    ].map(val => <option key={val} value={`${val}`}>{val}</option>)
                                                }
                                            </Field>
                                            <label htmlFor="date.year" className="sr-only">Game date (year)</label>
                                            <Field name="date.year" type="number" className="mx-2"
                                                   value={props.values.date.year} />
                                        </div>
                                    </div>
                                    <div className={`${props.values.type === 'Play-By-Email' ? '' : 'hidden'}`}>
                                        <p>Game end date</p>
                                        <div>
                                            <label htmlFor="endDate.day" className="sr-only">Game endDate (day)</label>
                                            <Field name="endDate.day" as="select" className="mx-2"
                                                   value={props.values.endDate.day}>
                                                {
                                                    [
                                                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
                                                    ].map(val => <option key={val} value={`${val}`}>{val}</option>)
                                                }
                                            </Field>
                                            <ValidationError showError={Boolean(props.touched.endDate?.day && props.errors.endDate?.day)} id="endDate.day-validation" />
                                            <label htmlFor="endDate.month" className="sr-only">Game endDate (month)</label>
                                            <Field name="endDate.month" as="select" className="mx-2"
                                                   value={props.values.endDate.month}>
                                                {
                                                    [
                                                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
                                                    ].map(val => <option key={val} value={`${val}`}>{val}</option>)
                                                }
                                            </Field>

                                            <label htmlFor="endDate.year" className="sr-only">Game endDate (year)</label>
                                            <Field name="endDate.year" type="number" className="mx-2"
                                                   value={props.values.endDate.year}/>
                                        </div>
                                    </div>
                                    <SubmitButton disabled={props.isSubmitting}>
                                        Create game
                                    </SubmitButton>
                                </Form>
                            </div>
                            <div aria-live="polite" className="px-2">
                                <h2 className="text-2xl">Game preview</h2>
                                <GamePreview values={props.values} />
                            </div>
                        </div>
                    }
                }
            </Formik>
        </MainContent >
    </React.Fragment >
}
