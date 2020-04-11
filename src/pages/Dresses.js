import React, { Component } from "react";
import axios from "axios";
import '../App.css'

class Dresses extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
    };
  }
  componentDidMount() {
    const config = {
        "x-rapidapi-host": "animenewsnetwork.p.rapidapi.com",
		"x-rapidapi-key": "f2e446959amsh8c41a80758360dep14b0dbjsn8d11094dd70f"
          };
    axios
      .get(
        "https://animenewsnetwork.p.rapidapi.com/api.xml", config
      )
      .then((data) => {
        this.setState({ imgs: data.data });
      })
      .catch((err) => {
        console.log("Error happened during fetching!", err);
      });
  }
  // }

  render() {
    console.log(this.state);
    return (
    //   <div>
    //     <h1>Unsplash</h1>
    //     {this.state.imgs.map((item, index) => (
    //       <div key={index}>
    //         {/* <li>{item.urls.small}</li> */}
    //         <li><img src={item.urls.small} alt="image" /></li>
    //       </div>
    //     ))}
    //   </div>
    <div><p>Hello</p></div>
    );
  }
}

export default Dresses;
