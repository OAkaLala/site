---
title: "2021-35 Weekly Report"
author: "JinnyYi"
author_url: "https://github.com/JinnyYi"
tags: [updates, weekly-report]
---

Hello everyone, here is the weekly report for [BeyondStorage], range from 2021-08-30 to 2021-09-05.

<!--truncate-->

## Here’s what we focused on this week:

### New release

- Go-storage release version 4.7.0
- Go-integration-test release version 4.4.0
- Go-service-s3 release version 2.4.0

### Library

- Generate info/functions/Object/operations/pairs/services via Xuanwo/gg in go-storage
- Migrate issues to community for go-storage
- Add defaultable property for Pair, redesign HTTP Signer and deprecate Reacher and expire in go-storage
- Implement StorageHTTPSigner in go-service-s3 and go-service-qingstor, implement StorageHTTPSigner test in go-integration-test
- Implement storager in go-service-azfile and go-service-us3, implement servicer in go-storage-obs

### Application

- Implement remove files and dirs in beyond-ctl
- Support read data from stream, setup integration test in github workflow and add rfc of command line design in beyond-ftp
- Update UI in beyond-tp

### Community

- Implement card alike documents index
- Add docs for gdrive

## Weekly Stats

| | Opened this week | Closed this week |
| ---- | ---- | ---- |
| Issues | 6 | 31 |
| PR's | 28 | 64 |

## [beyond-ctl](https://github.com/beyondstorage/beyond-ctl)

