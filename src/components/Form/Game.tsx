import React, {ReactNode} from "react";
import {CreateGameFormValues, EditGameFormValues} from "../../types/types";
import {Field, Form, Formik, FormikErrors, FormikHelpers, FormikTouched, FormikValues} from "formik";
import {
    FormError,
    SelectInput,
    SubmitButton,
    SuccessMessage as SuccessMessageElement,
    TextAreaInput,
    TextInput,
    ValidationError
} from "../Form";
import {getJSDateFromOmegaDate} from "../../utils";
import Markdown from "../Markdown";
import {Either} from "fp-ts/es6/Either";
import {MakeLeft, MakeRight} from "../../utils/io-ts-helpers";
import {isLeft} from "fp-ts/Either";

export type SuccessMessage = {
    message: string,
    node?: ReactNode
}

type GameAdminProps<T extends (CreateGameFormValues | EditGameFormValues)> = {
    onSubmit: (values: FormikValues, {setSubmitting, setErrors, setValues}: FormikHelpers<T>) => Promise<void>,
    initialValues: T,
    successMessage: SuccessMessage,
    buttonText: string
}

type FormErrorMessageProps = {
    errors: FormikErrors<CreateGameFormValues | EditGameFormValues>,
    touched: FormikTouched<CreateGameFormValues | EditGameFormValues>
};

