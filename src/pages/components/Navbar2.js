import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardImg,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import classnames from "classnames";

function Navbar2() {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="wrapper container">
      <Nav tabs >
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            DRESSES
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            TOPS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("3");
            }}
          >
            SKIRTS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("4");
            }}
          >
            SALES
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                <Card>
                <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Mesh-Dress-With-Asymmetric-Hem_1.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Mesh Dress With Asymmetric Hem</CardTitle>
                  <CardSubtitle><i class="fas fa-euro-sign"></i>$77.00</CardSubtitle>
                  
                </CardBody>
              </Card>
                </div>
                <div className="col-md-3">
                <Card>
                <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Printed-Bodysuit_1.jpg" />
                <CardBody>
                  <CardTitle>Printed BodySuit</CardTitle>
                  <CardSubtitle><i class="fas fa-euro-sign"></i>$65.00</CardSubtitle>
                  
                </CardBody>
              </Card>
              </div>
                <div className="col-md-3">
                <Card>
                <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Ruffled-Floral-Print-Dress_1.jpg" />
                <CardBody>
                  <CardTitle>Ruffled Floral Print Dress</CardTitle>
                  <CardSubtitle><i class="fas fa-euro-sign"></i>$22.00-<i class="fas fa-euro-sign"></i>$55.00 </CardSubtitle>
                  
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
              </div>

              <div className="row">
              <div className="col-md-3">
              <Card>
              <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Smocked-Crepe-Dress_1.jpg" />
              <CardBody>
                <CardTitle>Smoked Crepe Dress</CardTitle>
                <CardSubtitle><i class="fas fa-euro-sign"></i>$69.00</CardSubtitle>
                
              </CardBody>
            </Card>
              </div>
              <div className="col-md-3">
              <Card>
              <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Striped-Dress-With-Crossover-Detail_1.jpg" />
              <CardBody>
                <CardTitle>Striped Dress With Crossover Detail</CardTitle>
                <CardSubtitle><i class="fas fa-euro-sign"></i>$98.00</CardSubtitle>
                
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
              <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Textured-Dress-With-Straps_1.jpg" />
              <CardBody>
                <CardTitle>Textured Dress With Strips</CardTitle>
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
        <div className="container">
          <div className="row">

          <div className="col-md-3">
          <Card>
          <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Striped-Dress-With-Crossover-Detail_1.jpg" />
          <CardBody>
            <CardTitle>Striped Dress With Crossover Detail</CardTitle>
            <CardSubtitle><i class="fas fa-euro-sign"></i>$98.00</CardSubtitle>
            
          </CardBody>
        </Card>
        </div>
      
            <div className="col-md-3">
            <Card>
            <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Jacquard-T-Shirt-With-Metallic-Thread_1.jpg" />
            <CardBody>
              <CardTitle>Jacquard T-Shirt With Metalic Theard</CardTitle>
              <CardSubtitle><i class="fas fa-euro-sign"></i>$82.00</CardSubtitle>
              
            </CardBody>
          </Card>
          </div>

            

          <div className="col-md-3">
          <Card>
          <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Mesh-Dress-With-Asymmetric-Hem_1.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Mesh Dress With Asymmetric Hem</CardTitle>
            <CardSubtitle><i class="fas fa-euro-sign"></i>$77.00</CardSubtitle>
            
          </CardBody>
        </Card>
          </div>
          <div className="col-md-3">
          <Card>
          <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Smocked-Crepe-Dress_1.jpg" />
          <CardBody>
            <CardTitle>Smoked Crepe Dress</CardTitle>
            <CardSubtitle><i class="fas fa-euro-sign"></i>$69.00</CardSubtitle>
            
          </CardBody>
        </Card>
          </div>
            </div>

          <div className="row">
          <div className="col-md-3">
          <Card>
          <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Printed-Bodysuit_1.jpg" />
          <CardBody>
            <CardTitle>Printed BodySuit</CardTitle>
            <CardSubtitle><i class="fas fa-euro-sign"></i>$65.00</CardSubtitle>
            
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
          <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Topstitched-Linen-Dress_1.jpg" />
          <CardBody>
            <CardTitle>Top Stitched Linen Dress</CardTitle>
            <CardSubtitle><i class="fas fa-euro-sign"></i>$59.00</CardSubtitle>
            
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
          
        </div>

        </div>
      </Row>
        </TabPane>

        <TabPane tabId="3">
        <Row>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
            <Card>
            <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Mesh-Dress-With-Asymmetric-Hem_1.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Mesh Dress With Asymmetric Hem</CardTitle>
              <CardSubtitle><i class="fas fa-euro-sign"></i>$77.00</CardSubtitle>
              
            </CardBody>
          </Card>
            </div>
            <div className="col-md-3">
            <Card>
            <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Printed-Bodysuit_1.jpg" />
            <CardBody>
              <CardTitle>Printed BodySuit</CardTitle>
              <CardSubtitle><i class="fas fa-euro-sign"></i>$65.00</CardSubtitle>
              
            </CardBody>
          </Card>
          </div>
            <div className="col-md-3">
            <Card>
            <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Ruffled-Floral-Print-Dress_1.jpg" />
            <CardBody>
              <CardTitle>Ruffled Floral Print Dress</CardTitle>
              <CardSubtitle><i class="fas fa-euro-sign"></i>$22.00-<i class="fas fa-euro-sign"></i>$55.00 </CardSubtitle>
              
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
          </div>

          <div className="row">
          <div className="col-md-3">
          <Card>
          <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Smocked-Crepe-Dress_1.jpg" />
          <CardBody>
            <CardTitle>Smoked Crepe Dress</CardTitle>
            <CardSubtitle><i class="fas fa-euro-sign"></i>$69.00</CardSubtitle>
            
          </CardBody>
        </Card>
          </div>
          <div className="col-md-3">
          <Card>
          <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Striped-Dress-With-Crossover-Detail_1.jpg" />
          <CardBody>
            <CardTitle>Striped Dress With Crossover Detail</CardTitle>
            <CardSubtitle><i class="fas fa-euro-sign"></i>$98.00</CardSubtitle>
            
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
          <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Textured-Dress-With-Straps_1.jpg" />
          <CardBody>
            <CardTitle>Textured Dress With Strips</CardTitle>
            <CardSubtitle><i class="fas fa-euro-sign"></i>$45.00</CardSubtitle>
            
          </CardBody>
        </Card>
          </div>
        </div>

        </div>
      </Row>
        </TabPane>
        <TabPane tabId="4">
        <Row>
        <Col sm="12">
        <div className="container">
        <div className="row">

        <div className="col-md-3">
        <Card>
        <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Striped-Dress-With-Crossover-Detail_1.jpg" />
        <CardBody>
          <CardTitle>Striped Dress With Crossover Detail</CardTitle>
          <CardSubtitle><i class="fas fa-euro-sign"></i>$98.00</CardSubtitle>
          
        </CardBody>
      </Card>
      </div>
    
          <div className="col-md-3">
          <Card>
          <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Jacquard-T-Shirt-With-Metallic-Thread_1.jpg" />
          <CardBody>
            <CardTitle>Jacquard T-Shirt With Metalic Theard</CardTitle>
            <CardSubtitle><i class="fas fa-euro-sign"></i>$82.00</CardSubtitle>
            
          </CardBody>
        </Card>
        </div>

          

        <div className="col-md-3">
        <Card>
        <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Mesh-Dress-With-Asymmetric-Hem_1.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Mesh Dress With Asymmetric Hem</CardTitle>
          <CardSubtitle><i class="fas fa-euro-sign"></i>$77.00</CardSubtitle>
          
        </CardBody>
      </Card>
        </div>
        <div className="col-md-3">
        <Card>
        <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Smocked-Crepe-Dress_1.jpg" />
        <CardBody>
          <CardTitle>Smoked Crepe Dress</CardTitle>
          <CardSubtitle><i class="fas fa-euro-sign"></i>$69.00</CardSubtitle>
          
        </CardBody>
      </Card>
        </div>
          </div>

        <div className="row">
        <div className="col-md-3">
        <Card>
        <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Printed-Bodysuit_1.jpg" />
        <CardBody>
          <CardTitle>Printed BodySuit</CardTitle>
          <CardSubtitle><i class="fas fa-euro-sign"></i>$65.00</CardSubtitle>
          
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
        <CardImg top width="100%" src="https://ld-wp.template-help.com/woocommerce_prod-18520/v2/wp-content/uploads/2018/08/Topstitched-Linen-Dress_1.jpg" />
        <CardBody>
          <CardTitle>Top Stitched Linen Dress</CardTitle>
          <CardSubtitle><i class="fas fa-euro-sign"></i>$59.00</CardSubtitle>
          
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
        
      </div>

      </div>
        </Col>
      </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Navbar2;
