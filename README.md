# Home Test

This repository contains automated tests related to Puppy Adoption site: https://spartantest-puppies.herokuapp.com/  

## Requirements

- Node.js are installed to your local system. Install at least v12.16.1 or higher.

## Usages

At the first, clone or download this repository. 

Then install dependencies:

```bash
$ npm install
```

This repository has `devDependencies` below:

- [WebdriverIO](http://webdriver.io/)
- [Cucumber](http://cucumber.io/)

Run the tests:

```bash
$ npm run wdio
```

## Test scenarios

- Adopt Brooke, add a Chewy Toy and a Travel Carrier, pay with Check
- Adopt Sparky, add a Collar & Leash, pay with Credit Card
- Adopt 2 Random Dogs add a Collar & Leash to each, pay with Credit Card
- Adopt 2 Random Dogs add a 3 Random Accessories to 1, pay with Credit Card