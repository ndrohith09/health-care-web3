from web3 import Web3
infura_url = "https://mainnet.infura.io/v3/a05e115934c247c9b1a92b0f9072a342"
web3 = Web3(Web3.HTTPProvider(infura_url))
print(web3.is_connected())
print(web3.eth.block_number)
balance = web3.eth.get_balance("0xc94770007dda54cF92009BFF0dE90c06F603a09f")
print(web3.from_wei(balance, 'ether'))