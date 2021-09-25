[Hadoop Distributed File System(HDFS)](https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html#Introduction)

## Project

<https://github.com/beyondstorage/go-service-hdfs>

## Config

### Storager

#### Available Pairs

| Name | Required | Comments |
| ---- | -------- | -------- |
| [endpoint](go-storage/pairs/endpoint.md) | Y | endpoint |
| [work_dir](go-storage/pairs/work_dir.md) | N | work dir |

#### Examples

Init storager (see [this page](go-storage/operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
    _ "github.com/beyondstorage/go-service-hdfs"
    ps "github.com/beyondstorage/go-storage/v4/pairs"
    "github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStoragerFromString("hdfs:///<work_dir>?endpoint=tcp:<host>:<port>>") // endpoint example: tcp:127.0.0.1:9000
if err != nil {
    log.Fatalf("ipfs new service: %v", err)
}

// New storager from pair
store , err:= services.NewStorager("hdfs",
    ps.WithWorkDir("<path>"),
    ps.WithEndpoint("tcp:<host>:<port>"),
)
if err != nil {
    log.Fatalf("hdfs new storager: %v", err)
}
```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)

- [Mover](../operations/move.md)