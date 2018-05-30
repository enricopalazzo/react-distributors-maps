import React, { Component } from 'react';
import { Samy, SvgProxy } from 'react-samy-svg';


//import SVG from 'react-inlinesvg';
var divStyle = {
  "display": "inline-block",
  "position": "relative",
  "width": "100%",
  "height": 600,
  "paddingTop": 30,
  // "paddingBottom": "100%",
  "verticalAlign": "middle",
  "overflow": "hidden"
}
class Mapa extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.makeMap = this.makeMap.bind(this);
    this.state = {
      strokeColor: 'red'
    }
  }
  handleClick = (e) => {
    this.props.filterDistributors(e);
    let thispath = document.getElementById(e);
    const active = document.querySelector('.activo');
    if (active) {
      active.classList.remove('activo');
    }
    thispath.classList.add("activo");
  }
  handleClickIE = (e) => {
    this.props.filterDistributors(e);
  }

  componentDidMount() {
   
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  /* HACK TO MAKE IT WORK ON IE until I find a more elegant solution or react-samy-svg get's fixed. 
  I'm creating an Image Map manually and adding it here. This should be able to load an SVG and add the eventlistener for clicks dynamically like in makeMap*/
  returnMap = (
    <div>
      <img id="imageIE" src="mapie.png" useMap="#image-map" alt="Mapa de regiones" className="img-responsive" />
      <map name="image-map" id="mapaimagen">
        <area onClick={(e) => this.handleClickIE("1141")} hidefocus="true" target="" alt="occidente" title="occidente" href="#" coords="234,114,218,83,182,76,169,65,156,49,148,66,147,83,102,101,87,91,83,77,104,65,64,87,44,121,35,152,22,177,36,180,44,187,54,204,60,207,68,210,80,206,98,192,108,183,135,142,160,162,169,166,192,154,222,141,225,130" shape="poly" />
        <area onClick={(e) => this.handleClickIE("1166")} hidefocus="true" target="" alt="guayaba" title="guayaba" href="#" coords="467,159,474,142,521,148,541,172,544,188,566,203,571,219,551,243,554,261,536,283,518,295,525,312,545,356,512,377,472,393,453,408,417,401,380,384,399,415,409,444,437,457,399,496,342,528,298,525,261,458,238,415,242,369,250,321,259,303,280,280,282,263,308,240,345,228,375,242,388,226,408,228,436,213,466,208,478,202,485,192" shape="poly" />
        <area onClick={(e) => this.handleClickIE("1140")} hidefocus="true" target="" alt="oriente" title="oriente" href="#" coords="384,98,415,92,459,99,500,116,467,132,470,142,467,158,477,185,479,195,467,204,455,206,429,215,408,224,387,225,375,234,365,236,344,224,360,197,374,193,354,168,336,152,350,136,373,127,373,122" shape="poly" />
        <area onClick={(e) => this.handleClickIE("1146")} hidefocus="true" target="" alt="gran caracas" title="gran caracas" href="#" coords="271,119,316,118,339,132,344,140,332,148,309,147,288,144,277,138" shape="poly" />
        <area onClick={(e) => this.handleClickIE("1164")} hidefocus="true" target="" alt="centro" title="centro" href="#" coords="234,118,245,118,262,121,268,124,277,136,295,144,301,161,299,169,281,164,273,147,263,147,247,146,249,153,244,165,245,181,241,193,240,203,225,201,213,194,215,177,204,161,204,152,221,143" shape="poly" />
        <area onClick={(e) => this.handleClickIE("1142")} hidefocus="true" target="" alt="los andes" title="los andes" href="#" coords="133,144,155,161,156,178,145,184,134,186,126,198,117,210,114,224,107,230,101,241,81,249,61,250,54,232,58,216,68,211,89,200,104,184,121,165" shape="poly" />
        <area onClick={(e) => this.handleClickIE("1165")} hidefocus="true" target="" alt="los llanos" title="los llanos" href="#" coords="253,152,269,150,276,160,293,170,301,167,299,148,328,149,339,158,363,190,365,196,352,204,341,225,322,236,301,242,283,258,273,279,260,298,204,310,173,306,154,273,133,273,107,273,70,273,62,256,82,251,99,240,112,232,121,210,129,195,163,175,180,163,196,157,210,178,215,205,244,205" shape="poly" />
      </map>
    </div>
  );
  makeMap() {
    // add eventlistener to each path of inline SVG
    var container = document.querySelector("#thisMap");
    var matches = container.querySelectorAll("g"); // this could b PATH or Polygons instead of G depending on the map
    const pathsArray = [...matches];

    pathsArray.forEach((num) => {
      console.log("kis oatg " + JSON.stringify(num));
      if (num.id) { //ID on path, enable click add style
        num.addEventListener("click", (e) => {
          this.handleClick(num.id, num.ref)
        });
      }
      else {
        num.classList.add("inactivepath");
      }
    });


  }
  render() {
    const mapalo = <Samy id="thisMap" path={this.props.mapaRoute} onSVGReady={this.makeMap}>
      <SvgProxy selector="path" pipi={'tojo'} />
    </Samy>;
   // const mapaexplorer = <div>{this.returnMap}</div>
    return (
      <div className="Mapa" style={divStyle} >
          {mapalo}
     </div>
    );
  }
}

export default Mapa;
