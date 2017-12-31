import React from 'react';
import PropTypes from 'prop-types';
import HotelRaw from './HotelRaw';
import HotelsClickableTh from './HotelsClickableTh';
import _ from 'lodash';
import { connect } from 'react-redux';

import { Table, Icon, Divider } from 'antd';

const columns = [{
  title: '画像',
  dataIndex: 'thumbUrl',
  key: 'thumbUrl',
  render: thumbUrl => <img src={thumbUrl} />,
}, {
  title: 'ホテル名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '値段',
  dataIndex: 'price',
  key: 'price',
  // sorter: (price) => sortKey(price),
  sorter: (a, b) => a.price - b.price,
  sortOrder: true,
  // sortOrder: this.state.sortedInfo.columnKey === 'price' && this.state.sortedInfo.order,
}, {
  title: 'レビュー',
  dataIndex: 'reviewAverage',
  key: 'reviewAverage',
  sorter: (a, b) => a.reviewAverage - b.reviewAverage,
  sortOrder: true,
}, {
  title: 'レビュー数',
  dataIndex: 'reviewCount',
  key: 'reviewCount',
  sorter: (a, b) => a.reviewCount - b.reviewCount,
  sortOrder: true,
}, {
  title: '距離',
  dataIndex: 'distance',
  key: 'distance',
  sorter: (a, b) => a.distance - b.distance,
  sortOrder: true,
},
];

/*
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];
*/

const HotelsTable = ({ hotels }) => (
  <Table columns={columns} dataSource={hotels} />
  /*
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
  */
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
