# Address API Spec

## Create Address

Endpoint: POST /api/contacts/:contactId/addresses

Request Header:

- X-API-TOKEN : token

Request Body :

```json
{
  "street": "Jalan Apa",
  "city": "Kota Apa",
  "province": "Provinsi Apa",
  "country": "Negara Apa",
  "postal_code": "22321"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Apa",
    "city": "Kota Apa",
    "province": "Provinsi Apa",
    "country": "Negara Apa",
    "postal_code": "22321"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "postal_code must not blank, ..."
}
```

## Get Address

Endpoint: GET /api/contacts/:contactId/addresses/:addressId

Request Header:

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Apa",
    "city": "Kota Apa",
    "province": "Provinsi Apa",
    "country": "Negara Apa",
    "postal_code": "22321"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "address is not found"
}
```

## Update Address

Endpoint: UPDATE /api/contacts/:contactId/addresses/:addressId

Request Header:

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Apa",
    "city": "Kota Apa",
    "province": "Provinsi Apa",
    "country": "Negara Apa",
    "postal_code": "22321"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "address is not found"
}
```

## Delete Address

Endpoint: DELETE /api/contacts/:contactId/addresses/:addressId

Request Header:

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "errors": "address is not found"
}
```

## List Address

Endpoint: GET /api/contacts/:contactId/addresses

Request Header:

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": [
    {
    "id": 1,
    "street": "Jalan Apa",
    "city": "Kota Apa",
    "province": "Provinsi Apa",
    "country": "Negara Apa",
    "postal_code": "22321"
  },
  {
    "id": 2,
    "street": "Jalan Apa",
    "city": "Kota Apa",
    "province": "Provinsi Apa",
    "country": "Negara Apa",
    "postal_code": "22321"
  }
  ]
}
```

Response Body (Failed) :

```json
{
  "errors": "contact is not found"
}
```