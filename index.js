
const path = require("path");
module.exports = (options, context) => ({
    define() {
        return {
            labelText: options.labelText,
            size: options.size
        }
    },
    clientRootMixin: path.resolve(__dirname, "clientRootMixin.js")
})