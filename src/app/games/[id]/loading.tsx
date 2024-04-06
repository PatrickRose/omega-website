import GameStructure from "./GameStructure";
import { TextRow } from "../../../components/Placeholders";
import React from "react";

export default function Loading() {
    const heading = (
        <div className="w-2/4">
            <TextRow className="bg-white" />
        </div>
    );

    const subHeading = (
        <React.Fragment>
            {new Array(2).fill(null).map((_, index) => (
                <TextRow
                    key={index}
                    className="mb-2 bg-gray-500"
                />
            ))}
        </React.Fragment>
    );

    const mainContent = (
        <div className="flex flex-col items-center justify-center">
            <div className="w-2/6 pb-2">
                <TextRow
                    className="h-6 bg-white"
                    height={false}
                />
            </div>
            <div className="w-1/6">
                <TextRow
                    className="h-6 bg-white"
                    height={false}
                />
            </div>

            {new Array(5).fill(null).map((_, index) => (
                <TextRow
                    key={index}
                    className="mb-2 bg-gray-500"
                />
            ))}
        </div>
    );

    return (
        <GameStructure
            heading={heading}
            subHeading={subHeading}
            mainContent={mainContent}
        />
    );
}
