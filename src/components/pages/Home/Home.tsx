import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './Home.scss';
import { ApplicationState } from '../../../redux/application/states';
import { RootState } from '../../../redux/store';

interface StateProps {
  application: ApplicationState,
}

type Props = StateProps;

class Home extends Component<Props> {
  
  render() {
    const {isShowSidebar} = this.props.application;
    return (
      <div className={classNames('content-page', 'home-page', isShowSidebar ? 'sidebar-is-opened' : 'sidebar-is-closed')}>
        Home page
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  application: state.application,
});

export default connect(mapStateToProps)(Home);