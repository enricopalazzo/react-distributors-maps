import React, { Component } from 'react';
import Layout from './Layout';

class App extends Component {
  constructor(props) {
    super(props);
    this.filterDistributors = this.filterDistributors.bind(this);
    this.state = {
      dataLoaded: null,
      jsonReturnedValue: false,
      currentZone: '',
      sellers: [],
      zones: [],
      //loading API and maps paths as global var from index.html so the designer can change them without modifiying REACT 
      dataRoute: window.dataRoute, //WP REST API HAS A 100 PER PAGE LIMIT. FOR THIS PROYECT THIS IS A NON-ISSUE GUT WE HAVEFIGURE A BETTER WAY TO GET MORE THAN 100 ITEMS IF NEEDED
      zonaRoute: window.zonaRoute,
      mapaRoute: window.mapaRoute
      // estadoRoute: 'API_URL/wp-json/wp/v2/estado', NOT NEEDED ON ONE LEVEL ONE APP
    }
  }
  componentWillMount() {
    this.loadData();
  }
  loadData() {

    fetch(this.state.dataRoute) //map and preload all state distributors for faster display
      .then(res => res.json())
      .then(
        sellers => this.setState((prevState, props) => {
          //  this.makeEstado(products);
          this.setState({
            dataLoaded: true
          });
          return { sellers: sellers.map(this.mapSellers) };
        }));

    //map Zones and create state
    fetch(this.state.zonaRoute)
      .then(result => result.json())
      .then(zones => this.setState((prevState, props) => {
        /* this.setState({
           dataLoaded: true
         });*/
        return { zones: zones.map(this.mapZones) };
      }));
  }


  mapSellers(seller) {
    return {
      id: seller.id,
      name: seller.title.rendered,
      zonas: seller.zonas,
      email: seller.email,
      telefono: seller.telefono,
      zone: seller.region[0].ID
    }
  }
  mapZones(zone) {
    return {
      id: zone.id,
      name: zone.title.rendered,
    }
  }

  getCurrentZoneName(zoneid) {
    const result = this.state.zones.filter(function (el) {
      return el.id == zoneid; //Ignore Webpack warning. We are not checking for type. Do not change to ===
    });
    return result[0].name;

  }
  filterDistributors = (zone) => {
    const zonename = this.getCurrentZoneName(zone);
    const results = this.state.sellers.filter(function (el) {
      return el.zone == zone; //Ignore Webpack warning. We are not checking for type. Do not change to ===
    });
    this.setState({
      currentZone: zonename,
      resultados: results
    });
  }

  render() {
    if (!this.state.dataLoaded) {
      return <div style={{marginTop: 30}}>Cargando...</div>
    }
    return (
      <Layout
        dataLoaded={this.state.dataLoaded}
        filteredResults={this.state.resultados}
        currentZone={this.state.currentZone}
        filterDistributors={this.filterDistributors}
        zones={this.state.zones}
        mapaRoute={this.state.mapaRoute}
      />


    );
  }
}

export default App;