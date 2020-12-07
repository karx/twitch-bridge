const express = require('express')
const bodyParser = require('body-parser')
const app = express();

const { twitchCallWithPage } = require('./twitch_streams');


app.use(bodyParser.urlencoded({ extended: false }));

app.get('/gamestreams', async (req, response) => {
    const qs = req.query;

    console.log(qs);

    
    let streamDataRaw = await twitchCallWithPage(
        "https://api.twitch.tv/helix/streams",
        {
          game_id: qs.game_id ? qs.game_id : 13389,
          first: 100
        }
      );

      
      let streamData = JSON.parse(streamDataRaw);
      let streams = streamData.data;
      console.log(`Before Filter Got ${streams.length}`);
      if (qs.filter) {
        console.log(qs.filter);
        let filters = qs.filter.split(',');
        streams = streams.filter(eachStream => filters.some(eachFilter => eachStream.title.includes(eachFilter) )); //if one of filters hit, We return that stream
    }
        console.log(`After Filter Got ${streams.length}`);
      response.set('Content-Type', 'application/json');
      response.send(streams);
    
});


// Tell our app to listen on port 3144
app.listen(3144, function (err) {
    if (err) {
        throw err
    }
    console.log('Server started on port 3144')
})