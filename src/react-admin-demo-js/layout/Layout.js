import React from 'react';
import { Layout, Sidebar } from 'react-admin';
import AppBar from './AppBar';

export default props => {
    return (
        <Layout
        style={{marginTop: "0px"}}
            {...props}
            appBar={AppBar}
        />
    );
};
