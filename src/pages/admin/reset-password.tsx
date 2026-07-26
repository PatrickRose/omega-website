import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { isLeft } from "fp-ts/lib/Either";
import React, { useState } from "react";
import { SubmitButton, SuccessMessage, TextInput } from "../../components/Form";
import { Hero, HeroHeading, MainContent } from "../../components/Hero";
import useUser from "../../lib/useUser";
import { ResetPasswordResultDecode } from "../../types/io-ts-def";
import {
    ResetPasswordFormValues,
    ResetPasswordResult
} from "../../types/types";
import { MakeLeft } from "../../utils/io-ts-helpers";

export default function ResetPasswordPage() {
    // If the user isn't logged in, send them to the admin page
    const { user } = useUser({
        redirectTo: "/admin/login"
    });

    const [successMessage, setSuccessMessage] = useState<string>("");

    // It's possible for this to be undefined if the user hasn't logged in yet
    // Since we have to wait for the api response, make sure this returns an empty page
    if (!user?.isLoggedIn) {
        return (
            <MainContent>
                <p>Loading admin page</p>
            </MainContent>
        );
    }

    const onSubmit = async (
        values: FormikValues,
        {
            setSubmitting,
            setErrors,
            setValues
        }: FormikHelpers<ResetPasswordFormValues>
    ) => {
        try {
            setSuccessMessage("");
            const response = await fetch("/api/user/reset", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(values)
            });

            let data: ResetPasswordResult;

            try {
                const origData = await response.json();

                if (ResetPasswordResultDecode.is(origData)) {
                    data = origData;
                } else {
                    data = MakeLeft({
                        result: "Failure",
                        message: `Error when sending API request (unknown API result - ${origData})`
                    });
                }
            } catch {
                data = MakeLeft({
                    result: "Failure",
                    message:
                        "Error when sending API request, please wait and try again"
                });
            }

            if (isLeft(data)) {
                setErrors({ username: data.left.message });
            } else {
                setSuccessMessage(data.right.message);
                setValues({ username: "" }, false);
            }
        } finally {
            setSubmitting(false);
        }
    };

    const validate = (values: FormikValues) => {
        const errors: Partial<ResetPasswordFormValues> = {};

        if (!values.username) {
            errors.username = "Specify the username";
        }

        return errors;
    };

    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>Reset a user&apos;s password</HeroHeading>
            </Hero>
            <MainContent>
                <Formik
                    initialValues={{ username: "" }}
                    onSubmit={onSubmit}
                    validate={validate}
                >
                    {(props) => {
                        return (
                            <Form>
                                {successMessage && (
                                    <SuccessMessage>
                                        {successMessage}
                                    </SuccessMessage>
                                )}
                                <TextInput
                                    label="Username"
                                    name="username"
                                    type="text"
                                />
                                <SubmitButton disabled={props.isSubmitting}>
                                    Reset password
                                </SubmitButton>
                            </Form>
                        );
                    }}
                </Formik>
            </MainContent>
        </React.Fragment>
    );
}
