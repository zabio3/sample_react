import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import queryString from 'query-string';

import SearchForm from '../containers/SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
// import HotelsTable from './HotelsTable';

// sortBy 第一引数: ソート対象 , 第二引数: 実行関数 hは一つ一つのホテルで、sortして返却
const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

class SearchPage extends Component {
// 親コンポーネントの初期の状態定義
  constructor(props) {
    super(props);
    this.state = {
      sortKey: 'price',
    };
  }

  getPlaceParam() {
    const params = queryString.parse(this.props.location.search);
    const place = params.place;
    if (place && place.length > 0) {
      return place;
    }
    return null;
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

  handleSortKeyChange(sortKey) {
    this.setState({
      sortKey,
      hotels: sortedHotels(this.state.hotels, sortKey),
    });
  }

  /* インデントミスると結構動かなくなる */
  //handlePlaceSubmit(e) {
  //  e.preventDefault();
  //  this.props.history.push(`/?place=${this.state.place}`);
  //  this.startSearch();
  //}

  // トップレベルのElementは一つでなければならない
  render() {
    return (
      <div className="search-page">
        <h1 className="app-title">Hotel Search</h1>
        <SearchForm />
        <div className="result-area">
          <Map location={this.props.geocodeResult.location} />
          <div className="result-right">
            <GeocodeResult
              address={this.props.geocodeResult.address}
              location={this.props.geocodeResult.location}
            />
            {/*
            <h2>ホテル検索結果</h2>
            <HotelsTable
              hotels={this.state.hotels}
              sortKey={this.state.sortKey}
              onSort={sortKey => this.handleSortKeyChange(sortKey)}
            />
          */}
          </div>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
//  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  geocodeResult: PropTypes.shape({
    address: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
  }).isRequired,
};


const mapStateToProps = state => ({
  geocodeResult: state.geocodeResult,
});

export default connect(mapStateToProps)(SearchPage);
