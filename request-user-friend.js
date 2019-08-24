module.exports = function(app) {
  app.dataSources.mysqlDS.automigrate('Freq', function(err) {
    if (err) throw err;

    app.models.Freq.create([{
      userid: '1',
      friendid: '2',
    }, 
    {
      userid: '2',
      friendid: '1',
    }], function(err, freqs) {
      if (err) throw err;

      console.log('Models created: \n', freqs);
    });
  });
};