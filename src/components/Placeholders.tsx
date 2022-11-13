import React from "react";

export function TextRow(props: { className: string; height?: boolean }) {
    const height = props.height !== false ? "h-8" : "";

    return (
        <div
            className={`${props.className} w-full delay-100 ${height} rounded animate-placeholder`}
        />
    );
}

export function Circle(props: { className: string }) {
    return (
        <div
            className={`${props.className} delay-100 rounded-full text-center h-16 w-16 rounded animate-placeholder`}
        />
    );
}
