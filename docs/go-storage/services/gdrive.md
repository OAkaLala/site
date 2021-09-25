[Gdrive](https://www.google.com/drive/)

## Project

<https://github.com/beyondstorage/go-service-gdrive>

## Config

### Storager

#### Available Pairs

| Name                               | Required | Comments                |
|------------------------------------|----------|-------------------------|
| [name](../pairs/credential.md)     | Y        | name(whatever you want) |
| [credential](../pairs/credential.md) | Y      | support `base64` and `file` protocol: `base64` is the base64 of token content, `file` is the absolute path to token file.|
| [work_dir](../pairs/work_dir.md)   | N        | work dir                |

## Examples

Init storager (see [this page](../operations/index.md#how-to-initialize-a-servicerstorager) for details)

```go
import (
    _ "github.com/beyondstorage/go-service-gdrive"
    ps "github.com/beyondstorage/go-storage/v4/pairs"
    "github.com/beyondstorage/go-storage/v4/services"
)

store, err := services.NewStoragerFromString("gdrive://?name=<a_meaningful_name>&credential=file:<abs_path_of_credential>")

if err != nil {
	panic("gdrive new storage fail!")
}
```

## Implementation

This service implements following interfaces:

- [Storager](../operations/storager/index.md)
