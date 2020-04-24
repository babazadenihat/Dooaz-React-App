import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  Header   from './Layouts/Header';
import  Footer   from './Layouts/Footer';
// import { NineCellLoading } from 'react-loadingg';
import { Lines } from 'react-preloaders';
// import close from './publicimages/X.svg';
// import logoBlue from './public/images/logo-blue.svg'
const Preloader = () => {
    return   <div class="showPre">
                <img src="./images/5 -2.gif" alt=""/> 
            </div>
}

const Headers = () => {

}
export default class sign extends Component {
    state = {
        email: '',
        password: '',
        user: [],
        errorMessage: [],
        preLoader: false
    }
componentDidMount() {
    // const h = new Headers()
    // h.append("Content-type", "application/json");
    // const session = {
    //     token : localStorage.getItem('token') ,
    // }
    // console.log(session,"session")
    // if(session.auth) {
    //     h.append("X-User-Token")
    // }
    const token = localStorage.getItem('token');
    console.log(token, 'token')
    console.log(token, 'token')
    this.setState({
        preLoader: true
    })
    fetch("https://api.doo.az/api/me", {
        headers: {
            'Authorization': `Bearer ${token}`  
        },
        method: 'post',
        // body: JSON.stringify()
    }).then((res) => {
         return   res.json()
    }).then((data) => {
        // console.log(data)
    })
}


getData = (fieldName) => (e) => {
    e.preventDefault();
    this.setState({
        [fieldName]: e.target.value,
    })
}
addData = async (e) => {
    e.preventDefault();
    const user = {
        email : this.state.email,
        password : this.state.password,
    }
    // console.log(user)
    await this.setState({
        user: user
    }) 
    const userInfo = this.state.user;
    // await console.log(userInfo)
   
    fetch('https://api.doo.az/api/login',{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(userInfo)
    }).then(resp => {
        return resp.json()
    }).then(data => {
        console.log(data);
        const { errors, user, token } = data;
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify(userInfo));
    })
}
    render() {
        let preloader = this.state.preLoader
        return (
            <div>
                {/* <NineCellLoading /> */}
                {/* <Lines color={'#f7f7f7'} />; */}
{/* <Lines color={'rgb(158, 38, 102)'} time={1200} /> */}
                {/* {preloader ?  <Preloader /> : null} */}
                {/* <Header /> */}
               <section className="log-same text-center">
                    <div className="container">
                        <div className="row">
                            <div className="inner-log w-100 position-relative">
                                <Link to="/"><img className="position-absolute close-sign" src="images/X.svg" alt=""/></Link>
                                <img className="log-img d-block" src="logo-blue.svg" alt=""/>
                                <h3 className="w-100 text-center title-log"><b>Sayta Giriş</b></h3>
                                <form action="" className="sign-form">
                                    <input type="text" placeholder="Epoçt və ya telefon nömrəniz" value={this.state.email} onChange={this.getData('email')} name="email"/>
                                    <input type="password" placeholder="Şifrə" value={this.state.password} onChange={this.getData('password')} name="password"/> 
                                    <Link to="/" className ="w-100 text-center doo-custom-btn" onClick={this.addData}>Daxil ol</Link>
                                    <div className="labbing d-flex justify-content-between align-items-center">
                                            <label className="lab-log">Yadda saxla
                                                <input type="checkbox"/>
                                                <span className="checkmark"></span>
                                            </label>                                            
                                            {/* <Link href="/"> */}
                                                <a className="forget">Şifrənizi unutmusunuz?</a>
                                            {/* </Link> */}
                                    </div>
                                </form>
                                <div className="bottom-log d-flex flex-column justify-content-center">
                                    <span>Saytda şəxsi kabinetiniz yoxdursa</span>
                                    <Link to="/Registration" className="same-log">
                                       QEYDİYYATDAN KEÇİN
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
               </section>
               <Footer />
            </div>
        )
    }
}
