const PirateController = require('../controllers/pirate.controller');
module.exports = function (app) {
    app.post('/api/pirate/create', PirateController.createPirate);
    app.get('/api/pirate/:id', PirateController.getPirate);
    app.get('/api/pirates', PirateController.showPirates);
    app.put('/api/pirate/:id', PirateController.updatePirate);
    app.delete('/api/pirate/:id', PirateController.deletePirate);
}