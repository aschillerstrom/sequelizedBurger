var express = require('express');
var router = express.Router();
var models = require('../models'); 


// added for sequelize
var sequelizeConnection = models.sequelize;

// Sync the tables
sequelizeConnection.sync();


// Create routes
// ----------------------------------------------------


router.get('/', function (req, res) {
  res.redirect('/index');
});




router.get('/index', function (req, res) {

  // Sequelize Query to get all burgers
  models.burgers.findAll({
   include: [{model: models.devourers}]
  }).then(function(data){

    
    var hbsObject = { burgers: data };
    console.log(data);
    res.render('index', hbsObject);

  })

});




router.post('/burger/create', function (req, res) {

  // Sequelize Query 
  models.burgers.create(
    {
      burgerName: req.body.burgerName,
      devoured: false
    }
  ).
    res.redirect('/index');
  });






router.put('/burgers/update/:id', function(req, res){
		var condition = 'id = ' + req.params.id;
	
		console.log('condition ', condition);
	
		models.burgers.update({'devoured': req.body.devoured}, condition, function(data){
			res.redirect('/burgers');
		});
	});

// ----------------------------------------------------


// Export routes
module.exports = router;