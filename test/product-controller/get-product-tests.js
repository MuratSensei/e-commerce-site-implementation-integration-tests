const config = require("../../configurations");
const expect = require("chai").expect;
const axios = require('axios').default;

let CreateSellerModel = require("../models/create-seller-model");
let CreateProductModel = require("../models/create-product-model");

describe("E-Commerce-Site-API GET /product/{productId}", () => {
    it("Product Get Successfully Test", async () => {
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

        await new Promise((res, rej) => setTimeout(res, 1500));

        let getProductResponse = await axios.get(config.eCommerceSiteApi + "/product/" + createProductResponse.data.result.productId);

        expect(getProductResponse.status).to.equal(200);
        expect(getProductResponse.data.result.name).to.equal(createProductModel.name);
        expect(getProductResponse.data.result.category).to.equal(createProductModel.category);
        expect(getProductResponse.data.result.description).to.equal(createProductModel.description);
        expect(getProductResponse.data.result.content).to.equal(createProductModel.content);
        expect(getProductResponse.data.result.brand).to.equal(createProductModel.brand);
        expect(getProductResponse.data.result.unitPrice).to.equal(createProductModel.unitPrice);
        expect(getProductResponse.data.result.unitWeight).to.equal(createProductModel.unitWeight);
        expect(getProductResponse.data.result.photoUrl).to.equal(createProductModel.photoUrl);
        expect(getProductResponse.data.result.gender).to.equal(createProductModel.gender);
        expect(getProductResponse.data.result.sellerUsername).to.equal(createProductModel.sellerUsername);
        expect(getProductResponse.data.result.createdDate).not.null;
    });
});