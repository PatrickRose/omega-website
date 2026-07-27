import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import { isLeft } from "fp-ts/lib/Either";
import React, { useState } from "react";
import useSWR from "swr";
import {
    SelectInput,
    SubmitButton,
    SuccessMessage
} from "../../components/Form";
import { Hero, HeroHeading, MainContent } from "../../components/Hero";
import useUser from "../../lib/useUser";
import {
    ResetPasswordResultDecode,
    UserListAPIDecode
} from "../../types/io-ts-def";
import {
    ResetPasswordFormValues,
    ResetPasswordResult,
    UserListAPI
} from "../../types/types";
import { MakeLeft } from "../../utils/io-ts-helpers";

const fetcher = (url: string) =>
    fetch(url)
        .then((res) => res.json())
        .then((data: unknown): UserListAPI => {
            if (UserListAPIDecode.is(data)) {
                return data;
            }

            return { users: [] };
        });

export default function ResetPasswordPage() {
    // If the user isn't logged in, send them to the admin page
    const { user } = useUser({
        redirectTo: "/admin/login"
    });

    const { data: userList } = useSWR<UserListAPI>("/api/user/list", fetcher);

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
            errors.username = "Select a user";
        }

        return errors;
    };

    const usernames = userList?.users ?? [];

    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>Reset a user&apos;s password</HeroHeading>
            </Hero>
            <MainContent>
                {userList === undefined ? (
                    <p>Loading users...</p>
                ) : usernames.length === 0 ? (
                    <p>There are no users to reset.</p>
                ) : (
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
                                    <SelectInput
                                        label="Username"
                                        name="username"
                                        value={props.values.username}
                                    >
                                        <option value="">Select a user</option>
                                        {usernames.map((username) => (
                                            <option
                                                key={username}
                                                value={username}
                                            >
                                                {username}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <SubmitButton disabled={props.isSubmitting}>
                                        Reset password
                                    </SubmitButton>
                                </Form>
                            );
                        }}
                    </Formik>
                )}
            </MainContent>
        </React.Fragment>
    );
}
