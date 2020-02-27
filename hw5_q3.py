import hashlib

# Given
N = 2357
username = "Alice"
password = "alice123"

# (i)
print("C sends its user name to S; it DOES NOT send its password P")
print("C Username: ", username)

# (ii)
print("\nS verifies the user name and sends a nonce N to C")
print("Nouce: ", str(N))

# (iii)
hashed_password = hashlib.md5(str(hex(N) + password + hex(N)).encode('utf-8'))
print("\nC computes a hash H = MD5(N||P||N) and sends H to S")
print("The hashed password(H) is ", hashed_password.hexdigest())

#(iV)
g = hashlib.md5(str(hex(N) + password + hex(N)).encode('utf-8'))
print("\nS independently computes G= MD5(N||P||N). If G=H, S declares C as an authenticated user")
print("The hashed password(G) is ", g.hexdigest())

if g.hexdigest() == hashed_password.hexdigest():
	print("C is an  authenticated user")
else:
	print("C is NOT an  authenticated user")