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
    this.state = {
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
      sortKey: 'price',
    };
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
    this.setState({ sortKey, hotels: sortedHotels(this.state.hotels, sortKey) });
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
              onSort={(sortKey) => this.handleSortKeyChange(sortKey)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
