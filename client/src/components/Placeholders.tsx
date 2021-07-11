import React from "react";


export function TextRow(props: {background: string}) {
    return <div className={`${props.background} w-full h-8 rounded animate-pulse`}/>;
}
