// first argument says to intercept any request to path, second is path to file with the data
can.fixture('GET /api/states', 'models/states.json');
// get the list of cities for each state
can.fixture('GET /api/cities', function(request, response) {
  // return the data we want
  can.ajax({
    url: '/models/' + request.data.state + '.json',
    success: function(data) {
      response(data);
    }
  });
});

can.fixture('GET /api/restaurants', 'models/restaurants.json');
can.fixture('GET /api/restaurants/{_id}', 'models/spago.json');