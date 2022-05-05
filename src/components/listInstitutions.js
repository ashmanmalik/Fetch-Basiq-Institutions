import React from "react";

export default class FetchInstitutions extends React.Component {

  state = {
    loading: true,
    dataList: []
  };

  async componentDidMount() {
    const url = "https://au-api.basiq.io/public/institutions?filter=institution.authorization.in(%27user%27,%20%27user-mfa%27,%20%27user-mfa-intermittent%27),institution.stage.ne(%27alpha%27),institution.connectorStatus.eq(%27active%27)";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data["data"]);
    this.setState({ dataList: data["data"], loading: false });
    
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.dataList.length) {
      return <div>didn't get Institutions</div>;
    }

    return (
      <div>
        <ul>
          {this.state.dataList.map(item => (
            <li style={{ listStyleType: "none" }} key={item.id}>
              <div>{item.id}</div>
              <div>{item.shortName}</div>
              <img style={{ width: "40px" }} src={item.logo.links.square} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
