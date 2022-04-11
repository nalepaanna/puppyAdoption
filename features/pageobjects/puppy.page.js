const Page = require('./page')

class PuppyDetailsPage extends Page {
  get adoptMeButton () {
    return $('[value="Adopt Me!"]')
  }

  async clickAdoptMeButton () {
    await this.adoptMeButton.click()
  }
}

module.exports = new PuppyDetailsPage()
