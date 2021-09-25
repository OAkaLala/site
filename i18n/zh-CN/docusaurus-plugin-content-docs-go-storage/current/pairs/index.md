---
title: 介绍
sidebar_position: 1
---

`Pair` is a core idea in `go-storage`, which used to carry optional arguments.

There are two kinds of `Pair`:

- Global Pair: Defined in [specs](https://github.com/beyondstorage/specs/blob/master/definitions/pairs.toml), shared across all services.
- System Pair: Defined in service's `service.toml` pairs section, only available in current service.

## Available Pairs

We will document all global pair here and leave system pairs in service's documents.

- [content_md5](./content_md5/)
- [content_type](./content_type/)
- [continuation_token](./continuation_token/)
- [credential](./credential/)
- [endpoint](./endpoint/)
- [expire](./expire/)
- [interceptor](./interceptor/)
- [list_mode](./list_mode/)
- [location](./location/)
- [name](./name/)
- [offset](./offset/)
- [pair_policy](./pair_policy/)
- [multipart_id](./multipart_id/)
- [io_callback](./io_callback/)
- [size](./size/)
- [work_dir](./work_dir/)

## Default Pairs

`go-storage` provides a mechanism to allow user pass default pairs for every operation during `NewServicer` and `NewStorager`.

Any service that supports this mechanism will generate system pairs called `DefaultServicePairs` and `DefaultStoragePairs`:

```go
type DefaultStoragePairs struct {
    CompleteMultipart []Pair
    Create            []Pair
    CreateMultipart   []Pair
    Delete            []Pair
    List              []Pair
    ListMultipart     []Pair
    Metadata          []Pair
    Read              []Pair
    Stat              []Pair
    Write             []Pair
    WriteMultipart    []Pair
}

func WithDefaultStoragePairs(v DefaultStoragePairs) Pair {
    return Pair{
        Key:   pairDefaultStoragePairs,
        Value: v,
    }
}
```

User can use pass default pairs like this:

```go
store, err := s3.NewStorager(
    s3.WithDefaultStoragePairs(s3.DefaultStoragePairs{
        Write: []types.Pair{
            s3.WithStorageClass("STANDARD_IA"),
        },
    }),
)
```

As in example, every call to `Write` will specify the `storage_class` to `STANDARD_IA`.

### Defaultable Pair

`defaultable` property for pair is introduced to set default value for pair, and the pair of operations with the same name will share the default value.

Default pairs will be generated for `defaultable` pairs, and the generated pair for defaultable global pair is still global:

```go
// Defaultable global pair in pairs.
func WithDefualtContentType(v string) Pair {
    return Pair{
        Key:   "enable_content_type",
        Value: v,
    }
}

// Defualtable system pair in service.
func WithDefaultStorageClass(v string) Pair {
    return Pair{
        Key:   "default_storage_class",
        Value: v,
    }
}
```

User can use default pairs like:

```go
store, err := s3.NewStorager(
    s3.WithDefaultStorageClass("STANDARD_IA"),
    pairs.WithDefualtContentType("application/octet-stream"),
)
```

As in example, pairs of operations in the service with the same name `storage_class` or `content_type` will share the default values.

## Feature Pairs

`go-storage` provides a mechanism of userland optional abilities for service during `NewServicer` and `NewStorager`.

Any service that supports this mechanism will generate system pairs called `StorageFeatures` and `ServiceFeatures`:

```go
type StorageFeatures struct {
    LoosePair bool
    VirtualDir bool
}

func WithStorageFeatures(v StorageFeatures) Pair {
    return Pair{
        Key:   "storage_features",
        Value: v,
    }
}
```

Enable feature pairs will be generated for each feature in service:

```go
func WithEnableVirtualDir() Pair {
    return Pair{
        Key:   "enable_virtual_dir",
        Value: true,
    }
}
```

User can enable features like this:

```go
store, err := s3.NewStorager(
    s3.WithStorageFeatures(s3.StorageFeatures{
        VirtualDir:  true,
    }),
)
```

or:

```go
store, err := s3.NewStorager(
    s3.WithEnableVirtualDir(),
)
```

As in the above examples, the service will support simulated dir behavior.
