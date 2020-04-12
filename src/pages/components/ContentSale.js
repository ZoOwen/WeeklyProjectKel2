import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Card,
  CardTitle,
  Row,
  Col,
  CardImg,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import classnames from "classnames";

function ContentSale() {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
    
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                <Card>
                <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Jacquard-T-Shirt-With-Metallic-Thread_1.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Jacquard T-Shirt With Metallic Thread</CardTitle>
                  <CardSubtitle><i class="fas fa-euro-sign"></i>$77.00</CardSubtitle>
                  
                </CardBody>
              </Card>
                </div>
                <div className="col-md-3">
              <Card>
              <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Striped-Patchwork-Dress_1.jpg" />
              <CardBody>
                <CardTitle>Striped Patchwork Dress</CardTitle>
                <CardSubtitle><i class="fas fa-euro-sign"></i>$60.00</CardSubtitle>
                
              </CardBody>
            </Card>
            </div>
            <div className="col-md-3">
              <Card>
              <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Short-Linen-Dress_1.jpg" />
              <CardBody>
                <CardTitle>Short Linen Dress</CardTitle>
                <CardSubtitle><i class="fas fa-euro-sign"></i>$55.00</CardSubtitle>
                
              </CardBody>
            </Card>
              </div>
              <div className="col-md-3">
              <Card>
              <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Ruffled-Floral-Print-Dress_1.jpg" />
              <CardBody>
                <CardTitle>Ruffled Floral Print Dress</CardTitle>
                <CardSubtitle><i class="fas fa-euro-sign"></i>$22.00 - <i class="fas fa-euro-sign"></i>$55.00 </CardSubtitle>
                
              </CardBody>
            </Card>
              </div>
              </div>

              <div className="row">
              <div className="col-md-3">
              <Card>
              <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Printed-Bodysuit_1.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Printed Bodysuit</CardTitle>
                <CardSubtitle><i class="fas fa-euro-sign"></i>$65.00</CardSubtitle>
                
              </CardBody>
            </Card>
              </div>
              <div className="col-md-3">
                <Card>
                <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Mesh-Dress-With-Asymmetric-Hem_1.jpg" />
                <CardBody>
                  <CardTitle>Mesh Dress With Asymmetric Hem</CardTitle>
                  <CardSubtitle><i class="fas fa-euro-sign"></i>$77.00</CardSubtitle>
                  
                </CardBody>
              </Card>
              </div>
              <div className="col-md-3">
                <Card>
                <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Textured-Dress-With-Straps_1.jpg" />
                <CardBody>
                  <CardTitle>Textured Dress With Straps</CardTitle>
                  <CardSubtitle><i class="fas fa-euro-sign"></i>$45.00</CardSubtitle>
                  
                </CardBody>
              </Card>
                </div>
            </div>

            </div>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h4>Tab 2 Contents</h4>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h4>Tab 3 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <h4>Tab 4 Contents</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default ContentSale;
