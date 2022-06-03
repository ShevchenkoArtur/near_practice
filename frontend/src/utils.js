import getConfig from './config';
import {connect, Contract, keyStores, WalletConnection} from "near-api-js";

export const initContract = async () => {
    const nearConfig = await getConfig(process.env.NODE_ENV || 'testnet');

    const keyStore = new keyStores.BrowserLocalStorageKeyStore();

    const near = await connect({keyStore, ...nearConfig});

    const walletConnection = new WalletConnection(near);

    let currentUser;
    if (walletConnection.getAccountId()) {
        currentUser = {
          accountId: walletConnection.getAccountId(),
          balance: (await walletConnection.account().state()).amount
        };
    }

    const contract = await new Contract(walletConnection.account(), nearConfig.contractName, {
        viewMethods: ['getTodos'],
        changeMethods: ['create', 'getByIdAndUpdate']
    })

    return {contract, currentUser, nearConfig, walletConnection};
}
