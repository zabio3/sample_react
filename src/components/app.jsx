import React, { Component } from 'react';
import _ from 'lodash';

import SearchForm from './SearchForm';
import GeoCodeResult from './GeoCodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';

import { geocode } from '../domain/Geocoder';
import { searchHotelByLocation } from '../domain/HotelRepository';

// sortBy 第一引数: ソート対象 , 第二引数: 実行関数 hは一つ一つのホテルで、sortして返却
const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

class App extends Component {
// 親コンポーネントの初期の状態定義
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      address: '日本、〒105-0011 東京都港区芝公園４丁目２−８',
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
      sortKey: 'price',
    };
  }

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

  setErrorMessage(message) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0,
      },
    });
  }

  /* インデントミスると結構動かなくなる */

  handlePlaceSubmit(place) {
    geocode(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK': {
            this.setState({ address, location });
            return searchHotelByLocation(location);
            // break;
          }
          case 'ZERO_RESULTS': {
            this.setErrorMessage('結果が見つかりませんでした');
            break;
          }
          case 'OVER_QUERY_LIMIT': {
            this.setErrorMessage('クエリ数が割り当て量を超えています');
            break;
          }
          case 'REQUEST_DENIED': {
            this.setErrorMessage('リクエストが拒否されています');
            break;
          }
          case 'INVALID_REQUEST': {
            this.setErrorMessage('パラメータが間違っています');
            break;
          }
          case 'UNKNOWN_ERROR': {
            this.setErrorMessage('サーバー エラーでリクエストが処理できませんでした');
            break;
          }
          default: {
            this.setErrorMessage('エラーが発生しました');
          }
        }
        return [];
      })
      .then((hotels) => {
        this.setState({ hotels: sortedHotels(hotels, this.state.sortKey) });
      })
      .catch(() => {
        this.setErrorMessage('通信に失敗しました');
      });
  }

  handleSortKeyChange(sortKey) {
    this.setState({
      sortKey,
      hotels: sortedHotels(this.state.hotels, sortKey),
    });
  }

  // トップレベルのElementは一つでなければならない
  render() {
    return (
      <div className="app">
        <h1 className="app-title">Hotel Search</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <div className="result-area">
          <Map location={this.state.location} />
          <div className="result-right">
            <GeoCodeResult
              address={this.state.address}
              location={this.state.location}
            />
            <h2>ホテル検索結果</h2>
            <HotelsTable
              hotels={this.state.hotels}
              sortKey={this.state.sortKey}
              onSort={(sortKey) => this.handleSortKeyChange(sortKey)}
            />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
