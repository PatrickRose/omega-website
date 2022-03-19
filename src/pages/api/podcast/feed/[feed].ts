import type {NextApiRequest, NextApiResponse} from 'next'
import {getPodcastRepo} from "../../../../server/repository/podcast";
import { isLeft } from 'fp-ts/lib/These';
import {Feed} from "feed";
import {getJSDateFromOmegaDate} from "../../../../utils";

const podcastRepository = getPodcastRepo()

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const feedType = req.query.feed;

    if (typeof feedType !== 'string') {
        res.status(400).send('Invalid request - can only handle a feed');
        return;
    }

    if (isLeft(podcastRepository)) {
        res.status(500).send(podcastRepository.left)
        return;
    }

    const episodes = await podcastRepository.right.all();

    if (isLeft(episodes)) {
        res.status(500).send(episodes.left);
        return;
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://omega-mega.games';
    const feed = new Feed({
        title: 'Control Panel - a Play-by-Email Megagame Podcast',
        id: siteUrl,
        link: `${siteUrl}/podcast`,
        image: `${siteUrl}/logo.svg`,
        language: 'English',
        favicon: `${siteUrl}/favicon.ico`,
        description: "Interested in the Play-by-Email games that OMEGA put on? Join Steph, Stu and Kyle as they discuss Play-by-Email games in depth, from how to play them, to how to create them to the stories they've picked up along the way!",
        copyright: 'All rights reserved 2022, Steph Rothman',
        feedLinks: {
            rss: `${siteUrl}/podcast/feed/rss`,
            json: `${siteUrl}/podcast/feed/json`,
            atom: `${siteUrl}/podcast/feed/atom`
        },
        author: {
            name: 'Steph Rothman'
        },
    });

    episodes.right.forEach(episode => {
        const date = getJSDateFromOmegaDate(episode.date);
        date.setHours(0, 0, 0);

        feed.addItem({
            title: `Episode ${episode.number}: ${episode.title}`,
            id: `${episode.number}`,
            link: `${siteUrl}/podcast/${episode.number}`,
            date: date,

            description: episode.description,

            published: date,
            audio: {
                url: episode.link,
                type: episode.type,
                title: `Episode ${episode.number}: ${episode.title}`,
                length: episode.length
            }
        })
    })

    switch (feedType) {
        case 'rss':
            res.setHeader('Content-Type', 'text/xml');
            res.send(feed.rss2());
            break;
        case 'atom':
            res.setHeader('Content-Type', 'application/atom+xml');
            res.send(feed.atom1());
            break;
        case 'json':
            res.setHeader('Content-Type', 'application/json');
            res.send(feed.json1());
            break;
        default:
            res.status(404).send(`Unknown feed type ${feedType}`);
    }
}

export default handler;
