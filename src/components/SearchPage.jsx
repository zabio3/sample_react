import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import SearchForm from '../containers/SearchForm';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import HotelsTable from './HotelsTable';
import { startSearch } from '../actions/';
import { Row, Col } from 'antd';

class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch(startSearch());
  }

  // トップレベルのElementは一つでなければならない
  render() {
    return (
      <div className="search-page">
        <Row align="middle">
          <Col offset={8} span={8}>
            <h1 className="app-title">ホテル検索</h1>
          </Col>
          <Col>
            <SearchForm history={this.props.history} />
          </Col>
          <Col>
            <div className="result-area">
              <Map location={this.props.geocodeResult.location} />
              <div className="result-right">
                <GeocodeResult
                  address={this.props.geocodeResult.address}
                  location={this.props.geocodeResult.location}
                />
                <h2>ホテル検索結果</h2>
                <HotelsTable />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

SearchPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  geocodeResult: PropTypes.shape({
    address: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  geocodeResult: state.geocodeResult,
});

export default connect(mapStateToProps)(SearchPage);
