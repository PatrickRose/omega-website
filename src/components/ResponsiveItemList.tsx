import React, {ReactNode} from "react";

export function ResponsiveItemList({items, itemClasses}: {items: ReactNode[], itemClasses?: string})
{
    return <div className="flex flex-col md:flex-row md:flex-wrap w-full justify-center">
        {
            items.map(
                value => <div className={`w-full md:w-2/4 xl:w-1/3 py-2 px-2 ${itemClasses}`}>
                    {value}
                </div>
            )
        }
    </div>
}
