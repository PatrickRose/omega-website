import React from "react";
import RESOURCES from "../../server/repository/resources/memory";
import DesignerResource from "../../components/DesignerResource";

export default function CouncilsOfElporia() {
    const details = RESOURCES["councils-of-elporia"];

    return <DesignerResource resource={details} />
}
