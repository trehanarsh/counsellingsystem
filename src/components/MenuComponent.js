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
                      <BreadcrumbItem active>Notice</BreadcrumbItem>
                      <BreadcrumbItem active>back</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                      <h3>Notice Board</h3>
                      <hr />
                      <div >
                      <dl className="row p-1" style={{display: 'flex', backgroundColor:'#AACCDD'}}>
                                <dt className="col-6">Starting Date of choice filling:</dt>
                                <dd className="col-6">25 Nov 2020</dd>
                                <dt className="col-6">Last date of choice filling:</dt>
                                <dd className="col-6">05 Dec 2020</dd>
                                <dt className="col-6">Declaration of Result:</dt>
                                <dd className="col-6">09 Dec 2020</dd>
                      </dl>
                      </div>
                      <hr />
                      <p> You can edit your preferrences anytime before the last date of choice filling.</p>
                      <hr />
                  </div>                
              </div>

          </div>
      );
    }

export default Menu;