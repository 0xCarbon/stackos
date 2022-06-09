const oneInchApiUrl = 'https://api.1inch.io/v4.0/';
const coinGeckoUrl = 'https://api.coingecko.com/api/v3/';

function apiRequestUrl(apiUrl: string, methodName: string, queryParams: any) {
  return `${apiUrl + methodName}?${new URLSearchParams(queryParams).toString()}`;
}

export const fetchSwapQuote = (payload: any, id: number) =>
  fetch(apiRequestUrl(oneInchApiUrl + id, '/quote', payload))
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });

export const fetchCoinPrice = (ids: string, vs_currencies: string) =>
  fetch(apiRequestUrl(coinGeckoUrl, '/simple/price', { ids, vs_currencies })).then((res) =>
    res.json()
  );

export const fetchAllowance = (tokenAddress: any, walletAddress: any, id: number) =>
  fetch(apiRequestUrl(oneInchApiUrl + id, '/approve/allowance', { tokenAddress, walletAddress }))
    .then((res) => res.json())
    .then((res) => res.allowance);

export const fetchTransactionApproval = (tokenAddress: any, amount: any, id: number) =>
  fetch(
    apiRequestUrl(
      oneInchApiUrl + id,
      '/approve/transaction',
      amount ? { tokenAddress, amount } : { tokenAddress }
    )
  ).then((res) => res.json());

export const createSwap = (payload: any, id: number) =>
  fetch(apiRequestUrl(oneInchApiUrl + id, '/swap', payload))
    .then((res) => res.json())
    .then((res) => res.tx);
