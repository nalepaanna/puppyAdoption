const config = require('../../wdio.conf.js').config

module.exports = class Page {
  async goToBaseUrl () {
    return browser.url(config.baseUrl)
  }

  generateRandomElementIndex (elements) {
    const min = 0
    const max = elements.length
    return Math.floor(Math.random() * (max - min)) + min
  }
}
