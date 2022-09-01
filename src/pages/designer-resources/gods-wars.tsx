import React from "react";
import RESOURCES from "../../server/repository/resources/memory";
import DesignerResource from "../../components/DesignerResource";

export default function GodsWars() {
    const details = RESOURCES["gods-wars"];

    return <DesignerResource resource={details} />
}
