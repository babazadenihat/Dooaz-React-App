import React, { createContext, useState , Component } from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import axios from 'axios';
import  Header   from './Layouts/Header';
import Home from './Home'
import  Footer   from './Layouts/Footer';
import { useHistory } from 'react-router';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
import PropTypes from "prop-types";

// import logimg from '/public/images/logo-blue.svg'
// import close from '/public/images/X.svg'
const SweetAlert = withSwalInstance(swal);
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
 function LoggedUser(props)  {
    //  console.log(typeof props.user.fname)
    // const dropHandle = ()  =>{
    //     toggle = false
    //     console.log(toggle)
    // }
    return (
        <div className="login text-white font-bold  position-relative" id="login" style={fixPad} onClick={handleClick}>
            <img  className="mr-2" src="/images/user-per.svg"/>{props.user.fname}  {props.user.sname}
                <div className="drp-down" id="drop1">
                    <Link to="/Success" className="first-link">Mənim elanlarım</Link>
                    <Link to="/Personal">Şəxsi məlumatlar</Link>
                    <Link to="">Çıxış</Link>
                </div>
                {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="../Success">Mənim elanlarım</Link>
                    <Link to="../Personal">Şəxsi məlumatlar</Link>
                    <Link to="" className="dropdown-item">Çıxış</Link>
                </div> */}
  
        </div>
    )
}
// export const Context = createContext({});


// export const Provider = props => {
//   // Initial values are obtained from the props
//   const {
//     userInfo: initialUserInfo,
//     status: initialStatus,
//     children
//   } = props;

//   // Use State to keep the values
//   const [userInfo, setUserInfo] = useState(initialUserInfo);
//   const [selectedUser, setSelectedUser] = useState(initialSelectedUsers);

//   const addNewUser = userName => {
//     const newUser = { id: new Date().getTime().toString(), name: userName };
//     setUsers(users.concat([newUser]));
//   };

//   // Make the context object:
//   const usersContext = {
//     users,
//     setUsers,
//     selectedUser,
//     setSelectedUser,
//     addNewUser
//   };

//   // pass the value in provider and return
//   return <Context.Provider value={usersContext}>{children}</Context.Provider>;
// };

// export const { Consumer } = Context;

// Provider.propTypes = {
//   users: PropTypes.array,
//   selectedUser: PropTypes.object
// };

// Provider.defaultProps = {
//   users: [],
//   selectedUser: {}
// };
export default class Registration extends Component {
    constructor(props) {
        super(props)
        // this.props.setUser = this.props.setUser.bind(this)
        this.state = {
            name: '',
            surname: '',
            email: '',
            phone:'',
            password: '',
            confirm_password: '',
            users: [],
            errorMessage: [],
            userInfo: {},
            // newName: '',
            redirect: null,
            status: false,
            btnState: false,
            show : false
        }
        console.log(props)
        // props.setUser = props.setUser.bind()
    }
    // componentDidMount() {
    //     props
    // }
        // componentWillMount() {
        //     console.log(this.state.btnState)
        //     localStorage.getItem("user") && this.setState({
        //         userInfo: JSON.parse(localStorage.getItem("user")),
        //         status:true
        //     })
        // }
        getData = (fieldName) => (e) => {
            e.preventDefault();
            this.setState({
                [fieldName]: e.target.value,
                // 'name': e.target.value
            })
        }
        addData = async (e) => {
            e.preventDefault();
            this.setState({
                btnState: true,
                show: true
            })
            console.log(this.state.btnState)
            const user = {
                name : this.state.name,
                surname : this.state.surname,
                email : this.state.email,
                phone : this.state.phone,
                password : this.state.password,
                confirm_password : this.state.confirm_password,
                btn_state: false
            }
            if(user.name.length > 10 && user.name.length > 10 ) {
                alert("Adınızdakı simvolların sayı 10-dan çoxdur");
                return
            }
            await this.setState({
                users: user,
                name: '',
                surname: '',
                email: '',
                phone:'',
                password: '',
                confirm_password: '',
            })
            const users = this.state.users;
            console.log(users)

            fetch('http://127.0.0.1:8000/api/register',{
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'post',
                body: JSON.stringify(users)
            }).then(resp => {
                return resp.json()
            }).then(async (data) => {
                console.log(data)
                const status = data.status;
                const { errors, user, token } = data;
                let userInfo = {
                    fname: user.name,
                    sname: user.surname
                }
                console.log(userInfo);
                localStorage.setItem('token',token);
                localStorage.setItem('user',JSON.stringify(userInfo));
                // localStorage.setItem('tokenData',)
                // const tokenGet = localStorage.getItem('token');
                // console.log(tokenGet)
                await this.setState({
                        errorMessage: errors ? [ errors ] : [],
                        // userInfo,
                    })

                if (status === 'success') {
                    this.setState({
                        status: true,
                    })
                    localStorage.setItem('status', this.state.status)
                }
                // this.props.userStatus(localUserState)
            })
                let localUser = localStorage.getItem("user")
                let localUserState = localStorage.getItem("status")
                
        }
        componentDidMount() {
            if (window.Swal) {
                window.Swal()
            }
        }

