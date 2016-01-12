var Generator = (function () {
    function Generator() {
    }
    Generator.prototype.generate = function (date) {
        // simple password for now...
        return "Password";
    };
    Generator.prototype.check = function (password) {
        var today = new Date();
        var generator = new Generator();
        return password == generator.generate(today);
    };
    return Generator;
})();
exports.Generator = Generator;
