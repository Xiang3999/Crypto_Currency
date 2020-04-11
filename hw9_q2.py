import random 
import hashlib

#Assume
x = "58906"
y = "79654702"
z = "2578012"

# Winner bit
x_bit = 0
y_bit = 1
z_bit = 2

# compute SHA-256 hash of their chosen number
hx = hashlib.sha256(x.encode()).hexdigest()
hy = hashlib.sha256(y.encode()).hexdigest()
hz = hashlib.sha256(z.encode()).hexdigest()

# They publish their hashes first
print("Everyone's hashes")
print("\tX: " + hx)
print("\tY: " + hy)
print("\tZ: " + hz)

# Then they publish their random numbers
print("Everyone's random numbers")
print("\tX: " + x)
print("\tY: " + y)
print("\tZ: " + z)

# Compute winner by finding H(X) XOR H(Y) XOR Z) mod 3
size = max(len(hx), len(hy), len(hz))
bx = bytearray(hx.encode('utf-8'))
by = bytearray(hy.encode('utf-8'))
bz = bytearray(hz.encode('utf-8'))
result = bytearray(b'\x00'*size)

for i in range(size):
	result[i] = bx[i] ^ by[i] ^ bz[i]


result = int.from_bytes(result, byteorder='big', signed=False)

f_result = result % 3
print("\nThe final value is ", f_result)

if f_result == x_bit:
	print("The Lottery winner is X")
elif f_result == y_bit:
	print("The Lottery winner is Y")
elif f_result == z_bit:
	print("The Lottery winner is Z")
