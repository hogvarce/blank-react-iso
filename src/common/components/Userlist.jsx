import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { frontloadConnect } from 'react-frontload'
import { fetchUsers } from '@/common/actions';

export class Userlist extends PureComponent {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                <Helmet>
                    <title>Users list</title>
                    <meta property="og:title" content="Users list" />
                </Helmet>
                <span>List of users:</span>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const loadData = async ({ fetchUsers }) => await fetchUsers();


function mapStateToProps(state) {
    return { users: state.users};
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ fetchUsers }, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
    )(
    frontloadConnect(loadData)(Userlist));
