/// <reference path="../../typings/mocha/mocha.d.ts" />
import passwordOfTheDay = require("../passwordOfTheDay");

describe("Generator", () => {
    var subject : passwordOfTheDay.Generator;

    beforeEach(function () {
        subject = new passwordOfTheDay.Generator();
    });

    describe("#generate", () => {
        it("should generate the password", () => {
            var result : string = subject.generate(new Date(2010, 6, 24));
            if (result !== "Password") {
                throw new Error("Expected 'Password' but was " + result);
            }
        });
    });
  
    describe("#check", () => {
        it("should return false when the password is incorrect", () => {
            var result : boolean = subject.check("garbage");
            if (result !== false) {
                throw new Error("Expected 'false' but was " + result);
            }
        });
    });

    describe("#check", () => {
        it("should return true when the password is correct", () => {
            var result : boolean = subject.check("Password");
            if (result !== true) {
                throw new Error("Expected 'true' but was " + result);
            }
        });
    });

});