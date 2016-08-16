// To keep can.Components thin and readable, it is best to extract the scope into a can.Map like so:
var RestaurantListViewModel = can.Map.extend({
  define: {
    state: {
      value: null,
      set: function() {
        // remove the city when the state changes
        this.attr('city', null)
      }
    },
    states: {
      get: function() {
        return State.findAll({});
      }
    },
    // returns list of cities for the selected state
    cities: {
      get: function() {
        var state = this.attr('state');
        return state ? City.findAll({ state: state }) : null;
      }
    },
    // creates an object that has the list of cities by state name. (DON'T NEED ANYMORE)
    // citiesByState: {
    //   get: function() {
    //     var citiesByState = {};
    //     this.attr('states').forEach(function(state) {
    //       citiesByState[state.name] = state.cities;
    //     });
    //     return citiesByState;
    //   }
    // },
    // the name of the city that's selected
    city: { value: null },
    restaurants: {
      get: function() {
        var city = this.attr('city');
        var state = this.attr('state');

        return state && city ? Restaurant.findAll({ 'address.state': state, 'address.city': city }) : null;
      }
    }
  }
});

// when you declare a Component by extending it, it is registered with CanJS
  // and will automatically be generated when CanJS comes across the HTML tag specified in the 'tag' property
can.Component.extend({
  // see above
  tag: 'pmo-restaurant-list',
  // load the template file using can.view
  template: can.view('components/restaurant_list/restaurant_list.stache'),
  // properties or functions defined here will be available from the template as either a Stache data key or function
  viewModel: RestaurantListViewModel
});