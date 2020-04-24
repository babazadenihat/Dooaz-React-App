import React, { Component } from 'react'
import  Header   from './Layouts/Header';
import  Footer   from './Layouts/Footer';
// import logimg from '/public/images/logo-blue.svg'
// import close from '/public/images/X.svg'
// import Circle from '/public/images/check-circle.svg'
export default class sign extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
               <section className="log-same text-center">
                    <div className="container">
                            <div className="row">
                                <div className="inner-log w-100 position-relative">
                                    <img className="position-absolute close-sign" src="X.svg" alt=""/>
                                    <img className="log-img d-block" src="logo-blue.svg" alt=""/>                                 
                                    <div className="success">
                                        <img src="check-circle.svg" alt=""/>
                                        <span>Təbrik edirik!</span>
                                        <p>Siz qeydiyyatdan uğurla keçdiniz!</p>
                                        {/* <Link href="/index"> */}
                                            <a className="success-btn">DAXİL OLUN</a>
                                        {/* </Link> */}
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