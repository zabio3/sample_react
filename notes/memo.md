memo
===

### 動機

reactとreduxは触ったことがなかったため。
react + reduxのテストとして、いくつかapiを使った簡単なwebページ作成


```
# publicにbundle.js吐き出す
./node_modules/.bin/webpack

# atom plugin install (atom shell)
 apm install es6-javascript intentions busy-signal linter-ui-default linter linter-eslint
```

- atomの再リロード
  - control + option + command + l

- eslint-disable-next-line
  - これを入れると次のerrorを無視してくれる

- ライフサイクルメソッド
  - React側で様々な要素を用意していて、自分で作成しているコンポーネント上に実装しておくと、React側がいいタイミングで勝手に呼んでくれる
    App.jsxに7このライフサイクルがどのように呼ばれているのか確認可能なようにconsole.log

- react routerの動き
  - history apiをreact routerが常に監視していて、遷移したことがhistory apiに通知され、それを受けてReact Routerが新しいコンポーネントをブラウザに返却させる。ブラウザの中で画面遷移が回すことで、サーバーに毎回リクエストを飛ばす必要がなくなる。(シングルページアプリケーション)。
  最初のリクエストでとってくる量が多くなるため、調整が必要。

```
/*
「マウントされる直前に1回だけ呼ばれる」
- 初期化処理を行うのに適している
- コンポーネントがDOMツリーに追加される前に1度だけ呼ばれる
- このメソッド内でsetstate()するとrender時にまとめて行われる
*/
componentWillMount() {
  console.log('componentWillMount');
}

/*
「マウントされた直後に1回だけ呼ばれる」
- DOMに関わる初期処理を行いたい時に便利
- コンポーネントがDOMツリーに追加された状態で呼ばれる
*/
componentDidMount() {
  console.log('componentDidMount');
}

/*
「コンポーネントがプロパティの値を受けるときに呼ばれる」
- プロパティが更新されるときに呼ばれる
- 親コンポーネントのStateがPropsとして渡されていて、その変化で(表示以外で)何かしたいときに便利
*/
componentWillReceiveProps() {
  console.log('componentWillReceiveProps');
}

/*
「コンポーネントを更新してもいいかどうかの判断を行う」
- 戻り値は「True」または「False」
- 無駄な処理を無くし、パフォーマンスの向上を行うときに便利
*/
shouldComponentUpdate() {
  console.log('shouldComponentUpdate');
  return true;
}

/*
「コンポーネントが更新される前に呼ばれる」
- shouldComponentの戻り値がtrueの場合呼ばれる
*/
componentWillUpdate() {
  console.log('componentWillUpdate');
}

/*
「コンポーネントが更新された後に呼ばれる」
- DOMの変化にフックして何かしたい場合に使うと便利
*/
componentDidUpdate() {
  console.log('componentDidUpdate');
}

/*
「コンポーネントがアンマウントする前に呼ばれる」
- コンポーネントがDOMから削除される時に呼ばれる
- Timerの処理やDOMのイベントを解除するときはここで処理をかいておく
*/
componentWillUnmount() {
  console.log('componentWillUnmount');
}

```

 - [react-router](https://reacttraining.com/react-router/web/guides/philosophy)

### flex / redux

flexは、考え方の名前。
viewから、stateのオブジェクトを切り離し、イベントに当たる部分は、actionというもので切り離し、
切り離した上で、アクションを発行していき、store(state)を更新していく。
storeをサブスクライブしているviewが自身を更新していく。
要素を分割するため、大規模開発に向いた考え方だと。

reduxは、ライブラリ。
  - single source of truth
    storeを複数作るのではなく、一つのstoreに全てを管理させようと。
  - state is read-only
    stateの上書きは、必ずactionを発行してから更新すること。
  - change are mode with pure functions
    変更は純粋関数を利用すること。
    reducerと呼ばれるものが、純粋関数にあたる。

#### Errorメモ

```
Each child in an array or iterator should have a unique "key" prop. Check the render method of `HotelsTable`
```

配列やイテレータには、キーをつけろと。
Reactの仕組み上のエラー。
render()が走る度に、仮想DOMを構築するが、前の仮想DOMの状態を記憶しておき、前回のとの差分のみを反映させる。
テーブル上で、IDが振られていないと要素を消去した際に、要素を詰める動きが発生し余計な処理がかかる。

 - 例. 3つしかない要素で、2こ目の要素を消去した際に、2こ目は消去して、3こ目を2つ目に入れて、3つ目の要素も消去すると。


```
do not use setstate in componentdidmount
```
componentdidmount の後に、setStateを行うとrenderが2回呼ばれてしまう。
また、propertyやlayoutを壊す可能性があると。
rendorが非同期で走っていて、ぶつかる可能性もある。

 - [Prevent usage of setState in componentDidMount (react/no-did-mount-set-state)](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md)
