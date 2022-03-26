const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/pirates", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the db called pirates"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));