interface Token {
  id: number;
  chainId: number;
  title: string;
  icon: string;
  subtitle?: string;
  address?: string;
  coin: string;
}

interface Tokens {
  Ethereum: Token[];
  'Polygon PoS': Token[];
  'Binance Smart Chain': Token[];
}

const tokenList: Tokens = {
  Ethereum: [
    {
      id: 1,
      chainId: 1,
      title: 'ETH',
      subtitle: 'Ether',
      icon: 'eth',
      coin: 'ethereum',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    },
    {
      id: 2,
      chainId: 1,
      title: 'USDC',
      subtitle: 'USD Coin',
      icon: 'usdc',
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      coin: 'usd-coin',
    },
    {
      id: 3,
      chainId: 1,
      title: 'USDT',
      subtitle: 'Tether',
      icon: 'usdt',
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      coin: 'tether',
    },
    {
      id: 4,
      chainId: 1,
      title: 'WETH',
      subtitle: 'Wrapped Ether',
      icon: 'weth',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      coin: 'weth',
    },
  ],
  'Polygon PoS': [
    {
      id: 1,
      chainId: 137,
      title: 'MATIC',
      subtitle: 'Polygon',
      icon: 'matic',
      address: '0x0000000000000000000000000000000000001010', // 0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
      coin: 'matic-network',
    },
    {
      id: 2,
      chainId: 137,
      title: 'USDC',
      subtitle: 'USD Coin',
      icon: 'usdc',
      address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      coin: 'usd-coin',
    },
    {
      id: 3,
      chainId: 137,
      title: 'USDT',
      subtitle: 'Tether',
      icon: 'usdt',
      address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      coin: 'tether',
    },
  ],
  'Binance Smart Chain': [
    {
      id: 1,
      chainId: 56,
      title: 'BNB',
      subtitle: 'Binance',
      icon: 'bnb',
      address: '0x0000000000000000000000000000000000001002',
      coin: 'binancecoin',
    },
    {
      id: 2,
      chainId: 56,
      title: 'BUSD',
      subtitle: 'Binance USD',
      icon: 'busd',
      address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      coin: 'binance-usd',
    },
    {
      id: 3,
      chainId: 56,
      title: 'USDT',
      subtitle: 'Tether',
      icon: 'usdt',
      coin: 'tether',
      address: '0x55d398326f99059ff775485246999027b3197955',
    },
    {
      id: 4,
      chainId: 56,
      title: 'WBNB',
      subtitle: 'Wrapped BNB',
      icon: 'wbnb',
      address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      coin: 'wbnb',
    },
  ],
};

const stackAddresses: any = {
  Ethereum: '0x56A86d648c435DC707c8405B78e2Ae8eB4E60Ba4',
  'Binance Smart Chain': '0x6855f7bb6287F94ddcC8915E37e73a3c9fEe5CF3',
  'Polygon PoS': '0x980111ae1B84E50222C8843e3A7a038F36Fecd2b',
};

export { tokenList, stackAddresses };
