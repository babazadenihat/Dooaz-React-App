import React from 'react';

    const imgRight = {
        top: '13px',
        right: '20px',
        filter: 'brightness(2)'
    }
    const slideMe = () => {
        let slick = document.getElementsByClassName("slick-category")[0];
        if(slick.classList.contains("m400")) {
            slick.classList.remove("m400")
        }
        slick.classList.add("zero");
    }
    const slideMe2 = () => {
        let slick = document.getElementsByClassName("slick-category")[0];
        if(slick.classList.contains("zero")) {
            slick.classList.remove("zero")
        }
        slick.classList.add("m400");
    }

    const showSearchbar = () => {
        let mobile_searchbar = document.getElementsByClassName("mobile-searchbar")[0]
        let cat_dropdown = document.getElementsByClassName("category-dropdown")[0];
        cat_dropdown.classList.toggle('category-none')
        mobile_searchbar.classList.toggle('show-searchbar')
    }
export default function MobileSearhBar() {
    return (
        <div className="mobile-low-header d-flex justify-content-between">
            <div className="w-100">
                <div className="category-dropdown"  onClick={slideMe}>
                    <img src="/images/arrow-down-white.svg" alt=""/>
                    Bütün kateqoriyalar
                </div>
                <div className="mobile-searchbar">
                    <input type="text" placeholder="Axtarış" />
                </div>
                <div className="slick-category">
                    <div className="slick-category-back"><div className="d-inline-block w-25"><button className="backto" onClick={slideMe2}><img src="./images/arrow-down-white.svg" alt=""/> Geri</button></div><div className="d-inline-block w-50 text-center">Kateqoriyalar</div></div>
                    <div className="slick-category-categories">
                        <div>Dasinmaz Emlak</div>
                        <div>Dasinmaz Emlak</div>
                        <div>Dasinmaz Emlak</div>
                        <div>Dasinmaz Emlak</div>
                        <div>Dasinmaz Emlak</div>
                    </div>
                </div>
            </div>
            <div className="position-relative">
                <button className="doo-custom-btn mobile-btn" onClick={showSearchbar}>
                <div className="img-parent" style={imgRight}>
                    <img src="./images/search-icon.svg" alt="" style={imgRight}/>
                </div>
                </button>
            </div>
        </div>
    )
}
