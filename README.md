# Student template

## Purpose of this repository

This is a project template for students participating in Software Testing course
at Tampere University.

The repository only contains the source code that is under testing, `package.json` skeleton
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.


# QUICK START GUIDE – Group 24 Testing Assignment (Part 2)

Step 1 – Clone the repo

git clone https://github.com/your-username/ecommerce-utils-testing.git
cd ecommerce-utils-testing

Step 2 – Install Node.js

Go to https://nodejs.org → download LTS version (v18 or v20)
Or use nvm: nvm install --lts && nvm use --lts

Step 3 – Install dependencies

npm install (in terminal of editor you use)

Step 4 – Run tests locally

npm test                  # runs Jest
npm run coverage          # runs c8 + Jest + opens HTML report

Step 5 – Start writing tests!

All tests go into the tests/ folder.
We need three clearly named describe blocks for add.js and isEmpty.js:

describe('add.js – Manual tests from Part 1 Test Plan', () => { ... })
describe('add.js – AI-generated tests', () => { ... })
describe('add.js – Additional exploratory tests', () => { ... })

Just open tests/add.test.js or tests/isEmpty.test.js and start typing.

Useful commands:

npm test -- --watch        # auto-rerun on file changes
npm run coverage           # generates ./coverage/lcov-report/index.html
git push                   # automatically triggers GitHub Actions + Coveralls