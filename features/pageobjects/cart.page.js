const Page = require('./page')

class CartPage extends Page {
  get price () {
    return $$('.item_price')
  }

  get completeAdoptionButton () {
    return $('[value="Complete the Adoption"]')
  }

  get adoptAnotherPuppyButton () {
    return $('[value="Adopt Another Puppy"]')
  }

  get collarLeashCheckboxes () {
    return $$('#collar')
  }

  get chewToyCheckboxes () {
    return $$('#toy')
  }

  get travelCarrierCheckboxes () {
    return $$('#carrier')
  }

  get firstVetVisitCheckboxes () {
    return $$('#vet')
  }

  async getIndexOfGivenPuppyName (puppyName) {
    const puppiesNames = this.price.map(async (element) => {
      const text = await element.previousElement().previousElement().getText()
      return text.slice(0, -1)
    })
    return puppiesNames.indexOf(puppyName)
  }

  async addGivenProductForPuppy (product, puppyName) {
    const puppyToClickIndex = await this.getIndexOfGivenPuppyName(puppyName)
    const checkboxes = await this.returnCheckboxesToClickBasedOnProductName(product)
    await checkboxes[puppyToClickIndex].click()
  }

  async addGivenProductForEachPuppy (product) {
    const checkboxes = await this.returnCheckboxesToClickBasedOnProductName(product)
    const numberOfPuppies = checkboxes.length

    for (let i = 0; i < numberOfPuppies; i++) {
      await checkboxes[i].click()
    }
  }

  async returnCheckboxesToClickBasedOnProductName (product) {
    let checkboxesToClick
    switch (product) {
      case 'Collar & Leash':
        checkboxesToClick = this.collarLeashCheckboxes
        break
      case 'Chew Toy':
        checkboxesToClick = this.chewToyCheckboxes
        break
      case 'Travel Carrier':
        checkboxesToClick = this.travelCarrierCheckboxes
        break
      case 'First Vet Visit':
        checkboxesToClick = this.firstVetVisitCheckboxes
        break
      default:
        break
    }
    return checkboxesToClick
  }

  async clickCompleteAdoptionButton () {
    await this.completeAdoptionButton.click()
  }

  async clickAdoptAnotherPuppyButton () {
    await this.adoptAnotherPuppyButton.click()
  }

  async addRandomProductsForPuppy (numberOfProducts, numberOfPuppy) {
    const products = ['Collar & Leash', 'Chew Toy', 'Travel Carrier', 'First Vet Visit']
    const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, numberOfProducts)

    const puppyIndex = numberOfPuppy - 1

    for (const element of randomProducts) {
      const checkboxes = await this.returnCheckboxesToClickBasedOnProductName(element)
      await checkboxes[puppyIndex].click()
    }
  }
}

module.exports = new CartPage()
