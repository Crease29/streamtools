"use strict";

import fs from 'fs';

export default class MetadataDownloader {
    /**
     * @type {object|null}
     */
    api = null;

    /**
     * @type {string|null}
     */
    username = null;

    /**
     *
     * @param api {object}
     * @param username  {string}
     */
    constructor(api, username) {
        this.api = api;
        this.username = username;
    }

    run() {
        this.api.users.usersByName({users: this.username}, (error, response) => {
            const channelId = response.users[0]._id || null;
            if (channelId === null) {
                return;
            }

            this.api.channels.followers({channelID: channelId, limit: 1, direction: 'desc'}, (error, response) => {
                if (!response || response.follows.length === 0) {
                    return;
                }

                if (!fs.existsSync('data')) {
                    fs.mkdirSync('data');
                }
                fs.writeFileSync('data/last_follower.txt', response.follows[0].user.display_name || '');
            })
        });
    }
}