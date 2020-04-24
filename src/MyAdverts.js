import React, { Component } from 'react'
import  Header   from './Layouts/Header';
import  Footer   from './Layouts/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import ads1 from '/public/images/adsPhoto1.png'
// import ads2 from '/public/images/adsPhoto2.png'
// import ads3 from '/public/images/adsPhoto3.png'
// import ads4 from '/public/images/adsPhoto4.png'
export default class MyAdverts extends Component {
    state = {
        adPanel: true,
        published: false,
        noPublished:false,
        expired: false,
        pending: false
    }
    componentDidUpdate() {
        this.setState({
            adPanel: false
        })
        // if(this.state.adPanel && this.state.adPanel)
    }
    render() {

        let adPanel = this.state.adPanel
        return (
            <div>
                {/* <Header /> */}
                <section className="myAdsHead">
                    <div className="container-md p-0">
                        <div className="d-flex align-items-center">Mənim elanlarım<span className="adCount mydscount">7</span></div>
                    </div>
                </section>
                <section id="myAds">
                    <div className="container-md p-0">
                        <div className="">
                            <Tabs>
                                <div className="swiper-container slick-tab">
                                    <TabList className="tablist swiper-wrapper">
                                        <Tab className="swiper-slide">Dərc olunmuş<span className="adCount">4</span></Tab>
                                        <Tab className="swiper-slide">Müddəti başa çatmış<span className="adCount">1</span></Tab>
                                        <Tab className="swiper-slide">Yoxlanılır<span className="adCount">1</span></Tab>
                                        <Tab className="swiper-slide">Dərc olunmamış<span className="adCount">1</span></Tab>
                                    </TabList>
                                </div>

                                <TabList className="tablist -tab">
                                    <Tab>Dərc olunmuş<span className="adCount">0</span></Tab>
                                    <Tab>Müddəti başa çatmış<span className="adCount">1</span></Tab>
                                    <Tab>Yoxlanılır<span className="adCount">1</span></Tab>
                                    <Tab>Dərc olunmamış<span className="adCount">1</span></Tab>
                                </TabList>

                                <div className="d-flex justify-content-center">

                                    <TabPanel id="1">
                                        {!adPanel ? 
                                        
                                        <div className="grid-ads">
                                        {/* <Link href="/Ad"> */}
                                            <a>
                                                <div className="grid-ads-item">
                                                    <div>
                                                        <img src="/images/adsPhoto1.png" alt=""/>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="priceTable ">
                                                            <div className="palette1 widthChanger head-size-changer">
                                                                Gunluk
                                                            </div>
                                                            <div className="palette2 widthChanger price-size-changer">
                                                                10azn
                                                            </div>
                                                        </div>
                                                        <div className="priceTable">
                                                            <div className="palette3 widthChanger fontCHanger head-size-changer">
                                                                Heftelik
                                                            </div>
                                                            <div className="palette4 widthChanger  price-size-changer">
                                                                150azn
                                                            </div>
                                                        </div>
                                                        <div className="priceTable">
                                                            <div className="palette1 widthChanger fontCHanger head-size-changer">
                                                                Ayliq
                                                            </div>
                                                            <div className="palette6 widthChanger fontCHanger price-size-changer">
                                                                15000azn
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ads-info">
                                                        <div className="ads-name">
                                                            iPhone X 128GB
                                                        </div>
                                                        <div className="loc-date">
                                                            Gəncə, 09 fevral 2020
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        {/* </Link> */}
                                        {/* <Link href="/Ad"> */}
                                        <a>
                                            <div className="grid-ads-item">
                                                <div>
                                                    <img src="/images/adsPhoto2.png" alt=""/>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="priceTable">
                                                        <div className="palette1 widthChanger head-size-changer">
                                                            Gunluk
                                                        </div>
                                                        <div className="palette2 widthChanger price-size-changer">
                                                            10azn
                                                        </div>
                                                    </div>
                                                    <div className="priceTable">
                                                        <div className="palette3 widthChanger fontCHanger head-size-changer">
                                                            Heftelik
                                                        </div>
                                                        <div className="palette4 widthChanger  price-size-changer">
                                                            150azn
                                                        </div>
                                                    </div>
                                                    <div className="priceTable">
                                                        <div className="palette1 widthChanger fontCHanger head-size-changer">
                                                            Ayliq
                                                        </div>
                                                        <div className="palette6 widthChanger fontCHanger price-size-changer">
                                                            15000azn
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ads-info">
                                                    <div className="ads-name">
                                                        iPhone X 128GB
                                                    </div>
                                                    <div className="loc-date">
                                                        Gəncə, 09 fevral 2020
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    {/* </Link> */}
                                    {/* <Link href="/Ad"> */}
                                        <a>
                                            <div className="grid-ads-item">
                                                <div>
                                                    <img src="/images/adsPhoto3.png" alt=""/>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="priceTable ">
                                                        <div className="palette1 widthChanger head-size-changer">
                                                            Gunluk
                                                        </div>
                                                        <div className="palette2 widthChanger price-size-changer">
                                                            10azn
                                                        </div>
                                                    </div>
                                                    <div className="priceTable">
                                                        <div className="palette3 widthChanger fontCHanger head-size-changer">
                                                            Heftelik
                                                        </div>
                                                        <div className="palette4 widthChanger  price-size-changer">
                                                            150azn
                                                        </div>
                                                    </div>
                                                    <div className="priceTable">
                                                        <div className="palette1 widthChanger fontCHanger head-size-changer">
                                                            Ayliq
                                                        </div>
                                                        <div className="palette6 widthChanger fontCHanger price-size-changer">
                                                            15000azn
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ads-info">
                                                    <div className="ads-name">
                                                        iPhone X 128GB
                                                    </div>
                                                    <div className="loc-date">
                                                        Gəncə, 09 fevral 2020
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    {/* </Link> */}
                                    {/* <Link href="/Ad"> */}
                                        <a>
                                            <div className="grid-ads-item">
                                                <div>
                                                    <img src="/images/adsPhoto4.png" alt=""/>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="priceTable">
                                                        <div className="palette1 widthChanger head-size-changer">
                                                            Gunluk
                                                        </div>
                                                        <div className="palette2 widthChanger price-size-changer">
                                                            10azn
                                                        </div>
                                                    </div>
                                                    <div className="priceTable">
                                                        <div className="palette3 widthChanger fontCHanger head-size-changer">
                                                            Heftelik
                                                        </div>
                                                        <div className="palette4 widthChanger  price-size-changer">
                                                            150azn
                                                        </div>
                                                    </div>
                                                    <div className="priceTable">
                                                        <div className="palette1 widthChanger fontCHanger head-size-changer">
                                                            Ayliq
                                                        </div>
                                                        <div className="palette6 widthChanger fontCHanger price-size-changer">
                                                            15000azn
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ads-info">
                                                    <div className="ads-name">
                                                        iPhone X 128GB
                                                    </div>
                                                    <div className="loc-date">
                                                        Gəncə, 09 fevral 2020
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    {/* </Link> */}

                                    </div>
                                    : <div className="no-ad"><span>Bu bölmədə elan yoxdur</span>
                                        <a class="advert text-white ml-3 ml-sm-2 mt-5" href="/NewAd"><img src="/images/plus.svg" class="mr-2" alt=""/>Elan yerləşdir</a>
                                    </div>
                                    
                                    }
                          
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="grid-ads">
                                            {/* <Link href="/Ad"> */}
                                                <a>
                                                    <div className="grid-ads-item">
                                                        <div>
                                                            <img src="/images/adsPhoto2.png" alt=""/>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="priceTable">
                                                                <div className="palette1 widthChanger head-size-changer">
                                                                    Gunluk
                                                                </div>
                                                                <div className="palette2 widthChanger price-size-changer">
                                                                    10azn
                                                                </div>
                                                            </div>
                                                            <div className="priceTable">
                                                                <div className="palette3 widthChanger fontCHanger head-size-changer">
                                                                    Heftelik
                                                                </div>
                                                                <div className="palette4 widthChanger  price-size-changer">
                                                                    150azn
                                                                </div>
                                                            </div>
                                                            <div className="priceTable">
                                                                <div className="palette1 widthChanger fontCHanger head-size-changer">
                                                                    Ayliq
                                                                </div>
                                                                <div className="palette6 widthChanger fontCHanger price-size-changer">
                                                                    15000azn
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ads-info">
                                                            <div className="ads-name">
                                                                iPhone X 128GB
                                                            </div>
                                                            <div className="loc-date">
                                                                Gəncə, 09 fevral 2020
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            {/* </Link> */}
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="grid-ads">
                                            {/* <Link href="/Ad"> */}
                                                <a>
                                                    <div className="grid-ads-item">
                                                        <div>
                                                            <img src="/images/adsPhoto4.png" alt=""/>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="priceTable">
                                                                <div className="palette1 widthChanger head-size-changer">
                                                                    Gunluk
                                                                </div>
                                                                <div className="palette2 widthChanger price-size-changer">
                                                                    10azn
                                                                </div>
                                                            </div>
                                                            <div className="priceTable">
                                                                <div className="palette3 widthChanger fontCHanger head-size-changer">
                                                                    Heftelik
                                                                </div>
                                                                <div className="palette4 widthChanger  price-size-changer">
                                                                    150azn
                                                                </div>
                                                            </div>
                                                            <div className="priceTable">
                                                                <div className="palette1 widthChanger fontCHanger head-size-changer">
                                                                    Ayliq
                                                                </div>
                                                                <div className="palette6 widthChanger fontCHanger price-size-changer">
                                                                    15000azn
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ads-info">
                                                            <div className="ads-name">
                                                                iPhone X 128GB
                                                            </div>
                                                            <div className="loc-date">
                                                                Gəncə, 09 fevral 2020
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            {/* </Link> */}
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="grid-ads">
                                            {/* <Link href="/Ad"> */}
                                                <a>
                                                    <div className="grid-ads-item">
                                                        <div>
                                                            <img src="/images/adsPhoto2.png" alt=""/>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="priceTable">
                                                                <div className="palette1 widthChanger head-size-changer">
                                                                    Gunluk
                                                                </div>
                                                                <div className="palette2 widthChanger price-size-changer">
                                                                    10azn
                                                                </div>
                                                            </div>
                                                            <div className="priceTable">
                                                                <div className="palette3 widthChanger fontCHanger head-size-changer">
                                                                    Heftelik
                                                                </div>
                                                                <div className="palette4 widthChanger  price-size-changer">
                                                                    150azn
                                                                </div>
                                                            </div>
                                                            <div className="priceTable">
                                                                <div className="palette1 widthChanger fontCHanger head-size-changer">
                                                                    Ayliq
                                                                </div>
                                                                <div className="palette6 widthChanger fontCHanger price-size-changer">
                                                                    15000azn
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ads-info">
                                                            <div className="ads-name">
                                                                iPhone X 128GB
                                                            </div>
                                                            <div className="loc-date">
                                                                Gəncə, 09 fevral 2020
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            {/* </Link> */}
                                        </div>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}