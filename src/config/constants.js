const config = require("./sstxconfig.json");

// Application constants + thin wrapper over the sstxconfig.json file
// Add application-wide constants here to prevent misconfiguration

export const APIURL = config.ENV === "prod" ? config.API_URL_PROD : config.API_URL_LOCAL;
export const ACTIVENET = config.ACTIVENET;
export const THRESHOLD_LEVEL_1 = config.THRESHOLD_LEVEL_1;
export const UNIT_LEVEL = config.UNIT_LEVEL;
export const REFRESH_DELAY = 60000;

// SilverStonks
export const TOKENADDRESS = ACTIVENET === "main" ? config.TOKEN_ADDRESS_MAINNET : config.TOKEN_ADDRESS_TESTNET;
export const TOKENABI = ACTIVENET === "main" ? config.TOKEN_ABI_MAINNET : config.TOKEN_ABI_TESTNET;

// NFT
export const NFTADDRESS = ACTIVENET === "main" ? config.NFT_ADDRESS_MAINNET : config.NFT_ADDRESS_TESTNET;
export const NFTABI = ACTIVENET === "main" ? config.NFT_ABI_MAINNET : config.NFT_ABI_TESTNET;


// BSSCAN
// export const BSSCAN_URL = ACTIVENET === "main" ? config.BSSCAN_URL_PROD : config.BSSCAN_URL_TESNET;
export const BSSCAN_URL =  config.BSSCAN_URL_PROD;  
export const BSSCAN_API_KEY = config.BSSCAN_API_KEY;

