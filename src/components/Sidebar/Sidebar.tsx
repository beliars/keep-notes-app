import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './Sidebar.scss';
import { ApplicationState } from '../../redux/application/states';
import { RootState } from '../../redux/store';

interface StateProps {
  application: ApplicationState,
}

type Props = StateProps;

class Sidebar extends Component<Props> {
  
  render() {
    const {isShowSidebar} = this.props.application;
    return (
      <div className={classNames('app-sidebar', isShowSidebar ? 'open' : 'close')}>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  application: state.application,
});

export default connect(mapStateToProps)(Sidebar);
