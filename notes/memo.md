memo
===

### 動機

react + reduxのテストとして、google geolocationのapiを使った簡単なwebページ作成


```
# publicにbundle.js吐き出す
./node_modules/.bin/webpack

# atom plugin install (atom shell)
 apm install es6-javascript intentions busy-signal linter-ui-default linter linter-eslint
```

- atomの再リロード
  - control + option + command + l

#### Errorメモ

```
Each child in an array or iterator should have a unique "key" prop. Check the render method of `HotelsTable`
```

配列やイテレータには、キーをつけろと。
Reactの仕組み上のエラー。
render()が走る度に、仮想DOMを構築するが、前の仮想DOMの状態を記憶しておき、前回のとの差分のみを反映させる。
テーブル上で、IDが振られていないと要素を消去した際に、要素を詰める動きが発生し余計な処理がかかる。

 - 例. 3つしかない要素で、2こ目の要素を消去した際に、2こ目は消去して、3こ目を2つ目に入れて、3つ目の要素も消去すると。
