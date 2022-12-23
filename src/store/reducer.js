import { createSlice, combineReducers, createAsyncThunk, isPending, isRejected, isFulfilled } from '@reduxjs/toolkit'
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import tokenABI from "../assets/abi/token.json";
import nftABI from "../assets/abi/nft.json";
import WalletConnect from "@walletconnect/web3-provider";
import { changeStep } from "./actions"
import Web3Modal from "web3modal";
import { Contract, ethers } from 'ethers';

const web3State = {
  loading: false,
  library: null,
  provider: null,
  signer: null,
  signerAddr: null,
  web3Modal: null,
  tokenContract: null,
  nftContract: null
}

const UIState = {
  step: -1
}

const persistConfig = {
  key: 'root',
  storage
};

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
    cacheProvider: true,
    providerOptions
  });

  const provider = await web3Modal.connect()
  const library = new ethers.providers.Web3Provider(provider)
  const signer = await library.getSigner();
  const signerAddr = await signer.getAddress()

  const tokenContract = new Contract("0x1ae8214401d64B509dD8C6Bb77D6834359D6f323", tokenABI, signer)
  const nftContract = new Contract("0x1ae8214401d64B509dD8C6Bb77D6834359D6f323", nftABI, signer)

  await tokenContract.attach("0x1ae8214401d64B509dD8C6Bb77D6834359D6f323");
  await nftContract.attach("0x1ae8214401d64B509dD8C6Bb77D6834359D6f323");

  return {
    web3Modal,
    provider,
    library,
    signer,
    signerAddr,

    tokenContract,
    nftContract,
  }
})

export const disconnectWallet = createAsyncThunk("web3/disconnect", async (_, { getState }) => {
  let { web3 } = getState();
  await web3.web3Modal?.clearCachedProvider();
})

export const web3slice = createSlice({
  name: "web3reducer",
  initialState: web3State,
  extraReducers: (builder) => {
    builder.addCase(connectWallet.fulfilled, (state, { payload }) => {
      console.log("Connect", payload);
      state.provider = payload.provider
      state.library = payload.library
      state.signer = payload.signer
      state.signerAddr = payload.signerAddr
      state.web3Modal = payload.web3Modal;
      state.tokenContract = payload.tokenContract;
      state.nftContract = payload.nftContract;
    })

    builder.addCase(disconnectWallet.fulfilled, (state) => {
      state.provider = null
      state.library = null
      state.signer = null
      state.signerAddr = null
      state.web3Modal = null
      state.tokenContract = null
      state.nftContract = null
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

export const uiSlice = createSlice({
  name: "UI",
  initialState: UIState,
  extraReducers: (builder) => {
    builder.addCase(changeStep, (state, { payload }) => {
      state.step = payload
    })
  }
})

export const rootReducer = combineReducers({
  web3: web3slice.reducer,
  ui: uiSlice.reducer,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer);

