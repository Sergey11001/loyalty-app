import { createSlice, combineReducers, createAsyncThunk, isPending, isRejected, isFulfilled } from '@reduxjs/toolkit'
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import tokenABI from "../assets/abi/token.json";
import nftABI from "../assets/abi/nft.json";
import passABI from "../assets/abi/passId.json"
import WalletConnect from "@walletconnect/web3-provider";
import { changeStep } from "./actions"
import Web3Modal from "web3modal";
import first from "../assets/nft-list/1.png";
import { Contract, ethers } from 'ethers';
import picture from "../assets/collection_nft/1.png";
import _ from 'lodash';

const web3State = {
  loading: false,
  library: null,
  provider: null,
  signer: null,
  signerAddr: null,
  web3Modal: null,
  tokenContract: null,
  nftContract: null,
  passNftContract: null,
  marketPlace: null,
  selfID: null,
  balance: null,
  selfNfts: [],
  allNfts: [],
}

const UIState = {
  step: -1
}

const persistConfig = {
  key: 'root',
  storage
};

export const buyNft = createAsyncThunk("web3/buy-prof", async ({ id, price }, { getState }) => {
  const { web3 } = getState();

  const contract = web3.nftContract;
  const truePrice = ethers.utils.parseEther(price).toString();

  const tx = await contract.buyNFT(web3.signerAddr, id + 1, truePrice);
  await tx.wait();
})

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

  const tokenContract = new Contract("0x47962eadD72b930061ED4e9E1CA3a9039a1867DD", tokenABI, signer)
  const nftContract = new Contract("0x3859bbddf40510Ed13F159C19AC3285e7512b462", nftABI, signer)
  const passIdContract = new Contract("0x46DE7be1692B810695E916138f52b594C75ED4C6", passABI, signer);

  await tokenContract.attach("0x47962eadD72b930061ED4e9E1CA3a9039a1867DD");
  await nftContract.attach("0x3859bbddf40510Ed13F159C19AC3285e7512b462");
  await passIdContract.attach("0x46DE7be1692B810695E916138f52b594C75ED4C6")

  let balance = Number(await passIdContract.balanceOf(signerAddr));
  let passId;

  if (balance >= 1) {
    passId = Number(await passIdContract.getPassID(signerAddr));
  }

  let tokenBalance = Number(ethers.utils.formatEther(
    await tokenContract.balanceOf(signerAddr)
  ));

  let selfNfts = await Promise.all((await nftContract.getIdNFT(signerAddr)).map(async (id) => {
    const nftId = Number(id);
    const uri = await nftContract.tokenURI(id); // TODO: USE THIS
    return {
      id: nftId,
      name: "My NFT",
      uri: picture
    }
  }))

  const totalSupply = Number(await nftContract.totalSupply());
  
  let allNfts = await Promise.all(_.times(totalSupply).map(async (id) => {
    const price = ethers.utils.formatEther(await nftContract.getProductPrice(id));
    return {
      id,
      name: "#" + String(Number(id)).padStart(4, '0'),
      price,
      uri: first,
    }
  }));

  return {
    web3Modal,
    provider,
    library,
    signer,
    signerAddr,
    passIdContract,
    tokenContract,
    nftContract,
    passId,
    tokenBalance,
    selfNfts,
    allNfts,
  }
})

export const disconnectWallet = createAsyncThunk("web3/disconnect", async (_, { getState }) => {
  let { web3 } = getState();
  await web3.web3Modal?.clearCachedProvider();
})

export const mintMyPass = createAsyncThunk("web3/mint-pass", async (_, { getState }) => {
  const { web3 } = getState();

  const tx = await web3.passNftContract.freeMint()
  await tx.wait();
})

export const web3slice = createSlice({
  name: "web3reducer",
  initialState: web3State,
  reducers: {
    setSelfId: (state, { payload }) => {
      state.selfID = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(connectWallet.fulfilled, (state, { payload }) => {
      state.provider = payload.provider
      state.library = payload.library
      state.signer = payload.signer
      state.signerAddr = payload.signerAddr
      state.web3Modal = payload.web3Modal;
      state.tokenContract = payload.tokenContract;
      state.nftContract = payload.nftContract;
      state.passNftContract = payload.passIdContract;
      state.balance = payload.tokenBalance
      state.selfID = payload.passId;
      state.selfNfts = payload.selfNfts;
      state.allNfts = payload.allNfts;
    })

    builder.addCase(disconnectWallet.fulfilled, (state) => {
      state.provider = null
      state.library = null
      state.signer = null
      state.signerAddr = null
      state.web3Modal = null
      state.tokenContract = null
      state.nftContract = null
      state.passNftContract = null
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


export const {
  setSelfId
} = web3slice.actions;

export const rootReducer = combineReducers({
  web3: web3slice.reducer,
  ui: uiSlice.reducer,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer);

