import "dotenv/config";

export default ({ config }) => ({
    ...config,
    extra: {
        MAP_API_KEY: process.env.MAP_API_KEY,
    },
});