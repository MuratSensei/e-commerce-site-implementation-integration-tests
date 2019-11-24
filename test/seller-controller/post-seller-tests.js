const config = require("../../configurations");
const expect = require("chai").expect;
const axios = require('axios').default;

let CreateSellerModel = require("../models/create-seller-model");

describe("E-Commerce-Site-API POST /seller", () => {
    it("Seller Create Successfully Test", async () => {
        let createSellerModel = new CreateSellerModel();

        let createSellerResponse = await axios.post(config.eCommerceSiteApi + "/seller", createSellerModel)
            .catch(error => {
                console.log(error.response.data);
            });

        expect(createSellerResponse.status).to.equal(200);
        expect(createSellerResponse.data.result.sellerId).not.null;
        expect(createSellerResponse.data.result.username).not.null;
        expect(createSellerResponse.data.result.createdDate).not.null;
    });
});