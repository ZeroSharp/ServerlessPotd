/// <reference path="../typings/main.d.ts" />
var CryptoJS = require("crypto-js");
function checkPotd(password) {
    return new PasswordGenerator().check(password);
}
exports.checkPotd = checkPotd;
var PasswordGenerator = (function () {
    function PasswordGenerator() {
    }
    PasswordGenerator.prototype.generate = function (date) {
        // Get the current date as a YYYYMMDD string
        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth() + 1).toString(); // getMonth() is zero-based
        var dd = date.getDate().toString();
        var plain = "" + yyyy + mm + dd;
        // Using AES CTR with 32 byte key and iv ensures the encrypted string is not too long
        // See http://stackoverflow.com/a/13298019/1077279
        var key = CryptoJS.enc.Hex.parse('108c786594543687891374723e809ec5e475a8361f7ad82df04e91ba2c139321');
        // Use a different initialization vector each time by using the date as part of the vector
        var iv = CryptoJS.enc.Hex.parse(plain + '3a8fe4440be1e113a271574f379d70a76c3477aaff036d1e83fcd4b9');
        var options = { mode: CryptoJS.mode.CTR, padding: CryptoJS.pad.NoPadding, iv: iv };
        var encrypted = CryptoJS.AES.encrypt(plain, key, options);
        return encrypted.ciphertext.toString();
    };
    PasswordGenerator.prototype.check = function (password) {
        // check the value matches today's password of the day
        return password == this.generate(new Date());
    };
    return PasswordGenerator;
})();
exports.PasswordGenerator = PasswordGenerator;
