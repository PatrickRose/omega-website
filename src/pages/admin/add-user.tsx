import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { isLeft } from "fp-ts/lib/Either";
import React, { useState } from "react";
import { SubmitButton, SuccessMessage, TextInput } from "../../components/Form";
import { Hero, HeroHeading, MainContent } from "../../components/Hero";
import useUser from "../../lib/useUser";
import { CreateUserResultDecode } from "../../types/io-ts-def";
import { CreateUserFormValues, CreateUserResult } from "../../types/types";
import { MakeLeft } from "../../utils/io-ts-helpers";

export default function AdminPage() {
    // If the user isn't logged in, send them to the admin page
    const { user } = useUser({
        redirectTo: '/admin/login',
    });

    const [successMessage, setSuccessMessage] = useState<string>('');

    // It's possible for this to be undefined if the user hasn't logged in yet
    // Since we have to wait for the api response, make sure this returns an empty page
    if (!user?.isLoggedIn) {
        return <MainContent><p>Loading admin page</p></MainContent>
    }

    const onSubmit = async (values: FormikValues, { setSubmitting, setErrors, setValues }: FormikHelpers<CreateUserFormValues>) => {
        // Attempt to log in
        try {
            setSuccessMessage('');
            const response = await fetch(
                '/api/user/create',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(values)
                }
            );

            let data: CreateUserResult;

            try {
                const origData = await response.json();

                if (CreateUserResultDecode.is(origData)) {
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
                setErrors({ username: data.left.message });
            } else {
                setSuccessMessage(data.right.message);
                setValues({ username: '' }, false);
            }
        }
        finally {
            setSubmitting(false);
        }
    }

    const validate = (values: FormikValues) => {
        const errors: Partial<CreateUserFormValues> = {};

        if (!values.username) {
            errors.username = 'Specify the username';
        }

        return errors;
    }

    return <React.Fragment>
        <Hero>
            <HeroHeading>Add new user</HeroHeading>
        </Hero>
        <MainContent>
            <Formik
                initialValues={{ username: '' }}
                onSubmit={onSubmit}
                validate={validate}
            >
                {
                    props => {
                        return <Form>
                            {
                                successMessage
                                && <SuccessMessage>{successMessage}</SuccessMessage>
                            }
                            <TextInput
                                label="Username"
                                name="username"
                                type="text"
                            />
                            <SubmitButton disabled={props.isSubmitting}>
                                Create user
                            </SubmitButton>
                        </Form>
                    }
                }
            </Formik>
        </MainContent>
    </React.Fragment>;
}
