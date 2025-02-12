# Register a new user

curl --location 'http://localhost:5000/api/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
"username": "testuser",
"email": "t@g.com",
"password": "password123",
"role": "user"
}'

# Login as the registered user

curl --location 'http://localhost:5000/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
"email": "t@g.com",
"password": "password123"
}'

# Superadmin approves the user

curl --location 'http://localhost:5000/api/users/superadmin/action' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <superadmin_token>' \
--data '{
"userId": "67ac7077cfa61764162fdf30",
"action": "approve"
}'

# Login again as the registered user

curl --location 'http://localhost:5000/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
"email": "t@g.com",
"password": "password123"
}'

# Superadmin deactivates the user

curl --location 'http://localhost:5000/api/users/superadmin/action' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <superadmin_token>' \
--data '{
"userId": "67ac7077cfa61764162fdf30",
"action": "deactivate"
}'
