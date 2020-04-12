import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class Dresses extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=wQ4zgSY44EQXmQbLm-iTYO9OulBQP9p6h0o3tJJBZ9Q`
      )
      .then((data) => {
        this.setState({ imgs: data.data });
      })
      .catch((err) => {
        console.log("Error happened during fetching!", err);
      });
  }

  render() {
    console.log(this.state.imgs);

    return (
      <div className="wrapper">
      <br/>
      <h1 className="title-contact"> Unsplash </h1>
      <br/>
      <br/>

      <h3 className="sub-contact"> Here we deserve you some Beautiful images from Unsplash just for $5</h3>
        <div class="row">
          {this.state.imgs.map((item, index) => (
            <div className="col-md-4">
              <div className="thumbnail">
                <a href="/w3images/lights.jpg">
                  <img
                    key={index}
                    src={item.urls.small}
                    alt="Lights"
                    styleName={{
                      height: "auto",
                      width: "100%",
                      marginTop: "10px",
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                  ></img>

                  <div className="caption">
                    <p>{item.alt_description}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Dresses;
