const uuidv1 = require('uuid/v1');

module.exports = class CreateProductModel {
    constructor() {
        return {
            "brand": "Xiaomi",
            "content": "Cep Telefonu",
            "description": "Xiaomi Redmi Note 8 Pro 128 GB Xiaomi Türkiye Garantili Cep Telef",
            "gender": "Unisex",
            "name": "Xiaomi Redmi Note 8 Pro 128 GB",
            "photoUrl": "https://images-na.ssl-images-amazon.com/images/I/61P5Ocno4vL._SX425_.jpg",
            "category": "Electronic",
            "unitPrice": 2379,
            "unitWeight": 199,
            "sellerUsername":"TEST"
          }
    }
}