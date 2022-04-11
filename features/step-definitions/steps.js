const { Given, When, Then } = require('@wdio/cucumber-framework')

const MainPage = require('../pageobjects/main.page')
const PuppyDetailsPage = require('../pageobjects/puppy.page')
const CartPage = require('../pageobjects/cart.page')
const PaymentPage = require('../pageobjects/payment.page')

Given(/^Main page$/, async () => {
  await MainPage.goToBaseUrl()
})

When(/^I add random puppy to cart$/, async () => {
  await MainPage.clickViewDetailsForRandomPuppy()
  await PuppyDetailsPage.clickAdoptMeButton()
})

When(/^I add to cart "(.+)" puppy from "(.+)" page$/, async (puppyName, pageNumber) => {
  await MainPage.goToPageWithGivenNumber(pageNumber)
  await MainPage.clickViewDetailForPuppyWithGivenName(puppyName)
  await PuppyDetailsPage.clickAdoptMeButton()
})

When(/^I add to cart random puppy from "(.+)" page$/, async (pageNumber) => {
  await MainPage.goToPageWithGivenNumber(pageNumber)
  await MainPage.clickViewDetailsForRandomPuppy()
  await PuppyDetailsPage.clickAdoptMeButton()
})

When(/^I add "(.+)" product for "(.+)"$/, async (product, puppy) => {
  await CartPage.addGivenProductForPuppy(product, puppy)
})

When(/^I add "(.+)" product for each puppy$/, async (product) => {
  await CartPage.addGivenProductForEachPuppy(product)
})

When(/^I add "(.+)" random products for "(.+)" puppy$/, async (numberOfProducts, numberOfPuppy) => {
  await CartPage.addRandomProductsForPuppy(numberOfProducts, numberOfPuppy)
})

When(/^I click Adopt another puppy$/, async () => {
  await CartPage.clickAdoptAnotherPuppyButton()
})

When(/^I complete adoption with "(.+)" payment method$/, async (paymentMethod) => {
  await CartPage.clickCompleteAdoptionButton()
  await PaymentPage.fillOrderDetailsWithGivenPaymentMethod(paymentMethod)
})

Then(/^I should see confirmation notice$/, async () => {
  await expect(MainPage.confirmationNotice).toBeExisting()
})
