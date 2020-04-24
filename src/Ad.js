import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import AllAds from './AllAds';
import adBig from './images/adBigPhoto.png';
import ad from './images/adsPhoto1.png';
import ad2 from './images/adsPhoto2.png';
import ad3 from './images/adsPhoto3.png';
// import ads1 from '/public/images/adsPhoto1.png'
// import ads2 from '/public/images/adsPhoto2.png'
// import ads3 from '/public/images/adsPhoto3.png'
// import ads4 from '/public/images/adsPhoto4.png';
// import warnIcon from '/public/images/warn-ico.svg'
import "lightgallery.js/dist/css/lightgallery.css";

import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
const big = [
    
    adBig,
]

const GROUP1 = [
    ad,
    ad2,
    ad3
  ];

const PhotoItem = ({ image, group }) => (
    <div>
        <LightgalleryItem group={group} src={image}>
            <img src={image}  />
        </LightgalleryItem>
        {/* style={{ width: "100%" }}  mobile stylie duzelt */}
    </div>
);
export default class Adverts extends Component {
    
//     componentWillMount() {
//         console.log(this.state.btnState)
//         localStorage.getItem("user") && this.setState({
//         userInfo: JSON.parse(localStorage.getItem("user")),
//         status:true
//     })
// }
    render() {
        // const userInfo = localStorage.getItem('user');
        // const status = localStorage.getItem('status');
        return (
            <div>
            {/* <Header /> */}
                <div className="breadcrumb-container">
                    <div className="container-md ml-4 mr-4 mr-md-auto ml-md-auto p-0">
                        <div className="row">
                            <div className="breadcrumb-ads">
                                <a className="mr-2">Bütün kateqoriyalar</a><span className="mr-2">   /  </span>
                                <a className="mr-2">Elektronika</a><span className="mr-2"> / </span>
                                <a>Telefonlar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid ad-images">
                    <div className="container-md ">
                        <div className="row">
                            <LightgalleryProvider>
                                <div className="gallery">
                                    <div>
                                        {big.map((t, id) => {
                                          return  <PhotoItem key={id} image={t} group="group1"/>
                                        })}
                                    </div>
                                    <div style={{ display: "flex" ,flexWrap: 'wrap'}}>
                                        {GROUP1.map((p, idx) => (
                                            <PhotoItem style={{width: '50%'}} key={idx} image={p} group="group1"/>
                                        ))}
                                    </div>
                                </div>
                            </LightgalleryProvider>
                            <LightgalleryProvider>
                            <div className="gallery-swiper swiper-container">
                                <div className="swiper-wrapper">
                                        {big.map((t, id) => {
                                           return <div className="swiper-slide">
                                                <PhotoItem key={id} image={t} group="group1"/>
                                            </div>
                                        })}
                                        {GROUP1.map((p, idx) => (
                                         <div className="swiper-slide">
                                             <PhotoItem style={{width: '50%'}}  image={p} group="group1"/>
                                        </div>
                                        ))}
                                </div>
                                </div>
                            </LightgalleryProvider>

                                    {/* <div style={{ display: "flex", alignItems: "center" ,marginLeft: '20px'}}>
                                        {GROUP1.map((p, idx) => (
                                        <PhotoItem key={idx} image={p} group="group2" />
                                        ))}
                                    </div> */}
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container-lg innerAd">
                  <div className="row row-c-reverse">
                      <div className="pricetable-container">
                            <div className="priceTable">
                                <div className="palette1 widthChanger head-size-changer">
                                    Gunluk
                                </div>
                                <div className="palette2 widthChanger price-size-changer">
                                    10azn
                                </div>
                            </div>
                            <div className="priceTable ml-2 ml-sm-3">
                                <div className="palette3 widthChanger head-size-changer">
                                    Heftelik
                                </div>
                                <div className="palette4 widthChanger price-size-changer">
                                    150azn
                                </div>
                            </div>
                            <div className="priceTable ml-2 ml-sm-3">
                                <div className="palette1 widthChanger head-size-changer">
                                    Ayliq
                                </div>
                                <div className="palette6 widthChanger price-size-changer">
                                    15000azn
                                </div>
                            </div>
                      </div>
                      <div className="ml-0 ml-md-4 mb-4 mb-sm-0">
                          <span className="adName">
                            Samsung Galaxy Note 9
                                128 GB
                          </span>
                      </div>
                  </div>
                </div>
                </div>
                <section className="ad-info">
                    <div className="container-md">
                        <div className="d-flex flex-column flex-column-reverse flex-md-row">
                            <div className="col-12 col-md-6 col-md-4 p-0">
                                <div className="advertiser-info">
                                    <div className="advser-num">
                                        (055) 585-00-00
                                    </div>
                                    <div className="advser-name mt-2">
                                        Elşən Səfərov   
                                    </div>
                                    <div className="mt-3"><a>İstifadəçinin bütün elanları</a></div>
                                    <img src="/images/phone-receiver.svg" className="phn-rcvr" alt=""/>
                                </div>
                                <div className="ad-details">
                                    <div className="ad-id">
                                        Elanın nömrəsi 16144724>
                                    </div>
                                    <div>Baxışların sayı: 9290</div>
                                    <div className="updated-ad">Yeniləndi: 09 Fevral 2020</div>
                                </div>
                                <div><a className="reportAd"><img src="/images/warn-ico.svg" alt=""/> Elandan şikayət et</a></div>
                            </div>
                            <div className="col-12 col-md-6 col-md-8 p-0">
                                <div className="fr1-cvr">
                                    <div className="fr1">
                                        <div className="ad-fr-info pb-2">
                                            <span>Şəhər</span>
                                            <span>Bakı</span>
                                        </div>
                                        <div className="ad-fr-info pt-2">
                                            <span>Marka</span>
                                            <span>Samsung</span>
                                        </div>
                                    </div>
                                    <div className="ad-info-txt">
                                        İdeal vəziyyətdədir. Evdə işlənib, 1 pultla.
                                        Karobkadan çıxan bütün aksesuarları üstündədir.
                                        Üstündə Rdr2 diski və akkaunt var hansı ki içərisində 3 oyun (Pubg, the Witcher, Horizon zero) var
                                        Real alıcılar maraqlana bilər.
                                    </div>
                                    <button className="shr-btn"><img src="/images/share.svg" alt=""/> Paylaş</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="similar-ad">
                <div className="container-md mt-5 mb-5">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-6"><span className="all-adverts">BÜTÜN ELANLAR</span></div>
                            <div className="col-6 d-flex justify-content-end">
                                <button className="drop-advert-container">
                                    <span className="tst">Bütün elanlar</span>
                                    <img  src="/images/arrow-down.svg" alt=""/>
                                    <div className="drop-advert">
                                        <div>Elan 1</div>
                                        <div>Elan 1</div>
                                        <div>Elan 1</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <AllAds /> */}
                </section>
                <Footer />
                </div>
        )
    }
}
