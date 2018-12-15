export function requestGraphQL(url, query, callback, debug){
  if(debug == undefined){
    debug = false;
  }

  if(callback == undefined){
    console.error("[graphql-fitbit] No callback was defined as the 3rd parameter.");
    return;
  }

  const body = {
      method: 'POST',
      headers: {
        "Content-Type": "application/graphql"
      },
      body: query
  };

  if(debug){
    console.warn("[graphql-fitbit] ----- DEBUG GraphQL -----");
    console.warn("[graphql-fitbit] URL:");
    console.log(url);
    console.warn("[graphql-fitbit] Query:");
    console.log(body.body);
    console.warn("[graphql-fitbit] ----- END DEBUG GraphQL -----");
  }

  fetch(url, body).then(function(response){
    response.json().then(function(data) {
      callback(data);
    });
  }).catch(function(error){
    console.error("[graphql-fitbit] There was an error while trying to fetch data from the GraphQL endpoint.");
    return;
  });
}

export default requestGraphQL
