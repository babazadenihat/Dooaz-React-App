import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom'
// import Sign from '../Login'
// import logo from '/public/images/logo.svg';
// import homeIcon from '../../public/images/home-icon.svg';
// import homeIcon from '/public/images/home-icon.svg';
// import headuser from '/public/images/user-per.svg'
import '../App.css'

// import homeIco from '../../public/static/images/icons/home-icon.svg';
// import logo from '../../public/static/images/logo.svg'
// import loginIco from '../../public/static/images/icons/log-in.svg'
// import plus from '../../public/static/images/icons/plus.svg'
const fixPad = {
    padding: '12px 27px'
}
function  handleClick(){
        var b= document.getElementById("drop1");
       b.classList.toggle("active")
}
function handleClick2(){
    var c= document.getElementById("drop2");
    c.classList.toggle("active")
}
function handleClick3(){
    var c= document.getElementById("drop2");
    c.classList.remove("active")
}
// function clickOut(){


// }
 function LoggedUser(props)  {
     if(props === {} || props === null) {
        return
     }
     {/* {props !==null ? setProp(prop = props)} */}
     {/* {(props !==null || props !== '' ) ? alert('data is not null')  : alert('data is null')}  */}
     {/* {props !== null ?  props.user.fname : ''} */}
    return (
        <div>
            {/* <div className="d-flex">
                <img  className="mr-2" src="/images/user-per.svg"/>
                <div className="name-anime">
                    {props.user.fname}
                    {props.user.sname}
                </div>
            </div> */}
                {/* <div className="drp-down" id="drop1">
                    <Link to="/MyAdverts" className="first-link">Mənim elanlarım</Link>
                    <Link to="/Personal">Şəxsi məlumatlar</Link>
                    <Link to="/Login" onClick={props.removeUser}>Çıxış</Link>
                </div> */}
                <li class="nav-item  dropdown d-block">
                    <a class="nav-link nav-item-login dropdown-toggle" href="#"
                     id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img  className="mr-2" src="/images/user-per.svg"/>
                    {props.user.fname}
                    {props.user.sname}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to="/MyAdverts" className="dropdown-item first-link">Mənim elanlarım</Link>
                    <Link to="/Personal" className="dropdown-item">Şəxsi məlumatlar</Link>
                    <div class="dropdown-divider"></div>
                    <Link to="/Login" className="dropdown-item" onClick={props.removeUser}>Çıxış</Link>
                    </div>
                </li>
                {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="../Success">Mənim elanlarım</Link>
                    <Link to="../Personal">Şəxsi məlumatlar</Link>
                    <Link to="" className="dropdown-item">Çıxış</Link>
                </div> */}

        </div>
    )
}

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false,
            user: JSON.parse(localStorage.getItem('user'))
        }
        this.dropdownHandle = this.dropdownHandle.bind(this)
    }
    passData = () => {
        this.props.takeData()
    }
    dropdownHandle() {
        this.setState({
            dropdown: !this.state.dropdown
        })
    }
    removeUser() {
        localStorage.removeItem('user')
        localStorage.removeItem('token');
        // localStorage.getItem('user')
        // this.setState({
        //     user: JSON.parse(localStorage.getItem('user'))
        // })
    }
    render() {
        console.log('userinheader', this.props)

        var lstorage = localStorage.getItem('user')

        const user  = this.state.user;
        console.log(user)

        const status  = this.props.status;
        // console.log(user, "userinfo")
        return (
            <div>
                <header>
                    <div className="container-fluid i-container-1">
                        <div className="container-md p-sm-0 mr-4 ml-4  ml-md-auto mr-md-auto w-auto">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="">
                                    <div className="home-page">
                                        <Link to="/" className="home-page">
                                            <img src="/images/home-icon.svg" className="home-ico mr-2" alt=""/>Ana Səhifə
                                        </Link>
                                    </div>
                                </div>
                                <div className=" text-right">
                                    <span className="contact-numeber text-white">Əlaqə: (012) 599-08-05; (012) 505-85-85</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid i-container-2">
                        <div className="container-md p-sm-0 mr-4 ml-4  ml-md-auto mr-md-auto w-auto">
                            <div className="d-flex justify-content-between w-100">
                                <div className="">
                                    <Link to="/"><img src="/images/logo.svg" className="logo" alt=""/></Link>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        {/* <div className="drop-mini position-relative mr-5" onClick={handleClick2}>
                                            <span  className="drop-key">Haqqımızda</span>
                                            <div className="d-about"  id="drop2">
                                                <Link to="">Qaydalar</Link>
                                                <Link to="">Layihə haqqında</Link>
                                                <Link to="">Necə istifadə etməli</Link>
                                            </div>

                                        </div> */}
                                        <li class="nav-item nav-item-spaceing dropdown d-block">
                                            <a class="nav-link dropdown-toggle dt-custom" href="#"
                                             id="navbarDropdown" role="button" data-toggle="dropdown"
                                              aria-haspopup="true" aria-expanded="false">
                                            Haqqımızda
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link to="" className="dropdown-item">Qaydalar</Link>
                                            <Link to="" className="dropdown-item">Layihə haqqında</Link>
                                            <Link to="" className="dropdown-item">Necə istifadə etməli</Link>
                                            </div>
                                        </li>
                                        <Link to="/" className="faq">
                                            FAQ
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center ml-sm-4">
                                    {user ? <LoggedUser user={user} removeUser={this.removeUser}/> :
                                    <Link to="/Login" className="login text-white">
                                            <img src="/images/log-in.svg" className="mr-2" alt=""/>Giriş
                                        </Link>}
                                        {/* <LoggedUser user={user} removeUser={this.removeUser}/> */}
                                        <Link to="/NewAd" className="advert text-white ml-3 ml-sm-2">
                                            <img src="/images/plus.svg" className="mr-2" alt=""/>Elan yerləşdir
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
