This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

'yarn next'              to simply start the app\
'yarn start'             to create the configs and then start the app\
'yarn createConfigs'     to create the configs\

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding assets and contracts

You can add new contracts and asset by adding:

contracts into this directory:   '/src/config/contracts/configs'\
assets into this directory:      '/src/config/contracts/configs/assets'\

Your config should be structured like this:

```
const CONTRACT_NAME: TContractConfig = createContractConfigData(CONTRACT_ABI, {
    [ENetworks.ETHEREUM_MAINNET]: '0x0',
    [ENetworks.ARBITRUM]: '0x0',
    [ENetworks.POLYGON]: '0x0',
    [ENetworks.OPTIMISM]: '0x0',
    ...
};
```

Afterwards, you will need to run 'yarn createConfigs' or 'yarn start' in order to create types and configs.
