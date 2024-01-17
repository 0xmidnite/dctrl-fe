import { EContracts, EAssets } from './_types';
import { createContractCfg } from "../_index";
import CONTRACT_ASD_CONFIG from './asd';
import CONTRACT_DAI_CONFIG from './assets/dai';
import CONTRACT_ETH_CONFIG from './assets/eth';
import CONTRACT_USDC_CONFIG from './assets/usdc';
import CONTRACT_USDT_CONFIG from './assets/usdt';
import CONTRACT_FOB_NFT_CONFIG from './fob';
import CONTRACT_MEMBERSHIP_NFT_CONFIG from './membership';
import CONTRACT_MINTER_CONFIG from './minter';
 
createContractCfg(EContracts.ASD, CONTRACT_ASD_CONFIG);
createContractCfg(EAssets.DAI, CONTRACT_DAI_CONFIG);
createContractCfg(EAssets.ETH, CONTRACT_ETH_CONFIG);
createContractCfg(EAssets.USDC, CONTRACT_USDC_CONFIG);
createContractCfg(EAssets.USDT, CONTRACT_USDT_CONFIG);
createContractCfg(EContracts.FOB, CONTRACT_FOB_NFT_CONFIG);
createContractCfg(EContracts.MEMBERSHIP, CONTRACT_MEMBERSHIP_NFT_CONFIG);
createContractCfg(EContracts.MINTER, CONTRACT_MINTER_CONFIG);