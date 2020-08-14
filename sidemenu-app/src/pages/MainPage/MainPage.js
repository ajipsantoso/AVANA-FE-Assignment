import React from 'react';
import Table from '../../components/Table/Table' 
import { connect } from "react-redux";

function MainPage(props) {
  const { tableListData } = props;
  return (
    <div className="MainPage">
      <Table listData={tableListData} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tableListData: state.submenu.menuList
  };
}

export default connect(mapStateToProps)(MainPage);
