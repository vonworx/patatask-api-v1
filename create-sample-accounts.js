module.exports = function(app) {
  app.dataSources.mysqlDS.automigrate('account', function(err) {
    if (err) throw err;

    app.models.account.create([{
      username: 'choister',
      password: 'choipogi123',
      email: 'vonworx@gmail.com',
      validated: '1'
    }, {
      username: 'lancejrts',
      password: '2',
      email: 'lancejrts@gmail.com',
      validated: '1'
    }], function(err, acccounts) {
      if (err) throw err;

      console.log('Models created: \n', acccounts);
    });
  });
};