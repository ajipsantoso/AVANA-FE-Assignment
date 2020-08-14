import React from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
// import styled from 'styled-components';

function AppLayout(props) {
  return (
    <div className="AppLayout">
      <Sidebar />
      <Main>
        {props.children}
      </Main>
    </div>
  );
}


export default AppLayout;
