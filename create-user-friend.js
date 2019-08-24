module.exports = function(app) {
  app.dataSources.mysqlDS.automigrate('UserFriend', function(err) {
    if (err) throw err;

    app.models.UserFriend.create([{
      userid: '1',
      friendid: '2',
    }, 
    {
      userid: '2',
      friendid: '1',
    }], function(err, userFriends) {
      if (err) throw err;

      console.log('Models created: \n', userFriends);
    });
  });
};