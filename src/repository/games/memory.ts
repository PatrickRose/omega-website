import GamesRepository from "./index";

import {Either} from "fp-ts/Either";
import {Game} from "../../../client/src/types/types";

const allGames: Game[] = [
    {
        "id": "RH210808",
        "name": "ONLINE MEGAGAME",
        "date": {
            "year": 2021,
            "month": 8,
            "day": 7
        },
        "designer": "Online Designer",
        "preamble": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem odio, tristique dignissim nibh quis, porttitor dictum mi. Nullam auctor odio eget ex aliquam, eu lobortis elit sodales. Praesent sit amet arcu a erat pulvinar vehicula. Curabitur nibh nunc, bibendum nec sollicitudin ac, interdum nec enim. Vestibulum semper nisi eleifend nulla euismod dapibus.",
        "fullDescription": "Lorem markdownum, neve pars, stet capiti in munusque, contraria. Cornigeris\nprimum et litus honore praedator formidine infelix omnique aequoribus.\n\n1. Cornu Iapyge\n2. Haemus pecudes et grata vestes locus movebatur\n3. Alta ne perque seque nutrix spoliata\n4. Reserabo inpulsu\n\nAditus inde capientur corona, sua *Pleiadasque notam oborto* mansit Aeaciden\ntraharis hodierna poterat, timor. Vivit modusque fertur haeret ipse visi guttae\nlicuit. Arvis quae canit ecce cadis quondam dixit sub distent propiore vimina,\n**qua ingemit medicamina** et enim recessus, et. Ad harena spectans simillima,\net adfer vetustos hic nefas, liquidas! Nostro est putat iactatis lapidis illa,\ncertaque felicia ut qui fibras [illa domoque\nvelles](http://undamarte.io/ignesceretibi) et vox fuit insignis iacuit.\n\nSecutum ad matrem nata! De Somnus, paulatim dicens Tenedonque inquit cultuque,\nextemplo alumnae. Dabunt ferrum crudelius locum, fuit *timorem* modo. Postquam\naddidit, **periit**, nec iussos quidem Gange adflatuque periclo primo ecquem\niterum num. Bella veteremque fuit terra [preme\niam](http://sonant.net/sibi-transit.html) quae male desistunt portantes quis\n[Threiciam](http://graves.com/properamus) Romane faciat procubuere artus, et.\n\nNiteant regnique vellent elusaque eripuit **potens paterque fiducia**, me cibi\ntecta. Quam insonuit arboreae antemnis sidera Cenaeo victis. Si et Thaumantidos\nfervens cornua prole orbi saevit domo! Tamen di corpora obviaque agnovit\nhorrescere obvia cineres pater in longa.\n\n- Tantique nepotes in prima\n- Coniurata annis herba miserabile et emeritis claris\n- Iuvenem Phocaica ab hinc inesset tamen\n\nTenui mente domito manet Pharonque aequora est nymphis bellum fulgentia volumina\nficto crematisregia simul nam puraque tura *mea est oscula*. Quidque faciles\neligit protinus et nereides signum?\n\nDe tempora requievit meministis hunc expertus, vici regem nova fluctibus dicunt\nunus potuisse talia! Exclamat viro et certaminis et eodem decimo, adit sinunt\nesse. Qui **undis ad vota** Nyseides est: undis in in vulnus bella. Sit hic\nterritus pariter adclivis qui coepi atria.",
        "type": "Online game"
    },
    {
        "id": "RH210812",
        "name": "PLAY BY EMAIL GAME",
        "date": {
            "year": 2021,
            "month": 8,
            "day": 20
        },
        "endDate": {
            "year": 2021,
            "month": 9,
            "day": 20
        },
        "designer": "Play By Email Designer",
        "preamble": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem odio, tristique dignissim nibh quis, porttitor dictum mi. Nullam auctor odio eget ex aliquam, eu lobortis elit sodales. Praesent sit amet arcu a erat pulvinar vehicula. Curabitur nibh nunc, bibendum nec sollicitudin ac, interdum nec enim. Vestibulum semper nisi eleifend nulla euismod dapibus.",
        "fullDescription": "Lorem markdownum *ambo captantia tellus* monitusque, ego filia documenta fecit\nsubiere tamen diem. Et [parvo](http://ensecanor.com/tibi-ortus). Copia expetitur\netiam iussus vana Tyndaridae prima Phoebeis ad capiunt tibia.\n\nHaruspex Denique servaverat, quae despectat numinis quicquam templa,\n[sed](http://simul.net/te-dona.html). Thesea conponere querellae suaque\nPanopeusque superi loqui diversa: puerum clausas dixit busto: lintea opposui\ncandentia ibimus, eas.\n\n- Trahitur vix madidus nonaque Venus\n- Lacertis dominae erat tertia et a Alcyone\n- Scire Phoeboque fugit Aethionque spirandi discederet ossibus\n\nCessit movit hoc vita, Hypseus perstant, per gramen, ille. Sparsus [Aetna\nmollirique undis](http://tangor-scopulis.org/et-facunde) revocata primus clarum\nadopertam Calliope lyraeque unde scitantibus seducta pecori voce adfectu et.\nLatus ait sorores, cepisse, oris umero Lucifer volucres, prius rubor omnes\ndominum.\n\nUmeris nunc dextera oneratos; ligo rapuit Siculo victa ut quotiens. Fragor\ndatos; umbrosum, cava mea violari, hos.\n\nAperite spatium; ille, non, habentem, penna vincirem. Peccasse ignava!\n\n1. Sidera quadriiugi adspicis ingenti gratesque Nemeaeo piorum\n2. Nec pignus\n3. Elei fortiter et notum cruore recentes fallere\n4. Pennas Tectaphon Naides\n5. Ibi ilia violave\n6. Cum has tibi turba\n\nViribus iaces. Nec ortus sit [et](http://nec.io/iam-ali) mihi vix pectore, quae\nhoc, tumet ipse. Hoc finita undis cecidere montibus manemus Praescia iacerent\nOrtygiam aliorum rimas armata capillos, quondam hortanda? Munera loca pars voce\nreceptae iuvenci nocet.\n\nEt dentibus insidias praetendens tamen ex arabat tibi Hyperionis ardente et sit\nad correptus fletus, spicea lux lumina! Tantorum operisque timeri.",
        "type": "Play-By-Email"
    }
];

export class MemoryRepository implements GamesRepository {
    private games: Game[];

    static APIInstance(): MemoryRepository {
        return new MemoryRepository(allGames)
    }

    constructor(games: Game[]) {
        this.games = games;
    }

    all(): Either<Error, Game[]> {
        return {
            _tag: 'Right',
            right: this.games
        }
    }

    get(id: string): Either<Error, Game> {
        for (let game of this.games) {
            if (game.id === id) {
                return {
                    _tag: 'Right',
                    right: game
                }
            }
        }

        return {
            _tag: 'Left',
            left: new Error(`Game with id ${id} not found`)
        }
    }
}
