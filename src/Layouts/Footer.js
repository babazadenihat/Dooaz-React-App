import React , { Component } from 'react';
import {Link} from 'react-router-dom'
// import Images from '../Images';
// import homeIcon from '../../public/images/home-icon.svg';
// import homeIcon from '/public/images/home-icon.svg';

import '../App.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                 <footer className="footer-color" >
                <div className="container-fluid">
                    <div className="container-md">
                        <div className="d-flex flex-column">
                            <div className="flex-column flex-sm-row d-flex justify-content-between">
                                <div className="d-flex align-items-center flex-column">
                                    <div className="d-flex w-100 align-items-center">
                                        <Link to="/" className="home-page">
                                            <img src="./images/home-icon.svg" className="home-ico mr-2" alt=""/>Ana Səhifə
                                        </Link>
                                        {/* <Link href="/" >
                                            <a className="faq ml-5">SAYTDA REKLAM</a>
                                        </Link> */}
                                        <Link to="/faq" className="faq ml-5">
                                            FAQ
                                        </Link>
                                    </div>
                                    {/* <div className="mt-5 text-white">
                                        <span>Saytın rəhbərliyi reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır</span>
                                    </div> */}
                                </div>
                                <div className="d-flex flex-column flex-sm-row align-items-baseline align-items-md-center justify-content-start justify-content-md-end mt-0">
                                    <div className="about-us-footer mt-4 mt-sm-0">
                                        <span className="mb-3">HAQQIMIZDA</span>
                                        <Link href="" className="mt-3">Qaydalar</Link>
                                        <Link href="" className="mt-3">Layihə haqqında</Link>
                                        <Link href="" className="mt-3">Necə istifadə etməli</Link>
                                    </div>
                                    <div className="about-us-footer ml-0 ml-sm-4 mt-4 mt-sm-0">
                                        <span className="mb-3">ƏLAQƏ</span>
                                        <a href="callto:(012) 000-08-05" className="mt-3">(012) 000-08-05</a>
                                        <a href="callto:(012) 000-08-05" className="mt-3">(012) 000-08-05</a>
                                        <a href="mailto:info@primpl.com" className="mt-3">info@primpl.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white pt-3 mt-5 border-top">
                                Copyright &copy; 2020 Doo.az
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
  
            </div>
           
    )
    }
   
}
