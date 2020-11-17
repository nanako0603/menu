import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Toolbar, ToolbarButton, Icon } from "react-onsenui";
import {notification} from 'onsenui';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.renderToolbar = this.renderToolbar.bind(this);
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
      </Page>
    );
  }

  renderToolbar() {
return (
<Toolbar>
<div className="left">
<ToolbarButton onClick={this.props.show}>
<Icon icon="md-menu" />
</ToolbarButton>
</div>
<div className="center">ページ１</div>
</Toolbar>
);
}

}

