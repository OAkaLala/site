---
title: "2021-36 Weekly Report"
author: "JinnyYi"
author_url: "https://github.com/JinnyYi"
tags: [updates, weekly-report]
---

Hello everyone, here is the weekly report for [BeyondStorage], range from 2021-09-06 to 2021-09-12.

<!--truncate-->

## Here’s what we focused on this week:

### New release

Three more stable services have been released:

- go-service-bos release version 1.0.0
- go-service-hdfs release version 0.2.1
- go-service-obs release version 1.0.0

### Library

This week is the first cleanup week for go-storage. We stopped new feature development of go-storage and focus on bugfix, docs:

- Update README.md for projects.
- Migrate tests in teamcity for non-open source storage services.
- go-storage-example enhancement.
- Clean up issues we are working on and plan to do.
- Behavior specification for path, writing empty file and adopting commitizen are still ongoing.

### Community

- Home page: logo change and current working on align

## Weekly Stats

| | Opened this week | Closed this week |
| ---- | ---- | ---- |
| Issues | 13 | 21 |
| PR's | 54 | 63 |

## [beyond-ctl](https://github.com/beyondstorage/beyond-ctl)

- [@Xuanwo] opened pull request [ci: Implement integration tests](https://github.com/beyondstorage/beyond-ctl/pull/46)

## [beyond-fs](https://github.com/beyondstorage/beyond-fs)

- [@Xuanwo] merged pull request [build(deps): bump go.uber.org/zap from 1.18.1 to 1.19.1](https://github.com/beyondstorage/beyond-fs/pull/22)

## [beyond-tp](https://github.com/beyondstorage/beyond-tp)

- [@zhangdichn] merged pull request [ui: adjust icons and Modify agent](https://github.com/beyondstorage/beyond-tp/pull/153)
- [@tt-haogege] opened issue [[Feat]: we need an agent related interface to display the Agent page](https://github.com/beyondstorage/beyond-tp/issues/155)

## [community](https://github.com/beyondstorage/community)

- [@Xuanwo] opened issue [Weekly report since 2021-08-30](https://github.com/beyondstorage/community/issues/44)
- [@Xuanwo] closed issue [Weekly report since 2021-08-23](https://github.com/beyondstorage/community/issues/43)
- [@Xuanwo] closed issue [Weekly report since 2021-08-30](https://github.com/beyondstorage/community/issues/44)

## [go-service-azblob](https://github.com/beyondstorage/go-service-azblob)

- [@Xuanwo] closed pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.6.0 to 4.7.0](https://github.com/beyondstorage/go-service-azblob/pull/49)
- [@Xuanwo] closed pull request [build(deps): bump github.com/beyondstorage/go-integration-test/v4 from 4.3.0 to 4.4.0](https://github.com/beyondstorage/go-service-azblob/pull/48)
- [@abyss-w] opened pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-azblob/pull/50)
- [@Xuanwo] merged pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-azblob/pull/50)
- [@JinnyYi] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-azblob/pull/51)
- [@Xuanwo] merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-azblob/pull/51)

## [go-service-bos](https://github.com/beyondstorage/go-service-bos)

- [@abyss-w] opened pull request [docs: Add a baget for integration tests and modified README](https://github.com/beyondstorage/go-service-bos/pull/8)
- [@Xuanwo] merged pull request [docs: Add a baget for integration tests and modified README](https://github.com/beyondstorage/go-service-bos/pull/8)
- [@Xuanwo] opened issue [Prepare the first release for bos](https://github.com/beyondstorage/go-service-bos/issues/9)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.6.0 to 4.7.0](https://github.com/beyondstorage/go-service-bos/pull/7)
- [@abyss-w] opened pull request [Bump to version 1.0.0](https://github.com/beyondstorage/go-service-bos/pull/12)
- [@JinnyYi] merged pull request [Bump to version 1.0.0](https://github.com/beyondstorage/go-service-bos/pull/12)
- [@Xuanwo] closed issue [Prepare the first release for bos](https://github.com/beyondstorage/go-service-bos/issues/9)

## [go-service-cos](https://github.com/beyondstorage/go-service-cos)

- [@abyss-w] opened pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-cos/pull/57)
- [@Xuanwo] merged pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-cos/pull/57)
- [@JinnyYi] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-cos/pull/59)
- [@Xuanwo] merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-cos/pull/59)

## [go-service-dropbox](https://github.com/beyondstorage/go-service-dropbox)

- [@JinnyYi] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-dropbox/pull/42)
- [@Xuanwo] merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-dropbox/pull/42)
- [@abyss-w] opened pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-dropbox/pull/43)
- [@Xuanwo] merged pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-dropbox/pull/43)

## [go-service-fs](https://github.com/beyondstorage/go-service-fs)

- [@JinnyYi] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-fs/pull/76)
- [@JinnyYi] opened issue [Fuzzy test for readdir failed](https://github.com/beyondstorage/go-service-fs/issues/77)
- [@Xuanwo] merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-fs/pull/76)

## [go-service-ftp](https://github.com/beyondstorage/go-service-ftp)
 
- [@JinnyYi] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-ftp/pull/25)
- [@Xuanwo] merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-ftp/pull/25)

