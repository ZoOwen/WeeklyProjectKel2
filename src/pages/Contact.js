import React from "react";
import "../App.css";
import {Button, Form,Breadcrumb} from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { MdPhone } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

function Contact() {
  return (
<div>
     <header className='title-contact'>
        <h2>Contact Us for Assistance!</h2>
        <p>If you have any questions, we are happy to answer them via phone or email.</p>
     </header>

        <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143322.1634582701!2d-4.372542450038334!3d55.85557336217109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow%2C%20Britania%20Raya!5e0!3m2!1sid!2sid!4v1586574593855!5m2!1sid!2sid"></iframe> 
     
     <body>
        <div className='left-contact'>
            <p><GoLocation /> Address: 4578 Marmora Road, Glasgow</p>
            <p><MdPhone /> Custom Support & Sale: +7-495-1234567 </p>
            <p><IoMdTime /> Working Time: Mon–Sat: 08:00–18:00 </p>

        </div>
        <div className='right-contact'>
        <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Name (required)</Form.Label>
            <Form.Control type="email"/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Email (required)</Form.Label>
            <Form.Control type="email"/>
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
            <Form.Label>Subject</Form.Label>
             <Form.Control type="email"/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows="10" />
            </Form.Group>

            <Button variant="dark" type="submit">
            SEND
            </Button>
        </Form>

        </div>
    </body>
</div>
  );
}

export default Contact;