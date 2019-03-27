import React, {Component} from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './Trash.scss';
import { ApplicationState } from '../../../redux/application/states';
import { RootState } from '../../../redux/store';

interface StateProps {
  application: ApplicationState,
}

type Props = StateProps;

class Trash extends Component<Props> {
  
  render() {
    const {isShowSidebar} = this.props.application;
    return (
      <div className={classNames('content-page', 'trash-page', isShowSidebar ? 'sidebar-is-opened' : 'sidebar-is-closed')}>
        Trash page
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  application: state.application,
});

export default connect(mapStateToProps)(Trash);