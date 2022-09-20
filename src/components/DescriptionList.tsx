import React from "react";

type DescriptionListProps = {
    list: {
        title: React.ReactNode,
        content: React.ReactNode
    }[]
}

export default function DescriptionList({list}: DescriptionListProps) {
    return <dl className="sm:grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
        {list.map(
            ({title, content}, index) => <React.Fragment key={index}>
                <dt className="pr-4 font-bold sm:text-right lg:col-span-2">
                    {title}
                </dt>
                <dd className="sm:col-span-3 md:col-span-5 lg:col-span-10">
                    {content}
                </dd>
            </React.Fragment>
        )}
    </dl>
}
