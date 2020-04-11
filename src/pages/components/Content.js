import React from "react";
import "./Home.css";

function Content() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <p className="find">Find</p>
          <p className="ys">Your Style</p>
          <p className="text1">
            However, though the fall-winter trends this year borrow heavily from
            the last year’s ideas and aesthetics, some of the trends that we as
            the customers are offered.
          </p>
          <img src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/img01.jpg"></img>
        </div>
        <div className="col-md-4">
        <img src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/img02.jpg"></img>
        </div>
        <div className="col-md-4">
        <img className="dimargin" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/img03.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default Content;
