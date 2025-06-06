import React from "react";
import ReactMarkdown, { Components } from "react-markdown";

export default function Markdown(props: { markdown: string }) {
    const { markdown } = props;
    const components: Components = {
        ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-8">{props.children}</ol>
        ),
        ul: ({ node, ...props }) => (
            <ul className="list-disc pl-8">{props.children}</ul>
        ),
        p: ({ node, ...props }) => (
            <p
                className="py-2"
                {...props}
            />
        ),
        h3: ({ node, ...props }) => (
            <h3
                className="py-2 text-2xl"
                {...props}
            />
        )
    };

    return <ReactMarkdown components={components}>{markdown}</ReactMarkdown>;
}
