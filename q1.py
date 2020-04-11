import hashlib

accountList = {1: {"account#":"b35023b1","accountBalance": "250.256","numTransactions": "108"},
2: {"account#":"b57d46e8", "accountBalance": "4500.4798","numTransactions": "213"},
3: {"account#":"b57690a1", "accountBalance": "367.90","numTransactions": "578"},
4: {"account#":"d9a545b2", "accountBalance": "70013.256","numTransactions": "1023"},
5: {"account#":"d9a7d235", "accountBalance": "678.23","numTransactions": "651"},
6: {"account#":"d9a7d456", "accountBalance": "78.00","numTransactions": "25"}}

H12 = (accountList[1]['account#'])+(accountList[2]['account#'])
H12 = hashlib.sha256(b'H12').hexdigest()
H34 = (accountList[3]['account#'])+(accountList[4]['account#'])
H34 = hashlib.sha256(b'H34').hexdigest()
H56 = (accountList[5]['account#'])+(accountList[6]['account#'])
H56 = hashlib.sha256(b'H56').hexdigest()

H1234 = H12+H34
H1234 = hashlib.sha256(b'H1234').hexdigest()

H5656 = H56+H56
H56 = hashlib.sha256(b'H5656').hexdigest()

H12345656 = H1234+H5656
H12345656 = hashlib.sha256(b'H12345656').hexdigest()

print(H12345656)
