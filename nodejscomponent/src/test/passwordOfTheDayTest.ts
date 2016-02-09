/// <reference path="../../typings/main.d.ts" />
import PasswordOfTheDay = require("../passwordOfTheDay");
import Chai = require("chai");

// Tell chai that we'll be using the "should" style assertions.
Chai.should();

describe("Generator", () => {
    var subject : PasswordOfTheDay.PasswordGenerator;
    
    beforeEach(function () {
        subject = new PasswordOfTheDay.PasswordGenerator();
    });

    describe("#generate", () => {
        it("should generate the password when the date is 24th July 2010", () => {
            var date : Date = new Date(2010, 6, 24);
            var password : string = subject.generate(date); 
                       
            password.should.equal("92ab1ff89bf9af");           
        });
    });

    describe("#generate", () => {
        it("should generate a different password when the date is 25th July 2010", () => {
            var date : Date = new Date(2010, 6, 25);
            var password : string = subject.generate(date); 
                       
            password.should.equal("26a394b21800f1");           
        });
    });
  
    describe("#check", () => {
        it("should return false when the password is incorrect", () => {
            var password : string = "garbage";
            var result : boolean = subject.check(password);
            
            result.should.be.false;
        });
    });

    describe("#check", () => {
        it("should return false when the password is null", () => {
            var password : string = null;
            var result : boolean = subject.check(password);
            
            result.should.be.false;
        });
    });

    describe("#check", () => {
        it("should return true when the password is correct", () => {
            var password : string = subject.generate(new Date());
            var result : boolean = subject.check(password);
  
            result.should.be.true;
        });
    });

});