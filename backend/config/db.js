const mongoose = require('mongoose');

const db = () => {
    mongoose.connect('mongodb+srv://ahmetcancetinz:12345@ahmetcan.qcymhtx.mongodb.net/', {

    }).then(() => {
        console.log("mongoDB connected...")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = db;
