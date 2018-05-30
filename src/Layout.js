import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import Mapa from './Mapa';
import Listado from './Listado';
import Zonas from './Zonas';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import BrowserDetection from 'react-browser-detection';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#ffca28",
    accent1Color: "#616161"
  }
});

class Layout extends Component {

  render() {

   const zonas = this.props.zones ? (
      <Zonas
        resultlist={this.props.zones}
        filterDistributors={this.props.filterDistributors} />
    ) : (
        <div style={{ marginTop: '25%', marginLeft: '35%' }}><CircularProgress size={60} thickness={7} /></div>// should add a preloader or transition
      );
    //load map for large devices
    var mapa = this.props.dataLoaded ? (
      <Mapa filterDistributors={this.props.filterDistributors} mapaRoute={this.props.mapaRoute} />
    ) : (
        <div style={{ marginTop: '25%', marginLeft: '35%' }}><CircularProgress size={60} thickness={7} /></div>
      );

    const lista = this.props.filteredResults ? (
      <Listado resultlist={this.props.filteredResults} currentzone={this.props.currentZone} />
    ) : (
        '' // should add a preloader or transition fx
      );

    const browserHandler = {
      default: () => mapa,
      ie: () => zonas,
      edge: () => zonas,
    };

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          {this.props.dataLoaded}
          <div className="row products">
            <div className="col-md-6 col-sm-7 hidden-xs">
              <BrowserDetection>
                {browserHandler}
              </BrowserDetection>
            </div>
            <div className="col-md-6 col-sm-7 visible-xs">
              {zonas}
            </div>
            <div className="col-md-6 col-sm-5">
              {lista}
            </div>
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
