import React from 'react';
import { Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    const Menu = (props) => {
        return (
          <div className="container">
              <div className="row">
                  <Breadcrumb>
                      <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                      <BreadcrumbItem active>Schedule</BreadcrumbItem>
                      <BreadcrumbItem active>back</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                      <h3>Counselling Schedule</h3>
                      <hr />
                  </div>                
              </div>

          </div>
      );
    }

export default Menu;