    render() {
        let user = this.state.userInfo;
        let status = this.state.status;
        // console.log(user)
        // if (this.state.redirect) {
        //     return (<Redirect to={this.state.redirect} />)
        // }
        let errName = this.state.errorMessage.map((message, index) => {
            if(this.state.fname === "") {
                return <div className="bg-danger" key={index}>{message.name}</div>
            }
        })
        let errSname = this.state.errorMessage.map((message, index) => {
            if(this.state.lname === "") {
                return <div className="bg-danger" key={index}>{message.surname}</div>
            }
        })
        let email = this.state.errorMessage.map((message, index) => {
            if(this.state.email === "") {
                return <div className="bg-danger" key={index}>{message.email}</div>
            }
        })
        let phone = this.state.errorMessage.map((message, index) => {
            if(this.state.phone === "") {
                return <div className="bg-danger" key={index}>{message.phone}</div>
            }
        })
        let pass = this.state.errorMessage.map((message, index) => {
            if(this.state.pass === "") {
                return <div className="bg-danger" key={index}>{message.password}</div>
            }
        })
        let repass = this.state.errorMessage.map((message, index) => {
            if(this.state.repass === "") {
                return <div className="bg-danger" key={index}>{message.confirm_password}</div>
            }
        })

        return (
            <div>
                {/* <Header userInfo={user} status={status}/> */}
                {/* <header>
                    <div className="container-fluid i-container-1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="home-page">
                                        <Link to="/" className="home-page">
                                            <img src="/images/home-icon.svg" className="home-ico mr-2" alt=""/>Ana Səhifə 
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-6 text-right">
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
                                    <div className="d-flex ">
                                        <div className="drop-mini position-relative mr-5" onClick={handleClick2}>
                                            <span  className="drop-key">Haqqımızda</span>
                                            <div className="d-about"  id="drop2">
                                                <Link to="">Qaydalar</Link>
                                                <Link to="">Layihə haqqında</Link>
                                                <Link to="">Necə istifadə etməli</Link>
                                            </div>
                                        </div>
                                        <Link to="/" className="faq">
                                            FAQ
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center ml-sm-4">
                                        {status ? <LoggedUser user={user}/> :  <Link to="/Login" className="login text-white">
                                            <img src="/images/log-in.svg" className="mr-2" alt=""/>Giriş
                                        </Link>}
                            
                            
                                  
                                        <Link to="/NewAd" className="advert text-white ml-3 ml-sm-2">
                                            <img src="/images/plus.svg" className="mr-2" alt=""/>Elan yerləşdir
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header> */}


                    <section className="log-same text-center" id="iki">
                        <div className="container">
                            <div className="row">
                                <div className="inner-registration w-100 position-relative">
                                    <img className="position-absolute close-sign" src="X.svg" alt=""/>
                                    <img className="log-img d-block" src="logo-blue.svg" alt=""/>
                                    <h3 className="w-100 text-center title-log"><b>Sayta Qeydiyyat</b></h3>
                                    <form action="" className="registration-form" onSubmit={this.addData}>
                                        <input type="text" name="name" value={this.state.name} onChange={this.getData('name')} placeholder="Ad" />
                                        <input type="text" name="surname" value={this.state.surname} onChange={this.getData('surname')} placeholder="Soyad" />
                                        { errName }
                                        { errSname }
                                        <input type="email" name="email" value={this.state.email} onChange={this.getData('email')} placeholder="Email" />
                                        { email }
                                        <input type="text" name="phone" value={this.state.phone} onChange={this.getData('phone')} placeholder="Telefon" />
                                        { phone }
                                        <input type="password" name="password" value={this.state.password} onChange={this.getData('password')} placeholder="Şifrə" />
                                        <input type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.getData('confirm_password')} placeholder="Şifrənizi təstiqləyin" required/>
                                        { pass }
                                        { repass }
                                        {/* {this.state.email ? null : this.state.errorMessage } */}
                                        <button type="submit" id="reg"  className= 'doo-custom-btn test2' disabled={this.state.btnState ? true : null}>
                                            Qeydiyyatdan keçin
                                        </button>      
                                        {/* <SweetAlert
                                            show={this.state.show}
                                            title="Demo"
                                            text="SweetAlert in React"
                                            onConfirm={() => this.setState({ show: false })}
                                        />                                   */}
                                    </form>
                                    <div className="bottom-log d-flex flex-column justify-content-center">
                                        <span>Saytda şəxsi kabinetiniz yoxdursa</span>
                                        <Link to="/Login" className="same-log">
                                            DAXİL OLUN
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