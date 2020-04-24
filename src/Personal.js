import React, { Component } from 'react'
import  Header   from './Layouts/Header';
import  Footer   from './Layouts/Footer';
// import save from '/public/images/save.svg'
export default class sign extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                
                <section className="personal">
                    <div className="container">
                        <div className="row">
                            <p className="heading-section">ŞƏXSİ MƏLUMATLAR</p>
                            <div className="personal-inner w-100">
                                <form action="">
                                    <div className="d-flex align-items-center justify-content-between flex-column flex-sm-row">
                                        <label htmlFor="" className="w-100 ">
                                            Ad
                                            <input type="text" placeholder="Tural"/>
                                        </label>
                                        <label htmlFor="" className="mt-3 mt-sm-0 w-100 ml-0 ml-sm-4">
                                            Soyad
                                            <input type="text" placeholder="Taghiyev"/>
                                        </label>
                                    </div>
                                    <label htmlFor="" className="mt-3">
                                        Email
                                        <input type="email" placeholder="tural.taghiyev25@gmail.com"/>
                                    </label>
                                    <label htmlFor="" className="mt-3">
                                        Telefon
                                        <input type="text"  placeholder="(055) 824-33-10"/>
                                    </label>
                                    <div className="button-submit">
                                        <button><img src="/images/save.svg" alt=""/>Yadda saxla</button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </section>               
               <Footer />
            </div>
        )
    }
}