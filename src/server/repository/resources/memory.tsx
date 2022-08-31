import React from "react";
import {GameResourceProps} from "../../../components/DesignerResource";
import {Councils} from "./councils/councils";

const RESOURCES: { [key in GameResourceProps["id"]]: GameResourceProps } = {
    'councils-of-elporia': {
        id: 'councils-of-elporia',
        resourceType: 'site',
        gameName: 'Councils of Elporia',
        type: "Online game",
        designerName: "Benjamin Kanelos, based on As Thou Commands by Peter Nixon",
        details: <React.Fragment>
            <p>
                As Thou Commands is a rules-light mass player experience (megagame) where the players procedurally
                generate and run fictional feudal Duchies. These Duchies comprise an entire medieval Kingdom, and
                players’ decisions will have impacts both near and far. Play alternates between drafting narrative
                elements and participating in council sessions where players attempt to negotiate beneficial outcomes to
                thorny issues bedeviling the Kingdom.
            </p>
            <p>
                While the narrative elements created by the players will be edited by moderators to enforce tonal
                homogeneity between the Duchies (in a collaborative manner with player input), players will have a large
                say over the broader narrative universe in which the Kingdom exists. As Thou Commands aims to be a
                collaborative storytelling experience as much as an emulation of medieval power politics.
            </p>
        </React.Fragment>,
        content: <Councils/>
    }
}

export default RESOURCES;
