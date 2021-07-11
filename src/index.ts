import path from "path";
import {Request, Response} from "express";
import {Game, GameAPI} from "../client/src/types/types";

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const allGames: Game[] = [
    {
        id: 'RH210808',
        name: "ONLINE MEGAGAME",
        date: {
            year: 2021,
            month: 8,
            day: 7,
        },
        designer: 'DESIGNER NAME',
        preamble: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem odio, tristique dignissim nibh quis, porttitor dictum mi. Nullam auctor odio eget ex aliquam, eu lobortis elit sodales. Praesent sit amet arcu a erat pulvinar vehicula. Curabitur nibh nunc, bibendum nec sollicitudin ac, interdum nec enim. Vestibulum semper nisi eleifend nulla euismod dapibus.',
        fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem odio, tristique dignissim nibh quis, porttitor dictum mi. Nullam auctor odio eget ex aliquam, eu lobortis elit sodales. Praesent sit amet arcu a erat pulvinar vehicula. Curabitur nibh nunc, bibendum nec sollicitudin ac, interdum nec enim. Vestibulum semper nisi eleifend nulla euismod dapibus. Nulla elementum, metus sed tempus tristique, tellus dui ullamcorper elit, vitae interdum enim leo mollis dolor. Fusce aliquet sollicitudin eros, quis pharetra turpis efficitur id. Proin efficitur lobortis tellus, non lobortis massa congue in. Aliquam tellus nibh, tempor quis cursus et, euismod sed est. Aliquam imperdiet dignissim bibendum. Maecenas non efficitur odio. Pellentesque eu augue augue.\n' +
            '\n' +
            'Nulla id efficitur velit, vitae accumsan est. Nulla fermentum pellentesque urna, id eleifend elit luctus eget. Nulla ut massa mauris. Sed tempus fringilla mi ac tincidunt. Nullam non ornare leo, in tincidunt quam. Ut blandit at felis ac accumsan. Vivamus sed tellus et purus scelerisque tempor. Maecenas dolor urna, congue in elit in, congue varius velit. Maecenas in nunc justo. Integer tincidunt sem sed magna rutrum placerat. Integer interdum consequat lorem sed mollis.\n' +
            '\n' +
            'Nam venenatis arcu vel massa aliquet facilisis. Donec hendrerit interdum sem non congue. Fusce elementum id ante ac pellentesque. Sed cursus ligula vel efficitur rutrum. Donec ultricies, nunc non vulputate congue, lacus turpis viverra felis, at porta massa felis ac justo. Proin arcu est, fringilla vel erat pellentesque, consequat auctor erat. Donec maximus egestas libero at tristique. Vestibulum tempus felis sit amet nisl venenatis, malesuada convallis nibh accumsan. Proin varius euismod lacus et rutrum. Nulla id ornare ligula.\n' +
            '\n' +
            'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed molestie pellentesque faucibus. Phasellus urna sem, lacinia quis dolor sit amet, tincidunt sollicitudin sem. Praesent facilisis vulputate rhoncus. Nullam in elit in felis euismod iaculis. Morbi dictum mattis urna vitae mollis. Phasellus semper nunc nisl, eu tempus nunc laoreet at. Nulla sed egestas mauris, ut rhoncus quam. Fusce nec semper velit. Cras urna mi, pretium sed rutrum sed, tempor eget sem. Proin congue dolor augue. Fusce quis ex purus. Nulla facilisi.\n' +
            '\n' +
            'Maecenas eu venenatis orci. Nullam eros purus, molestie eu purus nec, euismod facilisis urna. Vestibulum quam odio, condimentum at fermentum vel, vehicula eget tellus. Quisque vitae est nunc. Curabitur accumsan semper orci id lobortis. Ut sed urna aliquam, iaculis eros ac, consectetur sem. Donec placerat molestie arcu, nec vulputate ex auctor et. Nullam accumsan porttitor turpis, sed ultricies elit cursus sit amet.',
        type: 'Online game'
    },
    {
        id: 'RH210812',
        name: "PLAY BY EMAIL GAME",
        date: {
            year: 2021,
            month: 8,
            day: 20,
        },
        endDate: {
            year: 2021,
            month: 9,
            day: 20,
        },
        designer: 'DESIGNER NAME',
        preamble: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem odio, tristique dignissim nibh quis, porttitor dictum mi. Nullam auctor odio eget ex aliquam, eu lobortis elit sodales. Praesent sit amet arcu a erat pulvinar vehicula. Curabitur nibh nunc, bibendum nec sollicitudin ac, interdum nec enim. Vestibulum semper nisi eleifend nulla euismod dapibus.',
        fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem odio, tristique dignissim nibh quis, porttitor dictum mi. Nullam auctor odio eget ex aliquam, eu lobortis elit sodales. Praesent sit amet arcu a erat pulvinar vehicula. Curabitur nibh nunc, bibendum nec sollicitudin ac, interdum nec enim. Vestibulum semper nisi eleifend nulla euismod dapibus. Nulla elementum, metus sed tempus tristique, tellus dui ullamcorper elit, vitae interdum enim leo mollis dolor. Fusce aliquet sollicitudin eros, quis pharetra turpis efficitur id. Proin efficitur lobortis tellus, non lobortis massa congue in. Aliquam tellus nibh, tempor quis cursus et, euismod sed est. Aliquam imperdiet dignissim bibendum. Maecenas non efficitur odio. Pellentesque eu augue augue.\n' +
            '\n' +
            'Nulla id efficitur velit, vitae accumsan est. Nulla fermentum pellentesque urna, id eleifend elit luctus eget. Nulla ut massa mauris. Sed tempus fringilla mi ac tincidunt. Nullam non ornare leo, in tincidunt quam. Ut blandit at felis ac accumsan. Vivamus sed tellus et purus scelerisque tempor. Maecenas dolor urna, congue in elit in, congue varius velit. Maecenas in nunc justo. Integer tincidunt sem sed magna rutrum placerat. Integer interdum consequat lorem sed mollis.\n' +
            '\n' +
            'Nam venenatis arcu vel massa aliquet facilisis. Donec hendrerit interdum sem non congue. Fusce elementum id ante ac pellentesque. Sed cursus ligula vel efficitur rutrum. Donec ultricies, nunc non vulputate congue, lacus turpis viverra felis, at porta massa felis ac justo. Proin arcu est, fringilla vel erat pellentesque, consequat auctor erat. Donec maximus egestas libero at tristique. Vestibulum tempus felis sit amet nisl venenatis, malesuada convallis nibh accumsan. Proin varius euismod lacus et rutrum. Nulla id ornare ligula.\n' +
            '\n' +
            'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed molestie pellentesque faucibus. Phasellus urna sem, lacinia quis dolor sit amet, tincidunt sollicitudin sem. Praesent facilisis vulputate rhoncus. Nullam in elit in felis euismod iaculis. Morbi dictum mattis urna vitae mollis. Phasellus semper nunc nisl, eu tempus nunc laoreet at. Nulla sed egestas mauris, ut rhoncus quam. Fusce nec semper velit. Cras urna mi, pretium sed rutrum sed, tempor eget sem. Proin congue dolor augue. Fusce quis ex purus. Nulla facilisi.\n' +
            '\n' +
            'Maecenas eu venenatis orci. Nullam eros purus, molestie eu purus nec, euismod facilisis urna. Vestibulum quam odio, condimentum at fermentum vel, vehicula eget tellus. Quisque vitae est nunc. Curabitur accumsan semper orci id lobortis. Ut sed urna aliquam, iaculis eros ac, consectetur sem. Donec placerat molestie arcu, nec vulputate ex auctor et. Nullam accumsan porttitor turpis, sed ultricies elit cursus sit amet.',
        type: 'Play-By-Email'
    }
];

app.get('/api/games', (req: Request, res: Response) => {
    const apiResponse: GameAPI = {
        games: allGames
    };

    res.send(apiResponse);
});

app.get('/api/games/:game', (req: Request, res: Response) => {
    // For now, we'll just filter in code
    // In the future, we'll do actual look ups
    const gameID = req.params.game;

    for (let game of allGames)
    {
        if (game.id === gameID) {
            res.send(game);
            return;
        }
    }

    res.status(404).send(`Game with id ${gameID} not found`)
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req: {}, res: Response) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
