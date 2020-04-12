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
    const IMAGES =
  [{
          src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
          thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 174,
          isSelected: true,
          caption: "After Rain (Jeshu John - designerspics.com)"
  }]
    console.log(this.state.imgs);
    return (


      <div className="container">
      {this.state.imgs.map((item, index) => (
        <ul className="imgul">
          {<li  className="imgli" key={index}> <img src={item.urls.small} alt="image" /></li>}
         
        </ul>
      ))}
       
      </div>
    
    );
  }
}

export default Dresses;
