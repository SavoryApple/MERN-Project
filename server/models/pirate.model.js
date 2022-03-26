const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name field is required"
        ],
        minlength: [2, "First name must be at least 2 characters long"]
    },
    img: {
        type: String,
        required: [
            true,
            "Image URL field is required"
        ]
    },
    chests: {
        type: Number,
        required: [
            true,
            "Chests field is required"
        ]
    },
    catchPhrase: {
        type: String,
        required: [
            true,
            "Catch phrase field is required"
        ]
    },
    position: {
        type: String,
        enum: ['Captain', 'First Mate', 'Quarter Master', 'Bootswain', 'Powder Monkey']
    },
    pegLeg: {
        type: Boolean,
        default: true,
        required: [
            true,
            "Peg leg field is required"
        ]
    },
    eyePatch: {
        type: Boolean,
        default: true,
        required: [
            true,
            "Eye patch field is required"
        ]
    },
    hookHand: {
        type: Boolean,
        default: true,
        required: [
            true,
            "Hook hand field is required"
        ]
    },
},
    { timestamps: true }

);
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);

// name, img, chests, position, pegLeg, eyePatch, hookHand, catchPhrase