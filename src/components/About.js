import React, { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent : Constructor");
  }
  componentDidMount() {
    //console.log("Parent: Component did Mount");
    //Api call
  }

  render() {
    //console.log("Parent: Render");
    return (
      <div>
        <h1>About Us </h1>
        <div>
          LoggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h3 className="text-xl font-bold">{loggedInUser}</h3>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>

        <UserClass name={"First"} location={"Fulda class"} />
      </div>
    );
  }
}

export default About;

/*
-----MOUNTING-------
  Constructor (dummy)
  Render (dummy)
      <HTML Dummy>
  Component Did Mount!
      <API Call>
      <this.setState> -> State Variable is Updated


------UPDATING--------

   Render (API)
      <HTML new API data>
  Component Did Update!

*/
