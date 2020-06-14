# Streamtools
Collection of tiny tools which I need for OBS Studio on Linux.

## Installation
1. Run `npm install`
2. Run `cp .env.dist .env`
3. Fill in the required config values in the .env file
4. Run `npm start`

## Modules

### [MetadataDownloader](src/modules/MetadataDownloader)
This module is responsible for saving the last follower to [`data/last_follower.txt`](data/).