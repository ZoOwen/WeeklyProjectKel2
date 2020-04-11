import React, {useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';


export default function Slider() {

  return (
    <div >
    <Carousel className="carousel" width='100%' autoPlay showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} >
    <div>
        <img  style={{ width: '50%', height: 400 }} src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/header_img02.jpg" />
        <img style={{ width: '50%', height: 400 }} src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/header_img03.jpg" />
       
    </div>
    <div>
        <img  style={{ width: '50%', height: 400 }} src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/header_img03.jpg" />
        <img style={{ width: '50%', height: 400 }} src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/header_img01.jpg" />
        
    </div>
    <div>
        <img style={{ width: '50%', height: 400 }} src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/header_img01.jpg" />
        <img style={{ width: '50%', height: 400 }} src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/header_img03.jpg" />
        
    </div>
</Carousel></div>
  )
}

