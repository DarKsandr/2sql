import {createWriteStream} from 'fs';
import 'dotenv/config';
import { EOL } from "node:os";

const writeStream = createWriteStream(process.env.VITE_ROBOTS);
writeStream.write('User-agent: *' + EOL);
writeStream.write('Allow: /' + EOL + EOL);
writeStream.write('Sitemap: ' + process.env.VITE_SITEMAP);
writeStream.end();