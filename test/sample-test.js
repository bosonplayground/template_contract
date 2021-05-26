const { expect } = require("chai");

async function deployContract(greeting, nonce) {
    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy(greeting, nonce);
    await greeter.deployed();
    return [greeter];
}

describe("Greeter", function() {
    it("Should return the new greeting once it's changed", async function() {
        const [greeter] = await deployContract("Hello, world!", 12);

        expect(await greeter.greet()).to.equal("Hello, world!");
        expect((await greeter.nonce()).eq(12)).to.be.true;

        await greeter.setGreeting("Hola, mundo!");
        expect(await greeter.greet()).to.equal("Hola, mundo!");
    });
});