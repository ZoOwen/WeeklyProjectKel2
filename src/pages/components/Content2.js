import React from "react";
import "./Home.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function Content2() {
  return (
    <div className="bg">
      <br />
      <div className="bg2">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p className="bannertext container" style={{marginTop : '-30px'}}>
                Celebrity style, outfit ideas shopping tips and how
              </p>
              <div style={{ marginLeft: "15px" }}>
                <button className="btn btn-dark">SHOP ALL</button>
              </div>
            </div>
            <div className="col-md-3">
              <Card style={{marginTop : '-30px'}}> 
                <CardImg
                  top
                  width="100%"
                  src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/img04.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <p className="label">Jumpsuits</p>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{marginTop : '-30px'}}>
                <CardImg
                  top
                  width="100%"
                  src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/img05.jpg"
                ></CardImg>
                <CardBody>
                  <p className="label">Dresses</p>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{marginTop : '-30px'}}>
                <CardImg
                  top
                  width="100%"
                  src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/img06.jpg"
                ></CardImg>
                <CardBody>
                  <p className="label">Shirt & Tops</p>
                </CardBody>
              </Card>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
     
          
        </div>
      </div>
    </div>
  );
}

export default Content2;
