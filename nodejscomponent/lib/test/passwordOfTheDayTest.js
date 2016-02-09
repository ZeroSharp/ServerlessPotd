/// <reference path="../../typings/main.d.ts" />
var PasswordOfTheDay = require("../passwordOfTheDay");
var Chai = require("chai");
// Tell chai that we'll be using the "should" style assertions.
Chai.should();
describe("Generator", function () {
    var subject;
    beforeEach(function () {
        subject = new PasswordOfTheDay.PasswordGenerator();
    });
    describe("#generate", function () {
        it("should generate the password when the date is 24th July 2010", function () {
            var date = new Date(2010, 6, 24);
            var password = subject.generate(date);
            password.should.equal("92ab1ff89bf9af");
        });
    });
    describe("#generate", function () {
        it("should generate a different password when the date is 25th July 2010", function () {
            var date = new Date(2010, 6, 25);
            var password = subject.generate(date);
            password.should.equal("26a394b21800f1");
        });
    });
    describe("#check", function () {
        it("should return false when the password is incorrect", function () {
            var password = "garbage";
            var result = subject.check(password);
            result.should.be.false;
        });
    });
    describe("#check", function () {
        it("should return false when the password is null", function () {
            var password = null;
            var result = subject.check(password);
            result.should.be.false;
        });
    });
    describe("#check", function () {
        it("should return true when the password is correct", function () {
            var password = subject.generate(new Date());
            var result = subject.check(password);
            result.should.be.true;
        });
    });
});
