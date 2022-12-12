import Link from "next/link";
import React, { ReactNode, useState } from "react";
import useSWR from "swr";
import { Hero, HeroHeading, MainContent } from "../../components/Hero";
import useUser from "../../lib/useUser";
import { GameAPIDecode, UserDecode } from "../../types/io-ts-def";
import { Game, GameAPI } from "../../types/types";
import { dateSorter } from "../../utils";
import { LinkDef } from "../../utils/utils";

function AdminSection({
    title,
    sectionLinks,
    children
}: {
    title: string;
    sectionLinks: LinkDef[];
    children?: ReactNode;
}) {
    return (
        <React.Fragment>
            <h1 className="py-2 text-2xl">{title}</h1>
            <ul className="py-2">
                {sectionLinks.map((val) => (
                    <li
                        key={val.linkPath}
                        className="py-1"
                    >
                        <Link href={val.linkPath}>
                            {val.linkText}
                        </Link>
                    </li>
                ))}
            </ul>
            {children}
        </React.Fragment>
    );
}

const fetcher = (url: string) =>
    fetch(url)
        .then((res) => res.json())
        .then((data: unknown): GameAPI => {
            if (GameAPIDecode.is(data)) {
                return data;
            }

            return {
                games: []
            };
        });

export default function AdminPage() {
    // If the user isn't logged in, send them to the admin page
    const { user, mutateUser } = useUser({
        redirectTo: "/admin/login"
    });

    const { data: games } = useSWR<GameAPI>("/api/games", fetcher);

    const [loggingOut, setLoggingOut] = useState<boolean>(false);

    // It's possible for this to be undefined if the user hasn't logged in yet
    // Since we have to wait for the api response, make sure this returns an empty page
    if (!user?.isLoggedIn) {
        return (
            <MainContent>
                <p>Loading admin page</p>
            </MainContent>
        );
    }

    const userLinks: LinkDef[] = [
        {
            linkPath: "/admin/add-user",
            linkText: "Add a new user"
        },
        {
            linkPath: "/admin/change-password",
            linkText: "Change password"
        }
    ];

    const gameLinks: LinkDef[] = [
        {
            linkPath: "/admin/games/create",
            linkText: "Add a new game"
        }
    ];

    if (GameAPIDecode.is(games) && games) {
        games.games.sort(dateSorter);
        games.games.forEach((game: Game) => {
            gameLinks.push({
                linkPath: `/admin/games/${game._id}`,
                linkText: `Edit "${game.name}"`
            });
        });
    }

    const logout = () => {
        fetch("/api/logout")
            .then((res) => res.json())
            .then((body) => {
                if (!UserDecode.is(body)) {
                    throw Error("API did not return a user instance?");
                }

                mutateUser(body);
            })
            .catch((reason) => console.log(reason))
            .finally(() => setLoggingOut(false));
    };
    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>Admin panel</HeroHeading>
            </Hero>
            <MainContent>
                <div className="flex justify-center py-2">
                    <button
                        type="button"
                        className="btn-link md:min-w-3/4 min-w-full p-2"
                        onClick={logout}
                        disabled={loggingOut}
                    >
                        Log out
                    </button>
                </div>
                <AdminSection
                    title="User administration"
                    sectionLinks={userLinks}
                />
                <AdminSection
                    title="Game administration"
                    sectionLinks={gameLinks}
                >
                    {games === undefined && <p>Loading games...</p>}
                </AdminSection>
            </MainContent>
        </React.Fragment>
    );
}
