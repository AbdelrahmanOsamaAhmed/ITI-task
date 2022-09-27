import React from "react";
import "./navbar.css";
import LinkLocal from "../link/link";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      x: 30,
      navelements: [
        { data: "/home", content: "Home" },
        { data: "/movie", content: "Movies" },
        { data: "/tv", content: "Tv" },
        { data: "/caro", content: "Caro" },
        { data: "/products", content: "Products" },
        {data: "favourites", content: "Favourites"},
      ],
    };
    //console.log("hello from constructor");
  }



  handelIncrement = () => {
    this.setState({ counter: ++this.state.counter }); //object destructure
    console.log(this.state.counter);
  };
  render() {
    return (
      <>
        {/* <HomeIcon color="success" /> */}
        {/* <Icon>star</Icon>; */}
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              {/* <HomeIcon color="success" /> */}
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                {this.state.navelements.map((item) => (
                  <LinkLocal data={item.data} content={item.content} />
                ))}
              </ul>
            </div>
            
          </nav>
        </div>
      </>
    );
  }
}
export default Navbar;
