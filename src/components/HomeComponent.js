import React , { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }



 render() {
    return(
        <div className="container">
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Roll Number</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                    </ModalBody>
                </Modal>


        <div className="row row-header m-5">
            <div className="col-12 col-sm-6">
                <h2>Joint Seat Allocation Authority 2020</h2>
                <p>The Joint Seat Allocation Authority (JoSAA) 2020 has been set up by the Ministry of Education [erstwhile Ministry of Human Resources Development (MHRD)] to manage and regulate the joint seat allocation for admissions to 110 institutes for the academic year 2020-21. This includes 23 IITs,  31 NITs, IIEST Shibpur, 26 IIITs and 29 Other-Government Funded Technical Institutes (Other-GFTIs). Admission to all the academic programs offered by these Institutes will be made through a single platform.</p>
            </div>
            <div className="col-3"></div>
            <div className="col-1 m-1">
                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
            </div> 
            <div className="col-1 m-1">       
                    <Link to='/contactus'>
                      <Button outline><span className="fa fa-address-card fa-lg"></span> Register</Button>
                    </Link>
            </div>
        </div>
        </div>
    );
  }

}  

export default Home;   