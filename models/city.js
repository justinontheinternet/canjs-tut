var City = can.Model.extend({
  // these are staticProperties. there are some reserved properties: findAll, findOne, create, update, destroy 
  findAll: 'GET /api/cities'
}, {
  // including second, empty parameter object to instanceProperties
});