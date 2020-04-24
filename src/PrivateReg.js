import React , {Component } from 'react';
import {  Switch, Route, } from 'react-router'; 
import Registration from './Registration'

export default class RegRoute extends Component {
    // ({ component: Component,listName, ...rest  },props)
    constructor(props) {
        super(props);
        this.state = {
            props
        }
    }
  
    func = () => {
        this.props.callbackFromParent(this.state.props)
        
    }
    render() {
    const rest = this.state.props;
      
      // console.log(rest, 'child rest data')
      // console.log(rest,'netecete')
      // console.log(Component,'component')
      // console.log(listName, "datafrom child")
      return(
        <Route {...rest}  render={(props) => (
    
          <Registration {...props}  />
          )}
          />
          );
    }
  }
  