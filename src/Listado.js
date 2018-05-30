import React from 'react';
var divStyle = {
  width: "100%",
  padding: "5px"
};

class Listado extends React.Component {
  constructor() {
    super();
    this.state = {
      showlist: false,
    };
  }

  render() {
    const { resultlist, currentzone } = this.props;
    console.log(resultlist);
    return (
      <div>
        <h3>Vendedores en: <span className="region">{currentzone}</span></h3>
        <div className="scrollme">
          <div style={divStyle}>
            {
              Object
                .keys(resultlist)
                .map(key =>
                  <div key={key} className="card">
                    <div className="row card-container">
                    <div className="col-sm-12"><h4>{resultlist[key].name}</h4></div>
                    <div className="col-sm-12"><hr /></div>
                      <div className="col-md-4">
                        <h5>Teléfono:</h5>
                        <p>{resultlist[key].telefono}</p>
                      </div>
                      <div className="col-md-8">
                        <h5>Email:</h5>
                        <p><a href="{resultlist[key].email}">{resultlist[key].email}</a></p>
                      </div>
                      <div className="col-sm-12"><hr /></div>
                      <div className="col-sm-12">
                      <p><strong>Zonas cubiertas:</strong> {resultlist[key].zonas}</p>
                      </div>
                  </div>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Listado;
