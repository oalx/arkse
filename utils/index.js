require('./string');
require('./object');

module.exports = new function utils() {
    this.request = require('./request');
    this.errorEmbed = require('./errorEmbed');
}