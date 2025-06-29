import USDTContracts from '../contracts/USDTContracts.js';

export default {
   NCN_CEX: {
      token: 'NCN',
      buyExchange: [
         'Gate'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'NCN',
               address: '0xcc5d654b932a5b6c8a9554edca369b8de6a840bb',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 200, notificationThreshold: 2},
      ],
      Bridge: 'https://www.chainport.io/'
   },

   NCN_DEX: {
      token: 'NCN',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'NCN',
               address: '0xcc5d654b932a5b6c8a9554edca369b8de6a840bb',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Gate'
      ],
      buyAmounts: [
         {amount: 200, notificationThreshold: 2},
      ],
      Bridge: 'https://www.chainport.io/'
   },

   IRON_DEX: {
      token: 'IRON',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'IRON',
               address: '0x166e70941262AE7cBf9df5c8897A6242c546457d',
               decimals: 8
            }
         }
      ],
      sellExchange: [
         'Gate',
         'Mexc'
      ],
      buyAmounts: [
         {amount: 350, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 1.5},
         {amount: 1000, notificationThreshold: 2},
      ],
      Bridge: 'https://www.chainport.io/'
   },

   IRON_CEX: {
      token: 'IRON',
      buyExchange: [
         'Gate',
         'Mexc'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'IRON',
               address: '0x166e70941262AE7cBf9df5c8897A6242c546457d',
               decimals: 8
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 350, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 1.5},
         {amount: 1000, notificationThreshold: 2},
      ],
      Bridge: 'https://www.chainport.io/'
   },

   GALAXIS_CEX: {
      token: 'GALAXIS',
      buyExchange: [
         'Mexc',
         'Bybit'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Polygon',
            inputToken: {
               symbol: 'GALAXIS',
               address: '0x3C69d114664d48357d820Dbdd121a8071eAc99bf',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 350, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 1.5},
         {amount: 1000, notificationThreshold: 2},
      ],
      Bridge: 'https://wallet.polygon.technology/'
   },

   GALAXIS_DEX: {
      token: 'GALAXIS',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Polygon',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            },
            outputToken: {
               symbol: 'GALAXIS',
               address: '0x3C69d114664d48357d820Dbdd121a8071eAc99bf',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Bybit'
      ],
      buyAmounts: [
         {amount: 350, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 1.5},
         {amount: 1000, notificationThreshold: 2},
      ],
      Bridge: 'https://wallet.polygon.technology/'
   },

   MIX_DEX: {
      token: 'MIX',
      buyExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'MIX',
               address: '0xCF1B55D79E824da0Ae0652F96C66fe33263d743f',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Bybit'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 1}
      ]
   },

   MIX_CEX: {
      token: 'MIX',
      buyExchange: [
         'Bybit'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'MIX',
               address: '0xCF1B55D79E824da0Ae0652F96C66fe33263d743f',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 1}
      ]
   },

   SUKU_CEX: {
      token: 'SUKU',
      buyExchange: [
         'Mexc',
         'Kucoin'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Polygon',
            inputToken: {
               symbol: 'SUKU',
               address: '0x60Ea918FC64360269Da4efBDA11d8fC6514617C6',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2.5}
      ]
   },

   SUKU_DEX: {
      token: 'SUKU',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Polygon',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            },
            outputToken: {
               symbol: 'SUKU',
               address: '0x60Ea918FC64360269Da4efBDA11d8fC6514617C6',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2.5}
      ],
      Bridge: 'https://wallet.polygon.technology/'
   },

   SGT_DEX: {
      token: 'SGT',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Polygon',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            },
            outputToken: {
               symbol: 'SGT',
               address: '0x1ef5bB23e0b91c2E8480a4a2B71Feb4607cB32F1',
               decimals: 8
            }
         }
      ],
      sellExchange: [
         'Mexc'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5}
      ],
      Bridge: 'https://wallet.polygon.technology/'
   },

   SGT_CEX: {
      token: 'SGT',
      buyExchange: [
         'Mexc'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Polygon',
            inputToken: {
               symbol: 'SGT',
               address: '0x1ef5bB23e0b91c2E8480a4a2B71Feb4607cB32F1',
               decimals: 8
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5}
      ],
      Bridge: 'https://wallet.polygon.technology/'
   },

   BOSON_CEX: {
      token: 'BOSON',
      buyExchange: [
         'Kucoin',
         'Mexc',
         'Gate'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Polygon',
            inputToken: {
               symbol: 'BOSON',
               address: '0x9B3B0703D392321AD24338Ff1f846650437A43C9',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 350, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5}
      ],
      Bridge: 'https://wallet.polygon.technology/'
   },

   BOSON_DEX: {
      token: 'BOSON',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Polygon',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            },
            outputToken: {
               symbol: 'BOSON',
               address: '0x9B3B0703D392321AD24338Ff1f846650437A43C9',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Kucoin',
         'Mexc',
         'Gate'
      ],
      buyAmounts: [
         {amount: 350, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5}
      ],
      Bridge: 'https://wallet.polygon.technology/'
   },

   TRVL_DEX: {
      token: 'TRVL',
      buyExchange: [
         'Bybit'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'TRVL',
               address: '0x74aa9bB52B36a378a6E641B86d7acb76Dc9b3940',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 1000, notificationThreshold: 1.5},
         {amount: 1500, notificationThreshold: 1.5},
         {amount: 2000, notificationThreshold: 1.5}
      ],
      Bridge: 'https://trvl.com/bridge'
   },

   LMWR_DEX_BASE: {
      token: 'LMWR',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'LMWR',
               address: '0xe997017e0cb0ceb503565f181e9ea922cd979c35',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Bybit'
      ],
      buyAmounts: [
         {amount: 350, notificationThreshold: 2.5},
         {amount: 500, notificationThreshold: 1.5},
         {amount: 800, notificationThreshold: 1.25}
      ]
   },

   LMWR_CEX_BASE: {
      token: 'LMWR',
      buyExchange: [
         'Bybit'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'LMWR',
               address: '0xe997017e0cb0ceb503565f181e9ea922cd979c35',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 350, notificationThreshold: 2.5},
         {amount: 500, notificationThreshold: 1.5},
         {amount: 800, notificationThreshold: 1.25}
      ]
   },

   LMWR_CEX_BSC: {
      token: 'LMWR',
      buyExchange: [
         'Bybit'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'LMWR',
               address: '0x307Bc76E3d59ED73886A9cf9360a9286f6281ba7',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 350, notificationThreshold: 2.5},
         {amount: 500, notificationThreshold: 1.5},
         {amount: 800, notificationThreshold: 1.25}
      ]
   },

   LMWR_DEX_BSC: {
      token: 'LMWR',
      buyExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'LMWR',
               address: '0x307Bc76E3d59ED73886A9cf9360a9286f6281ba7',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Bybit'
      ],
      buyAmounts: [
         {amount: 350, notificationThreshold: 2.5},
         {amount: 500, notificationThreshold: 1.5},
         {amount: 800, notificationThreshold: 1.25}
      ]
   },

   HORD_DEX: {
      token: 'HORD',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Arbitrum',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Arbitrum.address,
               decimals: USDTContracts.Arbitrum.decimals
            },
            outputToken: {
               symbol: 'HORD',
               address: '0xB1bC21f748AE2bE95674876710bc6D78235480e0',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate'
      ],
      buyAmounts: [
         {amount: 400, notificationThreshold: 4},
         {amount: 500, notificationThreshold: 3},
         {amount: 800, notificationThreshold: 2},
      ],
      Bridge: 'https://www.chainport.io/'
   },

   HORD_CEX: {
      token: 'HORD',
      buyExchange: [
         'Mexc',
         'Gate'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Arbitrum',
            inputToken: {
               symbol: 'HORD',
               address: '0xB1bC21f748AE2bE95674876710bc6D78235480e0',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Arbitrum.address,
               decimals: USDTContracts.Arbitrum.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 400, notificationThreshold: 4},
         {amount: 500, notificationThreshold: 3},
         {amount: 800, notificationThreshold: 2},
      ],
      Bridge: 'https://www.chainport.io/'
   },

   OVR_CEX_BSC: {
      token: 'OVR',
      buyExchange: [
         'Gate'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'OVR',
               address: '0x7E35D0e9180bF3A1fc47b0d110bE7a21A10B41Fe',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 1000, notificationThreshold: 1.5},
         {amount: 1500, notificationThreshold: 1},
         {amount: 2000, notificationThreshold: 1},
      ],
      Bridge: 'https://marketplace.ovr.ai/buy-ovr'
   },

   OVR_DEX_BSC: {
      token: 'OVR',
      buyExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'OVR',
               address: '0x7E35D0e9180bF3A1fc47b0d110bE7a21A10B41Fe',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Gate'
      ],
      buyAmounts: [
         {amount: 1000, notificationThreshold: 1.5},
         {amount: 1500, notificationThreshold: 1},
         {amount: 2000, notificationThreshold: 1},
      ],
      Bridge: 'https://marketplace.ovr.ai/buy-ovr'
   },

   OVR_DEX_POL: {
      token: 'OVR',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Polygon',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            },
            outputToken: {
               symbol: 'OVR',
               address: '0x1631244689EC1fEcbDD22fb5916E920dFC9b8D30',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Gate'
      ],
      buyAmounts: [
         {amount: 1000, notificationThreshold: 1.5},
         {amount: 1500, notificationThreshold: 1},
         {amount: 2000, notificationThreshold: 1},
      ],
      Bridge: 'https://marketplace.ovr.ai/buy-ovr'
   },

   OVR_CEX_POL: {
      token: 'OVR',
      buyExchange: [
         'Gate'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Polygon',
            inputToken: {
               symbol: 'OVR',
               address: '0x1631244689EC1fEcbDD22fb5916E920dFC9b8D30',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 1000, notificationThreshold: 1.5},
         {amount: 1500, notificationThreshold: 1},
         {amount: 2000, notificationThreshold: 1},
      ],
      Bridge: 'https://marketplace.ovr.ai/buy-ovr'
   },

   GURU_DEX: {
      token: 'GURU',
      buyExchange: [
         'Mexc'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'GURU',
               address: '0x0f1cfd0bb452db90a3bfc0848349463010419ab2',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 1.5},
         {amount: 800, notificationThreshold: 1.5}
      ],
      Bridge: 'https://superbridge.app/'
   },

   CHO_CEX: {
      token: 'CHO',
      buyExchange: [
         'Mexc',
         'Gate',
         'Kucoin'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'CHO',
               address: '0x6cF8e39252Bee00D168Bd25BDf5834347D78e346',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 1.5},
         {amount: 800, notificationThreshold: 1.5}
      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   CHO_DEX: {
      token: 'CHO',
      buyExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'CHO',
               address: '0x6cF8e39252Bee00D168Bd25BDf5834347D78e346',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 1.5},
         {amount: 800, notificationThreshold: 1.5}
      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   FUSE_CEX: {
      token: 'FUSE',
      buyExchange: [
         'Mexc',
         'Gate',
         'Bitget'
      ],
      sellExchange: [
         {
            name: 'OpenOcean',
            network: 'bsc',
            inputToken: {
               symbol: 'FUSE',
               address: '0x5857c96dae9cf8511b08cb07f85753c472d36ea3',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 400, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2}
      ],
      Bridge: 'https://console.fuse.io/bridge'
   },

   FUSE_DEX: {
      token: 'FUSE',
      buyExchange: [
         {
            name: 'OpenOcean',
            network: 'bsc',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'FUSE',
               address: '0x5857c96dae9cf8511b08cb07f85753c472d36ea3',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'Bitget'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 400, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2}
      ],
      Bridge: 'https://console.fuse.io/bridge'
   },

   CHO_SOL_CEX: {
      token: 'CHO',
      buyExchange: [
         'Mexc',
         'Gate',
         'Kucoin'
      ],
      sellExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'CHO',
               address: '59McpTVgyGsSu5eQutvcKLFu7wrFe3ZkE2qdAi3HnvBn',
               decimals: 8
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 4},
         {amount: 400, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2.5}
      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   CHO_SOL_DEX: {
      token: 'CHO',
      buyExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            },
            outputToken: {
               symbol: 'CHO',
               address: '59McpTVgyGsSu5eQutvcKLFu7wrFe3ZkE2qdAi3HnvBn',
               decimals: 8
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 4},
         {amount: 400, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2.5}
      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   ZIG_SOL_CEX: {
      token: 'ZIG',
      buyExchange: [
         'Mexc',
         'Gate',
         'Bitget',
         'Bybit'
      ],
      sellExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'ZIG',
               address: '26f12PmBk77wQV1TzLe8XKkNBvMFggbuypxdtMLzNLzz',
               decimals: 8
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5}
      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   ZIG_SOL_DEX: {
      token: 'ZIG',
      buyExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            },
            outputToken: {
               symbol: 'ZIG',
               address: '26f12PmBk77wQV1TzLe8XKkNBvMFggbuypxdtMLzNLzz',
               decimals: 8
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'Bitget',
         'Bybit'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5}
      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   EDU_CEX: {
      token: 'EDU',
      buyExchange: [
         'Mexc',
         'Gate',
         'Kucoin'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'EDU',
               address: '0xf8173a39c56a554837C4C7f104153A005D284D11',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5}
      ],
      Bridge: 'https://stargate.finance/'
   },

   EDU_DEX: {
      token: 'EDU',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            },
            outputToken: {
               symbol: 'EDU',
               address: '0xf8173a39c56a554837C4C7f104153A005D284D11',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5}
      ],
      Bridge: 'https://stargate.finance/'
   },

   ESE_CEX: {
      token: 'ESE',
      buyExchange: [
         'Mexc',
         'Gate',
         'Kucoin',
         'Bybit'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'ESE',
               address: '0x491e6DE43b55c8EAE702EDC263E32339da42f58c',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 4},
         {amount: 500, notificationThreshold: 2.25},
         {amount: 800, notificationThreshold: 2}
      ],
      Bridge: 'https://www.squidrouter.com/'
   },

   ESE_DEX: {
      token: 'ESE',
      buyExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'ESE',
               address: '0x491e6DE43b55c8EAE702EDC263E32339da42f58c',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'Kucoin',
         'Bybit'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 4},
         {amount: 500, notificationThreshold: 2.25},
         {amount: 800, notificationThreshold: 2}
      ],
      Bridge: 'https://www.squidrouter.com/'
   },

   TRUF_CEX: {
      token: 'TRUF',
      buyExchange: [
         {
            name: 'OpenOcean',
            network: 'base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'TRUF',
               address: '0xB59c8912c83157a955f9D715E556257F432C35D7',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Gate',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 200, notificationThreshold: 3},
         {amount: 300, notificationThreshold: 2.25},
         {amount: 500, notificationThreshold: 5}
      ],
      Bridge: 'https://governance.truflation.com/'
   },

   TRUF_DEX: {
      token: 'TRUF',
      buyExchange: [
         {
            name: 'OpenOcean',
            network: 'base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'TRUF',
               address: '0xB59c8912c83157a955f9D715E556257F432C35D7',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Gate',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 200, notificationThreshold: 3},
         {amount: 300, notificationThreshold: 2.25},
         {amount: 500, notificationThreshold: 5}
      ],
      Bridge: 'https://governance.truflation.com/'
   },

   MASA_BASE_CEX: {
      token: 'MASA',
      buyExchange: [
         'Mexc',
         'Gate',
         'Bybit'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'MASA',
               address: '0xaB1E131c6984CC149ef45931073D11Ae35497191',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 2},
      ],
      Bridge: 'https://app.masa.finance/bridge'
   },

   MASA_BASE_DEX: {
      token: 'MASA',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'MASA',
               address: '0xaB1E131c6984CC149ef45931073D11Ae35497191',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'Bybit'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 2},
      ],
      Bridge: 'https://app.masa.finance/bridge'
   },

   ZERC_POL_CEX: {
      token: 'ZERC',
      buyExchange: [
         'Mexc',
         'Gate',
         'CryptoCom',
         'Kucoin',
         'Bitget'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Polygon',
            inputToken: {
               symbol: 'ZERC',
               address: '0xE1b3eb06806601828976e491914e3De18B5d6b28',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 2},
      ],
      Bridge: 'https://www.chainport.io/'
   },

   ZERC_POL_DEX: {
      token: 'ZERC',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Polygon',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            },
            outputToken: {
               symbol: 'ZERC',
               address: '0xE1b3eb06806601828976e491914e3De18B5d6b28',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'CryptoCom',
         'Kucoin',
         'Bitget'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 2},
      ],
      Bridge: 'https://www.chainport.io/'
   },

   ZERC_BASE_CEX: {
      token: 'ZERC',
      buyExchange: [
         'Mexc',
         'Gate',
         'CryptoCom',
         'Kucoin',
         'Bitget'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'ZERC',
               address: '0xa3a2Cdd230f9B3ff6E01A01534a3eD3CBf049815',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 2},
      ],
      Bridge: 'https://www.chainport.io/'
   },

   ZERC_BASE_DEX: {
      token: 'ZERC',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'ZERC',
               address: '0xa3a2Cdd230f9B3ff6E01A01534a3eD3CBf049815',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'CryptoCom',
         'Kucoin',
         'Bitget'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 2},
      ],
      Bridge: 'https://www.chainport.io/'
   },

   ZERC_BSC_CEX: {
      token: 'ZERC',
      buyExchange: [
         'Mexc',
         'Gate',
         'CryptoCom',
         'Kucoin',
         'Bitget'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'ZERC',
               address: '0x9c47E503b2f497e9Ad9F1c0dfA6Bd9Fd5456AA4e',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 2},
      ],
      Bridge: 'https://www.chainport.io/'
   },

   ZERC_BSC_DEX: {
      token: 'ZERC',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'ZERC',
               address: '0x9c47E503b2f497e9Ad9F1c0dfA6Bd9Fd5456AA4e',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'CryptoCom',
         'Kucoin',
         'Bitget'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 2},
      ],
      Bridge: 'https://www.chainport.io/'
   },

   OGN_CEX: {
      token: 'OGN',
      buyExchange: [
         'Mexc',
         'Gate',
         'CryptoCom',
         'Kucoin',
         'Bitget'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Sonic',
            inputToken: {
               symbol: 'OGN',
               address: '0x61647882acF21792e577a963D320d51e2c8f6194',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Sonic.address,
               decimals: USDTContracts.Sonic.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 1.5},
         {amount: 1000, notificationThreshold: 1},
         {amount: 1500, notificationThreshold: 1}

      ],
      Bridge: 'https://gateway.soniclabs.com/'
   },

   OGN_DEX: {
      token: 'OGN',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Sonic',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Sonic.address,
               decimals: USDTContracts.Sonic.decimals
            },
            outputToken: {
               symbol: 'OGN',
               address: '0x61647882acF21792e577a963D320d51e2c8f6194',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'CryptoCom',
         'Kucoin',
         'Bitget'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 1.5},
         {amount: 1000, notificationThreshold: 1},
         {amount: 1500, notificationThreshold: 1}
      ],
      Bridge: 'https://gateway.soniclabs.com/'
   },

   VRTX_SONIC_CEX: {
      token: 'VRTX',
      buyExchange: [
         'Mexc',
         'Gate',
         'Bybit',
         'Kucoin',
         'Bitget'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Sonic',
            inputToken: {
               symbol: 'VRTX',
               address: '0xAd747e3CF4e31B8897B96C81C6C74152De52f614',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Sonic.address,
               decimals: USDTContracts.Sonic.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 200, notificationThreshold: 3},
         {amount: 300, notificationThreshold: 2},
         {amount: 400, notificationThreshold: 1.5},

      ],
      Bridge: 'https://app.transporter.io/'
   },

   VRTX_SONIC_DEX: {
      token: 'VRTX',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Sonic',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Sonic.address,
               decimals: USDTContracts.Sonic.decimals
            },
            outputToken: {
               symbol: 'VRTX',
               address: '0xAd747e3CF4e31B8897B96C81C6C74152De52f614',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'Bybit',
         'Kucoin',
         'Bitget'
      ],
      buyAmounts: [
         {amount: 200, notificationThreshold: 3},
         {amount: 300, notificationThreshold: 2},
         {amount: 400, notificationThreshold: 1.5},
      ],
      Bridge: 'https://app.transporter.io/'
   },

   VRTX_BASE_CEX: {
      token: 'VRTX',
      buyExchange: [
         'Mexc',
         'Gate',
         'Bybit',
         'Kucoin',
         'Bitget'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'VRTX',
               address: '0xFB0c734Fc3008683c5efF45bcf8128836C4D97D0',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 200, notificationThreshold: 3},
         {amount: 300, notificationThreshold: 2},
         {amount: 400, notificationThreshold: 1.5},

      ],
      Bridge: 'https://app.transporter.io/'
   },

   VRTX_BASE_DEX: {
      token: 'VRTX',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'VRTX',
               address: '0xFB0c734Fc3008683c5efF45bcf8128836C4D97D0',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'Bybit',
         'Kucoin',
         'Bitget'
      ],
      buyAmounts: [
         {amount: 200, notificationThreshold: 3},
         {amount: 300, notificationThreshold: 2},
         {amount: 400, notificationThreshold: 1.5},
      ],
      Bridge: 'https://app.transporter.io/'
   },

   MATH_CEX: {
      token: 'MATH',
      buyExchange: [
         'Mexc',
         'Gate'
      ],
      sellExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'MATH',
               address: 'CaGa7pddFXS65Gznqwp42kBhkJQdceoFVT7AQYo8Jr8Q',
               decimals: 8
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 200, notificationThreshold: 3},
         {amount: 300, notificationThreshold: 2},
         {amount: 400, notificationThreshold: 1.5},

      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   MATH_DEX: {
      token: 'MATH',
      buyExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            },
            outputToken: {
               symbol: 'MATH',
               address: 'CaGa7pddFXS65Gznqwp42kBhkJQdceoFVT7AQYo8Jr8Q',
               decimals: 8
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate'
      ],
      buyAmounts: [
         {amount: 200, notificationThreshold: 3},
         {amount: 300, notificationThreshold: 2},
         {amount: 400, notificationThreshold: 1.5},

      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   SDEX_CEX: {
      token: 'SDEX',
      buyExchange: [
         'Gate'
      ],
      sellExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'SDEX',
               address: '9dzSzFvPsKDoY2gdWErsuz2H1o4tbzvgBhrNZ9cvkD2j',
               decimals: 8
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 1.5},
         {amount: 1000, notificationThreshold: 1},
         {amount: 1500, notificationThreshold: 1},

      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },
   DAO_CEX: {
      token: 'DAO',
      buyExchange: [
         'Mexc',
         'Gate',
         'Bitget'
      ],
      sellExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'DAO',
               address: '85aM5XJhdDeUw4MbGKM56zmWnsRyh76zUVut97uPjiCg',
               decimals: 8
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 1.5},
         {amount: 1000, notificationThreshold: 1},
         {amount: 1500, notificationThreshold: 1},

      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   DAO_DEX: {
      token: 'SDEX',
      buyExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            },
            outputToken: {
               symbol: 'SDEX',
               address: '85aM5XJhdDeUw4MbGKM56zmWnsRyh76zUVut97uPjiCg',
               decimals: 8
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'Bitget'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 1.5},
         {amount: 1000, notificationThreshold: 1},
         {amount: 1500, notificationThreshold: 1},

      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   GMRX_CEX: {
      token: 'GMRX',
      buyExchange: [
         'Gate',
         'Kucoin'
      ],
      sellExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'GMRX',
               address: '76VxJbMFoCXBcn2rqPQX2UsUfpupq2gVwGSq5LyYMhr2',
               decimals: 8
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 200, notificationThreshold: 3},
         {amount: 300, notificationThreshold: 2},
         {amount: 400, notificationThreshold: 1.5},

      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   GMRX_DEX: {
      token: 'GMRX',
      buyExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            },
            outputToken: {
               symbol: 'GMRX',
               address: '76VxJbMFoCXBcn2rqPQX2UsUfpupq2gVwGSq5LyYMhr2',
               decimals: 8
            }
         }
      ],
      sellExchange: [
         'Gate',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 200, notificationThreshold: 3},
         {amount: 300, notificationThreshold: 2},
         {amount: 400, notificationThreshold: 1.5},

      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   OX_SOL_CEX: {
      token: 'OX',
      buyExchange: [
         'Gate'
      ],
      sellExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'OX',
               address: '3E2z4KX7y457xJqK9RQeJhA29oPdoUvAAD3Ea3zQyuG3',
               decimals: 9
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 600, notificationThreshold: 1},
         {amount: 900, notificationThreshold: 1.5},

      ]
   },

   OX_SOL_DEX: {
      token: 'OX',
      buyExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            },
            outputToken: {
               symbol: 'OX',
               address: '3E2z4KX7y457xJqK9RQeJhA29oPdoUvAAD3Ea3zQyuG3',
               decimals: 9
            }
         }
      ],
      sellExchange: [
         'Gate',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 600, notificationThreshold: 1},
         {amount: 900, notificationThreshold: 1.5},

      ]
   },

   OX_BASE_CEX: {
      token: 'OX',
      buyExchange: [
         'Gate'
      ],
      sellExchange: [
         {
            name: 'OpenOcean',
            network: 'base',
            inputToken: {
               symbol: 'OX',
               address: '0xba0Dda8762C24dA9487f5FA026a9B64b695A07Ea',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 600, notificationThreshold: 1},
         {amount: 900, notificationThreshold: 1.5},

      ]
   },

   OX_BASE_DEX: {
      token: 'OX',
      buyExchange: [
         {
            name: 'OpenOcean',
            network: 'base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'OX',
               address: '0xba0Dda8762C24dA9487f5FA026a9B64b695A07Ea',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Gate',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 600, notificationThreshold: 1},
         {amount: 900, notificationThreshold: 1.5},

      ]
   },

   BR_CEX: {
      token: 'BR',
      buyExchange: [
         'Mexc'
      ],
      sellExchange: [
         {
            name: 'OpenOcean',
            network: 'bera',
            inputToken: {
               symbol: 'BR',
               address: '0xd352dc6e5F0c45E2F2b38eb5565EB286A1ea4087',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Bera.address,
               decimals: USDTContracts.Bera.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 400, notificationThreshold: 1.5},
         {amount: 500, notificationThreshold: 1.5},
      ],
      Bridge: 'https://br.bedrockdao.com/?network=bera'
   },

   BR_DEX: {
      token: 'BR',
      buyExchange: [
         {
            name: 'OpenOcean',
            network: 'bera',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Bera.address,
               decimals: USDTContracts.Bera.decimals
            },
            outputToken: {
               symbol: 'BR',
               address: '0xd352dc6e5F0c45E2F2b38eb5565EB286A1ea4087',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 400, notificationThreshold: 1.5},
         {amount: 500, notificationThreshold: 1.5},
      ],
      Bridge: 'https://br.bedrockdao.com/?network=bera'
   },

   HPOS10I_DEX: {
      token: 'HPOS10I',
      buyExchange: [
         {
            name: 'OpenOcean',
            network: 'bera',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Bera.address,
               decimals: USDTContracts.Bera.decimals
            },
            outputToken: {
               symbol: 'HPOS10I',
               address: '0x6B26f778bfae56CFb4Bf9b62c678d9D40e725227',
               decimals: 8
            }
         }
      ],
      sellExchange: [
         'Bybit'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 850, notificationThreshold: 1.5},
         {amount: 1500, notificationThreshold: 1.5},
      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   HPOS10I_CEX: {
      token: 'HPOS10I',
      buyExchange: [
         'Bybit'
      ],
      sellExchange: [
         {
            name: 'OpenOcean',
            network: 'bera',
            inputToken: {
               symbol: 'HPOS10I',
               address: '0x6B26f778bfae56CFb4Bf9b62c678d9D40e725227',
               decimals: 8
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Bera.address,
               decimals: USDTContracts.Bera.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 850, notificationThreshold: 1.5},
         {amount: 1500, notificationThreshold: 1.5},
      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   HPOS10I_SOL_DEX: {
      token: 'HPOS10I',
      buyExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            },
            outputToken: {
               symbol: 'HPOS10I',
               address: 'CTgiaZUK12kCcB8sosn4Nt2NZtzLgtPqDwyQyr2syATC',
               decimals: 8
            }
         }
      ],
      sellExchange: [
         'Bybit'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 850, notificationThreshold: 1.5},
         {amount: 1500, notificationThreshold: 1.5},
      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   HPOS10I_SOL_CEX: {
      token: 'HPOS10I',
      buyExchange: [
         'Bybit'
      ],
      sellExchange: [
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'HPOS10I',
               address: 'CTgiaZUK12kCcB8sosn4Nt2NZtzLgtPqDwyQyr2syATC',
               decimals: 8
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 850, notificationThreshold: 1.5},
         {amount: 1500, notificationThreshold: 1.5},
      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   HPOS10I_BASE_DEX: {
      token: 'HPOS10I',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'HPOS10I',
               address: '0x2a06A17CBC6d0032Cac2c6696DA90f29D39a1a29',
               decimals: 8
            }
         }
      ],
      sellExchange: [
         'Bybit'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 850, notificationThreshold: 1.5},
         {amount: 1500, notificationThreshold: 1.5},
      ],
      Bridge: 'https://portalbridge.com/advanced-tools/#/transfer'
   },

   HPOS10I_BASE_CEX: {
      token: 'HPOS10I',
      buyExchange: [
         'Bybit'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'HPOS10I',
               address: '0x2a06A17CBC6d0032Cac2c6696DA90f29D39a1a29',
               decimals: 8
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 850, notificationThreshold: 1.5},
         {amount: 1500, notificationThreshold: 1.5},
      ],
      Bridge: 'https://superbridge.app/'
   },

   EUL_BASE_DEX: {
      token: 'EUL',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'EUL',
               address: '0xa153Ad732F831a79b5575Fa02e793EC4E99181b0',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Kucoin',
         'Gate'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 700, notificationThreshold: 2},
      ],
      Bridge: 'https://stargate.finance/'
   },

   EUL_BASE_CEX: {
      token: 'EUL',
      buyExchange: [
         'Mexc',
         'Kucoin',
         'Gate'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'EUL',
               address: '0xa153Ad732F831a79b5575Fa02e793EC4E99181b0',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 700, notificationThreshold: 2},
      ],
      Bridge: 'https://stargate.finance/'
   },

   GAME_DEX: {
      token: 'GAMESTARTER',
      buyExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'GAMESTARTER',
               address: '0x66109633715d2110ddA791E64a7B2afadb517aBB',
               decimals: 5
            }
         }
      ],
      sellExchange: [
         'Gate'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 2},
      ]
   },

   GAME_CEX: {
      token: 'GAMESTARTER',
      buyExchange: [
         'Gate'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'GAMESTARTER',
               address: '0x66109633715d2110ddA791E64a7B2afadb517aBB',
               decimals: 5
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 2},
      ]
   },

   ITHACA_DEX: {
      token: 'ITHACA',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            },
            outputToken: {
               symbol: 'ITHACA',
               address: '0x1095AE55B62174D9EA3Bc6A4136acacaD461d7ce',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Kucoin',
         'Gate'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 2},
      ]
   },

   ITHACA_CEX: {
      token: 'ITHACA',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            },
            outputToken: {
               symbol: 'ITHACA',
               address: '0x1095AE55B62174D9EA3Bc6A4136acacaD461d7ce',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Kucoin',
         'Gate'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 3},
         {amount: 500, notificationThreshold: 2},
         {amount: 750, notificationThreshold: 2},
      ]
   },

   GEL_ETH_DEX: {
      token: 'GEL',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            },
            outputToken: {
               symbol: 'GEL',
               address: '0x15b7c0c907e4C6b9AdaAaabC300C08991D6CEA05',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'CryptoCom',
         'Gate'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 3},
         {amount: 800, notificationThreshold: 2},
         {amount: 1200, notificationThreshold: 2},
      ]
   },

   GEL_ETH_CEX: {
      token: 'GEL',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            },
            outputToken: {
               symbol: 'GEL',
               address: '0x15b7c0c907e4C6b9AdaAaabC300C08991D6CEA05',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'CryptoCom',
         'Gate'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 3},
         {amount: 800, notificationThreshold: 2},
         {amount: 1200, notificationThreshold: 2},
      ]
   },

   GEL_POL_CEX: {
      token: 'GEL',
      buyExchange: [
         'Mexc',
         'CryptoCom',
         'Gate'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Polygon',
            inputToken: {
               symbol: 'GEL',
               address: '0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 3},
         {amount: 800, notificationThreshold: 2},
         {amount: 1200, notificationThreshold: 2},
      ],
      Bridge: 'https://www.celer.network/'
   },

   DMT_DEX: {
      token: 'DMT',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            },
            outputToken: {
               symbol: 'DMT',
               address: '0x0B7f0e51Cd1739D6C96982D55aD8fA634dd43A9C',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 3},
         {amount: 800, notificationThreshold: 2},
         {amount: 1200, notificationThreshold: 2},
      ],
      Bridge: 'https://stargate.finance/'
   },

   DMT_СEX: {
      token: 'DMT',
      buyExchange: [
         'Mexc'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'DMT',
               address: '0x0B7f0e51Cd1739D6C96982D55aD8fA634dd43A9C',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 3},
         {amount: 800, notificationThreshold: 2},
         {amount: 1200, notificationThreshold: 2},
      ],
      Bridge: 'https://stargate.finance/'
   },

   G3_DEX: {
      token: 'G3',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'G3',
               address: '0xCF67815ccE72E682Eb4429eCa46843bed81Ca739',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'Kucoin',
         'Bybit'
      ],
      buyAmounts: [
         {amount: 400, notificationThreshold: 2},
         {amount: 600, notificationThreshold: 1.5},
      ],
      Bridge: 'https://interchain.axelar.dev/arbitrum/0xc24A365A870821EB83Fd216c9596eDD89479d8d7'
   },

   G3_CEX: {
      token: 'G3',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'G3',
               address: '0xCF67815ccE72E682Eb4429eCa46843bed81Ca739',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Gate',
         'Kucoin',
         'Bybit'
      ],
      buyAmounts: [
         {amount: 400, notificationThreshold: 2},
         {amount: 600, notificationThreshold: 1.5},
      ],
      Bridge: 'https://interchain.axelar.dev/arbitrum/0xc24A365A870821EB83Fd216c9596eDD89479d8d7'
   },

   HEGIC_DEX: {
      token: 'HEGIC',
      buyExchange: [
         'Mexc',
         'Gate'
      ],
      sellExchange: [
         {
            name: 'OpenOcean',
            network: 'arbitrum',
            inputToken: {
               symbol: 'HEGIC',
               address: '0x431402e8b9dE9aa016C743880e04E517074D8cEC',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Arbitrum.address,
               decimals: USDTContracts.Arbitrum.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://bridge.arbitrum.io/'
   },

   OCEAN_CEX: {
      token: 'OCEAN',
      buyExchange: [
         'Kraken'
      ],
      sellExchange: [
         {
            name: 'OpenOcean',
            network: 'polygon',
            inputToken: {
               symbol: 'OCEAN',
               address: '0x282d8efCe846A88B159800bd4130ad77443Fa1A1',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://wallet.polygon.technology/'
   },

   OCEAN_DEX: {
      token: 'OCEAN',
      buyExchange: [
         {
            name: 'OpenOcean',
            network: 'polygon',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Polygon.address,
               decimals: USDTContracts.Polygon.decimals
            },
            outputToken: {
               symbol: 'OCEAN',
               address: '0x282d8efCe846A88B159800bd4130ad77443Fa1A1',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Kraken'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://wallet.polygon.technology/'
   },

   SFI_CEX: {
      token: 'SFI',
      buyExchange: [
         'Mexc',
         'Kucoin'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'SFI',
               address: '0x7636D8722Fdf7cd34232a915E48e96aA3eB386BF',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://singularityfinance.ai/bridge'
   },

   SFI_DEX: {
      token: 'SFI',
      buyExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'SFI',
               address: '0x7636D8722Fdf7cd34232a915E48e96aA3eB386BF',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://singularityfinance.ai/bridge'
   },

   ALPH_CEX: {
      token: 'ALPH',
      buyExchange: [
         'Mexc',
         'Kucoin',
         'Bitget',
         'Bitmart'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'ALPH',
               address: '0x8683BA2F8b0f69b2105f26f488bADe1d3AB4dec8',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://beta.ayin.app/bridge'
   },

   ALPH_DEX: {
      token: 'ALPH',
      buyExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'ALPH',
               address: '0x8683BA2F8b0f69b2105f26f488bADe1d3AB4dec8',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Kucoin',
         'Bitget',
         'Bitmart'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://beta.ayin.app/bridge'
   },

   ALPH_Eth_CEX: {
      token: 'ALPH',
      buyExchange: [
         'Mexc',
         'Kucoin',
         'Bitget',
         'Bitmart'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'ALPH',
               address: '0x590F820444fA3638e022776752c5eEF34E2F89A6',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://beta.ayin.app/bridge'
   },

   ALPH_Eth_DEX: {
      token: 'ALPH',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            },
            outputToken: {
               symbol: 'ALPH',
               address: '0x590F820444fA3638e022776752c5eEF34E2F89A6',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Kucoin',
         'Bitget',
         'Gate'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://beta.ayin.app/bridge'
   },

   U2U_CEX: {
      token: 'U2U',
      buyExchange: [
         'Mexc',
         'Kucoin',
         'Bitget',
         'Gate'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'U2U',
               address: '0x558e7139800f8bc119F68D23a6126FFFD43a66a6',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://owlto.finance/bridge'
   },

   U2U_DEX: {
      token: 'U2U',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            },
            outputToken: {
               symbol: 'U2U',
               address: '0x558e7139800f8bc119F68D23a6126FFFD43a66a6',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Kucoin',
         'Bitget',
         'Gate'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://owlto.finance/bridge'
   },

   OORT_ETH_CEX: {
      token: 'OORT',
      buyExchange: [
         'Mexc',
         'Kucoin',
         'Bitget',
         'Gate',
         'Kucoin'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'OORT',
               address: '0x5651fA7a726B9Ec0cAd00Ee140179912B6E73599',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://bridge.oortfoundation.org/'
   },

   OORT_ETH_DEX: {
      token: 'OORT',
      buyExchange: [
         {
            name: 'Odos',
            network: 'Ethereum',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            },
            outputToken: {
               symbol: 'OORT',
               address: '0x5651fA7a726B9Ec0cAd00Ee140179912B6E73599',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Kucoin',
         'Bitget',
         'Gate',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://bridge.oortfoundation.org/'
   },

   OORT_BSC_CEX: {
      token: 'OORT',
      buyExchange: [
         'Mexc',
         'Kucoin',
         'Bitget',
         'Gate',
         'Kucoin'
      ],
      sellExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'OORT',
               address: '0x5651fA7a726B9Ec0cAd00Ee140179912B6E73599',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://bridge.oortfoundation.org/'
   },

   OORT_BSC_DEX: {
      token: 'OORT',
      buyExchange: [
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'OORT',
               address: '0x5651fA7a726B9Ec0cAd00Ee140179912B6E73599',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Mexc',
         'Kucoin',
         'Bitget',
         'Gate',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 2},
         {amount: 800, notificationThreshold: 1.5},
         {amount: 1200, notificationThreshold: 1.5},
      ],
      Bridge: 'https://bridge.oortfoundation.org/'
   },

   ALU_CEX: {
      token: 'ALU',
      buyExchange: [
         'Gate',
         'Mexc',
         'Bitget',
         'Kucoin'
      ],
      sellExchange: [
         {
            name: 'Magpie',
            network: 'base',
            inputToken: {
               symbol: 'ALU',
               address: '0x91Ad1b44913cD1B8241A4Ff1e2EAa198DA6Bf4c9',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2},
      ],
      Bridge: 'https://app.transporter.io/'
   },

   ALU_DEX: {
      token: 'ALU',
      buyExchange: [
         {
            name: 'Magpie',
            network: 'base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'ALU',
               address: '0x91Ad1b44913cD1B8241A4Ff1e2EAa198DA6Bf4c9',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Gate',
         'Mexc',
         'Bitget',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2},
      ],
      Bridge: 'https://app.transporter.io/'
   },

   ALU_eth_DEX: {
      token: 'ALU',
      buyExchange: [
         {
            name: 'Magpie',
            network: 'ethereum',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            },
            outputToken: {
               symbol: 'ALU',
               address: '0x786A6743efe9500011C92c7D8540608a62382b6f',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Gate',
         'Mexc',
         'Bitget',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2},
      ],
      Bridge: 'https://app.transporter.io/'
   },

   ALU_eth_CEX: {
      token: 'ALU',
      buyExchange: [
         'Gate',
         'Mexc',
         'Bitget',
         'Kucoin'
      ],
      sellExchange: [
         {
            name: 'Magpie',
            network: 'ethereum',
            inputToken: {
               symbol: 'ALU',
               address: '0x786A6743efe9500011C92c7D8540608a62382b6f',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Ethereum.address,
               decimals: USDTContracts.Ethereum.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 300, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2},
      ],
      Bridge: 'https://app.transporter.io/'
   },

   KIP_DEX: {
      token: 'KIP',
      buyExchange: [
         {
            name: 'Magpie',
            network: 'arbitrum',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Arbitrum.address,
               decimals: USDTContracts.Arbitrum.decimals
            },
            outputToken: {
               symbol: 'KIP',
               address: '0xF63b14F5eE5574e3F337b2796Bbdf6dcfB4E2CB7',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Gate',
         'Kucoin'
      ],
      buyAmounts: [
         {amount: 700, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2},
      ],
      Bridge: 'https://interchain.axelar.dev/arbitrum'
   },

   KIP_CEX: {
      token: 'KIP',
      buyExchange: [
         'Gate',
         'Kucoin'
      ],
      sellExchange: [
         {
            name: 'Magpie',
            network: 'arbitrum',
            inputToken: {
               symbol: 'KIP',
               address: '0xF63b14F5eE5574e3F337b2796Bbdf6dcfB4E2CB7',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Arbitrum.address,
               decimals: USDTContracts.Arbitrum.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 700, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2},
      ],
      Bridge: 'https://interchain.axelar.dev/arbitrum'
   },

   SOPH_ETH_DEX: {
      token: 'SOPHIA',
      buyExchange: [
         {
            name: 'Magpie',
            network: 'base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'SOPHIA',
               address: '0x73fBD93bFDa83B111DdC092aa3a4ca77fD30d380',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Gate',
         'Mexc'
      ],
      buyAmounts: [
         {amount: 700, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2},
      ],
      Bridge: 'https://singularitydao.ai/bridge'
   },

   SOPH_ETH_CEX: {
      token: 'SOPHIA',
      buyExchange: [
         'Gate',
         'Mexc'
      ],
      sellExchange: [
         {
            name: 'Magpie',
            network: 'base',
            inputToken: {
               symbol: 'SOPHIA',
               address: '0x73fBD93bFDa83B111DdC092aa3a4ca77fD30d380',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 700, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2},
      ],
      Bridge: 'https://singularitydao.ai/bridge'
   },

   SOPH_BSC_DEX: {
      token: 'SOPHIA',
      buyExchange: [
         {
            name: 'Magpie',
            network: 'base',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            },
            outputToken: {
               symbol: 'SOPHIA',
               address: '0x73fBD93bFDa83B111DdC092aa3a4ca77fD30d380',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Gate',
         'Mexc'
      ],
      buyAmounts: [
         {amount: 700, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2},
      ],
      Bridge: 'https://singularitydao.ai/bridge'
   },

   SOPH_BSC_CEX: {
      token: 'SOPHIA',
      buyExchange: [
         'Gate',
         'Mexc'
      ],
      sellExchange: [
         {
            name: 'Magpie',
            network: 'base',
            inputToken: {
               symbol: 'SOPHIA',
               address: '0x73fBD93bFDa83B111DdC092aa3a4ca77fD30d380',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 700, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2},
      ],
      Bridge: 'https://singularitydao.ai/bridge'
   },

   RWAINC_BSC_DEX: {
      token: 'RWAINC',
      buyExchange: [
         {
            name: 'Magpie',
            network: 'bsc',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'RWAINC',
               address: '0xE2B1dc2D4A3b4E59FDF0c47B71A7A86391a8B35a',
               decimals: 18
            }
         }
      ],
      sellExchange: [
         'Gate',
         'Mexc'
      ],
      buyAmounts: [
         {amount: 700, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2},
      ],
      Bridge: 'https://stargate.finance/'
   },

   RWAINC_BSC_CEX: {
      token: 'RWAINC',
      buyExchange: [
         'Gate',
         'Mexc'
      ],
      sellExchange: [
         {
            name: 'Magpie',
            network: 'bsc',
            inputToken: {
               symbol: 'RWAINC',
               address: '0xE2B1dc2D4A3b4E59FDF0c47B71A7A86391a8B35a',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 700, notificationThreshold: 2},
         {amount: 500, notificationThreshold: 2},
      ],
      Bridge: 'https://stargate.finance/'
   },
   MIRAI_DEX: {
      token: 'MIRAI',
      buyExchange: [
         {
            name: 'Relay',
            network: 'abstract',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Abstract.address,
               decimals: USDTContracts.Abstract.decimals
            },
            outputToken: {
               symbol: 'MIRAI',
               address: '0xbCdA9Ae6A148Bc4fb411979fFA883c9D1DF08F43',
               decimals: 6
            }
         },
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'USDT',
               address: '0xcb508877ffe5a085B2474641dD3B28F8Bc22A57c',
               decimals: 6
            }
         },
         {
            name: 'Jupiet',
            network: 'solana',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            },
            outputToken: {
               symbol: 'USDT',
               address: '5evN2exivZXJfLaA1KhHfiJKWfwH8znqyH36w1SFz89Y',
               decimals: 6
            }
         },
      ],
      sellExchange: [
         {
            name: 'Relay',
            network: 'abstract',
            inputToken: {
               symbol: 'MIRAI',
               address: '0xbCdA9Ae6A148Bc4fb411979fFA883c9D1DF08F43',
               decimals: 6
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Abstract.address,
               decimals: USDTContracts.Abstract.decimals
            }
         },
         {
            name: 'Odos',
            network: 'BSC',
            inputToken: {
               symbol: 'USDT',
               address: '0xcb508877ffe5a085B2474641dD3B28F8Bc22A57c',
               decimals: 6
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         },
         {
            name: 'Jupiet',
            network: 'solana',
            inputToken: {
               symbol: 'USDT',
               address: '5evN2exivZXJfLaA1KhHfiJKWfwH8znqyH36w1SFz89Y',
               decimals: 6
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            }
         },
      ],
      buyAmounts: [
         {amount: 1000, notificationThreshold: 1},
      ],
      Bridge: 'https://www.usenexus.org/?origin=solanamainnet&token=27CK2NMbkSTTddgbBDvujccpqNrfGztr9WggXusNmnD1&destination=abstract'
   },
   SQD_DEX: {
      token: 'SQD',
      buyExchange: [
         'Mexc',
         {
            name: 'Magpie',
            network: 'arbitrum',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Arbitrum.address,
               decimals: USDTContracts.Arbitrum.decimals
            },
            outputToken: {
               symbol: 'SQD',
               address: '0x1337420dED5ADb9980CFc35f8f2B054ea86f8aB1',
               decimals: 18
            }
         },
         {
            name: 'Magpie',
            network: 'bsc',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'SQD',
               address: '0xe50E3d1A46070444F44df911359033F2937fcC13',
               decimals: 18
            }
         },
      ],
      sellExchange: [
         'Mexc',
         {
            name: 'Magpie',
            network: 'bsc',
            inputToken: {
               symbol: 'SQD',
               address: '0xe50E3d1A46070444F44df911359033F2937fcC13',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         },
         {
            name: 'Magpie',
            network: 'arbitrum',
            inputToken: {
               symbol: 'SQD',
               address: '0x1337420dED5ADb9980CFc35f8f2B054ea86f8aB1',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Arbitrum.address,
               decimals: USDTContracts.Arbitrum.decimals
            }
         },
      ],
      buyAmounts: [
         {amount: 1000, notificationThreshold: 1},
      ],
      Bridge: 'https://www.usenexus.org/?origin=solanamainnet&token=27CK2NMbkSTTddgbBDvujccpqNrfGztr9WggXusNmnD1&destination=abstract'
   },

   RED_DEX: {
      token: 'RED',
      buyExchange: [
         'Mexc','Bitget','Bybit','Gate',
      ],
      sellExchange: [
         'Mexc',
         {
            name: 'Magpie',
            network: 'base',
            inputToken: {
               symbol: 'RED',
               address: '0x4eB92702bA4cfbF80561BAd64D89C706Ac824960',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Base.address,
               decimals: USDTContracts.Base.decimals
            }
         },

      ],
      buyAmounts: [
         {amount: 1000, notificationThreshold: 1},
      ],
      Bridge: 'https://portalbridge.com/'
   },
   ETHFI_DEX: {
      token: 'ETHFI',
      buyExchange: [
         'Mexc','Bitget','Bybit','Gate',
      ],
      sellExchange: [
         'Mexc',
         {
            name: 'Odos',
            network: 'Scroll',
            inputToken: {
               symbol: 'ETHFI',
               address: '0x056A5FA5da84ceb7f93d36e545C5905607D8bD81',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Scroll.address,
               decimals: USDTContracts.Scroll.decimals
            }
         },

      ],
      buyAmounts: [
         {amount: 1000, notificationThreshold: 1},
      ],
      Bridge: 'https://portalbridge.com/'
   },
   CUDIS_DEX: {
      token: 'CUDIS',
      buyExchange: [
         {
            name: 'OpenOcean',
            network: 'bsc',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            },
            outputToken: {
               symbol: 'CUDIS',
               address: '0xC1353D3Ee02FDbd4f65F92EEe543cfd709049CB1',
               decimals: 18
            }
         },
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            },
            outputToken: {
               symbol: 'CUDIS',
               address: 'CudisfkgWvMKnZ3TWf6iCuHm8pN2ikXhDcWytwz6f6RN',
               decimals: 9
            }
         },

      ],
      sellExchange: [
         {
            name: 'OpenOcean',
            network: 'bsc',
            inputToken: {
               symbol: 'CUDIS',
               address: '0xC1353D3Ee02FDbd4f65F92EEe543cfd709049CB1',
               decimals: 18
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.BSC.address,
               decimals: USDTContracts.BSC.decimals
            }
         },
         {
            name: 'Jupiter',
            network: 'solana',
            inputToken: {
               symbol: 'CUDIS',
               address: 'CudisfkgWvMKnZ3TWf6iCuHm8pN2ikXhDcWytwz6f6RN',
               decimals: 9
            },
            outputToken: {
               symbol: 'USDT',
               address: USDTContracts.Solana.address,
               decimals: USDTContracts.Solana.decimals
            }
         }
      ],
      buyAmounts: [
         {amount: 500, notificationThreshold: 1.5},
      ],
      Bridge: 'https://portalbridge.com/'
   },

};
