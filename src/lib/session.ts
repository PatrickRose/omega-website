// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { SessionOptions } from "iron-session";
import { User } from "../types/types";

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieName: "omega"
};

// This is where we specify the typings of req.session.*
export type IronSessionData = {
    user?: User;
};
