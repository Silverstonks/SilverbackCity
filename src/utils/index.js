export function formatWalletAddress(walletAddress) {
    return walletAddress.substr(0, 6) + "..." + walletAddress.slice(-4);
}