import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

// function RenderLeader({leader}) {
//     return (
//     <Stagger in>
//     <Media>
//         <Media left top href="#" className="col-2 mb-5">
//           <Media object src={leader.image} alt={leader.name} />
//         </Media>
//         <Media body className="ml-5">
//           <Media heading>
//             {leader.name}
//           </Media>
//            <Media>
//            {leader.designation}
//            </Media>
//            {leader.description}
//         </Media>
//     </Media>
//     </Stagger>
//     );
    

// }

function About(props) {

    // const leaders = props.leaders.map((leader) => {
    //     return (
    //         <RenderLeader leader={leader} />
    //     );
    // });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Seat Matrix</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Seat Matrix</h3>
                    <hr />
                </div>                
            </div>
        </div>    
    );
}

export default About;    