import React , {Component } from 'react';
import  Header   from './Layouts/Header';
import  Footer   from './Layouts/Footer';
import {  Switch } from 'react-router';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import NewAd from './NewAd'
import Home from './Home';
import Ad from './Ad';
import MyAdverts from './MyAdverts';
import Personal from './Personal';
import Login from './Login';
import Registration from './Registration'
import Success from './Success';
import AllAds from './AllAds';
import { AuthContext } from "./Context/Auth";
import PrivateRoute from './PrivateRoute';  
import RegRoute from "./PrivateReg"
import HeaderInMobile from './Layouts/HeaderInMobile'
class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        datafromchild: null,
        status: false,
        user: {},
        authenticated: false,
      }
      // this.setUser = this.setUser.bind(this)
  }

// componentDidMount() {
  
setUser = (res) => {
  if(res) {
    this.setState( {
      user: res,
      authenticated: true
    })
  }
}
  setStatus = (res) => {
    if(res) {
      this.setState( {
        status: true,
      })
    }
    console.log(res,'response');
    console.log(this.state.status, 'status')
      console.log(this.state.user, 'state changed with response')

    // this.currentUser = (res) => {
    //   self.setState({
    //     authInProcess: false,
    //     user: res
    //   })
    // }
  }
// }

  render() {
    let user = this.state.user;
    let auth = this.state.authenticated
    console.log(auth)
    return (
    
        <div className="App">
        <Router>
          <Header user={user}/>
          <HeaderInMobile />
           <Switch>
               <Route exact path="/"><Home/></Route>
               <Route path="/NewAd" component={NewAd}></Route>           
               <Route path="/Login" component={Login}></Route>
               {/* {this.state.authUser ? (<NonAuth />) : <Route path="/Login" component={Login}></Route>} */}
               <RegRoute path={'/Registration'} component={Registration} setUser={this.setUser}  />
               {/* <Route path="/Registration" component={Registration} ></Route> */}
               <Route path="/AllAds"component={AllAds}></Route>
               <Route path="/Ad" component={Ad}></Route>
               <Route path="/Success" component={Success}></Route>
               <Route path="/Personal" component={Personal}></Route>
               <Route path="/MyAdverts" component={MyAdverts}></Route>
           </Switch>
        {/* <Registration setUser={this.setUser}/>   */}
        </Router>
        {/* <AuthContext.Provider value={false}>
          <Router>
            <div>
              <ul>
                ...
              </ul>
              <Route exact path="/p" component={Home} />
              <PrivateRoute path="/registration" component={Registration} />
            </div>
    
          </Router>
        </AuthContext.Provider> */}
       </div>
    );
  }
}

export default App;
