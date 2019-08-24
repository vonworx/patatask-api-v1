module.exports = function(app) {
  app.dataSources.mysqlDS.automigrate('Task', function(err) {
    if (err) throw err;

    app.models.Task.create([{
      taskname: 'Create App',
      description: 'Complete Mobile App',
      admount: '100',
      owner: '1',
      assignee: '2'
    }, {
      taskname: 'Create Blockchain Framework',
      description: 'Complete ELA API',
      admount: '100',
      owner: '2',
      assignee: '1'
    }], function(err, tasks) {
      if (err) throw err;

      console.log('Models created: \n', tasks);
    });
  });
};