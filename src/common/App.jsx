import React from 'react';
import { frontloadConnect } from 'react-frontload'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '@/common/components/Header';
import { fetchCurrentUser } from '@/common/actions';

const App = ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
);

const loadData = async ({ fetchCurrentUser }) => await fetchCurrentUser();

const mapDispatchToProps = dispatch =>
    bindActionCreators({ fetchCurrentUser }, dispatch);

export default connect(
    null, mapDispatchToProps
)(
    frontloadConnect(loadData, {
        onMount: true,
        onUpdate: false
    })(App)
);
