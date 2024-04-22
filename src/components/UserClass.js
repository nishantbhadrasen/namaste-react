import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
    console.log(this.props.name + ", " + "Children: Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + ", " + "Children: Component did Mount!");

    const data = await fetch("https://api.github.com/users/nishantbhadrasen");
    const jsonData = await data.json();
    console.log(jsonData);

    this.setState({
      userInfo: jsonData,
    });
  }
  componentDidUpdate() {
    console.log("Component did update!");
  }

  componentWillUnmount() {
    console.log("Component Unmounted!");
  }

  render() {
    console.log(this.props.name + ", " + "Children: Render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @/in/nishantbhadrasen</h4>
      </div>
    );
  }
}

export default UserClass;
