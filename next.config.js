// next.config.js
module.exports = {
    async rewrites() {
        return [
            {
                source: "/podcast/feed",
                destination: "/api/podcast/feed/rss",
            },
            {
                // The /:slug part is a generic parameter handler to catch all other cases
                source: "/podcast/feed/:slug",
                destination: "/api/podcast/feed/:slug",
            },
        ];
    }
}
