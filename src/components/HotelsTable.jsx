import React from 'react';
import PropTypes from 'prop-types';
import HotelRaw from './HotelRaw';

const HotelsTable = ({ hotels, onSort }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <th className="hotel-price-column">値段</th>
        <th onClick={() => onSort('reviewAverage') }>レビュー</th>
        <th>レビュー数</th>
        <th>距離</th>
      </tr>
      {hotels.map(hotel => (<HotelRaw key={hotel.id} hotel={hotel} />))}
    </tbody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
  onSort: PropTypes.func.isRequired,
};

HotelsTable.defaultProps = {
  hotels: [],
};

export default HotelsTable;
