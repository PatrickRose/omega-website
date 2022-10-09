import React, { ReactNode } from "react";

const padding = "xl:px-32 px-8";

export function Hero(props: { children: ReactNode, extraClasses?: string }) {
    return <div className={`${padding} flex flex-col justify-center content-center min-h-hero text-white bg-omega ${props.extraClasses || ""}`}>
        {props.children}
    </div>;
}

export function HeroHeading(props: { className?: string, children: ReactNode, padding?: boolean }) {
    const padding = props.padding !== false ? 'p-10' : ''

    return <h1 className={`text-center text-3xl ${padding} ${props.className || ""}`}>
        {props.children}
    </h1>;
}

export function MainContent(props: { children: ReactNode, className?: string }) {
    return <div className={`${padding} ${props.className ?? ''} py-8 flex-1`}>{props.children}</div>;
}
