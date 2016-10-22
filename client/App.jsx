import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500, red500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {AppBar, Tabs, Tab} from 'material-ui';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
    primary1Color: red500,
  },
  appBar: {
    height: 50,
  },
});

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleToggle1() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})} >
            <MenuItem primaryText="Refresh" onTouchTap={this.handleToggle.bind(this,this.state , open)} />
            <MenuItem primaryText="Help" />
          </Drawer>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <AppBar
            title="My AppBar"
            onLeftIconButtonTouchTap={this.handleToggle.bind(this,this.state , open)}
            iconElementRight={
              <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
              </IconMenu>
            } >
          </AppBar>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <RaisedButton
            primary={true}
            label="Button"
            onTouchTap={this.handleToggle.bind(this,this.state , open)} />
        </MuiThemeProvider>
      </div>
    )
  }
}

injectTapEventPlugin();
