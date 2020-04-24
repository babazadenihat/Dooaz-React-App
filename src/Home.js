import React, { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import  Footer   from './Layouts/Footer';
import AllAds from './AllAds';
import MobileSearhBar from './Layouts/MobileSearhBar';
import Category from './categories';
import {Pagination} from 'react-laravel-paginex';
import { Lines } from 'react-preloaders';
import { checkPropTypes } from 'prop-types';

const imgRight = {
  top: '13px',
  right: '20px',
  filter: 'brightness(2)'
}
const Preloader = () => {
    return  <div class="showPre">
                <img src="./images/5 -2.gif" alt=""/> 
                </div> }

class App extends React.Component {
    state = {
        activeCategoryId: null,
        categories: [],
        city: [],
        preLoader: false,
        slice: 4,
        br: true,
    }

    componentWillMount() {
        let _this = this
      function _media768(media768) {
            if (media768.matches) { 
                _this.setState({
                    slice: 7,
                    catSlice: 7
                })
            } else {
                _this.setState({
                    slice: 4,
                    catSlice: 4
                })
            }
      }
      function _media576(media576) {
        if (media576.matches) { 
            _this.setState({
                slice: 7,
                catSlice: 7
            })
        } else {
            _this.setState({
                slice: 4,
                catSlice: 4
            })
        }
      }
      function _media991(media991) {
        if (media991.matches) { 
            _this.setState({
                br: false
            })
        } else {
            _this.setState({
                br: true
            })
        }
      }
    var media768 = window.matchMedia("(max-width: 768px)")
    var media576 = window.matchMedia("(max-width: 576px)")
    var media991 = window.matchMedia("(max-width: 991px)")

    _media768(media768) 
    _media576(media576)
    _media991(media991)
    media768.addListener(media768)
    media576.addListener(media576)
    media991.addListener(media991)
    }
    _showCity() {
        let select = document.getElementsByClassName('c-select')[0];
        select.classList.toggle('active')
    }
    async componentDidMount() {
        console.log(this.state.preLoader)
        await  this.setState({
                preLoader: false
            })
        await   console.log(this.state.preLoader)
        
        if (window.activateFlipdown) {
            window.activateFlipdown()
        }
        this._fetchCategories(); 
    }

    _fetchCategories() {
        fetch('http://127.0.0.1:8000/api/elanlar/allCategories',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'get',
        }).then(resp => {
            return resp.json();
        }).then(data => {
            console.log(data)
            // console.log(data.cities.map(city =>  city.name))
            // console.log(cat)
                this.setState({
                    categories: data.categories,
                    city:data.cities.map(inner =>  { return inner}),
                    // allAds: data.ads.data
                    // img: data.map(inner => { return inner.image_path })
                })
                console.log(this.state.allAds)
        })

    }
    _categoryClick(id) { 
        this.setState({
            activeCategoryId: this.state.activeCategoryId === id ? null : id
        })
    }
    async UNSAFE_componentWillMount() {
        console.log(this.state.preLoader)

      await  this.setState({
            preLoader: true
        })
     await  console.log(this.state.preLoader)

    }

  render() {
    let preloader = this.state.preLoader

    const allAds = this.state.allAds
    const city = this.state.city
    const categories = this.state.categories;
    const gridCategory = 
    [...Array(Math.ceil(categories.length / this.state.catSlice)).keys()].map((index) =>
     {
        // console.log(index)
        const categoriesView = categories.slice(index * 4, index * 4 + this.state.slice).map(category => (
            <div>
                <a className={`d-flex align-items-center cat-links ${this.state.activeCategoryId === category.id ? 'triangle' : ''}`} href="#"
                    onClick={() => this._categoryClick(category.id)}>
                        <div className="img-circle">
                            <img src={category.image_path} alt=""/>
                        </div>
                     { category.name.az }
                </a>
            </div>
        ))
        const subCategoriesView = categories.slice(index * 4 , index * 4 + 4).map((category, index) => (
            <div className={`w-100 content ${this.state.activeCategoryId === category.id ? 'content-active' : ''}`} id={`subcategory-${category.id}`} key={index}>
                <div className="heading-content w-100 d-flex">
                    <a href={category.slug} className="mr-3">Bütün elanlar</a>
                    <span className="number-doo number-all">{ category.sub_categories.map(item => item.ad_count).reduce((a, b) => a + b, 0)}</span>
                    {/* <span className="number-doo number-all">{ item.ad_count}</span> */}
                </div>
                <div className="mega-sub">   
                    { category.sub_categories.map((item, index) => (
                        <div className="d-flex" key={index}>
                            <Link to={item.slug} className="mr-2">{ item.name.az }</Link>
                            <span className="number-doo">{ item.ad_count}</span>
                        </div>
                    ))}
                </div>
            </div>
        ))
        return (
            <div className="category-row">
                <div className="main-links">
                    { categoriesView } 
                </div>
                <div className="subcategory-inner">
                    { subCategoriesView }
                </div>
            </div>
        )
    })
    return (
      <div>
          {/* <Lines color={'rgb(158, 38, 102)'} time={600} /> */}
            {preloader ?  <Preloader /> : null}
        <section>
            <MobileSearhBar />
            <div className="container-md  mr-4 ml-4  ml-md-auto mr-md-auto w-auto hide-big-searchblock pl-sm-0 pr-sm-0 pt-5 pt-md-4 pb-5 ">
                <div className="">
                        <div className="searchblock-container">
                            <div className="searchblock-container-i"> 
                                <div className="searchblock d-flex">
                                    <div className="img-parent forpro">
                                        <img src="./images/search-icon.svg" alt=""/>
                                    </div>
                                    <input type="search" placeholder="Məsələn, Aksesuarlar"/>
                                </div>
                                <div className="searchblock">
                                    {/* <div className="img-parent forcity">
                                        <img src="./images/map-pin.svg" alt=""/>
                                    </div>
                                    <div className="clickable-inner" onClick={this._showCity} >
                                        <span>Bütün Azərbaycan</span>
                                        <img src="./images/arrow-down.svg" alt=""/>
                                    </div> */}
                                    <div class="dropdown dropdown-cover">
                                       
                                        <button class="btn  dropdown-toggle custom-dropdown " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {/* <div className="img-parent forcity"> */}
                                            <img src="./images/map-pin.svg" alt=""/>
                                        {/* </div> */}
                                            Bütün Azərbaycan
                                            <img src="./images/arrow-down.svg" alt=""/>
                                            <div class="dropdown-menu grid-city" aria-labelledby="dropdownMenuButton">
                                                {city.map(c => {
                                                return    <a class="dropdown-item" href="#">{c.name.az}</a>
                                                })}
                                                <a class="dropdown-item" href="#">Baku</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Naxcivan</a>
                                                <a class="dropdown-item" href="#">Aliabad</a>
                                                <a class="dropdown-item" href="#">Aliabad</a>
                                                <a class="dropdown-item" href="#">Aliabad</a>
                                                <a class="dropdown-item" href="#">Aliabad</a>
                                                <a class="dropdown-item" href="#">Aliabad</a>
                                                <a class="dropdown-item" href="#">Aliabad</a>
                                                <a class="dropdown-item" href="#">Aliabad</a>
                                                <a class="dropdown-item" href="#">Aliabad</a>
                                                <a class="dropdown-item" href="#">Aliabad</a>
                                                <a class="dropdown-item" href="#">Aliabad</a>
                                            </div>
                                        </button>
                                    </div> 
                                    <div className="c-select">
                                        {city.map(c => {
                                        return <div>{c.name.az}</div>
                                        })}
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                        <div>baku</div>
                                    </div>
                                </div>
                            </div>
                        <div className="searchnow-container">
                            <button className="doo-custom-btn">Axtar</button>
                            <div className="img-parent" style={imgRight}>
                                <img src="images/search-icon.svg" alt="" style={imgRight}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-3">
                {/* {pids.map(pid => (<Link href="/[pid]" as={`/#${pid}`}  scroll><a>Bütün elanlar</a></Link>))} */}
                <a href="#allAdverts">Bütün elanlar</a>
                </div>
            </div> 
            <div className="container-md  mr-4 ml-4  ml-md-auto mr-md-auto w-auto pb-5 pl-sm-0 pr-sm-0 big-category">
                <div className="category">
                    <div className="grid-category">
                        {gridCategory} 
                    </div>
                </div>
            </div>
        </section>
        <section className="countdown">
            <div className="container-md">
                <div className="row ">
                    <div className="d-flex justify-content-center flex-column flex-lg-row align-items-center w-100">
                        <div><p className="countdown-ad">Vaxt bitməmiş pulsuz {this.state.br ? <br/> : null}  elanını yerləştir!</p></div>                          
                        <div id="flipdown" className="flipdown"></div>
                            <div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="allAdverts" id="allAdverts">
            <div className="container mt-5 mb-5" >
                <div className="d-flex justify-content-between align-items-center">
                    <div className=""><span className="all-adverts">BÜTÜN ELANLAR</span></div>
                    <div className="d-flex justify-content-end">
                        <button className="drop-advert-container">
                            <span className="tst">Bütün elanlar</span>
                            <img  src="./images/arrow-down.svg" alt=""/>
                            <div className="drop-advert">
                                <div>Elan 1</div>
                                <div>Elan 1</div>
                                <div>Elan 1</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <AllAds />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;