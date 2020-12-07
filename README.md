## Twitch API bridge
For many my kaaroStream, kaaroScoreboard, kaaroClips project, need a Server to make API request. CORS and all....

Using this have a repo of usefull custom Twitch API endpoints

## Get Live Streams
We can fetch live streams by Game and filter them based on keywords.
* `/gamestreams`

|      |      description      |  default |
|----------|:-------------:|------:|
| id |  Twitch `game_id` for the game. Refer [Game lookup](https://karx.github.io/twitch/lookup) | 13389 (AoE-II) |
| filters |    comma seperated list of filters to apply   |   `` |


Example: `/gamestreams?game_id=27471&filter=hardcore,speedrun,1.6`

Fetches all Minecraft Stream with 'hardcore', 'speedrun' or '1.6' in title.
[Try Now](http://tbridge.akriya.co.in/gamestreams?game_id=27471&filter=hardcore,speedrun,1.6)

## Discussion, Support and Issues
For general support and discussion of this project, please join the Discord server: [Discord Invite Link](https://discord.gg/B2cERQ5)

[![Discord Server](https://discordapp.com/api/guilds/552881714196774953/widget.png?style=banner2)](https://discord.gg/B2cERQ5)

To check known bugs and see planned changes and features for this project, please see the GitHub issues.
Found a bug we don't already have an issue for? Please report it in a new GitHub issue with as much detail as you can!
