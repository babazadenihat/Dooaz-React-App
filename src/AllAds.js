import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class extends Component {
    state = {
        allAds:[]
    }
    componentWillMount() {
        this._fetchAds();
        this._fetchMoreAds();
    }
    _fetchAds() {
        fetch('http://127.0.0.1:8000/api/elanlar/show',{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            method: 'post',
        }).then(resp => {
            return resp.json();
        }).then(data => {
            this.setState({
                allAds: data.ads.data
            })
        })
    }
    _fetchMoreAds() {
        // fetch(`http://127.0.0.1:8000/${this.state.url}`,{
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Accept': 'application/json'
        //     },
        //     method: 'post',
        // }).then(resp => {
        //     return resp.json();
        // }).then(data => {
        //     this.setState({
        //         url: data.ads.data
        //     })
        // })
        // console.log('New 12 ads loaded')
    }
    render() {
        const ads = this.state.allAds;
        console.log(ads)
        const adView = ads.map((ad, index) => {
            ad.media.map(img => {
                console.log(img.file_name)
            })
            return (
            <Link to="/Ad">
                <div className="grid-ads-item" key={index}>
                    <div>
                    {/* {    ad.media.map(img => {
                            return  <img src={img.file_name} alt=""/>
                            console.log(img.file_name)
                        })} */}
                    </div>
                    <div className="d-flex">
                        <div className="priceTable ">
                            <div className="palette1 widthChanger head-size-changer">
                                Gunluk
                            </div>
                            <div className="palette2 widthChanger price-size-changer">
                            </div>
                        </div>
                        <div className="priceTable">
                            <div className="palette3 widthChanger fontCHanger head-size-changer">
                                Heftelik
                            </div>
                            <div className="palette4 widthChanger  price-size-changer">
                            </div>
                        </div>
                        <div className="priceTable">
                            <div className="palette1 widthChanger fontCHanger head-size-changer">
                                Ayliq
                            </div>
                            <div className="palette6 widthChanger fontCHanger price-size-changer">
                            </div>
                        </div>
                    </div>
                    <div className="ads-info">
                        <div className="ads-name">
                            {ad.name}
                        </div>
                        <div className="loc-date">
                            {ad.created_at}
                            <br/>
                            {/* {console.log(ad.city.name.az)} */}
                            {ad.city.name.az}
                        </div>
                    </div>
                </div>
            </Link>
            )
        })
        return (
            <div className="container">
                <div className="grid-ads">
                    {adView}
                </div>
                <div className="load mt-5 mb-5">
                    <button className="doo-custom-btn m-auto" onClick={this._fetchMoreAds}>Hamsını göstər</button>
                </div>
            </div>
        )
    }
}
