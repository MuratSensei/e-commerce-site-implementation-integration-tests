const config = require("../../configurations");
const expect = require("chai").expect;
const axios = require('axios').default;

let CreateSellerModel = require("../models/create-seller-model");
let CreateProductModel = require("../models/create-product-model");

describe("E-Commerce-Site-API POST /product", () => {
    it("Product Create Successfully Test", async () => {
        let createSellerModel = new CreateSellerModel();
        let createProductModel = new CreateProductModel();

        await axios.post(config.eCommerceSiteApi + "/seller", createSellerModel)
            .catch(error => {
                console.log(error.response.data);
            });

        createProductModel.sellerUsername = createSellerModel.username;

        let createProductResponse = await axios.post(config.eCommerceSiteApi + "/product", createProductModel)
            .catch(error => {
                console.log(error.response.data);
            });

        expect(createProductResponse.status).to.equal(200);
        expect(createProductResponse.data.result.productId).not.null;
        expect(createProductResponse.data.result.sellerUsername).not.null;
        expect(createProductResponse.data.result.createdDate).not.null;
    });
});