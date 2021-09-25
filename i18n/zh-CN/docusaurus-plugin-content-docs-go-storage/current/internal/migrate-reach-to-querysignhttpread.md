---
title: Migrate Reach to QuerySignHTTPRead
---

## 介绍

### Reach

[Reacher](../operations/reach.md) is used to get a public accessible url to object.

### QuerySignHTTPRead

[StorageHTTPSigner](../operations/storage_http_signer/index.md) is used to generate HTTP requests with signature information for storage service. [QuerySignHTTPRead](../operations/storage_http_signer/query_sign_http_read.md) will read data from the file by using query parameters to authenticate requests.

For `*http.Request` returned by `QuerySignHttpRead`, where the `URL` field specifies either the URI being requested (for server requests) or the URL to access (for client requests) with signature in the query string. And `Header` field specifies HTTP headers converted from the optional pairs, which includes headers contained in the signature.

Headers included in signature must be included in any HTTP request made with the signed URL. `QuerySignHttpRead` extends the functionality of `Reach`. And `Reacher` will be deprecated.

## How to migrate Reach to QuerySignHTTPRead

From [go-storage](https://github.com/beyondstorage/go-storage) side:

- `StoragHTTPSigner` interface has been introduced and implemented.
- `Reacher` interface and operation have been marked as deprecated and will be removed in the last major version.

From service side:

- `StorageHttpSigner` should be implemented if supported.
- `Reacher` implementation should be removed before it's removed from [go-storage](https://github.com/beyondstorage/go-storage).

From user side:

`Reacher` interface and `Reach` operation are no longer available in the near future. To reach the object or resource, upgrade the dependency library `go-service-*` is needed, use `StorageHttpSigner` interface and `QuerySignHttpRead` operation instead. 例如：

Before
```go
// ...
url, err := store.Reach("abc", types.WithExpire(time.Hour))
// handle err and url
```

After
```go
// ...
req, err := store.QuerySignHttpRead("abc", time.Hour, opt)
// handle err
// get the accessible url to object
url := req.URL.String()
// or send request directly
client := &http.Client{}
resp, err := client.Do(req)
// ...
```
