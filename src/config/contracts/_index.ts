import { EContracts, EAssets } from './_types';
import { loadContractConfig, loadAssetInfoConfig, createCGReverseAssetLookup } from '../utils';
import CONTRACT_DAI_CONFIG, { AssetInfo as DAI_INFO } from './addresses/assets/DAI';
import CONTRACT_ETH_CONFIG, { AssetInfo as ETH_INFO } from './addresses/assets/ETH';
import CONTRACT_MATIC_CONFIG, { AssetInfo as MATIC_INFO } from './addresses/assets/MATIC';
import CONTRACT_USDC_CONFIG, { AssetInfo as USDC_INFO } from './addresses/assets/USDC';
import CONTRACT_USDT_CONFIG, { AssetInfo as USDT_INFO } from './addresses/assets/USDT';
import CONTRACT_FOB_NFT_CONFIG from './addresses/fob';
import CONTRACT_MEMBERSHIP_NFT_CONFIG from './addresses/membership';
import CONTRACT_MINTER_CONFIG from './addresses/minter';
 
export function initConfigs(){
	loadContractConfig(EAssets.DAI, CONTRACT_DAI_CONFIG);
	loadAssetInfoConfig(EAssets.DAI, DAI_INFO)
 
	loadContractConfig(EAssets.ETH, CONTRACT_ETH_CONFIG);
	loadAssetInfoConfig(EAssets.ETH, ETH_INFO)
 
	loadContractConfig(EAssets.MATIC, CONTRACT_MATIC_CONFIG);
	loadAssetInfoConfig(EAssets.MATIC, MATIC_INFO)
 
	loadContractConfig(EAssets.USDC, CONTRACT_USDC_CONFIG);
	loadAssetInfoConfig(EAssets.USDC, USDC_INFO)
 
	loadContractConfig(EAssets.USDT, CONTRACT_USDT_CONFIG);
	loadAssetInfoConfig(EAssets.USDT, USDT_INFO)
 
	loadContractConfig(EContracts.FOB, CONTRACT_FOB_NFT_CONFIG);
	loadContractConfig(EContracts.MEMBERSHIP, CONTRACT_MEMBERSHIP_NFT_CONFIG);
	loadContractConfig(EContracts.MINTER, CONTRACT_MINTER_CONFIG);
 
	createCGReverseAssetLookup();
}