const mongoose = require('mongoose')

const FormLead = mongoose.model('upload', {
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: Number,
    },
    phone: {
        type: String,
    },
    zips: {
        type: Number,
    },
    beds: {
        type: Number,
    },
    baths: {
        type: Number,
    },
    price: {
        type: String,
    }
})

module.exports = FormLead