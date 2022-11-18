import React, { useState } from "react";
import useUser from "../../../lib/useUser";
import { Hero, HeroHeading, MainContent } from "../../../components/Hero";
import { CreateGameFormValues, CreateGameResult } from "../../../types/types";
import { FormikHelpers, FormikValues } from "formik";
import { CreateGameResultDecode } from "../../../types/io-ts-def";
import { MakeLeft } from "../../../utils/io-ts-helpers";
import { isLeft } from "fp-ts/Either";
import Link from "next/link";
import { GameAdmin, SuccessMessage } from "../../../components/Form/Game";

export default function CreateGame() {
    // If the user isn't logged in, send them to the admin page
    const { user } = useUser({
        redirectTo: "/admin/login"
    });

    const [successMessage, setSuccessMessage] = useState<SuccessMessage>({
        message: ""
    });

    const initialValues: CreateGameFormValues = {
        name: "",
        designer: "",
        preamble: "",
        fullDescription: "",
        type: "",
        endDate: {
            year: new Date().getFullYear(),
            month: 1,
            day: null
        },
        date: {
            year: new Date().getFullYear(),
            month: 1,
            day: null
        }
    };

    const onSubmit = async (
        values: FormikValues,
        {
            setSubmitting,
            setErrors,
            setValues
        }: FormikHelpers<CreateGameFormValues>
    ) => {
        try {
            setSuccessMessage({ message: "" });

            const postValues = values;

            const outerKeys: (keyof CreateGameFormValues)[] = [
                "date",
                "endDate"
            ];
            const innerKeys: (keyof CreateGameFormValues["date"])[] = [
                "day",
                "month",
                "year"
            ];

            for (let key of outerKeys) {
                if (!postValues[key]) {
                    continue;
                }

                for (let innerKey of innerKeys) {
                    postValues[key][innerKey] = Number.parseInt(
                        postValues[key][innerKey]
                    );
                }
            }

            const response = await fetch("/api/games/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(postValues)
            });

            let data: CreateGameResult;

            try {
                const origData = await response.json();

                if (CreateGameResultDecode.is(origData)) {
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
                setErrors({ name: data.left.message });
            } else {
                setSuccessMessage({
                    message: data.right.message,
                    node: (
                        <>
                            <Link href={`/games/${data.right.game._id}`}>
                                <a>You may view this game here</a>
                            </Link>
                        </>
                    )
                });
                setValues(initialValues, false);
            }
        } finally {
            setSubmitting(false);
        }
    };

    // It's possible for this to be undefined if the user hasn't logged in yet
    // Since we have to wait for the api response, make sure this returns an empty page
    if (!user?.isLoggedIn) {
        return (
            <MainContent>
                <p>Loading admin page</p>
            </MainContent>
        );
    }

    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>Create game</HeroHeading>
            </Hero>
            <MainContent>
                <GameAdmin
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                    successMessage={successMessage}
                    buttonText="Create game"
                />
            </MainContent>
        </React.Fragment>
    );
}
