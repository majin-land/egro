import { unitsUtils } from '@vechain/sdk-core';
import { create } from "zustand";

import { config } from "@egro/config-contract";

const balanceOfAbi = {
  "inputs": [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  "name": "balanceOf",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
}

interface useAccountState {
  account: string;
  balance: string;
  thor: any;
  setAccount: (account: string) => void;
  setBalance: (balance: string) => void;
  setThor: (thor: any) => void;
  fetchB3TRBalance: () => void;
}

export const useAccount = create<useAccountState>((set, get) => ({
  account: '',
  balance: '',
  thor: null,
  setAccount: (account) => set({ account }),
  setBalance: (balance) => set({ balance }),
  setThor: (thor) => set({ thor }),
  fetchB3TRBalance: async () => {
    const thor = get().thor
    const account = get().account
    if (!thor || !account) return
    const balanceOfMethod = thor.account(config.TOKEN_ADDRESS).method(balanceOfAbi)
    const response = await balanceOfMethod.call(account)
    set({ balance: unitsUtils.formatVET(response.data) })
  }
}));
