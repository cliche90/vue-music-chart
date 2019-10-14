# vue-music-chart [![Build Status](https://travis-ci.com/cliche90/vue-music-chart.svg?branch=master)](https://travis-ci.com/cliche90/vue-music-chart)


## Prerequisite

- docker 19.03.03+
- docker-compose 1.24+
- node v10+

## 초기화

```bash
$ lerna clean
$ lerna bootstrap
```

## Docker Images 빌드

> `vue-music-chart` 는 `mongo` 이미지와 `node:10`를 base 로 한 2개의 이미지를 빌드하여 사용합니다.

```bash
$ cd vue-music-chart
$ npm run build-image
```

- 빌드되는 Docker Images 이름
    - `chart-crawler:latest`
    - `web-music-player`

## Docker Containers 실행
```bash
$ cd vue-music-chart
$ docker-compose up -d
```

## 기본 서비스 Port
- `3000`