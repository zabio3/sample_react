import React from 'react';
import PropTypes from 'prop-types';

import HotelRaw from './HotelRaw';

const HotelsTable = ({ hotels }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
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

export default HotelsTable;
