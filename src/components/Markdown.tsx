import React from "react";
import ReactMarkdown from "react-markdown";
import {Components} from "react-markdown/src/ast-to-react";

export default function Markdown(props: { markdown: string }) {
    const {markdown} = props
    const components: Components = {
        ol: ({node, ...props}) => <ol className="pl-8 list-decimal" {...props} />,
        ul: ({node, ...props}) => <ul className="pl-8 list-disc" {...props} />,
        a: ({node, ...props}) => <a className="hover:text-omega-dark underline" {...props}>{props.children}</a>,
        p: ({node, ...props}) => <p className="py-2" {...props} />,
    }

    return <ReactMarkdown
        components={components}
        children={markdown}
    />
}
