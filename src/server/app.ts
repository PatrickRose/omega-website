import {Request, Response} from "express";
import {EventAPI, Game, GameAPI} from "../types/types";
import {getGamesRepo} from "./repository/games";
import {isRight} from "fp-ts/Either";
import {getEventRepo} from "./repository/events";

const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/events', (req: Request, res: Response<EventAPI|Error>) => {
    const allEvents = getEventRepo().all();

    if (isRight(allEvents)) {
        const apiResponse: EventAPI = {
            events: allEvents.right
        }

        res.send(apiResponse);
        return;
    }

    res.status(500).send(allEvents.left)
})

app.get('/api/games', (req: Request, res: Response<GameAPI|Error>) => {
    const allGames = getGamesRepo().all();

    if (isRight(allGames)) {
        const apiResponse: GameAPI = {
            games: allGames.right
        };

        res.send(apiResponse);
        return;
    }

    res.status(500).send(allGames.left)
});

app.get('/api/games/:game', (req: Request, res: Response<Game|Error>) => {
    // For now, we'll just filter in code
    // In the future, we'll do actual look ups
    const gameID = req.params.game;

    const game = getGamesRepo().get(gameID);

    if (isRight(game)) {
        res.send(game.right);
        return;
    }

    res.status(404).send(game.left)
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../../build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req: {}, res: Response) {
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });
}

module.exports = app;
