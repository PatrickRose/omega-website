import React, { ReactNode } from "react";

export function ResponsiveItemList({
    items,
    itemClasses
}: {
    items: ReactNode[];
    itemClasses?: string;
}) {
    return (
        <div className="flex w-full flex-col justify-center md:flex-row md:flex-wrap">
            {items.map((value, key) => (
                <div
                    className={`w-full md:w-2/4 xl:w-1/3 py-2 px-2 ${itemClasses}`}
                    key={key}
                >
                    {value}
                </div>
            ))}
        </div>
    );
}
