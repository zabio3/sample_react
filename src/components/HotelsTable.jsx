import React from 'react';
import PropTypes from 'prop-types';
import HotelRaw from './HotelRaw';
import HotelsClickableTh from './HotelsClickableTh';
import _ from 'lodash';
import { connect } from 'react-redux';

const HotelsTable = ({ hotels }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <HotelsClickableTh
          label="値段"
          sortKey="price"
        />
        <HotelsClickableTh
          label="レビュー"
          sortKey="reviewAverage"
        />
        <HotelsClickableTh
          label="レビュー数"
          sortKey="reviewCount"
        />
        <HotelsClickableTh
          label="距離"
          sortKey="distance"
        />
      </tr>
      {hotels.map(hotel => (<HotelRaw key={hotel.id} hotel={hotel} />))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

HotelsTable.defaultProps = {
  hotels: [],
};

// sortBy 第一引数: ソート対象 , 第二引数: 実行関数 hは一つ一つのホテルで、sortして返却
const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

export default connect(
  state => ({
    hotels: sortedHotels(state.hotels, state.sortKey),
  }),
)(HotelsTable);
