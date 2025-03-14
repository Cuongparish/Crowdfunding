# Crowdfunding Contract

## Owner information
-   Group name: 3
-   University: University of Science - VNUHCM

| Student Name     | Student ID | Email                         |
| ---------------- | ---------- | ----------------------------- |
| Nguyễn Đức Tiến  | 20120383   | 20120383@student.hcmus.edu.vn |
| Trịnh Quốc Cường | 20120447   | 20120447@student.hcmus.edu.vn |
| Viên Hải Yến     | 20120633   | 20120633@student.hcmus.edu.vn |
| Lê Minh Trí      | 20120634   | 20120634@student.hcmus.edu.vn |

## Getting Started

Create a project using this example:

```bash
npx thirdweb create --contract --template hardhat-javascript-starter
```

You can start editing the page by modifying `contracts/Contract.sol`.

To add functionality to your contracts, you can use the `@thirdweb-dev/contracts` package which provides base contracts and extensions to inherit. The package is already installed with this project. Head to our [Contracts Extensions Docs](https://portal.thirdweb.com/contractkit) to learn more.

## Building the project

After any changes to the contract, run:

```bash
npm run build
# or
yarn build
```

to compile your contracts. This will also detect the [Contracts Extensions Docs](https://portal.thirdweb.com/contractkit) detected on your contract.

## Deploying Contracts

When you're ready to deploy your contracts, just run one of the following command to deploy you're contracts:

```bash
npm run deploy
# or
yarn deploy
```

## Releasing Contracts

If you want to release a version of your contracts publicly, you can use one of the followings command:

```bash
npm run release
# or
yarn release
```

## Build and deploy on local
- Run a local chain by using this command:
    ```bash
    npm run local-chain
    ```
- Create `.env` following `.env.template`:
- Then deploy by using this command:
    ```bash
    npm run deploy
    ```
- If it requires an API KEY, go to [thirdweb](https://thirdweb.com/dashboard), login with your MetaMask wallet and then create an API KEY for your own.
