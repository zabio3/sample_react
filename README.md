geolocation_search
===

[![CircleCI](https://circleci.com/gh/zabio3/geolocation_search.svg?style=svg)](https://circleci.com/gh/zabio3/geolocation_search)

react + reduxでのテストのために作成したgeolocationとホテル検索APIを組み合わせた簡単なwebページ

## Requirement

|  | Version |
| -------- | -------- |
| yarn     | 1.3.2    |
| react    | 15.6.1    |
|[react-google-maps](https://www.google.co.jp/search?q=react+google+maps&oq=react+google+maps&aqs=chrome..69i57j69i60l2j0l3.3028j0j7&sourceid=chrome&ie=UTF-8) | 9.4.3  |

## Usage

#### 事前設定
  - config.template.envをCopyして、config.envを作成。
  - RAKUTEN_APP_IDを設定(config.env)。

start
```
yarn run start
```
#### Memo
 - [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/intro?hl=ja)
 - [ホテル検索](https://webservice.rakuten.co.jp/api/hoteldetailsearch/)
 - [memo](notes/memo.md)

## Author
  - [zabio3](https://github.com/zabio3)

## License
  - [MIT](http://www.opensource.org/licenses/mit-license.php)
