import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { isLeft } from "fp-ts/lib/Either";
import React, { useState } from "react";
import { SubmitButton, SuccessMessage, TextInput } from "../../components/Form";
import { Hero, HeroHeading, MainContent } from "../../components/Hero";
import useUser from "../../lib/useUser";
import { DEFAULT_PASSWORD } from "../../server/repository/user/consts";
import { ChangePasswordResultDecode } from "../../types/io-ts-def";
import {
    ChangePasswordFormValues,
    ChangePasswordResult
} from "../../types/types";
import { MakeLeft } from "../../utils/io-ts-helpers";

export default function AdminPage() {
    // If the user isn't logged in, send them to the admin page
    const { user, mutateUser } = useUser({
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

    const originalValues: ChangePasswordFormValues = {
        originalPassword: "",
        newPassword: "",
        confirmPassword: ""
    };

    const onSubmit = async (
        values: FormikValues,
        {
            setSubmitting,
            setErrors,
            setValues
        }: FormikHelpers<ChangePasswordFormValues>
    ) => {
        try {
            setSuccessMessage("");
            const response = await fetch("/api/user/change", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(values)
            });

            let data: ChangePasswordResult;

            try {
                const origData = await response.json();

                if (ChangePasswordResultDecode.is(origData)) {
                    data = origData;
                } else {
                    data = MakeLeft({
                        result: "Failure",
                        message: `Error when sending API request (unknown API result - ${origData})`
                    });
                }
            } catch (e) {
                data = MakeLeft({
                    result: "Failure",
                    message:
                        "Error when sending API request, please wait and try again"
                });
            }

            if (isLeft(data)) {
                setErrors({ originalPassword: data.left.message });
            } else {
                setSuccessMessage(data.right.message);
                setValues(originalValues, false);
                mutateUser(data.right.user);
            }
        } finally {
            setSubmitting(false);
        }
    };

    const validate = (values: FormikValues) => {
        const errors: Partial<ChangePasswordFormValues> = {};

        if (values.originalPassword == "") {
            errors.originalPassword = "Specify your previous password";
        }

        if (values.newPassword == "") {
            errors.newPassword = "Specify your new password";
        } else if (values.newPassword == DEFAULT_PASSWORD) {
            errors.newPassword = `You may not use the default password (${DEFAULT_PASSWORD})`;
        } else {
            if (values.newPassword != values.confirmPassword) {
                errors.confirmPassword = "New passwords must match";
            }

            if (values.newPassword == values.originalPassword) {
                errors.newPassword =
                    "Your original and new passwords are the same";
            }
        }

        return errors;
    };

    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>Add new user</HeroHeading>
            </Hero>
            <MainContent>
                {user.passwordNeedsReset && (
                    <div className="w-full rounded bg-red-200 py-2">
                        <p className="p-2 text-center">
                            You must change your password before you can access
                            the rest of the admin functions
                        </p>
                    </div>
                )}
                <Formik
                    initialValues={originalValues}
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
                                    label="Original password"
                                    name="originalPassword"
                                    type="password"
                                />
                                <TextInput
                                    label="New password"
                                    name="newPassword"
                                    type="password"
                                />
                                <TextInput
                                    label="Confirm password"
                                    name="confirmPassword"
                                    type="password"
                                />
                                <SubmitButton disabled={props.isSubmitting}>
                                    Change password
                                </SubmitButton>
                            </Form>
                        );
                    }}
                </Formik>
            </MainContent>
        </React.Fragment>
    );
}
