const config = require("../../configurations");
const expect = require("chai").expect;
const axios = require('axios').default;

let CreateSellerModel = require("../models/create-seller-model");

describe("E-Commerce-Site-API GET /seller/{username}", () => {
    it("Seller Get Successfully Test", async () => {
        let createSellerModel = new CreateSellerModel();

        await axios.post(config.eCommerceSiteApi + "/seller", createSellerModel)
            .catch(error => {
                console.log(error.response.data);
            });

        await new Promise((res, rej) => setTimeout(res, 1500));

        let getSellerResponse = await axios.get(config.eCommerceSiteApi + "/seller/" + createSellerModel.username);

        expect(getSellerResponse.status).to.equal(200);
        expect(getSellerResponse.data.result.id).not.null;
        expect(getSellerResponse.data.result.firstName).to.equal(createSellerModel.firstName);
        expect(getSellerResponse.data.result.lastName).to.equal(createSellerModel.lastName);
        expect(getSellerResponse.data.result.username).to.equal(createSellerModel.username);
        expect(getSellerResponse.data.result.phoneNumber).to.equal(createSellerModel.phoneNumber);
        expect(getSellerResponse.data.result.address).to.equal(createSellerModel.address);
        expect(getSellerResponse.data.result.createdDate).not.null;
    });
});