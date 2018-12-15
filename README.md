# GraphQL for Fitbit OS
This is a node module for handling with GraphQL in Fitbit OS.
## Usage

In order to use this library, you have to develop your app on the command line interface (CLI) and not on [studio.fitbit.com](https://studio.fitbit.com/).
To install the library use the following command:

```bash
npm install graphql-fitbit
```

After you have installed the library on your project, you can import the library in your project. Just open your `index.js` file in the companion folder and add there the following line below the other imports:

```js
import * as graphql from "graphql-fitbit/companion";
```

Then you can call the function everywhere you want. Just make sure that you initalize also the callback function.

```js
// Example query
const query = `{
  stopPlace(id: "NSR:StopPlace:6905") {
    id
    name
    estimatedCalls(startTime:"2018-12-14T20:00:00+0200" timeRange: 72100, numberOfDepartures: 10) {
      expectedDepartureTime
      destinationDisplay {
        frontText
      }
      quay {
        id
      }
      serviceJourney {
        journeyPattern {
          line {
            id
            name
            transportMode
          }
        }
      }
    }
  }
}`;

// Enter in the first place
graphql.requestGraphQL('https://api.entur.org/journeyplanner/2.0/index/graphql', query, myCallback);

function myCallback(data){
  console.log(data); // Here you have the data in JSON format.
}
```

Unfortunately Fitbit uses the gulp uglify library, which does not allow to use async functions.

## API
```
graphql.requestGraphQL(url, query, callback, debug);
```
Sends a request to the GraphQL URL and responds with the callback.
- `url`: GraphQL endpoint url
- `query`: GraphQL query in a string
- `callback`: Callback function where the response can be send to
- `debug`: If you want detailed information about the request (default: false)
