import path from "path";
import {Request, Response} from "express";
import {Game, GameAPI} from "../client/src/types/types";
import {getGamesRepo} from "./repository/games";
import {isRight} from "fp-ts/Either";

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const gameRespository = getGamesRepo();

app.get('/api/games', (req: Request, res: Response) => {
    const allGames = gameRespository.all();

    if (isRight(allGames)) {
        const apiResponse: GameAPI = {
            games: allGames.right
        };

        res.send(apiResponse);
        return;
    }

    res.status(500).send(allGames.left)
});

app.get('/api/games/:game', (req: Request, res: Response) => {
    // For now, we'll just filter in code
    // In the future, we'll do actual look ups
    const gameID = req.params.game;

    const game = gameRespository.get(gameID);

    if (isRight(game)) {
        res.send(game.right);
        return;
    }

    res.status(404).send(game.left)
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
