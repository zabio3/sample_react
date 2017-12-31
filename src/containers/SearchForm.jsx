import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPlace, startSearch } from '../actions/';
// import Button from 'antd/lib/button';

import { Form, Icon, Input, Button } from 'antd';
import { Row, Col } from 'antd';

const FormItem = Form.Item;
const Search = Input.Search;

const SearchForm = props => (
  /*
  handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/?place=${props.place}`);
    props.startSearch(props.place);
  }
  <input
    type="text"
    value={props.place}
    onChange={(e) => {
      e.preventDefault();
      props.setPlace(e.target.value);
    }}
  />
  <Button type="primary" icon="search" size="large" onClick={
    (e) => {
      e.preventDefault();
      props.history.push(`/?place=${props.place}`);
      props.startSearch(props.place);
    }
  }>検索</Button>

  */
  <div className="search-form">
    <Row align="middle">
      <Col offset={6} span={8}>
        <Form layout="inline" onSubmit={
          (e) => {
            e.preventDefault();
            props.history.push(`/?place=${props.place}`);
            props.startSearch(props.place);
          }
        }>
          <Form.Item>
            <Search
              style={{ width: 400 }}
              placeholder="検索したい場所を入力してください"
              enterButton="検索"
              value={props.place}
              onChange={(e) => {
                e.preventDefault();
                props.setPlace(e.target.value);
              }}
              size="large"
              onClick={
              (e) => {
                  e.preventDefault();
                  props.history.push(`/?place=${props.place}`);
                  props.startSearch(props.place);
                }
              }
            />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </div>
);

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  setPlace: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default connect(
  state => ({
    place: state.place,
  }),
  { setPlace, startSearch },
)(SearchForm);