- [@Xuanwo] opened issue [mv](https://github.com/beyondstorage/beyond-ctl/issues/43)
- [@Xuanwo] opened pull request [feat: Implement remove files and dirs support](https://github.com/beyondstorage/beyond-ctl/pull/44)
- [@Xuanwo] merged pull request [feat: Implement remove files and dirs support](https://github.com/beyondstorage/beyond-ctl/pull/44)

## [beyond-ftp](https://github.com/beyondstorage/beyond-ftp)

- [@Xuanwo] merged pull request [test: setup integration test in github workflow](https://github.com/beyondstorage/beyond-ftp/pull/19)
- [@xiongjiwei] opened pull request [rfc: add rfc of command line design](https://github.com/beyondstorage/beyond-ftp/pull/20)
- [@xiongjiwei] opened pull request [transfer: support read data from stream](https://github.com/beyondstorage/beyond-ftp/pull/21)
- [@Xuanwo] merged pull request [transfer: support read data from stream](https://github.com/beyondstorage/beyond-ftp/pull/21)


## [beyond-tp](https://github.com/beyondstorage/beyond-tp)

- [@tt-haogege] opened pull request [ui: replace all icons](https://github.com/beyondstorage/beyond-tp/pull/152)
- [@zhangdichn] merged pull request [ui: replace all icons](https://github.com/beyondstorage/beyond-tp/pull/152)
- [@tt-haogege] opened pull request [ui: adjust icons and Modify agent](https://github.com/beyondstorage/beyond-tp/pull/153)

## [go-coreutils](https://github.com/beyondstorage/go-coreutils)

- [@Xuanwo] merged pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.6.0](https://github.com/beyondstorage/go-coreutils/pull/14)

## [go-integration-test](https://github.com/beyondstorage/go-integration-test)
- [@Xuanwo] merged pull request [storage: Implement StorageHTTPSigner test](https://github.com/beyondstorage/go-integration-test/pull/49)
- [@Xuanwo] closed pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.6.0 to 4.7.0](https://github.com/beyondstorage/go-integration-test/pull/53)
- [@JinnyYi] opened pull request [Bump to version 4.4.0](https://github.com/beyondstorage/go-integration-test/pull/54)
- [@Xuanwo] merged pull request [Bump to version 4.4.0](https://github.com/beyondstorage/go-integration-test/pull/54)

## [go-storage](https://github.com/beyondstorage/go-storage)
- [@JinnyYi] opened pull request [cmd/definitions: Implement GSP-725 Add Defaultable Property for Pair](https://github.com/beyondstorage/go-storage/pull/730)
- [@Xuanwo] merged pull request [cmd/definitions: Implement GSP-725 Add Defaultable Property for Pair](https://github.com/beyondstorage/go-storage/pull/730)
- [@Xuanwo] closed issue [Service/Storage Config Support](https://github.com/beyondstorage/go-storage/issues/723)
- [@Xuanwo] closed issue [What error should be return if input reader is short than expected?](https://github.com/beyondstorage/go-storage/issues/715)
- [@Xuanwo] closed issue [How to pass `partIndex` to `QuerySignHTTP` for `WriteMultipart`?](https://github.com/beyondstorage/go-storage/issues/726)
- [@Xuanwo] closed issue [proposal: Adopt  commitizen/conventional-commit-types ](https://github.com/beyondstorage/go-storage/issues/695)
- [@Xuanwo] closed issue [Split local function and function won‘t return error](https://github.com/beyondstorage/go-storage/issues/688)
- [@Xuanwo] closed issue [Specify the behavior of Path](https://github.com/beyondstorage/go-storage/issues/649)
- [@Xuanwo] closed issue [Split all pakcges under `pkg/` into seprate repos](https://github.com/beyondstorage/go-storage/issues/693)
- [@Xuanwo] closed issue [Tracking issue for GSP-139: Split Specs](https://github.com/beyondstorage/go-storage/issues/627)
- [@Xuanwo] closed issue [Hailstorm: Disaggregated Compute and Storage for Distributed LSM-based Databases](https://github.com/beyondstorage/go-storage/issues/648)
- [@Xuanwo] closed issue [OCI Distribution](https://github.com/beyondstorage/go-storage/issues/647)
- [@Xuanwo] closed issue [Rescue Mission for Sci-Hub and Open Science](https://github.com/beyondstorage/go-storage/issues/643)
- [@Xuanwo] closed issue [Write/Read Only Storage Services](https://github.com/beyondstorage/go-storage/issues/641)
- [@Xuanwo] closed issue [Idea: S3/GCS service based of go-storage](https://github.com/beyondstorage/go-storage/issues/639)
- [@Xuanwo] closed issue [Idea: S3/GCS proxy based of go-storage](https://github.com/beyondstorage/go-storage/issues/638)
- [@Xuanwo] closed issue [Idea: Dapr Components State Stores](https://github.com/beyondstorage/go-storage/issues/636)
- [@Xuanwo] closed issue [Idea: Support copy/move/fetch big file](https://github.com/beyondstorage/go-storage/issues/637)
- [@Xuanwo] closed issue [Idea: Unified timeout and retry behavior](https://github.com/beyondstorage/go-storage/issues/635)
- [@Xuanwo] closed issue [Idea: Storage Configuration Support](https://github.com/beyondstorage/go-storage/issues/634)
- [@Xuanwo] closed issue [IPFS repo that based on go-storage](https://github.com/beyondstorage/go-storage/issues/631)
- [@Xuanwo] closed issue [proposal: Network/IO Error should be expected so that we can retry them](https://github.com/beyondstorage/go-storage/issues/629)
- [@Xuanwo] closed issue [Errors in pkg/* do not comply with GSP-47 & GSP-51](https://github.com/beyondstorage/go-storage/issues/575)
- [@Xuanwo] closed issue [Specify the behavior for writing empty file](https://github.com/beyondstorage/go-storage/issues/678)
- [@Xuanwo] closed issue [idea: Object Version support](https://github.com/beyondstorage/go-storage/issues/659)
- [@Xuanwo] closed issue [Allow user fetch the native support for storage](https://github.com/beyondstorage/go-storage/issues/684)
- [@Xuanwo] closed issue [Add storage statistics support](https://github.com/beyondstorage/go-storage/issues/626)
- [@Xuanwo] closed issue [Idea: Notification (CDC) Support](https://github.com/beyondstorage/go-storage/issues/633)
- [@Xuanwo] closed issue [Tracking issues of GSP-700: Config Features and DefaultPairs via Connetion String](https://github.com/beyondstorage/go-storage/issues/704)
- [@JinnyYi] closed issue [Tracking issue for GSP-706: Support HTTP Signer](https://github.com/beyondstorage/go-storage/issues/707)
- [@JinnyYi] opened issue [Tracking issue of GSP-729: Redesign HTTP Signer](https://github.com/beyondstorage/go-storage/issues/731)
- [@Xuanwo] merged pull request [GSP-729: Redesign HTTP Signer](https://github.com/beyondstorage/go-storage/pull/729)
- [@JinnyYi] opened pull request [definitions: Implement GSP-729 Redesign HTTP Signer](https://github.com/beyondstorage/go-storage/pull/732)
- [@Xuanwo] merged pull request [definitions: Implement GSP-729 Redesign HTTP Signer](https://github.com/beyondstorage/go-storage/pull/732)
- [@xiongjiwei] opened issue [use path to append data](https://github.com/beyondstorage/go-storage/issues/733)
- [@Xuanwo] closed issue [Tracking issue of GSP-725: Add Defaultable Property for Pair](https://github.com/beyondstorage/go-storage/issues/727)
- [@JinnyYi] opened pull request [definitions: Deprecate Reacher](https://github.com/beyondstorage/go-storage/pull/734)
- [@Xuanwo] merged pull request [definitions: Deprecate Reacher and expire](https://github.com/beyondstorage/go-storage/pull/734)
- [@JinnyYi] opened pull request [docs/rfc: Remove pair declare description for GSP-729](https://github.com/beyondstorage/go-storage/pull/735)
- [@Xuanwo] merged pull request [docs/rfc: Remove pair declare description for GSP-729](https://github.com/beyondstorage/go-storage/pull/735)
- [@JinnyYi] opened pull request [Bump to version 4.7.0](https://github.com/beyondstorage/go-storage/pull/736)
- [@Xuanwo] merged pull request [Bump to version 4.7.0](https://github.com/beyondstorage/go-storage/pull/736)
- [@JinnyYi] merged pull request [feat: Use gg to generate code for pairs](https://github.com/beyondstorage/go-storage/pull/728)
- [@Xuanwo] opened pull request [feat: Generate info via Xuanwo/gg](https://github.com/beyondstorage/go-storage/pull/737)
- [@Xuanwo] merged pull request [feat: Generate info via Xuanwo/gg](https://github.com/beyondstorage/go-storage/pull/737)
- [@Xuanwo] opened pull request [feat: Generate Object via Xuanwo/gg](https://github.com/beyondstorage/go-storage/pull/738)
- [@Xuanwo] merged pull request [feat: Generate Object via Xuanwo/gg](https://github.com/beyondstorage/go-storage/pull/738)
- [@Xuanwo] opened pull request [feat: Generate operations via Xuanwo/gg](https://github.com/beyondstorage/go-storage/pull/739)
- [@Xuanwo] merged pull request [feat: Generate operations via Xuanwo/gg](https://github.com/beyondstorage/go-storage/pull/739)
- [@Xuanwo] opened pull request [feat: Generate functions via Xuanwo/gg](https://github.com/beyondstorage/go-storage/pull/740)
- [@Xuanwo] merged pull request [feat: Generate functions via Xuanwo/gg](https://github.com/beyondstorage/go-storage/pull/740)
- [@jiaming-he] opened issue [Error uploading path with special characters](https://github.com/beyondstorage/go-storage/issues/741)
- [@jiaming-he] closed issue [Error uploading path with special characters](https://github.com/beyondstorage/go-storage/issues/741)
- [@jiaming-he] closed issue [Error uploading path with special characters](https://github.com/beyondstorage/go-storage/issues/741)
- [@Xuanwo] opened pull request [feat: Generate services via Xuanwo/gg](https://github.com/beyondstorage/go-storage/pull/742)

## [go-service-azfile](https://github.com/beyondstorage/go-service-azfile)
- [@abyss-w] opened pull request [chore: Rename the package](https://github.com/beyondstorage/go-service-azfile/pull/1)
- [@Xuanwo] merged pull request [chore: Rename the package](https://github.com/beyondstorage/go-service-azfile/pull/1)
- [@abyss-w] opened pull request [feat: Initial Implementation of Storager](https://github.com/beyondstorage/go-service-azfile/pull/2)

## [go-service-bos](https://github.com/beyondstorage/go-service-bos)
- [@JinnyYi] merged pull request [feat:Initial implementation of Servicer](https://github.com/beyondstorage/go-service-bos/pull/4)
- [@Xuanwo] closed pull request [build(deps): bump github.com/baidubce/bce-sdk-go from 0.9.85 to 0.9.86](https://github.com/beyondstorage/go-service-bos/pull/6)

## [go-service-cos](https://github.com/beyondstorage/go-service-cos)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-service-cos/pull/52)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-service-cos/pull/54)

## [go-service-dropbox](https://github.com/beyondstorage/go-service-dropbox)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-service-dropbox/pull/38)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-service-dropbox/pull/39)

## [go-service-example](https://github.com/beyondstorage/go-service-example)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-service-example/pull/16)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-service-example/pull/17)

## [go-service-gcs](https://github.com/beyondstorage/go-service-gcs)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-service-gcs/pull/60)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-integration-test/v4 from 4.2.0 to 4.3.0](https://github.com/beyondstorage/go-service-gcs/pull/54)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-service-gcs/pull/61)

## [go-service-hdfs](https://github.com/beyondstorage/go-service-hdfs)
- [@Xuanwo] merged pull request [feat: Set up integration tests](https://github.com/beyondstorage/go-service-hdfs/pull/21)

## [go-service-kodo](https://github.com/beyondstorage/go-service-kodo)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-service-kodo/pull/49)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-service-kodo/pull/50)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-integration-test/v4 from 4.2.0 to 4.3.0](https://github.com/beyondstorage/go-service-kodo/pull/48)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-endpoint from 1.0.1 to 1.1.0](https://github.com/beyondstorage/go-service-kodo/pull/46)

## [go-service-memory](https://github.com/beyondstorage/go-service-memory)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-service-memory/pull/24)

## [go-service-obs](https://github.com/beyondstorage/go-service-obs)
- [@Xuanwo] merged pull request [feat: Setup Integration Test](https://github.com/beyondstorage/go-service-obs/pull/4)
- [@abyss-w] opened pull request [feat: Initial Implementation of Servicer](https://github.com/beyondstorage/go-service-obs/pull/5)
- [@JinnyYi] merged pull request [feat: Initial Implementation of Servicer](https://github.com/beyondstorage/go-service-obs/pull/5)

## [go-service-ocios](https://github.com/beyondstorage/go-service-ocios)
- [@Xuanwo] merged pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-service-ocios/pull/1)
- [@Xuanwo] merged pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-service-ocios/pull/2)

## [go-service-onedrive](https://github.com/beyondstorage/go-service-onedrive)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-service-onedrive/pull/13)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-service-onedrive/pull/14)

## [go-service-qingstor](https://github.com/beyondstorage/go-service-qingstor)
- [@JinnyYi] opened pull request [feat: Implement StorageHTTPSigner](https://github.com/beyondstorage/go-service-qingstor/pull/88)

## [go-service-s3](https://github.com/beyondstorage/go-service-s3)
- [@Xuanwo] merged pull request [Implement GSP-729 Redesign HTTP Signer](https://github.com/beyondstorage/go-service-s3/pull/191)
- [@JinnyYi] opened pull request [Bump to version 2.4.0](https://github.com/beyondstorage/go-service-s3/pull/206)
- [@Xuanwo] merged pull request [Bump to version 2.4.0](https://github.com/beyondstorage/go-service-s3/pull/206)

## [go-service-us3](https://github.com/beyondstorage/go-service-us3)
- [@abyss-w] opened pull request [chore: Rename the package](https://github.com/beyondstorage/go-service-us3/pull/2)
- [@Xuanwo] merged pull request [chore: Rename the package](https://github.com/beyondstorage/go-service-us3/pull/2)
- [@Xuanwo] merged pull request [Bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-service-us3/pull/1)
- [@abyss-w] opened pull request [feat: Initial Implementation of Storager](https://github.com/beyondstorage/go-service-us3/pull/3)
- [@abyss-w] opened issue [US3 Consider temporary postponement of realization](https://github.com/beyondstorage/go-service-us3/issues/4)
- [@Xuanwo] closed pull request [feat: Initial Implementation of Storager](https://github.com/beyondstorage/go-service-us3/pull/3)

## [go-service-uss](https://github.com/beyondstorage/go-service-uss)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-service-uss/pull/24)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-service-uss/pull/25)

## [go-service-webdav](https://github.com/beyondstorage/go-service-webdav)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-service-webdav/pull/10)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-service-webdav/pull/11)

## [go-service-zip](https://github.com/beyondstorage/go-service-zip)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.4.0 to 4.5.0](https://github.com/beyondstorage/go-service-zip/pull/8)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-service-zip/pull/9)

## [go-storage-example](https://github.com/beyondstorage/go-storage-example)
- [@junaire] opened pull request [feat: add example for gdrive](https://github.com/beyondstorage/go-storage-example/pull/18)

## [go-stream](https://github.com/beyondstorage/go-stream)
- [@Xuanwo] closed pull request [build(deps): Bump github.com/Xuanwo/go-bufferpool from 0.1.0 to 0.2.0](https://github.com/beyondstorage/go-stream/pull/13)
- [@Xuanwo] closed pull request [build(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.5.0 to 4.6.0](https://github.com/beyondstorage/go-stream/pull/14)

## [setup-hdfs](https://github.com/beyondstorage/setup-hdfs)
- [@Xuanwo] merged pull request [build(deps-dev): Bump jest from 27.0.6 to 27.1.0](https://github.com/beyondstorage/setup-hdfs/pull/42)
- [@Xuanwo] merged pull request [build(deps-dev): Bump typescript from 4.3.5 to 4.4.2](https://github.com/beyondstorage/setup-hdfs/pull/41)
- [@Xuanwo] merged pull request [build(deps-dev): Bump @types/node from 16.7.4 to 16.7.6](https://github.com/beyondstorage/setup-hdfs/pull/39)

## [site](https://github.com/beyondstorage/site)
- [@Xuanwo] merged pull request [build(deps): Bump @docusaurus/core from 2.0.0-beta.4 to 2.0.0-beta.5](https://github.com/beyondstorage/site/pull/207)
- [@Xuanwo] merged pull request [build(deps): Bump @docusaurus/preset-classic from 2.0.0-beta.4 to 2.0.0-beta.5](https://github.com/beyondstorage/site/pull/208)
- [@Prnyself] opened pull request [blog: Add 2021-08-29 weekly report](https://github.com/beyondstorage/site/pull/210)
- [@Xuanwo] merged pull request [blog: Add 2021-08-29 weekly report](https://github.com/beyondstorage/site/pull/210)
- [@tt-haogege] opened pull request [Docs index](https://github.com/beyondstorage/site/pull/212)
- [@queenaray928] opened issue [Site homepage adaptation problem adjustment](https://github.com/beyondstorage/site/issues/213)
- [@junaire] opened pull request [docs: add docs for gdrive](https://github.com/beyondstorage/site/pull/214)
- [@Xuanwo] merged pull request [docs: add docs for gdrive](https://github.com/beyondstorage/site/pull/214)
- [@tt-haogege] closed pull request [docs: Implement card alike documents index](https://github.com/beyondstorage/site/pull/212)
- [@tt-haogege] opened pull request [docs: Implement card alike documents index](https://github.com/beyondstorage/site/pull/216)

[BeyondStorage]: https://beyondstorage.io
[@Xuanwo]: https://github.com/Xuanwo
[@xiongjiwei]: https://github.com/xiongjiwei
[@tt-haogege]: https://github.com/tt-haogege
[@zhangdichn]: https://github.com/zhangdichn
[@JinnyYi]: https://github.com/JinnyYi
[@jiaming-he]: https://github.com/jiaming-he
[@abyss-w]: https://github.com/abyss-w
[@junaire]: https://github.com/junaire
[@Prnyself]: https://github.com/Prnyself
[@queenaray928]: https://github.com/queenaray928
