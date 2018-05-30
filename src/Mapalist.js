import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class Mapalist extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }
  handleChange = (event, index, value) => {
    this.setState({ value: value });
    this.props.filterZonas(value);
    console.log(event + ">>" + index + " >> " + value);
  }

  render() {
    const { estados } = this.props;
    return (
      <div>
        <div><label>Seleccione el estado:</label></div>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          style={{ width: '100%'}} >
          {
            Object
              .keys(estados)
              .map(key =>
                <MenuItem value={estados[key].codigo} primaryText={estados[key].name} key={"zona-" + estados[key].id} />
              )
          }
        </SelectField>
      </div>
    );
  }
}
export default Mapalist;
