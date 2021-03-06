import config from '../../../config/index.js'
import {
  NAME,
  SYMBOL,
  DECIMALS,
  EXCHANGE_ADDRESS,
  REDEEM_MAX_NUM,
  REDEEM_MIN_NUM,
  FEE,
  MAXFEE,
  MINFEE,
  ISSWITCH,
  ISDEPOSIT,
  ISREDEEM,
  DEPOSIT_ADDRESS,
  DEPOSIT_TYPE,
  DEPOSIT_MAX_NUM,
  DEPOSIT_MIN_NUM,
  EXTENDOBJ,
} from '../methods/mode'
import {dirSwitch} from '../methods/common'

export default {
  56: {
    '0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa': { // ANY
      [NAME]: 'Anyswap' + config.suffix,
      [SYMBOL]: 'ANY',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x095418a82bc2439703b69fbe1210824f2247d77c',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 10,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x94e840798e333cB1974E086B58c10C374E966bc7',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {
        BRIDGE: [
          { type: 32659, isSwitch: 1 }
        ],
        VERSION: 'V1'
      },
    },
    '0x4028433877f9c14764eb93d0bb6570573da2726f': { // CYC
      [NAME]: 'CYCoin',
      [SYMBOL]: 'CYC',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x0df8810714dde679107c01503e200ce300d0dcf6',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 5,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 100000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c': { // BTCB
      [NAME]: 'Binance-Peg Bitcoin',
      [SYMBOL]: 'BTCB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xb63d5b98fa56c1a2e3b4ec7c41e38b2cf7d6dc12',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 5,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 100000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0x54261774905f3e6e9718f2abb10ed6555cae308a': { // BTC
      [NAME]: 'Bitcoin' + config.suffix,
      [SYMBOL]: 'anyBTC',
      [DECIMALS]: 8,
      [EXCHANGE_ADDRESS]: '0x0945b2ae9fefa0c3183d810378d94af065d5f28b',
      [REDEEM_MAX_NUM]: 20,
      [REDEEM_MIN_NUM]: 0.002,
      [FEE]: 0.001,
      [MAXFEE]: 0.01,
      [MINFEE]: 0.001,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '1MECwqonAq9UDKN838vnBuqsUCWpWyB1pN',
      [DEPOSIT_TYPE]: 0,
      [DEPOSIT_MAX_NUM]: 20,
      [DEPOSIT_MIN_NUM]: 0.0005,
      [EXTENDOBJ]:  {
        VERSION: 'V2'
      }
    },
    '0x2170ed0880ac9a755fd29b2688956bd959f933f8': { // ETH-BEP20
      [NAME]: 'Binance-Peg Ethereum',
      [SYMBOL]: 'ETHB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xad2c1d2a9a599eef950f5baf6830d68e2be34d38',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 5,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 100000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0x6f817a0ce8f7640add3bc0c1c2298635043c2423': { // ETH
      [NAME]: 'Ethereum' + config.suffix,
      [SYMBOL]: 'anyETH',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xbc2910dee5e78dbefa6579fc6b56bab2b7c8ffbf',
      [REDEEM_MAX_NUM]: 1000,
      [REDEEM_MIN_NUM]: 0.05,
      [FEE]: 0.001,
      [MAXFEE]: 0.1,
      [MINFEE]: 0.008,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x13B432914A996b0A48695dF9B2d701edA45FF264',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 1000,
      [DEPOSIT_MIN_NUM]: 0.01,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0x55d398326f99059ff775485246999027b3197955': { // USDT-BEP20
      [NAME]: 'Binance-Peg Tether',
      [SYMBOL]: 'USDTB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x83034714666b0eb2209aafc1b1cbb2ab9c6100db',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 5,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 100000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0xb46d67fb63770052a07d5b7c14ed858a8c90f825': { // USDT-ERC20
      [NAME]: 'Tether' + config.suffix,
      [SYMBOL]: 'anyUSDT',
      [DECIMALS]: 6,
      [EXCHANGE_ADDRESS]: '0xfd942fcfacb5fbdcb19d1263e1c329379da9a98f',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 20,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x13B432914A996b0A48695dF9B2d701edA45FF264',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0x4f6318e97011fe21fdfce3ffcf868d44e5f6994a': { // FSN
      [NAME]: 'Fusion' + config.suffix,
      [SYMBOL]: 'anyFSN',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xa4c40c9743039d3836e5dafe62e84d274349d802',
      [REDEEM_MAX_NUM]: 500000,
      [REDEEM_MIN_NUM]: 40,
      [FEE]: 0.001,
      [MAXFEE]: 200,
      [MINFEE]: 20,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0xf38C36bc1B2Fe5E9029C91AB520457bE7DFC68D8',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 500000,
      [DEPOSIT_MIN_NUM]: 1,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 32659, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0x2cd598b0513abdb52bdd92a1ab4670fc4578570f': { // LTC 5
      [NAME]: 'Litecoin' + config.suffix,
      [SYMBOL]: 'anyLTC',
      [DECIMALS]: 8,
      [EXCHANGE_ADDRESS]: '0x752c3B1F58BD17761295061BB135b7E588483b58',
      [REDEEM_MAX_NUM]: 20000,
      [REDEEM_MIN_NUM]: 0.2,
      [FEE]: 0.001,
      [MAXFEE]: 0.5,
      [MINFEE]: 0.07,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: 'Lf2GpJmz2FZM1xW5V8xo1ZvA3Rh7ZX51iQ',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 20000,
      [DEPOSIT_MIN_NUM]: 0.1,
      [EXTENDOBJ]: {
        VERSION: 'V2'
      },
    },
    '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd': { // LINKB 6
      [NAME]: 'Binance-Peg Chainlink',
      [SYMBOL]: 'LINKB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x51B04C7D7144b6e72EbaBD23ea368Af4f8fa7aaE',
      [REDEEM_MAX_NUM]: 20000,
      [REDEEM_MIN_NUM]: 2,
      [FEE]: 0.001,
      [MAXFEE]: 5,
      [MINFEE]: 0.5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 20000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]:  {}
    },
    '0x3af577f9d8c86ae8dbcbf51fe9836c9df825759d': { // LINK 6
      [NAME]: 'Chainlink' + config.suffix,
      [SYMBOL]: 'anyLINK',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x7868b674fCeB31c8d29f1606eA60D51cc442188B',
      [REDEEM_MAX_NUM]: 20000,
      [REDEEM_MIN_NUM]: 2,
      [FEE]: 0.001,
      [MAXFEE]: 5,
      [MINFEE]: 0.5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x13B432914A996b0A48695dF9B2d701edA45FF264',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 20000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d': { // USDCB 23
      [NAME]: 'Binance-Peg USD Coin',
      [SYMBOL]: 'USDCB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x04e952411aD37F50ea2f4F1cFC38619A9D7EE845',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 20,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]:  {}
    },
    '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3': { // DAIB 23
      [NAME]: 'Binance-Peg Dai',
      [SYMBOL]: 'DAIB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xB2078cB7cB7019F383b475ae1D7519C5132CfF3C',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 20,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]:  {}
    },
    '0x1dc56f2705ff2983f31fb5964cc3e19749a7cba7': { // DAI 23
      [NAME]: 'Dai' + config.suffix,
      [SYMBOL]: 'anyDAI',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x76BB67676B2c9a6f366Aa517b806ed0Fa317Aa46',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 20,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x13B432914A996b0A48695dF9B2d701edA45FF264',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0xe9e7cea3dedca5984780bafc599bd69add087d56': { // BUSD 28
      [NAME]: 'Binance-Peg BUSD',
      [SYMBOL]: 'BUSDB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x34358ff75d78652f1797ebd73e8f7afa92dab501',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 10,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0xbf5140a22578168fd562dccf235e5d43a02ce9b1': { // UNIB
      [NAME]: 'Binance-Peg Uniswap',
      [SYMBOL]: 'UNIB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x3D021164741c7d84e11d9B7210C5e0d4E7C1d1d2',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 10,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 4,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]:  {}
    },
    '0x99c5a2fcc97b59fe6d0b56e21e72b002f644123f': { // UNI
      [NAME]: 'Uniswap' + config.suffix,
      [SYMBOL]: 'anyUNI',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x2f9755c371C7f23AEcdF1C136D233b41cE3E0D55',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 10,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 4,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0xCc6140a667980fbA8bF650b4aEC4f6e7Aff3a37F',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V1'
      }
    },
    '0x2ede13880e11b19b7d6113a86ac7ac84ac651042': { // COMP 36
      [NAME]: 'Compound' + config.suffix,
      [SYMBOL]: 'anyCOMP',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x16cad2ca4FE9b42B9dE19F4DAd60003124472f30',
      [REDEEM_MAX_NUM]: 2000,
      [REDEEM_MIN_NUM]: 0.2,
      [FEE]: 0.001,
      [MAXFEE]: 0.5,
      [MINFEE]: 0.05,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x13B432914A996b0A48695dF9B2d701edA45FF264',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 2000,
      [DEPOSIT_MIN_NUM]: 0.05,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0xe6358c1d7a91915abba46d9855bd6418898fc091': { // OMG 37
      [NAME]: 'OMG' + config.suffix,
      [SYMBOL]: 'anyOMG',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xD5556F7F0088915B651F6A9d68Bb0670c7D80554',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 8,
      [FEE]: 0.001,
      [MAXFEE]: 20,
      [MINFEE]: 2,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x13B432914A996b0A48695dF9B2d701edA45FF264',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 100000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e': { // YFIB 40
      [NAME]: 'Binance-Peg yearn.finance',
      [SYMBOL]: 'YFIB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xAd99Dcfe10630925EBD22376573a5Ee8721dCf2D',
      [REDEEM_MAX_NUM]: 20,
      [REDEEM_MIN_NUM]: 0.002,
      [FEE]: 0.001,
      [MAXFEE]: 0.01,
      [MINFEE]: 0.001,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 20,
      [DEPOSIT_MIN_NUM]: 0.0005,
      [EXTENDOBJ]:  {}
    },
    '0x9883ae441105f815b472517389b979f031b5c87e': { // YFI 40
      [NAME]: 'yearn.finance' + config.suffix,
      [SYMBOL]: 'anyYFI',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xB2A16966fD1aA09D4F50AB371873f17ab4A86F42',
      [REDEEM_MAX_NUM]: 20,
      [REDEEM_MIN_NUM]: 0.002,
      [FEE]: 0.001,
      [MAXFEE]: 0.01,
      [MINFEE]: 0.001,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x13B432914A996b0A48695dF9B2d701edA45FF264',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 20,
      [DEPOSIT_MIN_NUM]: 0.0005,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0x4b0f1812e5df2a09796481ff14017e6005508003': { // TWT
      [NAME]: 'Binance-Peg Trust Wallet',
      [SYMBOL]: 'TWTB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x7320091690010162E91A098863bD530fEEdC3522',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 10,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82': { // Cake
      [NAME]: 'Binance-Peg PancakeSwap',
      [SYMBOL]: 'CakeB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x4D00CC3B309170888AE2bc43859f4c4dc5143711',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 10,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888': { // CREAM
      [NAME]: 'Binance-Peg Cream',
      [SYMBOL]: 'CREAMB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xe29331A26881FFc6127c8B22dB19Ea6e960943f1',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 10,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0xae9269f27437f0fcbc232d39ec814844a51d6b8f': { // BURGER
      [NAME]: 'Binance-Peg Burger',
      [SYMBOL]: 'BURGERB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x2296c4a9186b823db1612e831808536ed451cbbe',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 5,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 100000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0xe4ae305ebe1abe663f261bc00534067c80ad677c': { // SPARTAN
      [NAME]: 'Binance-Peg SPARTAN',
      [SYMBOL]: 'SPARTANB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xd1D0C2f4291F7002E1591d2a87975f0701a3fa2C',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 5,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 100000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0x658a109c5900bc6d2357c87549b651670e5b0539': { // FOR
      [NAME]: 'Binance-Peg Force',
      [SYMBOL]: 'FORB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x1d396c3fC33A44e106665fc45cA39B3042120241',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 10,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0xe02df9e3e622debdd69fb838bb799e3f168902c5': { // BAKE
      [NAME]: 'Binance-Peg Bakery',
      [SYMBOL]: 'BAKEB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x90C8EA8ec7710034274868971C4e27edE33d9c10',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 10,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0xacd6b5f76db153fb45eae6d5be5bdbd45d1b2a8c': { // PEACH
      [NAME]: 'Binance-Peg Peach',
      [SYMBOL]: 'PEACHB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xdcb18e3230605a4c5ee6fb86031eefa8ecd63430',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 5,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 100000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0x8e9f5173e16ff93f81579d73a7f9723324d6b6af': { // MILK
      [NAME]: 'Binance-Peg Milk',
      [SYMBOL]: 'MILKB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xbd1f974bc2730e9620d91924993d30c2f96983b8',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 5,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 100000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0x40929fb2008c830731a3d972950bc13f70161c75': { // TUNA
      [NAME]: 'Binance-Peg Tuna',
      [SYMBOL]: 'TUNAB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x4F171A4aEcbfcEc6467464DA7401F88dED8C891C',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 10,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5': { // PROM
      [NAME]: 'Binance-Peg Prometeus',
      [SYMBOL]: 'PROMB',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xfeBc57bBA705C6142Cc4586F1aC6A96ce88047Be',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 10,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0x5921dee8556c4593eefcfad3ca5e2f618606483b': { // MTLX
      [NAME]: 'Mettalex' + config.suffix,
      [SYMBOL]: 'anyMTLX',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xca8bdc88ba75a62273cbcba42e34e41f97cb7dac',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 10,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 3,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x13B432914A996b0A48695dF9B2d701edA45FF264',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 100000,
      [DEPOSIT_MIN_NUM]: 1,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d': { // SUPER 6
      [NAME]: 'SuperFarm' + config.suffix,
      [SYMBOL]: 'SUPER',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x0e0ffdb7f4ec8d73d69c216aad4d21304f43a80d',
      [REDEEM_MAX_NUM]: 200000,
      [REDEEM_MIN_NUM]: 20,
      [FEE]: 0.001,
      [MAXFEE]: 100,
      [MINFEE]: 10,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x13B432914A996b0A48695dF9B2d701edA45FF264',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 200000,
      [DEPOSIT_MIN_NUM]: 10,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0x232d9a35f3e0bfa1b34901cba525fe916d2af6d5': { // HT 6
      [NAME]: 'Huobi' + config.suffix,
      [SYMBOL]: 'HT',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x993ba9ec0ed8b2011e281dac9be0b1b43cda9be2',
      [REDEEM_MAX_NUM]: 75000,
      [REDEEM_MIN_NUM]: 1,
      [FEE]: 0.001,
      [MAXFEE]: 4,
      [MINFEE]: 0.4,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x0FD4E376C6C125C276D4020EFc1842a495cb1cF3',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 75000,
      [DEPOSIT_MIN_NUM]: 1,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 128, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    'XRP': { // XRP
      [NAME]: 'ANY XRP',
      [SYMBOL]: config.prefix + 'XRP',
      [DECIMALS]: 6,
      [EXCHANGE_ADDRESS]: 'XRP',
      [REDEEM_MAX_NUM]: 100,
      [REDEEM_MIN_NUM]: 0.00001,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(1),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 0,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {},
    },

    
    '0xc0a51ac9d548bdcde53fa59448029e41a39feb20': { // XRT
      [NAME]: 'Robonomics' + config.suffix,
      [SYMBOL]: 'XRT',
      [DECIMALS]: 9,
      [EXCHANGE_ADDRESS]: '0x5dc8196dc5fca66b04d68f2c22ca60651bd411e8',
      [REDEEM_MAX_NUM]: 36000,
      [REDEEM_MIN_NUM]: 1.08,
      [FEE]: 0.001,
      [MAXFEE]: 5.4,
      [MINFEE]: 0.54,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x533e3c0e6b48010873B947bddC4721b1bDFF9648',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 36000,
      [DEPOSIT_MIN_NUM]: 1.08,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0x976e33b07565b0c05b08b2e13affd3113e3d178d': { // AGA
      [NAME]: 'AGA' + config.suffix,
      [SYMBOL]: 'AGA',
      [DECIMALS]: 4,
      [EXCHANGE_ADDRESS]: '0x3ea75938ed7d68c0e3f4aa6eca391c400df80316',
      [REDEEM_MAX_NUM]: 560000,
      [REDEEM_MIN_NUM]: 16.8,
      [FEE]: 0.001,
      [MAXFEE]: 84,
      [MINFEE]: 8.4,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x533e3c0e6b48010873B947bddC4721b1bDFF9648',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 560000,
      [DEPOSIT_MIN_NUM]: 16.8,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e': { // KEX
      [NAME]: 'KIRA' + config.suffix,
      [SYMBOL]: 'KEX',
      [DECIMALS]: 6,
      [EXCHANGE_ADDRESS]: '0xa5bb87616045854d40c3462925c601acb61ef6ae',
      [REDEEM_MAX_NUM]: 750000,
      [REDEEM_MIN_NUM]: 24,
      [FEE]: 0.001,
      [MAXFEE]: 120,
      [MINFEE]: 12,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x533e3c0e6b48010873B947bddC4721b1bDFF9648',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 750000,
      [DEPOSIT_MIN_NUM]: 24,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0xf5c8054efc6acd25f31a17963462b90e82fdecad': { // MDA
      [NAME]: 'Moeda Loyalty Points' + config.suffix,
      [SYMBOL]: 'MDA',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x6a35d901def514fdfc69c065799567a5a6a91e61',
      [REDEEM_MAX_NUM]: 1080000,
      [REDEEM_MIN_NUM]: 32,
      [FEE]: 0.001,
      [MAXFEE]: 160,
      [MINFEE]: 16,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x533e3c0e6b48010873B947bddC4721b1bDFF9648',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 1080000,
      [DEPOSIT_MIN_NUM]: 32,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0x8ad96050318043166114884b59e2fc82210273b3': { // NEX
      [NAME]: 'Nash Exchange' + config.suffix,
      [SYMBOL]: 'NEX',
      [DECIMALS]: 8,
      [EXCHANGE_ADDRESS]: '0x165ffa2df471f44bd1b9c9edf60f1e239bcd663a',
      [REDEEM_MAX_NUM]: 786000,
      [REDEEM_MIN_NUM]: 24,
      [FEE]: 0.001,
      [MAXFEE]: 120,
      [MINFEE]: 12,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x533e3c0e6b48010873B947bddC4721b1bDFF9648',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 786000,
      [DEPOSIT_MIN_NUM]: 24,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0x18ac7323615f1fabf332ff4afca735eaf6dd9668': { // SOAR
      [NAME]: 'SOAR.FI' + config.suffix,
      [SYMBOL]: 'SOAR',
      [DECIMALS]: 9,
      [EXCHANGE_ADDRESS]: '0xd33e666e653aee88648ae41872317f7e1e7d0611',
      [REDEEM_MAX_NUM]: 1520000,
      [REDEEM_MIN_NUM]: 46,
      [FEE]: 0.001,
      [MAXFEE]: 230,
      [MINFEE]: 23,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x533e3c0e6b48010873B947bddC4721b1bDFF9648',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 1520000,
      [DEPOSIT_MIN_NUM]: 46,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0x04068da6c83afcfa0e13ba15a6696662335d5b75': { // STAKE
      [NAME]: 'STAKE' + config.suffix,
      [SYMBOL]: 'STAKE',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xc998b9f67bdda3ea0aa644242dfa33432f0c0d2e',
      [REDEEM_MAX_NUM]: 46000,
      [REDEEM_MIN_NUM]: 1.4,
      [FEE]: 0.001,
      [MAXFEE]: 7,
      [MINFEE]: 0.7,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x533e3c0e6b48010873B947bddC4721b1bDFF9648',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 46000,
      [DEPOSIT_MIN_NUM]: 1.4,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },
    '0xb614ad939e9477d5103baa32164db901214e2625': { // TFT
      [NAME]: 'The Famous' + config.suffix,
      [SYMBOL]: 'TFT',
      [DECIMALS]: 8,
      [EXCHANGE_ADDRESS]: '0xd6ff112faa54962e574ed4e59854835ffad7f714',
      [REDEEM_MAX_NUM]: 25000,
      [REDEEM_MIN_NUM]: 0.8,
      [FEE]: 0.001,
      [MAXFEE]: 4,
      [MINFEE]: 0.4,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x533e3c0e6b48010873B947bddC4721b1bDFF9648',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 25000,
      [DEPOSIT_MIN_NUM]: 0.8,
      [EXTENDOBJ]:  {
        BRIDGE: [
          { type: 1, isSwitch: 1 }
        ],
        VERSION: 'V2'
      }
    },

  },
  97: {
    '0x29D827A5a08D50bD6f64bA135bCFE2C5d1108711': { // USDT
      [NAME]: 'ANY Tether',
      [SYMBOL]: config.prefix + 'USDT',
      [DECIMALS]: 6,
      [EXCHANGE_ADDRESS]: '0xb116c4df54e5928ca0dca2dba712b875e114c5ba',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 5,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x94e840798e333cB1974E086B58c10C374E966bc7',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 100000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0x4ce47351aeafbd81f9888187288996fe0322ffa2': { // ANY
      [NAME]: 'Anyswap',
      [SYMBOL]: 'ANY',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x92fa2adedc403f49a8c50493e5cb21a72dfa3ca2',
      [REDEEM_MAX_NUM]: 1000000,
      [REDEEM_MIN_NUM]: 0.1,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x609F57C29faDDc455a966F6fadD958c681893Aff',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {},
    },
    '0xa5a3c93776ba2e1a78c79e88a2cb5abab2a0097f': { // FOOD
      [NAME]: 'ANY FoodToken',
      [SYMBOL]: config.prefix + 'FOOD',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x11f836dcdc61bf92f38f98565dcb6573337d6a5f',
      [REDEEM_MAX_NUM]: 100000,
      [REDEEM_MIN_NUM]: 5,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 5,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x94e840798e333cB1974E086B58c10C374E966bc7',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 100000,
      [DEPOSIT_MIN_NUM]: 0.5,
      [EXTENDOBJ]: {},
    },
    '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867': { // DAI
      [NAME]: 'ANY Dai',
      [SYMBOL]: config.prefix + 'DAI',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x4a5bbc9c05ba36409bf2c7b06ac6c6baa1da3969',
      [REDEEM_MAX_NUM]: 1000,
      [REDEEM_MIN_NUM]: 0.05,
      [FEE]: 0.001,
      [MAXFEE]: 0.1,
      [MINFEE]: 0.005,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0xCc6140a667980fbA8bF650b4aEC4f6e7Aff3a37F',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 1000,
      [DEPOSIT_MIN_NUM]: 0.01,
      [EXTENDOBJ]: {},
    },
    '0xd66c6b4f0be8ce5b39d52e0fd1344c389929b378': { // ETH
      [NAME]: 'ANY Ethereum',
      [SYMBOL]: config.prefix + 'ETH',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x7a7cffa0927d3c7f1cf779d6bd19e98a892b87e3',
      [REDEEM_MAX_NUM]: 1000,
      [REDEEM_MIN_NUM]: 0.05,
      [FEE]: 0.001,
      [MAXFEE]: 0.1,
      [MINFEE]: 0.005,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0xCc6140a667980fbA8bF650b4aEC4f6e7Aff3a37F',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 1000,
      [DEPOSIT_MIN_NUM]: 0.01,
      [EXTENDOBJ]: {},
    },
    'BTC': { // BTC
      [NAME]: 'ANY Bitcoin',
      [SYMBOL]: config.prefix + 'BTC',
      [DECIMALS]: 8,
      [EXCHANGE_ADDRESS]: config.prefix + 'BTC',
      [REDEEM_MAX_NUM]: 100,
      [REDEEM_MIN_NUM]: 0.00001,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(1),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 0,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {},
    },
    'XRP': { // XRP
      [NAME]: 'ANY XRP',
      [SYMBOL]: config.prefix + 'XRP',
      [DECIMALS]: 6,
      [EXCHANGE_ADDRESS]: 'XRP',
      [REDEEM_MAX_NUM]: 100,
      [REDEEM_MIN_NUM]: 0.00001,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(1),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 0,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {},
    },
  },
}