## [go-service-gcs](https://github.com/beyondstorage/go-service-gcs)

- [@abyss-w] opened pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-gcs/pull/67)
- [@Xuanwo] merged pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-gcs/pull/67)
- [@JinnyYi] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-gcs/pull/68)
- [@Xuanwo] merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-gcs/pull/68)

## [go-service-gdrive](https://github.com/beyondstorage/go-service-gdrive)

- [@abyss-w] opened pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-gdrive/pull/24)
- [@Xuanwo] opened issue [Integration test failed with invalid value](https://github.com/beyondstorage/go-service-gdrive/issues/25)
- [@junaire] opened pull request [fix: specify parentsId of the file](https://github.com/beyondstorage/go-service-gdrive/pull/26)

## [go-service-hdfs](https://github.com/beyondstorage/go-service-hdfs)

- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-integration-test/v4 from 4.2.0 to 4.3.0](https://github.com/beyondstorage/go-service-hdfs/pull/19)
- [@bokket] opened pull request [ci:Fix dependabot automatic update merge error](https://github.com/beyondstorage/go-service-hdfs/pull/23)
- [@Xuanwo] merged pull request [fix: Some error in storage is not handled](https://github.com/beyondstorage/go-service-hdfs/pull/23)
- [@bokket] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-hdfs/pull/24)
- [@Xuanwo] merged pull request [feat: Remove not stable appender implementation](https://github.com/beyondstorage/go-service-hdfs/pull/24)
- [@Xuanwo] merged pull request [build(deps): Bump github.com/beyondstorage/go-integration-test/v4 from 4.3.0 to 4.4.0](https://github.com/beyondstorage/go-service-hdfs/pull/22)
- [@Xuanwo] closed issue [Setup intergration tests ](https://github.com/beyondstorage/go-service-hdfs/issues/4)
- [@Xuanwo] opened issue [setup-hdfs seems unstable](https://github.com/beyondstorage/go-service-hdfs/issues/25)
- [@bokket] opened pull request [ci: Fix host key verification failed while setup hdfs](https://github.com/beyondstorage/go-service-hdfs/pull/26)
- [@Xuanwo] merged pull request [ci: Fix host key verification failed while setup hdfs](https://github.com/beyondstorage/go-service-hdfs/pull/26)
- [@Xuanwo] closed issue [setup-hdfs seems unstable](https://github.com/beyondstorage/go-service-hdfs/issues/25)
- [@bokket] opened pull request [Bump to version v0.1.0](https://github.com/beyondstorage/go-service-hdfs/pull/27)
- [@Xuanwo] merged pull request [Bump to version v0.1.0](https://github.com/beyondstorage/go-service-hdfs/pull/27)
- [@Xuanwo] opened pull request [Bump to version 0.2.0](https://github.com/beyondstorage/go-service-hdfs/pull/28)
- [@Xuanwo] merged pull request [Bump to version 0.2.0](https://github.com/beyondstorage/go-service-hdfs/pull/28)
- [@Xuanwo] opened pull request [ci: Run unit tests on all platform](https://github.com/beyondstorage/go-service-hdfs/pull/29)
- [@Xuanwo] merged pull request [ci: Run unit tests on all platform](https://github.com/beyondstorage/go-service-hdfs/pull/29)
- [@Xuanwo] opened pull request [Bump to version 0.2.1](https://github.com/beyondstorage/go-service-hdfs/pull/30)
- [@Xuanwo] merged pull request [Bump to version 0.2.1](https://github.com/beyondstorage/go-service-hdfs/pull/30)

## [go-service-ipfs](https://github.com/beyondstorage/go-service-ipfs)

- [@JinnyYi] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-ipfs/pull/22)
- [@Xuanwo] merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-ipfs/pull/22)

## [go-service-kodo](https://github.com/beyondstorage/go-service-kodo)

- [@abyss-w] opened pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-kodo/pull/53)
- [@Xuanwo] merged pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-kodo/pull/53)
- [@JinnyYi] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-kodo/pull/54)
- [@Xuanwo] merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-kodo/pull/54)

## [go-service-memory](https://github.com/beyondstorage/go-service-memory)

- [@JinnyYi] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-memory/pull/27)
- [@Xuanwo] merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-memory/pull/27)

## [go-service-minio](https://github.com/beyondstorage/go-service-minio)

- [@JinnyYi] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-minio/pull/25)
- [@Xuanwo] merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-minio/pull/25)
- [@Xuanwo] closed issue [How about implement a setup-minio actions?](https://github.com/beyondstorage/go-service-minio/issues/20)
- [@Xuanwo] closed issue [Service tracking issue for GSP-127: Add ServiceInternel and RequestThrottled Errors](https://github.com/beyondstorage/go-service-minio/issues/7)
- [@Xuanwo] closed issue [Service tracking issue for GSP-86: Add CreateLink Operation](https://github.com/beyondstorage/go-service-minio/issues/8)

## [go-service-obs](https://github.com/beyondstorage/go-service-obs)

- [@abyss-w] opened pull request [docs: Add a baget for integration tests and modified README](https://github.com/beyondstorage/go-service-obs/pull/7)
- [@Xuanwo] merged pull request [docs: Add a baget for integration tests and modified README](https://github.com/beyondstorage/go-service-obs/pull/7)
- [@Xuanwo] merged pull request [chore(deps): Bump github.com/beyondstorage/go-storage/v4 from 4.6.0 to 4.7.0](https://github.com/beyondstorage/go-service-obs/pull/6)
- [@Xuanwo] opened issue [Prepare the first release for obs](https://github.com/beyondstorage/go-service-obs/issues/10)
- [@abyss-w] opened pull request [Bump to version 1.0.0](https://github.com/beyondstorage/go-service-obs/pull/11)
- [@Xuanwo] merged pull request [Bump to version 1.0.0](https://github.com/beyondstorage/go-service-obs/pull/11)
- [@Xuanwo] closed issue [Prepare the first release for obs](https://github.com/beyondstorage/go-service-obs/issues/10)

## [go-service-oss](https://github.com/beyondstorage/go-service-oss)

- [@abyss-w] opened pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-oss/pull/54)
- [@Xuanwo] merged pull request [build(deps): bump github.com/beyondstorage/go-integration-test/v4 from 4.3.0 to 4.4.0](https://github.com/beyondstorage/go-service-oss/pull/53)
- [@Xuanwo] merged pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-oss/pull/54)
- [@JinnyYi] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-oss/pull/55)
- [@Xuanwo] merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-oss/pull/55)

## [go-service-qingstor](https://github.com/beyondstorage/go-service-qingstor)

- [@Xuanwo] merged pull request [feat: Implement StorageHTTPSigner](https://github.com/beyondstorage/go-service-qingstor/pull/88)
- [@abyss-w] opened pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-qingstor/pull/90)
- [@Xuanwo] merged pull request [ci: Cleanup Service Integration Tests](https://github.com/beyondstorage/go-service-qingstor/pull/90)
- [@JinnyYi] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-qingstor/pull/91)
- [@Xuanwo] merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-qingstor/pull/91)

## [go-service-s3](https://github.com/beyondstorage/go-service-s3)

- [@Xuanwo] opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-s3/pull/208)
- [@Xuanwo] merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-s3/pull/208)
- [@Xuanwo] closed issue [Integration tests migrated to teamcity](https://github.com/beyondstorage/go-service-s3/issues/189)
- [@Xuanwo] closed issue [Add docs for all s3 compatible services](https://github.com/beyondstorage/go-service-s3/issues/172)

## [go-service-uss](https://github.com/beyondstorage/go-service-uss)
- [@JinnyYi](https://github.com/JinnyYi) opened pull request [docs: Update README](https://github.com/beyondstorage/go-service-uss/pull/27)
- [@Xuanwo](https://github.com/Xuanwo) merged pull request [docs: Update README](https://github.com/beyondstorage/go-service-uss/pull/27)
- [@Xuanwo](https://github.com/Xuanwo) closed pull request [build(deps): bump github.com/beyondstorage/go-storage/v4 from 4.6.0 to 4.7.0](https://github.com/beyondstorage/go-service-uss/pull/26)

## [go-storage](https://github.com/beyondstorage/go-storage)

- [@Xuanwo] opened issue [1st Cleanup Week: Service Readme](https://github.com/beyondstorage/go-storage/issues/743)
- [@Xuanwo] opened issue [1st Cleanup Week Roadmap](https://github.com/beyondstorage/go-storage/issues/744)
- [@Xuanwo] opened issue [1st Cleanup Week: Service Integration Tests](https://github.com/beyondstorage/go-storage/issues/745)
- [@JinnyYi] closed issue [Tracking issue of GSP-729: Redesign HTTP Signer](https://github.com/beyondstorage/go-storage/issues/731)
- [@Xuanwo] merged pull request [build(deps): bump github.com/pelletier/go-toml from 1.9.3 to 1.9.4](https://github.com/beyondstorage/go-storage/pull/746)
- [@Xuanwo] opened issue [Add zh-Hans version of our README](https://github.com/beyondstorage/go-storage/issues/747)
- [@abyss-w] opened pull request [docs: Add the services bos and obs to the README](https://github.com/beyondstorage/go-storage/pull/748)
- [@Xuanwo] closed issue [Pair map for namespace](https://github.com/beyondstorage/go-storage/issues/711)
- [@Xuanwo] closed issue [Oracle Cloud Storage Service](https://github.com/beyondstorage/go-storage/issues/692)
- [@Xuanwo] closed issue [Allow generate signed url for upload objects](https://github.com/beyondstorage/go-storage/issues/646)
- [@Xuanwo] merged pull request [docs: Add the services bos and obs to the README](https://github.com/beyondstorage/go-storage/pull/748)
- [@JinnyYi] opened pull request [Proposal: Unify Path Behavior](https://github.com/beyondstorage/go-storage/pull/749)
- [@hqc19907228] opened pull request [ add README.zh-CN.md](https://github.com/beyondstorage/go-storage/pull/750)
- [@hqc19907228] closed pull request [ add README.zh-CN.md](https://github.com/beyondstorage/go-storage/pull/750)
- [@abyss-w] opened pull request [Write Empty File Behavior](https://github.com/beyondstorage/go-storage/pull/751)
- [@JinnyYi] opened pull request [Proposal: Adopt commitizen/conventional-commit-types](https://github.com/beyondstorage/go-storage/pull/752)

## [go-storage-example](https://github.com/beyondstorage/go-storage-example)

- [@JinnyYi] opened pull request [Update new services via connection string](https://github.com/beyondstorage/go-storage-example/pull/20)
- [@Xuanwo] merged pull request [Update new services via connection string](https://github.com/beyondstorage/go-storage-example/pull/20)
- [@JinnyYi] opened pull request [Add QuerySignHTTPRead example](https://github.com/beyondstorage/go-storage-example/pull/21)
- [@Xuanwo] merged pull request [Add QuerySignHTTPRead example](https://github.com/beyondstorage/go-storage-example/pull/21)
- [@JinnyYi] opened pull request [Add write example](https://github.com/beyondstorage/go-storage-example/pull/22)
- [@Xuanwo] merged pull request [Add write example](https://github.com/beyondstorage/go-storage-example/pull/22)
- [@JinnyYi] opened pull request [Add list example](https://github.com/beyondstorage/go-storage-example/pull/23)
- [@Xuanwo] closed issue [Add example for List](https://github.com/beyondstorage/go-storage-example/issues/8)
- [@Xuanwo] merged pull request [Add list example](https://github.com/beyondstorage/go-storage-example/pull/23)
- [@JinnyYi] opened pull request [Add iofs example](https://github.com/beyondstorage/go-storage-example/pull/24)
- [@Xuanwo] merged pull request [Add fswrap example](https://github.com/beyondstorage/go-storage-example/pull/24)
- [@Xuanwo] closed issue [Add example for io/fs.FS && httpfs](https://github.com/beyondstorage/go-storage-example/issues/6)
- [@bokket] opened pull request [Add HDFS example](https://github.com/beyondstorage/go-storage-example/pull/25)
- [@Xuanwo] merged pull request [Add HDFS example](https://github.com/beyondstorage/go-storage-example/pull/25)
- [@abyss-w] opened pull request [feat: Add example for bos and obs](https://github.com/beyondstorage/go-storage-example/pull/26)
- [@Xuanwo] merged pull request [feat: Add example for bos and obs](https://github.com/beyondstorage/go-storage-example/pull/26)

## [setup-hdfs](https://github.com/beyondstorage/setup-hdfs)

- [@Xuanwo] opened pull request [ci: Add more version tests](https://github.com/beyondstorage/setup-hdfs/pull/44)
- [@Xuanwo] merged pull request [fix: Host key verification failed while setup hdfs](https://github.com/beyondstorage/setup-hdfs/pull/44)
- [@Xuanwo] opened pull request [Bump to version 0.1.0](https://github.com/beyondstorage/setup-hdfs/pull/45)
- [@Xuanwo] merged pull request [Bump to version 0.1.0](https://github.com/beyondstorage/setup-hdfs/pull/45)

## [site](https://github.com/beyondstorage/site)

- [@Xuanwo] merged pull request [docs: Update docs for default pairs](https://github.com/beyondstorage/site/pull/196)
- [@JinnyYi] opened pull request [blog: Add 2021-09-05 weekly report](https://github.com/beyondstorage/site/pull/220)
- [@Xuanwo] merged pull request [blog: Add 2021-09-05 weekly report](https://github.com/beyondstorage/site/pull/220)
- [@hqc19907228] opened issue [Homepage layout：about the “Current Working On”](https://github.com/beyondstorage/site/issues/222)
- [@tt-haogege] opened pull request [Home page: current working on aligne](https://github.com/beyondstorage/site/pull/223)
- [@Xuanwo]) merged pull request [docs: Add docs for StorageHTTPSigner](https://github.com/beyondstorage/site/pull/191)
- [@Xuanwo] merged pull request [docs: Implement card alike documents index](https://github.com/beyondstorage/site/pull/216)
- [@queenaray928] opened issue [Site‘s footer logo need update](https://github.com/beyondstorage/site/issues/225)
- [@Xuanwo] merged pull request [Home page: current working on aligne](https://github.com/beyondstorage/site/pull/223)
- [@tt-haogege] opened pull request [home page: logo change](https://github.com/beyondstorage/site/pull/226)
- [@Xuanwo] merged pull request [home page: logo change](https://github.com/beyondstorage/site/pull/226)
- [@Xuanwo] closed issue [Homepage layout：about the “Current Working On” and the “document”](https://github.com/beyondstorage/site/issues/222)
- [@Xuanwo] closed issue [Modify site docs projects](https://github.com/beyondstorage/site/issues/180)
- [@bokket] opened pull request [docs: Add docs for HDFS](https://github.com/beyondstorage/site/pull/228)
- [@abyss-w] opened pull request [docs: Add documentation for service bos and obs](https://github.com/beyondstorage/site/pull/229)
- [@Xuanwo] merged pull request [docs: Add documentation for service bos and obs](https://github.com/beyondstorage/site/pull/229)
- [@Xuanwo] merged pull request [docs: Add docs for HDFS](https://github.com/beyondstorage/site/pull/228)
- [@Xuanwo] closed issue [Site‘s footer logo need update](https://github.com/beyondstorage/site/issues/225)
- [@Xuanwo] closed issue [Site homepage adaptation problem adjustment](https://github.com/beyondstorage/site/issues/213)

[BeyondStorage]: https://beyondstorage.io
[@Xuanwo]: https://github.com/Xuanwo
[@zhangdichn]: https://github.com/zhangdichn
[@tt-haogege]: https://github.com/tt-haogege
[@abyss-w]: https://github.com/abyss-w
[@JinnyYi]: https://github.com/JinnyYi
[@junaire]: https://github.com/junaire
[@bokket]: https://github.com/bokket
[@hqc19907228]: https://github.com/hqc19907228
[@queenaray928]: https://github.com/queenaray928
