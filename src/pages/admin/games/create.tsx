import React, { useState } from "react";
import useUser from "../../../lib/useUser";
import { Hero, HeroHeading, MainContent } from "../../../components/Hero";
import { CreateGameFormValues } from "../../../types/types";
import { Field, Form, Formik, FormikValues } from "formik";
import { FormError, SelectInput, SubmitButton, SuccessMessage, TextAreaInput, TextInput } from "../../../components/Form";
import Markdown from "../../../components/Markdown";

function GamePreview({ values }: { values: CreateGameFormValues }) {
    return <Markdown markdown={values.fullDescription} />
}

export default function CreateGame() {
    // If the user isn't logged in, send them to the admin page
    const { user } = useUser({
        redirectTo: '/admin/login',
    });

    const [successMessage, setSuccessMessage] = useState<string>('');

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

    const onSubmit = () => { throw Error() }
    const validate = (values: FormikValues) => {
        const errors: FormError<CreateGameFormValues> = {};

        return errors;
    }

    // It's possible for this to be undefined if the user hasn't logged in yet
    // Since we have to wait for the api response, make sure this returns an empty page
    if (!user) {
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
                                        successMessage
                                        && <SuccessMessage>{successMessage}</SuccessMessage>
                                    }
                                    <TextInput
                                        label="Game name"
                                        name="game"
                                        type="text"
                                    />
                                    <TextInput
                                        label="Designer"
                                        name="designer"
                                        type="text"
                                    />
                                    <SelectInput
                                        label="Game type"
                                        name="type"
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
                                    />
                                    <TextAreaInput
                                        label="Full description"
                                        name="fullDescription"
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
                                            <Field name="date.day" as="select" className="mx-2">
                                                {
                                                    [
                                                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
                                                    ].map(val => <option key={val} value={`${val}`}>{val}</option>)
                                                }
                                            </Field>
                                            <label htmlFor="date.month" className="sr-only">Game date (month)</label>
                                            <Field name="date.month" as="select" className="mx-2">
                                                {
                                                    [
                                                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
                                                    ].map(val => <option key={val} value={`${val}`}>{val}</option>)
                                                }
                                            </Field>
                                            <label htmlFor="date.year" className="sr-only">Game date (year)</label>
                                            <Field name="date.year" type="number" className="mx-2" />
                                        </div>
                                    </div>
                                    <div className={`${props.values.type === 'Play-By-Email' ? '' : 'hidden'}`}>
                                        <p>Game end date</p>
                                        <div>
                                            <label htmlFor="endDate.day" className="sr-only">Game endDate (day)</label>
                                            <Field name="endDate.day" as="select" className="mx-2">
                                                {
                                                    [
                                                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
                                                    ].map(val => <option key={val} value={`${val}`}>{val}</option>)
                                                }
                                            </Field>
                                            <label htmlFor="endDate.month" className="sr-only">Game endDate (month)</label>
                                            <Field name="endDate.month" as="select" className="mx-2">
                                                {
                                                    [
                                                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
                                                    ].map(val => <option key={val} value={`${val}`}>{val}</option>)
                                                }
                                            </Field>
                                            <label htmlFor="endDate.year" className="sr-only">Game endDate (year)</label>
                                            <Field name="endDate.year" type="number" className="mx-2" />
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
