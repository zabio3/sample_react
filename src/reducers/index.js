export default (state = { place: 'hoge' }, action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      // 純粋関数での更新 Object.assignを使って、マージする
      return Object.assign({}, state, { place: action.place });
    default:
      return state;
  }
};
