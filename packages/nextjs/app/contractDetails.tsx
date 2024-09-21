export const CONTRACTADDRESS_LINEA = "0xB5AD85F3cfe05d3243917A710e5a69073bBe4ba7"

export const CONTRACTADDRESS_HEDERA = "0x391ed9A7B8810B497B1beCa5c988F62b8d30842B"

export const CONTRACTADDRESS_FLOW = ""

export const CONTRACTABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "gateway_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "gasService_",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "InvalidAddress",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotApprovedByGateway",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "commP",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint64",
                        "name": "size",
                        "type": "uint64"
                    },
                    {
                        "internalType": "string",
                        "name": "location",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "contract IERC20",
                        "name": "token",
                        "type": "address"
                    }
                ],
                "indexed": false,
                "internalType": "struct OnRampSource.Offer",
                "name": "offer",
                "type": "tuple"
            },
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "id",
                "type": "uint64"
            }
        ],
        "name": "DataReady",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "name": "aggregationPayout",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "aggregations",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "commPToAggregateID",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "commandId",
                "type": "bytes32"
            },
            {
                "internalType": "string",
                "name": "sourceChain",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "sourceAddress",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "payload",
                "type": "bytes"
            }
        ],
        "name": "execute",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "commandId",
                "type": "bytes32"
            },
            {
                "internalType": "string",
                "name": "sourceChain",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "sourceAddress",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "payload",
                "type": "bytes"
            },
            {
                "internalType": "string",
                "name": "tokenSymbol",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "executeWithToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "gasService",
        "outputs": [
            {
                "internalType": "contract IAxelarGasService",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "gateway",
        "outputs": [
            {
                "internalType": "contract IAxelarGateway",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "commP",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint64",
                        "name": "size",
                        "type": "uint64"
                    },
                    {
                        "internalType": "string",
                        "name": "location",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "contract IERC20",
                        "name": "token",
                        "type": "address"
                    }
                ],
                "internalType": "struct OnRampSource.Offer",
                "name": "offer",
                "type": "tuple"
            },
            {
                "internalType": "string",
                "name": "destinationChain",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "destinationAddress",
                "type": "string"
            }
        ],
        "name": "offerData",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "name": "offers",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "commP",
                "type": "bytes"
            },
            {
                "internalType": "uint64",
                "name": "size",
                "type": "uint64"
            },
            {
                "internalType": "string",
                "name": "location",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "name": "provenAggregations",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
