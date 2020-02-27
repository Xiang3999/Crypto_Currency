import random 
import hashlib

# Generate random nonces for the 4 friends
NA = random.randint(10,10000)
NB = random.randint(10,10000)
NC = random.randint(10,10000)
ND = random.randint(10,10000)

# Winner bit
john_bit = 0
jane_bit = 1

# Compute hashes  Hi = MD5(Predicted winner bit || Nonce)
# Given that Alice and Bob predicted “John” a
# Carol and David predicted “Jane”
HA = hashlib.md5(str(hex(john_bit + 2*NA)).encode('utf-8'))
HB = hashlib.md5(str(hex(john_bit + 2*NB)).encode('utf-8'))
HC = hashlib.md5(str(hex(jane_bit + 2*NC)).encode('utf-8'))
HD = hashlib.md5(str(hex(jane_bit + 2*ND)).encode('utf-8'))

print("Everyone's hashes")
print("\tAlice: " + HA.hexdigest())
print("\tBob  : " + HB.hexdigest())
print("\tCarol: " + HC.hexdigest())
print("\tDavid: " + HD.hexdigest())

# Randomly select a winner
print("\nThe election results have been declared")
new_president = random.randint(0,1)
if new_president == john_bit : 
	print("John is the new president") 
else:
	print("Jane is the new president")

# They each send their nonces to the other three
print("\nThey each send their nonces to the other three")
print("\tAlice: " + str(NA))
print("\tBob  : " + str(NB))
print("\tCarol: " + str(NC))
print("\tDavid: " + str(ND))

#  Decide who made the correct predictions
if hashlib.md5(str(hex(new_president + 2 * NA)).encode('utf-8')).hexdigest() == HA.hexdigest():
	A = "Correct prediction"
else: 
	A = "Incorrect prediction"
if hashlib.md5(str(hex(new_president + 2 * NB)).encode('utf-8')).hexdigest() == HB.hexdigest():
	B = "Correct prediction"
else: 
	B = "Incorrect prediction"
if hashlib.md5(str(hex(new_president+ 2 * NC)).encode('utf-8')).hexdigest() == HC.hexdigest():
	C = "Correct prediction"
else:
	C = "Incorrect prediction"
if hashlib.md5(str(hex(new_president + 2 * ND)).encode('utf-8')).hexdigest() == HD.hexdigest():
	D = "Correct prediction"
else: 
	D = "Incorrect prediction"

print("\nThe bet results")
print("Alice:\t", A)
print("Bob:\t", B)
print("Carol:\t", C)
print("David:\t", D)