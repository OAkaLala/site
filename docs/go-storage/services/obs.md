[Huawei Object Storage Service](https://www.huaweicloud.com/product/obs.html)

## Project

<https://github.com/beyondstorage/go-service-obs>

## Config

### Servicer

| Name | Required | Comments |
| ---- | -------- | -------- |
| [credential](../pairs/credential.md) | Y | only support `hmac` protocol |
| [endpoint](../pairs/endpoint.md)     | Y        | specific domain to access this storager |

### Storager

| Name | Required | Comments |
| ---- | -------- | -------- |
| [name](../pairs/name.md) | Y | bucket name |
| [work_dir](../pairs/work_dir.md) | N | work dir |

## Example

Init servicer (see [this page](../operations/index.md) for details)

```go
import (
	_ "github.com/beyondstorage/go-service-obs"
	"github.com/beyondstorage/go-storage/v4/services"
)

srv, err := services.NewServicerFromString("obs://?credential=hmac:access_key_id:secret_access_key&endpoint=https:obs.<region>.myhuaweicloud.com")
if err != nil {
    log.Fatalf("obs new service: %v", err)
}
```

Init storager (see [this page](../operations/index.md) for details)

```go
import (
	_ "github.com/beyondstorage/go-service-obs"
	"github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStoragerFromString("obs://<bucket_name>/path/to/workdir?credential=hmac:access_key_id:secret_access_key&endpoint=https:obs.<region>.myhuaweicloud.com")
if err != nil {
    log.Fatalf("obs new service: %v", err)
}
```

## Implementation

This service implements following interfaces:

- [Servicer](../operations/servicer/index.md)

- [Storager](../operations/storager/index.md)

