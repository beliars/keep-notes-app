import React, {Component} from 'react';

import './Trash.scss';
import Header from '../../components/Header/Header';

export default class Trash extends Component {
  render() {
    return (
      <div className="trash-page">
        <Header/>
        Trash page
      </div>
    );
  }
}