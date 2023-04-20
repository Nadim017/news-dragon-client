import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
  return (
    <div>
      <h4 className="mb-3">Login with</h4>
      <Button variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary" className="mt-2">
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4 className="mt-3">Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div className="position-relative d-flex align-items-center">
        <img src={bg} alt="" />
        <div className="text-center text-white position-absolute top-0">
          <h2>Create an Amazing Newspaper</h2>
          <p>
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="btn btn-danger">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
<h2>Right Nav is coming</h2>;
