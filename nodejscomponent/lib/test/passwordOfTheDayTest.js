/// <reference path="../../typings/main.d.ts" />
var PasswordOfTheDay = require("../passwordOfTheDay");
describe("Generator", function () {
    var subject;
    beforeEach(function () {
        subject = new PasswordOfTheDay.PasswordGenerator();
    });
    describe("#generate", function () {
        it("should generate the password", function () {
            var result = subject.generate(new Date(2010, 6, 24));
            if (result !== "Password") {
                throw new Error("Expected 'Password' but was " + result);
            }
        });
    });
    describe("#check", function () {
        it("should return false when the password is incorrect", function () {
            var result = subject.check("garbage");
            if (result !== false) {
                throw new Error("Expected 'false' but was " + result);
            }
        });
    });
    describe("#check", function () {
        it("should return true when the password is correct", function () {
            var result = subject.check("Password");
            if (result !== true) {
                throw new Error("Expected 'true' but was " + result);
            }
        });
    });
});
