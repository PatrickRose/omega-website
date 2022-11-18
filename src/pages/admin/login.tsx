import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import React from "react";
import { SubmitButton, TextInput } from "../../components/Form";
import { Hero, HeroHeading, MainContent } from "../../components/Hero";
import useUser from "../../lib/useUser";
import { LoginFailedDecode, UserDecode } from "../../types/io-ts-def";
import { LoginFormValues } from "../../types/types";

export default function Login() {
    const { mutateUser } = useUser({
        redirectIfFound: true,
        redirectTo: "/admin/"
    });

    const onSubmit = async (
        values: FormikValues,
        { setSubmitting, setErrors }: FormikHelpers<LoginFormValues>
    ) => {
        // Attempt to log in
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(values)
            });

            let data;

            try {
                data = await response.json();
            } catch (e) {
                data = false;
            }

            if (!UserDecode.is(data)) {
                if (LoginFailedDecode.is(data)) {
                    setErrors({
                        username: data.message
                    });
                } else {
                    setErrors({
                        username:
                            "Error sending login request, please wait and try again"
                    });
                }
                return;
            }

            if (!data.isLoggedIn) {
                setErrors({
                    username:
                        "Username/password combination was incorrect. Please try again"
                });
            }

            await mutateUser(data);
        } finally {
            setSubmitting(false);
        }
    };

    const validate = (values: FormikValues) => {
        const errors: Partial<LoginFormValues> = {};

        if (!values.username) {
            errors.username = "Specify the username";
        }

        if (!values.password) {
            errors.password = "Specify the password";
        }

        return errors;
    };

    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>Log in</HeroHeading>
            </Hero>
            <MainContent>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    onSubmit={onSubmit}
                    validate={validate}
                >
                    {(props) => {
                        return (
                            <Form>
                                <TextInput
                                    label="Username"
                                    name="username"
                                    type="text"
                                />
                                <TextInput
                                    label="Password"
                                    name="password"
                                    type="password"
                                />
                                <SubmitButton disabled={props.isSubmitting}>
                                    Log in
                                </SubmitButton>
                            </Form>
                        );
                    }}
                </Formik>
            </MainContent>
        </React.Fragment>
    );
}
