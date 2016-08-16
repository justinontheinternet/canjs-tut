var Restaurant = can.Model.extend({
  // these are staticProperties. there are some reserved properties: findAll, findOne, create, update, destroy 
  findAll: 'GET /api/restaurants',
  findOne: 'GET /api/restaurants/:id'
}, {
  // including second, empty parameter object to set instanceProperties
});