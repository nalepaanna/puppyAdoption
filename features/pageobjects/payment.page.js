const Page = require('./page')

class PaymentPage extends Page {
  get nameInput () {
    return $('#order_name')
  }

  get addressInput () {
    return $('#order_address')
  }

  get emailInput () {
    return $('#order_email')
  }

  get paymentDropdown () {
    return $('#order_pay_type')
  }

  get placeOrderButton () {
    return $('.submit')
  }

  async fillOrderDetailsWithGivenPaymentMethod (paymentMethod) {
    await this.nameInput.setValue('test user')
    await this.addressInput.setValue('test address')
    await this.emailInput.setValue('test@test.pl')
    await this.paymentDropdown.click()
    await this.paymentDropdown.selectByVisibleText(paymentMethod)
    await this.paymentDropdown.click()
    await this.placeOrderButton.click()
  }
}

module.exports = new PaymentPage()
