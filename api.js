//REST Demo APIs
module.exports = function(app) {
    
    //Our Transaction Model
    var transaction = require('./transactions.js');

    // Get product costs
    app.get('/data/product/costs',
        function(req, res) {
            console.log('get product costs');

            var costs = {
                'largeLemonade': 3, 
                'mediumLemonade': 2,
                'healthySnack': 1,
                'treat': 1
            };

            res.json(costs); 

    });

    // Get the complete list of products
    app.get('/data/products',
        function(req, res) {
            console.log('list of products');

            //List of products 
            var products = [
                {
                    id: 0,
                    domId: 'largeLemonade',
                    description: 'Large lemonade',
                    icon: 'ion-happy-outline',
                    cost: 3
                }, {
                    id: 1,
                    domId: 'mediumLemonade',
                    description: 'Medium lemonade',
                    icon: 'ion-sad-outline',
                    cost: 2
                }, {
                    id: 2,
                    domId: 'healthySnack',
                    description: 'Healthy Snack',
                    icon: 'ion-heart',
                    cost: 1
                }, {
                    id: 3,
                    domId: 'treat',
                    description: 'Treat',
                    icon: 'ion-heart-broken',
                    cost: 1
                }
            ];

          res.json(products); 

    });

    app.get('/data/transactions/:id',
        function(req, res) {
            console.log('individual transaction');
            var id = Number(req.params.id);

            res.json(transaction.getTransaction(id));
        }
    );

    // Get all the transactions.
    app.get('/data/transactions',
        function(req, res) {
            console.log('list of transactions');

            res.json(transaction.getTransactions());
    });

    // Get all the transactions.
    app.get('/data/moretransactions',
        function(req, res) {
            console.log('list of moretransactions');

            res.json(transaction.getMoreTransactions());
    });

};


