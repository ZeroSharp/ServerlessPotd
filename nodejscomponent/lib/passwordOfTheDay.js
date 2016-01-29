function checkPotd(password) {
    return new PasswordGenerator().check(password);
}
exports.checkPotd = checkPotd;
var PasswordGenerator = (function () {
    function PasswordGenerator() {
    }
    PasswordGenerator.prototype.generate = function (date) {
        // generate today's password
        return "Password";
    };
    PasswordGenerator.prototype.check = function (password) {
        // check the value matches today's password of the day
        return password == this.generate(new Date());
    };
    return PasswordGenerator;
})();
exports.PasswordGenerator = PasswordGenerator;
