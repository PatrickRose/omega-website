import React, {ReactNode} from "react";

export function Hero(props: { children: ReactNode, extraClasses?: string }) {
    return <div className={`flex flex-col justify-center content-center min-h-hero text-white bg-gradient-to-b from-gray-800 via-omega ${props.extraClasses || ""}`}>
        {props.children}
    </div>;
}

export function HeroHeading(props: { extraClasses?: string, children: ReactNode }) {
    return  <h1 className={`text-center text-3xl p-10 ${props.extraClasses || ""}`}>
        {props.children}
    </h1>;
}
