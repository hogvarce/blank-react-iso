import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload'
import { fetchAdmins } from '@/common/actions';
import RequireAuth from '@/common/components/hocs/RequireAuth';

export class AdminsList extends PureComponent {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    render() {
        const { admins } = this.props;
        return(
            <div>
                <span>Protected list of admins:</span>
                <ul>
                    {admins.map(admin => (
                        <li key={admin.id}>{admin.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const loadData = async ({ fetchAdmins }) => await fetchAdmins();

function mapStateToProps(state) {
    return { admins: state.admins};
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ fetchAdmins }, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps,
    )(
    frontloadConnect(loadData, {
        onMount: true,
        onUpdate: false
    })(RequireAuth(AdminsList)));
