import path from "path";
import {Request, Response} from "express";
import {Company} from "./types/types";

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/all', (req: Request, res: Response) => {
    const allCompanies: Array<Company> = [];

    allCompanies.push(
        {
            industry: "Agriculture",
            country: "EuropeanUnion",
            points: 1
        },
        {
            industry: "Agriculture",
            country: "EuropeanUnion",
            points: 2
        },
        {
            industry: "Agriculture",
            country: "EuropeanUnion",
            points: 3
        }
    );

    res.send({companies: allCompanies});
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
