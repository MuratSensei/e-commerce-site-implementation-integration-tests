const config = require("../../configurations");
const expect = require("chai").expect;
const axios = require('axios').default;

let CreateSellerModel = require("../models/create-seller-model");
let CreateProductModel = require("../models/create-product-model");

describe("E-Commerce-Site-API GET /product/cagetory/{category}", () => {
    it("Product Category Get Successfully Test", async () => {
        let createSellerModel = new CreateSellerModel();
        let createProductModel = new CreateProductModel();

        await axios.post(config.eCommerceSiteApi + "/seller", createSellerModel)
            .catch(error => {
                console.log(error.response.data);
            });

        createProductModel.sellerUsername = createSellerModel.username;

        await axios.post(config.eCommerceSiteApi + "/product", createProductModel)
            .catch(error => {
                console.log(error.response.data);
            });

        await new Promise((res, rej) => setTimeout(res, 1500));

        let getProductsResponse = await axios.get(config.eCommerceSiteApi + "/product/cagetory/" + createProductModel.category);

        expect(getProductsResponse.status).to.equal(200);
        expect(getProductsResponse.data.result).to.be.an('array').that.is.not.empty;
    });
});