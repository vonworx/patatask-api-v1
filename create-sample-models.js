module.exports = function(app) {
  app.dataSources.mysqlDS.automigrate('Patatask', function(err) {
    if (err) throw err;

    app.models.Patatask.create([{
      name: 'Choister',
      task: '1'
    }, {
      name: 'Lance',
      task: '2'
    }, {
      name: 'Choister',
      task: '3'
    }], function(err, coffeeShops) {
      if (err) throw err;

      //console.log('Models created: \n', Patatasks);
    });
  });
};