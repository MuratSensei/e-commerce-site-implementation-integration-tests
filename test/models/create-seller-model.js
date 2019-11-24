const uuidv1 = require('uuid/v1');

module.exports = class CreateSellerModel {
    constructor() {
        return {
            "address": "YTU Kampus",
            "firstName": "Murat",
            "lastName": "Kara",
            "password": "1234",
            "phoneNumber": "05555555555",
            "username": "KARA_" + uuidv1()
          }
    }
}