# Playwright Automation Framework - SauceDemo

## Project Overview
Automation framework built using **Playwright with JavaScript** for testing SauceDemo (https://www.saucedemo.com).

## Framework Features
- **Page Object Model (POM)** - Part 03
- **Data-Driven Testing with JSON** - Part 02
- **Allure Reporting** - Part 04
- **Hooks (Setup & Teardown)** - Part 05
- **Auto Screenshots**
- **Step-level Reporting***

## Project Structure
```
PlaywrightAutomation/
├── tests/
│   ├── example.spec.js
│   └── login.spec.js (40 tests)
├── pages/
│   ├── BasePage.js
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── fixtures/
│   └── testSetup.js
├── utilities/
│   ├── screenshot.js
│   └── config.js
├── testdata/
│   └── loginData.json
├── playwright.config.js
├── package.json
└── README.md
```

## Setup Instructions

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Install Allure Command Line
npm install -g allure-commandline --save-dev
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run with browser visible (headed)
npx playwright test --headed

# Run specific file
npx playwright test tests/login.spec.js --project=chromium --headed
```

## Generating Reports

```bash
# HTML Report
npx playwright test
npx playwright show-report

# Allure Report
npx playwright test
allure generate allure-results --clean -o allure-report
allure open allure-report
```

## 40 Test Cases

| Suite | Count |
|-------|-------|
| Login Tests | 15 |
| Product Tests | 10 |
| Cart Tests | 7 |
| Checkout Tests | 6 |
| E2E & Logout | 2 |
| **Total** | **40** |

## Technologies
- Playwright v1.52.0
- JavaScript (ES Modules)
- Allure Reporting
- Node.js
