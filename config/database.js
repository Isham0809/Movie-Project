const mongoose = require('mongoose')

module.exports.db = async () => {
    try {
        await mongoose.connect('mongodb+srv://rnwisha6935:isha1234@movie-data.s3njl.mongodb.net/movie')
        console.log('connected to database')
    } catch (error) {
        console.log(error);
    }
}