import React from "react";
import ReactMarkdown, { Components } from "react-markdown";

export default function Markdown(props: { markdown: string }) {
    const { markdown } = props;
    const components: Components = {
        ol: ({ children }) => <ol className="list-decimal pl-8">{children}</ol>,
        ul: ({ children }) => <ul className="list-disc pl-8">{children}</ul>,
        p: (props) => (
            <p
                className="py-2"
                {...props}
            />
        ),
        h3: (props) => (
            <h3
                className="py-2 text-2xl"
                {...props}
            />
        )
    };

    return <ReactMarkdown components={components}>{markdown}</ReactMarkdown>;
}
