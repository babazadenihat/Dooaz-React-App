import React, { useState } from 'react'
import {Link} from 'react-router-dom';
    const imgLeft = {
        top: '13px',
        left: '20px'
    }
    const imgRight = {
        top: '13px',
        right: '20px',
        filter: 'brightness(2)'
    }
    const fixPad = {
        padding: '12px 27px'
    }

  function  handleClick(){
    var b= document.getElementById("drop1");
   b.classList.toggle("active")
    }
  function LoggedUser(props)  {
    if(props === {} || props === null) {
       return
    }
   return (
       <div className="login text-white font-bold  position-relative" style={fixPad} id="login" onClick={handleClick}>
           <div className="d-flex">
               <img  className="mr-2" src="/images/user-per.svg"/>
               <div className="name-anime">
                   {/* {props !==null ? setProp(prop = props)} */}
                   {/* {(props !==null || props !== '' ) ? alert('data is not null')  : alert('data is null')}  */}
                   {/* {props !== null ?  props.user.fname : ''} */}
                   {props.user.fname}
                   {props.user.sname}
               </div>
           </div>
               <div className="drp-down" id="drop1">
                   <Link to="/Success" className="first-link">Mənim elanlarım</Link>
                   <Link to="/Personal">Şəxsi məlumatlar</Link>
                   <Link to="" onClick={props.removeUser}>Çıxış</Link>
               </div>
               {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                   <Link to="../Success">Mənim elanlarım</Link>
                   <Link to="../Personal">Şəxsi məlumatlar</Link>
                   <Link to="" className="dropdown-item">Çıxış</Link>
               </div> */}

       </div>
   )
}
  export default function HeaderInMobile(props) {
        const categories = props.categories
        console.log(categories)
      const [slide, turnSlide] = useState(false)
      const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

     const removeUser = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token');
        // localStorage.getItem('user')
        // this.setState({
        //     user: JSON.parse(localStorage.getItem('user'))
        // })
    }
    return (
        <div className="f  align-items-between "  role="banner">
            <div className="d-flex flex-wrap align-items-start justify-content-between mobile-high-header">
                <div className="d-flex align-items-end">
                    <div className="hamburger">
                        <button type="button" class="drawer-toggle drawer-hamburger">
                            {/* <span class="sr-only">toggle navigation</span> */}
                            {/* <span class="drawer-hamburger-icon"></span> */}
                            <span><img src="/images/hamburger-icon.svg" alt=""/></span>
                        </button>
                    </div>
                    <div>
                        {/* <button type="button" class="drawer-toggle drawer-hamburger">
                            <span class="sr-only">toggle navigation</span>
                            <span class="drawer-hamburger-icon"></span>
                        </button> */}
                        <nav class="drawer-nav" role="navigation">
                            <div className="sidebar-header">
                                <div className="lang">EN</div>
                                <div className="logo-sticker">doo.az</div>
                                <div className="lang drawer-toggle drawer-hamburger">X</div>
                            </div>
                            <div className="sidebar-menu">
                                <div className="sidebar-user"><img src="" alt=""/>Giris</div>
                                <div className="sidebar-bookmark"><img src="" alt=""/>Secilmisler</div>
                                <div className="sidebar-balance"><img src="" alt=""/>Balansi Artirin</div>
                            </div>
                        </nav>
                    </div>
                    {/* <div className="hamburger-sidebar">
                        <div className="sidebar-header">
                            <div className="lang">EN</div>
                            <div className="logo-sticker">doo.az</div>
                            <div className="lang">EN</div>
                        </div>
                        <div className="sidebar-menu">
                            <div className="sidebar-user"><img src="" alt=""/>Giris</div>
                            <div className="sidebar-bookmark"><img src="" alt=""/>Secilmisler</div>
                            <div className="sidebar-balance"><img src="" alt=""/>Balansi Artirin</div>
                        </div>
                    </div> */}
                    <div className="logo ml-3">
                        <Link to="/"><img src="/images/logo.svg" className="logo" alt=""/></Link>
                    </div>
                </div>
                <div>
                    <div className="d-flex align-items-center ml-sm-4">
                        {/* <Link to="/Login" className="login text-white">
                            <img src="/images/log-in.svg" className="mr-2" alt=""/>
                        </Link> */}
                        {user ? <LoggedUser user={user} removeUser={removeUser}/> :  <Link to="/Login" className="login text-white">
                                            <img src="/images/log-in.svg" className="mr-2" alt=""/>Giriş
                                        </Link>}
                        <Link to="/NewAd" className="advert text-white ml-3 ml-sm-2">
                            <img src="/images/plus.svg" className="mr-2" alt=""/>Elan yerləşdir
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
