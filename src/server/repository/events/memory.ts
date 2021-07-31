import {OMEGAEvent} from "../../../types/types";
import EventRepository from "./index";
import BaseMemoryRepository from "../BaseMemoryRepository";

const allEvents: OMEGAEvent[] = [
    {
        id: "TEST01",
        name: "The Assault",
        date: {
            day: 1,
            month: 1,
            year: 2021,
        },
        "preamble": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem odio, tristique dignissim nibh quis, porttitor dictum mi. Nullam auctor odio eget ex aliquam, eu lobortis elit sodales. Praesent sit amet arcu a erat pulvinar vehicula. Curabitur nibh nunc, bibendum nec sollicitudin ac, interdum nec enim. Vestibulum semper nisi eleifend nulla euismod dapibus.",
        "fullDescription": "Lorem markdownum *ambo captantia tellus* monitusque, ego filia documenta fecit\nsubiere tamen diem. Et [parvo](http://ensecanor.com/tibi-ortus). Copia expetitur\netiam iussus vana Tyndaridae prima Phoebeis ad capiunt tibia.\n\nHaruspex Denique servaverat, quae despectat numinis quicquam templa,\n[sed](http://simul.net/te-dona.html). Thesea conponere querellae suaque\nPanopeusque superi loqui diversa: puerum clausas dixit busto: lintea opposui\ncandentia ibimus, eas.\n\n- Trahitur vix madidus nonaque Venus\n- Lacertis dominae erat tertia et a Alcyone\n- Scire Phoeboque fugit Aethionque spirandi discederet ossibus\n\nCessit movit hoc vita, Hypseus perstant, per gramen, ille. Sparsus [Aetna\nmollirique undis](http://tangor-scopulis.org/et-facunde) revocata primus clarum\nadopertam Calliope lyraeque unde scitantibus seducta pecori voce adfectu et.\nLatus ait sorores, cepisse, oris umero Lucifer volucres, prius rubor omnes\ndominum.\n\nUmeris nunc dextera oneratos; ligo rapuit Siculo victa ut quotiens. Fragor\ndatos; umbrosum, cava mea violari, hos.\n\nAperite spatium; ille, non, habentem, penna vincirem. Peccasse ignava!\n\n1. Sidera quadriiugi adspicis ingenti gratesque Nemeaeo piorum\n2. Nec pignus\n3. Elei fortiter et notum cruore recentes fallere\n4. Pennas Tectaphon Naides\n5. Ibi ilia violave\n6. Cum has tibi turba\n\nViribus iaces. Nec ortus sit [et](http://nec.io/iam-ali) mihi vix pectore, quae\nhoc, tumet ipse. Hoc finita undis cecidere montibus manemus Praescia iacerent\nOrtygiam aliorum rimas armata capillos, quondam hortanda? Munera loca pars voce\nreceptae iuvenci nocet.\n\nEt dentibus insidias praetendens tamen ex arabat tibi Hyperionis ardente et sit\nad correptus fletus, spicea lux lumina! Tantorum operisque timeri.",
    },
    {
        id: "TEST02",
        name: "The Plan",
        date: {
            day: 1,
            month: 1,
            year: 2021,
        },
        "preamble": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem odio, tristique dignissim nibh quis, porttitor dictum mi. Nullam auctor odio eget ex aliquam, eu lobortis elit sodales. Praesent sit amet arcu a erat pulvinar vehicula. Curabitur nibh nunc, bibendum nec sollicitudin ac, interdum nec enim. Vestibulum semper nisi eleifend nulla euismod dapibus.",
        "fullDescription": "Lorem markdownum *ambo captantia tellus* monitusque, ego filia documenta fecit\nsubiere tamen diem. Et [parvo](http://ensecanor.com/tibi-ortus). Copia expetitur\netiam iussus vana Tyndaridae prima Phoebeis ad capiunt tibia.\n\nHaruspex Denique servaverat, quae despectat numinis quicquam templa,\n[sed](http://simul.net/te-dona.html). Thesea conponere querellae suaque\nPanopeusque superi loqui diversa: puerum clausas dixit busto: lintea opposui\ncandentia ibimus, eas.\n\n- Trahitur vix madidus nonaque Venus\n- Lacertis dominae erat tertia et a Alcyone\n- Scire Phoeboque fugit Aethionque spirandi discederet ossibus\n\nCessit movit hoc vita, Hypseus perstant, per gramen, ille. Sparsus [Aetna\nmollirique undis](http://tangor-scopulis.org/et-facunde) revocata primus clarum\nadopertam Calliope lyraeque unde scitantibus seducta pecori voce adfectu et.\nLatus ait sorores, cepisse, oris umero Lucifer volucres, prius rubor omnes\ndominum.\n\nUmeris nunc dextera oneratos; ligo rapuit Siculo victa ut quotiens. Fragor\ndatos; umbrosum, cava mea violari, hos.\n\nAperite spatium; ille, non, habentem, penna vincirem. Peccasse ignava!\n\n1. Sidera quadriiugi adspicis ingenti gratesque Nemeaeo piorum\n2. Nec pignus\n3. Elei fortiter et notum cruore recentes fallere\n4. Pennas Tectaphon Naides\n5. Ibi ilia violave\n6. Cum has tibi turba\n\nViribus iaces. Nec ortus sit [et](http://nec.io/iam-ali) mihi vix pectore, quae\nhoc, tumet ipse. Hoc finita undis cecidere montibus manemus Praescia iacerent\nOrtygiam aliorum rimas armata capillos, quondam hortanda? Munera loca pars voce\nreceptae iuvenci nocet.\n\nEt dentibus insidias praetendens tamen ex arabat tibi Hyperionis ardente et sit\nad correptus fletus, spicea lux lumina! Tantorum operisque timeri.",
    },
];

export class MemoryRepository extends BaseMemoryRepository<OMEGAEvent> implements EventRepository {
    static APIInstance() {
        return new MemoryRepository(allEvents)
    }
}
