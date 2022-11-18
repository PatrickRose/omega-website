import React from "react";
import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown/lib/ast-to-react";

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
        // eslint-disable-next-line jsx-a11y/heading-has-content
        h3: ({ node, ...props }) => (
            <h3
                className="py-2 text-2xl"
                {...props}
            />
        )
    };

    return <ReactMarkdown components={components}>{markdown}</ReactMarkdown>;
}
