from web3 import Web3
infura_url = "https://mainnet.infura.io/v3/<key>"
web3 = Web3(Web3.HTTPProvider(infura_url))
latest = web3.eth.block_number
print(latest)
print(web3.eth.get_block(latest))

for i in range(0,10):
    print(web3.eth.get_block(latest -i))

hash = '0x53b289a90409f7f31a9fdb3f9e65e56599178bab6db27f0825f901d3ec20a20e'
print(web3.eth.get_transaction_by_block(hash,2))