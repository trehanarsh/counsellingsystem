import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent'
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postComment, addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapDispatchToProps = dispatch => ({
  // addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  // fetchDishes: () => { dispatch(fetchDishes())},
  // resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  // fetchComments: () => dispatch(fetchComments()),
  // fetchPromos: () => dispatch(fetchPromos()),
  // postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
});

const mapStateToProps = state => {
  return {
    // dishes: state.dishes,
    // comments: state.comments,
    // promotions: state.promotions,
    // leaders: state.leaders
  }
}



class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      };
  }

  render() {
    return (
      <div>
        <Header />
        <div>
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                  <Route path='/home' component={() => <Home/>} />
                  <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />} />
                  <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                  <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));