import React from 'react'
import {
    Card,
    CardTitle,
    CardText,
    Row,
    Col,
    CardImg,
    CardBody,
    CardSubtitle,
  } from "reactstrap";
function ContentDresses() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-3">
          <Card>
          <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Jacquard-T-Shirt-With-Metallic-Thread_1.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Crossover Detail</CardTitle>
            <CardSubtitle><i class="fas fa-euro-sign"></i>$77.00</CardSubtitle>
            
          </CardBody>
        </Card>
          </div>
          <div className="col-md-3">
          <Card>
          <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Topstitched-Linen-Dress_1.jpg" />
          <CardBody>
            <CardTitle>Metallic Thread</CardTitle>
            <CardSubtitle><i class="fas fa-euro-sign"></i>$65.00</CardSubtitle>
            
          </CardBody>
        </Card>
        </div>
          <div className="col-md-3">
          <Card>
          <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Mesh-Dress-With-Asymmetric-Hem_1.jpg" />
          <CardBody>
            <CardTitle>Asymmetric Hem</CardTitle>
            <CardSubtitle><i class="fas fa-euro-sign"></i>$65.00</CardSubtitle>
            
          </CardBody>
        </Card>
        </div>
          <div className="col-md-3">
          <Card>
          <CardImg top width="100%" src=" https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Striped-Patchwork-Dress_1.jpg" />
          <CardBody>
            <CardTitle>Smocked Crepe Dress</CardTitle>
            <CardSubtitle><i class="fas fa-euro-sign"></i>$65.00</CardSubtitle>
            
          </CardBody>
        </Card>
          </div>
        </div>

        <div className="row">
        <div className="col-md-3">
        <Card>
        <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Textured-Dress-With-Straps_1.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Printed Bodysuit</CardTitle>
          <CardSubtitle><i class="fas fa-euro-sign"></i>$77.00</CardSubtitle>
          
        </CardBody>
      </Card>
        </div>
        <div className="col-md-3">
        <Card>
        <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Striped-Dress-With-Crossover-Detail_1.jpg" />
        <CardBody>
          <CardTitle>Striped Patchwork Dress</CardTitle>
          <CardSubtitle><i class="fas fa-euro-sign"></i>$65.00</CardSubtitle>
          
        </CardBody>
      </Card>
      </div>
        <div className="col-md-3">
        <Card>
        <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Smocked-Crepe-Dress_1.jpg" />
        <CardBody>
          <CardTitle>Topstitched Linen Dress</CardTitle>
          <CardSubtitle><i class="fas fa-euro-sign"></i>$65.00</CardSubtitle>
          
        </CardBody>
      </Card>
      </div>
        <div className="col-md-3">
        <Card>
        <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Ruffled-Floral-Print-Dress_1.jpg" />
        <CardBody>
          <CardTitle>Short Linen Dress</CardTitle>
          <CardSubtitle><i class="fas fa-euro-sign"></i>$65.00</CardSubtitle>
          
        </CardBody>
      </Card>
        </div>
      </div>

      </div>
    )
}

export default ContentDresses
