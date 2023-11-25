# 0x23676e8b4c47b5a8ccadad3829c8dcc9e4ba86621f5810cdc5a6c57bd34847

from web3 import Web3

# Replace with your Infura API key
infura_url = "https://mainnet.infura.io/v3/dc0837f07f054beab1384485688c2966"
# infura_url = "https://mainnet-mainnet.infura.io/v3/dc0837f07f054beab1384485688c2966"

# Connect to Infura
web3 = Web3(Web3.HTTPProvider(infura_url))

# Replace with the actual transaction hash
transaction_hash = "0x23676e8b4c47b5a8ccadad3829c8dcc9e4ba86621f5810cdc5a6c57bd34847"
block_num =  "0x11c5a91"

# Get transaction details
# transaction = web3.net.
transaction = web3.eth.get_transaction(block_num)

# Print transaction details
print("Transaction Details:")
print(transaction)
# print(f"Block Number: {transaction['result']['hash']}")
# print(f"Gas Price: {transaction['result']['gasUsed']}")
# Add more details as needed

# If you want to fetch data from the transaction input (for contract interactions)
# if transaction['input'] != '0x':
#     contract_data = web3.eth.call({'to': transaction['to'], 'data': transaction['input']})
#     print(f"Contract Data: {contract_data}")

# You can explore more details available in the 'transaction' dictionary

