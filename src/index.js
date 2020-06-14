"use strict";

import fs from 'fs';
import dotenv from 'dotenv';
import MetadataDownloader from './modules/MetadataDownloader/MetadataDownloader.js';
import api from 'twitch-api-v5'

if (!fs.existsSync('.env')) {
    throw new Error('.env file not found. Please copy .env.dist to .env and fill in the variables.');
}

dotenv.config();

api.clientID = process.env.TWITCH_APP_CLIENT_ID;

function loop() {
    new MetadataDownloader(api, process.env.TWITCH_USERNAME).run();
}
loop();
setInterval(loop, process.env.LOOP_INTERVAL);
