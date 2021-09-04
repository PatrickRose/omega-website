import React, {ReactNode} from "react";

export function Hero(props: { children: ReactNode, extraClasses?: string }) {
    return <div className={`flex flex-col justify-center content-center min-h-hero text-white bg-omega ${props.extraClasses || ""}`}>
        {props.children}
    </div>;
}

export function HeroHeading(props: { className?: string, children: ReactNode, padding?: boolean }) {
    const padding = props.padding !== false ? 'p-10' : ''

    return  <h1 className={`text-center text-3xl ${padding} ${props.className || ""}`}>
        {props.children}
    </h1>;
}

export function MainContent(props: { children: ReactNode }) {
    return <div className="p-8">{props.children}</div>;
}
