curl --location 'http://localhost:5000/api/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
  "username": "testuser",
  "email": "t@g.com",
  "password": "password123",
  "role": "user"
}'

curl --location 'http://localhost:5000/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "t@g.com",
  "password": "password123"
}'

curl --location 'http://localhost:5000/api/users/superadmin/action' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWM2ZmNjOGU1M2Y3NTE2ZTMyOWJkMyIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzM5MzU0MDYwLCJleHAiOjE3MzkzNTc2NjB9.l7sYePUFXyCR_9BBrKXUC1ggU9TmmG10h9JIPIwsIps' \
--data '{
  "userId": "67ac7077cfa61764162fdf30",
  "action": "approve"
}'

curl --location 'http://localhost:5000/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "t@g.com",
  "password": "password123"
}'

curl --location 'http://localhost:5000/api/users/superadmin/action' \
--header 'Content-Type: application/json' \
--data '{
  "userId": "67ac7077cfa61764162fdf30",
  "action": "deactivate"
}'