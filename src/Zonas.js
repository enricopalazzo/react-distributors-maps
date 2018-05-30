import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Zonas extends React.Component {
  constructor() {
    super();
    this.state = {
      showlist: false,
      value: ''
    };
  }

  handleChange = (event, index, value) => {
    this.setState({ value: value });
    this.props.filterDistributors(value);
  }
  render() {
    const { resultlist } = this.props;
    return (
      <div className="Selecto"> 
        <SelectField
          floatingLabelText="Seleccione la Región"
          value={this.state.value}
          onChange={this.handleChange}
          style={{ width: '100%'}}
        >
          {
            Object
              .keys(resultlist)
              .map(key =>
                <MenuItem value={resultlist[key].id} primaryText={resultlist[key].name} key={"zona-" + resultlist[key].id} />
              )
          }
        </SelectField>
      </div>
    )
  }
}

export default Zonas;
