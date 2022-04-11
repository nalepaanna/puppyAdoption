const Page = require('./page')

class MainPage extends Page {
  get puppiesNames () {
    return $('#content').$$('.name')
  }

  get viewDetailsButtons () {
    return $$('.rounded_button')
  }

  get confirmationNotice () {
    return $('#notice')
  }

  async getIndexOfGivenPuppyName (puppyName) {
    const puppiesNames = this.puppiesNames.map(async (element) => {
      return element.getText()
    })
    return puppiesNames.indexOf(puppyName)
  }

  async clickViewDetailsForRandomPuppy () {
    const puppyToClickIndex = this.generateRandomElementIndex(await this.viewDetailsButtons)
    await this.viewDetailsButtons[puppyToClickIndex].click()
  }

  async clickViewDetailForPuppyWithGivenName (puppyName) {
    const puppyToClickIndex = await this.getIndexOfGivenPuppyName(puppyName)
    await this.viewDetailsButtons[puppyToClickIndex].click()
  }

  async goToPageWithGivenNumber (number) {
    const string = `[aria-label="Page ${number}"]`
    await $(string).click()
  }
}

module.exports = new MainPage()
