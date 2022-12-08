import { createSlice, combineReducers, createAsyncThunk, isPending, isRejected, isFulfilled } from '@reduxjs/toolkit'
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { ethers } from 'ethers';

const web3State = {
  loading: false,
  library: null,
  provider: null,
  signer: null,
  signerAddr: null
}

export const connectWallet = createAsyncThunk("web3/connect", async () => {
  const providerOptions = {
    coinbasewallet: {
      package: CoinbaseWalletSDK, 
      options: {
        appName: "Loyalty",
        infuraId: "ab0cd2ee943b4b6c8c5f3e64e24548ff"
      }
    },
    walletconnect: {
      package: WalletConnect, 
      options: {
        infuraId: "ab0cd2ee943b4b6c8c5f3e64e24548ff"
      }
    }
  };

  const web3Modal = new Web3Modal({
    providerOptions
  });

  const provider = await web3Modal.connect()
  const library = new ethers.providers.Web3Provider(provider)
  const signer = await library.getSigner();
  const signerAddr = await signer.getAddress()

  return {
    provider,
    library,
    signer,
    signerAddr
  }
})

const web3slice = createSlice({
  name: "web3reducer",
  initialState: web3State,
  extraReducers: (builder) => {
    builder.addCase(connectWallet.fulfilled, (state, { payload }) => {
      console.log("Connect", payload);
      state.provider = payload.provider
      state.library = payload.library
      state.signer = payload.signer
      state.signerAddr = payload.signerAddr
    })

    builder.addMatcher(isPending, (state) => {
      state.loading = true
    })

    builder.addMatcher(isRejected, (state, { error }) => {
      console.log(error);
      state.loading = false
    })

    builder.addMatcher(isFulfilled, (state) => {
      state.loading = false
    })
  }
})

export const web3reducer = web3slice.reducer;

export const rootReducer = combineReducers({
  web3: web3reducer
})
