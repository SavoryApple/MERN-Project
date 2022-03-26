const { Pirate } = require('../models/pirate.model');
const pirateRoutes = require('../routes/pirate.routes');

// Create
module.exports.createPirate = (request, response) => {
    const { firstName, lastName, breed, isImportant } = request.body;
    Pirate.create(request.body)
        .then(newlyCreatedPirate => response.json({ pirateList: newlyCreatedPirate }))
        .catch(err => response.status(400).json(err))
}

module.exports.showPirates = (req, res) => {
    Pirate.find().sort({name:1})
        //// ...retrieve an array of all documents in the User collection
        .then(allPirates => res.json({ pirateList: allPirates }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getPirate = (request, response) => {
    Pirate.findOne({ _id: request.params.id })
        .then(pirate => response.json(pirate))
        .catch(err => response.json(err))
}

module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updatedPirate => response.json(updatedPirate))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}


