import {createWriteStream} from 'fs';
import { SitemapStream } from 'sitemap';
import 'dotenv/config'
import {routes} from './src/routes.js';

const hostname = process.env.VITE_HOSTNAME;

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({ hostname });

const writeStream = createWriteStream(process.env.VITE_SITEMAP);
sitemap.pipe(writeStream);

routes.forEach(route => {
    sitemap.write(hostname + route.path);
});

sitemap.end();