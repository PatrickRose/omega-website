import React from "react";
import RESOURCES from "../../server/repository/resources/memory";
import DesignerResource from "../../components/DesignerResource";

export default function Tempest() {
    const details = RESOURCES["tempest"];

    return <DesignerResource resource={details} />
}
