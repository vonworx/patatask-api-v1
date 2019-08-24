module.exports = function(app) {
  app.dataSources.mysqlDS.automigrate('Wallet', function(err) {
    if (err) throw err;

    app.models.Wallet.create([{
      accountid: '1',
      type: 'credits',
      address: '',
      balance: '1000'

    }, {
      accountid: '2',
      type: 'credits',
      address: '',
      balance: '1000'

    }], function(err, wallets) {
      if (err) throw err;

      console.log('Models created: \n', wallets);
    });
  });
};