function FormErrorMessage({errors, touched}: FormErrorMessageProps) {
    const errorDivs: React.ReactElement[] = [];

    const keys: [key: keyof (CreateGameFormValues | EditGameFormValues), label: string][] = [
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


function GamePreview({values}: { values: CreateGameFormValues | EditGameFormValues }) {
    return <Markdown markdown={values.fullDescription}/>
}

function MonthOptions({prefix}: { prefix: string }) {
    function monthToLocale(month: number): string {
        const date = new Date();
        date.setUTCMonth(month);

        return date.toLocaleString(undefined, {month: "long"})
    }

    return <>
        {
            [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
            ].map(val => <option key={`${prefix}${val}`} value={val+1}>{monthToLocale(val)}</option>)
        }
    </>
}

function DayOptions({prefix}: { prefix: string }) {
    return <>
        {
            [
                'TBC', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
            ].map(val => <option key={`${prefix}${val}`} value={val === 'tbc' ? '' : val}>{val}</option>)
        }
    </>;
}


export function GameAdmin(
    {
        onSubmit,
        initialValues,
        successMessage,
        buttonText
    }: GameAdminProps<CreateGameFormValues | EditGameFormValues>
) {

    return <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
    >
        {
            props => {
                return <div className="flex flex-col lg:flex-row">
                    <div className="px-2 flex-1">
                        <Form>
                            {
                                successMessage.message
                                && <SuccessMessageElement><p>{successMessage.message}</p>{successMessage.node}
                                </SuccessMessageElement>
                            }
                            {
                                <FormErrorMessage errors={props.errors} touched={props.touched}/>
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
                                    The game description is written using <a
                                    href="https://daringfireball.net/projects/markdown/">markdown</a>. A preview is
                                    shown, but the main thing is:
                                </p>
                                <ul className="pl-8 list-disc">
                                    <li>Links are written using <code className="code-snippet">[Link
                                        Text](http://link/goes/here)</code></li>
                                    <li>You can add list of items using a series of <code
                                        className="code-snippet">*</code> on a new lines, like so:
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
                                    <ValidationError
                                        showError={Boolean(props.touched.date?.day && props.errors.date?.day)}
                                        id="date.day-validation">
                                        {props.errors.date?.day}
                                    </ValidationError>
                                    <Field name="date.day" as="select" className="mx-2"
                                           value={props.values.date.day}>
                                        <DayOptions prefix='date.day.'/>
                                    </Field>
                                    <label htmlFor="date.month" className="sr-only">Game date (month)</label>
                                    <Field name="date.month" as="select" className="mx-2"
                                           value={props.values.date.month}>

                                        <MonthOptions prefix='date.month.'/>

                                    </Field>
                                    <label htmlFor="date.year" className="sr-only">Game date (year)</label>
                                    <Field name="date.year" type="number" className="mx-2"
                                           value={props.values.date.year}/>
                                </div>
                            </div>
                            <div className={`${props.values.type === 'Play-By-Email' ? '' : 'hidden'}`}>
                                <p>Game end date</p>
                                <div>
                                    <label htmlFor="endDate.day" className="sr-only">Game endDate (day)</label>
                                    <ValidationError
                                        showError={Boolean(props.touched.endDate?.day && props.errors.endDate?.day)}
                                        id="endDate.day-validation">
                                        {props.errors.endDate?.day}
                                    </ValidationError>
                                    <Field name="endDate.day" as="select" className="mx-2"
                                           value={props.values.endDate.day}>
                                        <DayOptions prefix='endDate.day.'/>
                                    </Field>
                                    <label htmlFor="endDate.month" className="sr-only">Game endDate (month)</label>
                                    <Field name="endDate.month" as="select" className="mx-2"
                                           value={props.values.endDate.month}>
                                        <MonthOptions prefix='endDate.month.'/>
                                    </Field>

                                    <label htmlFor="endDate.year" className="sr-only">Game endDate (year)</label>
                                    <Field name="endDate.year" type="number" className="mx-2"
                                           value={props.values.endDate.year}/>
                                </div>
                            </div>
                            <SubmitButton disabled={props.isSubmitting}>
                                {buttonText}
                            </SubmitButton>
                        </Form>
                    </div>
                    <div aria-live="polite" className="px-2 flex-1">
                        <h2 className="text-2xl">Game preview</h2>
                        <GamePreview values={props.values}/>
                    </div>
                </div>
            }
        }
    </Formik>
}

function formValuesToJSDate(values: FormikValues, key: 'date'|'endDate'): Date {
    const date: EditGameFormValues[typeof key] = {
        year: values[key].year,
        month: values[key].month,
        day: null
    }

    return getJSDateFromOmegaDate(date);
}

function validateDate(values: FormikValues, key: 'date'|'endDate'): Either<string, true> {
    const jsDate = formValuesToJSDate(values, key);

    const currMonth = jsDate.getUTCMonth();

    if (values[key].day) {
        jsDate.setUTCDate(values[key].day);
    }

    if (currMonth == jsDate.getUTCMonth()) {
        return MakeRight(true);
    }
    return MakeLeft(`The month didn't match.
The passed form values were { year:${values[key].year}, month: ${values[key].month}, day: ${values[key].day ?? null } }. 
The generated date was { year:${jsDate.getFullYear()}, month: ${jsDate.getMonth() - 1}, day: ${jsDate.getDay()} }
Using getUTC etc gives us { year:${jsDate.getUTCFullYear()}, month: ${jsDate.getUTCMonth() - 1}, day: ${jsDate.getUTCDay()} }`);
}

export function validate(values: FormikValues) {
    const errors: FormError<EditGameFormValues | CreateGameFormValues> = {};

    const requiredFields: (keyof (EditGameFormValues | CreateGameFormValues))[] = [
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

    const validateDateRes = validateDate(values, 'date');
    if (isLeft(validateDateRes)) {
        // That means the day wasn't valid - set that as invalid
        if (!errors.date) {
            errors.date = {}
        }

        errors.date.day = validateDateRes.left;
    }

    if (!values.type) {
        errors.type = 'You must provide a value'
    }

    if (values.type == 'Play-By-Email') {
        const validateDateRes = validateDate(values, 'endDate');
        if (isLeft(validateDateRes)) {
            // That means the day wasn't valid - set that as invalid
            if (!errors.endDate) {
                errors.endDate = {}
            }

            errors.endDate.day =  validateDateRes.left;
        }

        if (!errors.date && !errors.endDate && formValuesToJSDate(values, 'endDate') < formValuesToJSDate(values, 'date')) {
            errors.endDate = {day: 'The end date must be after the start date'}
        }
    }

    return errors;
}
