# User Api Spec

## Register User

Endpoint: POST /api/users

Request Body

```json
{
    "username": "Skull Breaker",
    "password": "secret",
    "name": "Faruq Alawy Hudaya"
}
```

Response Body (Success)

```json
{
    "data": {
        "username": "Skull Breaker",
        "name": "Faruq Alawy Hudaya"
    }
}
```

Response Body (Failed)

```json
{
    "errors": "Username or Password or name must be filled"
}
```

## Login User

Endpoint: POST /api/login

Request Body

```json
{
    "username": "Skull Breaker",
    "password": "secret"
}
```

Response Body (Success)

```json
{
    "data": {
        "username": "Skull Breaker",
        "name": "Faruq Alawy Hudaya",
        "token": "uuid"
    }
}
```

Response Body (Failed)

```json
{
    "errors": "Username or Password wrong"
}
```

## Get User

Endpoint: GET /api/login/current

Request Header: 
- X-API-TOKEN : token

Response Body (Success)

```json
{
    "data": {
        "username": "Skull Breaker",
        "name": "Faruq Alawy Hudaya"
    }
}
```

Response Body (Failed)

```json
{
    "errors": "Unauthorized"
}
```

## Update User

Endpoint: PATCH /api/login/current

Request Header: 
- X-API-TOKEN : token

Request Body

```json
{
    "password": "secret", // tidak wajib
    "name": "Faruq Alawy Hudaya" // tidak wajib
}

Response Body (Success)

```json
{
    "data": {
        "username": "Skull Breaker",
        "name": "Faruq Alawy Hudaya"
    }
}
```

Response Body (Failed)

```json
{
    "errors": "Unauthorized"
}
```

## Logout User

Endpoint: DELETE /api/login/current

Request Header: 
- X-API-TOKEN : token

Response Body (Success)

```json
{
    "data": "OK"
}
```

Response Body (Failed)

```json
{
    "errors": "Unauthorized"
}
```