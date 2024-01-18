import { EContracts, EAssets } from './_types';
import CONTRACT_DAI_CONFIG from './assets/dai';
import CONTRACT_ETH_CONFIG from './assets/eth';
import CONTRACT_USDC_CONFIG from './assets/usdc';
import CONTRACT_USDT_CONFIG from './assets/usdt';
import CONTRACT_FOB_NFT_CONFIG from './fob';
import CONTRACT_MEMBERSHIP_NFT_CONFIG from './membership';
import CONTRACT_MINTER_CONFIG from './minter';
import { loadContractCfg } from '../_index';

export function initConfigs() {
    loadContractCfg(EAssets.DAI, CONTRACT_DAI_CONFIG);
    loadContractCfg(EAssets.ETH, CONTRACT_ETH_CONFIG);
    loadContractCfg(EAssets.USDC, CONTRACT_USDC_CONFIG);
    loadContractCfg(EAssets.USDT, CONTRACT_USDT_CONFIG);
    loadContractCfg(EContracts.FOB, CONTRACT_FOB_NFT_CONFIG);
    loadContractCfg(EContracts.MEMBERSHIP, CONTRACT_MEMBERSHIP_NFT_CONFIG);
    loadContractCfg(EContracts.MINTER, CONTRACT_MINTER_CONFIG);
}
