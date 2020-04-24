import React, { Component, useCallback } from 'react';
// import Dropzone from 'react-dropzone'
import {useDropzone} from 'react-dropzone'
import { Link } from 'react-router-dom';
import  Header   from './Layouts/Header';
import  Footer   from './Layouts/Footer';
// import file from '/public/images/file.svg'
// import redcircle from '/public/images/redellipse.svg';
import NewAd from './NewAd'

export default class Sign extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            // prices: {
            // },
            cities: [],
            price_daily: '',
            price_weekly: '', 
            price_monthly: '',
            description: '',
            user_name: '',
            user_email: '',
            user_mobile: '',
            // categoryName: '',
            subCategoryName: '',
            rememberMe: false,
            newAd : [],
            text: '',
            rules: false
        }
        
        this.selectOpt = this.selectOpt.bind(this);
    }
    custom(el) {
        return document.getElementById(el);
      }
      uploadFile() {    
        var file = this.custom("file-download").files[0];
        // alert(file.name+" | "+file.size+" | "+file.type);
        var formdata = new FormData();
        formdata.append("file-download", file);
        var ajax = new XMLHttpRequest();
        ajax.upload.addEventListener("progress", this.progressHandler, false);
        ajax.addEventListener("load", this.completeHandler, false);
        ajax.addEventListener("error", this.errorHandler, false);
        ajax.addEventListener("abort", this.abortHandler, false);
        ajax.open("POST", "https://www.developphp.com/video/JavaScript/File-Upload-Progress-Bar-Meter-Tutorial-Ajax-PHP"); // 
        //use file_upload_parser.php from above url
        ajax.send(formdata);
      }
    
       progressHandler = (event) => {
        // this.custom("loaded_n_total").innerHTML = "Uploaded " + event.loaded + " bytes of " + event.total;
        var percent = (event.loaded / event.total) * 100;
        this.custom("progressBar").value = Math.round(percent);
        // this.custom("status").innerHTML = Math.round(percent) + "% uploaded... please wait";
      }
      showRules = (e) =>{
        // let _this = this 
        e.preventDefault();
            this.setState({
                rules: true
            })
        }

        slideMe = () => {
            let slick = document.getElementsByClassName("mobile")[0];
            if(slick.classList.contains("m770")) {
                slick.classList.remove("m770")
            }
            slick.classList.add("zero");
          }
           slideMe2 = () => {
            let slick = document.getElementsByClassName("mobile")[0];
            if(slick.classList.contains("zero")) {
                slick.classList.remove("zero")
            }
            slick.classList.add("m400");
          }
    //    completeHandler =(event) =>  {
    //     // this.custom("status").innerHTML = event.target.responseText;
    //     this.custom("progressBar").value = 0; //wil clear progress bar after successful upload
    //   }
      
      getNewAd = (fieldName) => (e) => {
            e.preventDefault();
            this.setState({
                [fieldName]: e.target.value,    
            })
      }
      async selectOpt(e) {
        e.preventDefault();
       await this.setState({
            subCategoryName: e.target.value,
            // text: e.target.innerHTML
        })
        console.log(this.state.subCategoryName)
      }
      addData = async (e) => {
          e.preventDefault();
          let newAd = {
              price_daily: this.state.price_daily,
              price_weekly: this.state.price_weekly,
              price_monthly: this.state.price_monthly,
              description: this.state.description,
              user_name: this.state.user_name,
              user_email: this.state.user_email,
              user_mobile: this.state.user_mobile,
            //   categoryName: this.state.categoryName,
              subCategoryName: this.state.subCategoryName,
            }
            await this.setState({
                newAd
            })
            console.log(newAd)
            let newAds = this.state.newAd;

            // await console.log(newAd);
            fetch("http://127.0.0.1:8000/api/test", {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                method: 'post',
                body: JSON.stringify(newAds) ,
            }).then((res) => {
                console.log(res.json());
            })
        }
      componentDidMount() {
        fetch('http://127.0.0.1:8000/api/elanlar/allCategories',{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            method: 'get',
            // body: newAd 
        }).then(resp => {
            return resp.json()
        }).then(data => {
            console.log(data)
                this.setState({
                    categories: data.categories,
                    // img: data.map(inner => { return inner.image_path })
                    cities: data.cities
                })
                // console.log(this.state.img)
        })
        // function rules(rule) {
        //     if (rule.matches) { // If media query matches
        //         _this.setState({
        //             rules: true
        //         })
        //     } else {
        //         _this.setState({
        //             rules: false
        //         })
        //     }
        //   }
        // let rule = window.matchMedia("(max-width: 576px)")
    
        // rules(rule)
        // rule.addListener(rules)
    }

    render() {
        let rules = this.state.rules
        const category = this.state.categories;
        const cities = this.state.cities;
        return (
            <div>
                {/* <Header /> */}
                <section className="advertisement">
                    <div className="container-lg">
                        <div className="row">
                            <div className="heading-section align-items-center d-flex d-md-block justify-content-between justify-content-md-center">
                                <span>YENİ ELAN</span> 
                                <div onClick={this.slideMe} className="rule-caller">Qaydalar</div>
                                <div className="mobile">
                                    <div className="slick-category-back"><div className="d-inline-block"><button className="backto" onClick={this.slideMe2}><img src="./images/arrow-down-white.svg" alt=""/> Geri</button></div><div className="d-inline-block w-75 text-center">Doo.az-ın sadə qaydaları</div></div>
                                    <div className="rules-advert">
                                        <div className="info-rules">
                                            <ul className="rules">
                                                <li>Eyni elanı bir neçə dəfə təqdim etməyin.</li>
                                                <li>Təsvir və ya şəkillərdə telefon, email və ya sayt ünvanı göstərməyin.</li>
                                                <li>Ad yerində qiymət yazmayın - bunun üçün ayrıca yer var.</li>
                                                <li>Qadağan olunmuş məhsulları satmayın.</li>
                                                <li>Saytın tam qaydaları</li>
                                            </ul>
                                        </div>
                                        <div className="line-rules">
                                            {/* <Link href="/"> */}
                                            <a href="/" className="rules-click">Saytın bütün qaydaları</a>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-lg">
                        <div className="row">
                           <div className="advertise-cover">
                                <div className="advert-inner w-100">
                                    <form action="http://127.0.0.1:8000/api/test"  class="ad-fill   "  encType="multipart/form-data" method="post">
                                        <label>
                                            <p className="same-cat">Kateqoriya <span>*</span></p>
                                            <select name="category" value={this.state.subCategoryName} onChange={this.selectOpt}>
                                                <option value="" selected>Siyahıdan Seçin</option>
                                                    {category.map(cat => {
                                                        return <optgroup  label={cat.name.az}>
                                                            {cat.sub_categories.map(sub => {
                                                                return  <option value={sub.id}  name={sub.name.az}>{sub.name.az}</option>
                                                            })}
                                                            </optgroup>
                                                    })}
                                            </select>
                                        </label>
                                        <label htmlFor="">
                                            <p>Marka <span>*</span></p>
                                            <select name="" id="">
                                                <option value="">Samsung</option>
                                            </select>
                                        </label>
                                        <label htmlFor="">
                                            <p>Elanın adı <span>*</span></p>
                                            <input type="text" placeholder="Galaxy Note 9, 128 GB"/>
                                        </label>
                                        <label>
                                            <p className="same-cat">Şəhər <span>*</span></p>
                                            <select name="" id="" >
                                                {cities.map((city) => {
                                                    return <option value="">{city.name.az}</option>
                                                })}
                                                {/* <option value="Ev">Bakı</option>
                                                <option value="Telefon">Sumqayıt</option>
                                                <option value="Avtomobil">Gəncə</option> */}
                                            </select>
                                        </label>
                                        <label>
                                            <p className="same-cat">Qiymət, AZN <span>*</span></p>
                                            <div className="pays d-flex flex-sm-row align-items-center">
                                                <input type="text" value={this.state.price_daily} onChange={this.getNewAd('price_daily')} name="price_daily" placeholder="Qiymət günlük"/>
                                                <input type="text" className="ml-0 ml-sm-2 " value={this.state.price_weekly} onChange={this.getNewAd('price_weekly')} name="price_weekly" placeholder="Qiymət həftəlik"/>
                                                <input type="text" className="ml-0 ml-sm-2 " value={this.state.price_monthly} onChange={this.getNewAd('price_monthly')} name="price_monthly" placeholder="Qiymət aylıq"/>
                                            </div>
                                        </label>
                                        <label>
                                            <p>Məzmun <span>*</span></p>
                                            <textarea value={this.state.description} onChange={this.getNewAd('description')} name="description" id=""></textarea>
                                        </label>
                                        {/* <form action="http://127.0.0.1:8000/api/test"  > */}
                                        <form className="dropzone">
                                            <div class="fallback">
                                                <input name="img[]"  type="file"  />
                                            </div>
                                        </form>
                    
                                        <label>
                                            <p>Adınız <span>*</span></p>
                                            <input type="text" name="user_name" value={this.state.user_name} onChange={this.getNewAd('user_name')}/>
                                        </label>
                                        <label>
                                            <div className="">
                                            <p>E-mail<span>*</span></p>
                                            <span className="gray-span">Saytda göstərilmir</span>
                                            </div>
                                            <input type="text" name="user_email" value={this.state.user_email} onChange={this.getNewAd('user_email')}/>
                                        </label>
                                        <label>
                                            <div className="">
                                            <p>Mobil nömrə <span>*</span></p>
                                            <span className="gray-span">Yalnız birini qeyd edin </span>
                                            </div>
                                            <input type="text" name="user_mobile" value={this.state.user_mobile} onChange={this.getNewAd('user_mobile')} placeholder="(000) 000-00-00"/>
                                        </label>
                                        <label className="save-info">
                                            <div className="labbing d-flex justify-content-between align-items-center">
                                                <label className="lab-log">Məlumat yadda saxla
                                                    <input type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>                                            
                                            </div>
                                        </label>
                                        <label>
                                            <div className="d-flex justify-content-between caution-box flex-column flex-md-row">
                                                <p  >Elan yerləşdirərək, siz Doo.az-ın  
                                                    <a href="" className="ml-2" onClick={this.showRules}>İstifadəçi razılaşması</a> ilə 
                                                    razı olduğunuzu təsdiq edirsiniz.</p>
                                                <Link onClick={this.addData} id="submit-all" >Elanı əlavə et</Link>
                                            </div>
                                        </label>
                                    </form>
                        
                                    <div className="rules-advert d-none d-md-block">
                                        <div className="line-rules">
                                            <h3 className="rules-heading">Doo.az-ın sadə qaydaları</h3>
                                        </div>                                        
                                        <div className="info-rules">
                                            {/* <div className="line-rules"><div><img src="/images/redellipse.svg" alt=""/></div><span>Eyni elanı bir neçə dəfə təqdim etməyin.</span></div>
                                            <div className="line-rules"><div><img src="/images/redellipse.svg" alt=""/></div><span>Təsvir və ya şəkillərdə telefon, email və ya sayt ünvanı göstərməyin.</span></div>
                                            <div className="line-rules"><div><img src="/images/redellipse.svg" alt=""/></div><span>Ad yerində qiymət yazmayın - bunun üçün ayrıca yer var.</span></div>
                                            <div className="line-rules"><div><img src="/images/redellipse.svg" alt=""/></div><span>Qadağan olunmuş məhsulları satmayın.</span></div>
                                            <div className="line-rules"><div><img src="/images/redellipse.svg" alt=""/></div><span>Saytın tam qaydaları</span></div> */}
                                            <ul className="rules">
                                                <li>Eyni elanı bir neçə dəfə təqdim etməyin.</li>
                                                <li>Eyni elanı bir neçə dəfə təqdim etməyin.</li>
                                                <li>Eyni elanı bir neçə dəfə təqdim etməyin.</li>
                                                <li>Eyni elanı bir neçə dəfə təqdim etməyin.</li>
                                                <li>Eyni elanı bir neçə dəfə təqdim etməyin.</li>
                                            </ul>
                                        </div>
                                        <div className="line-rules">
                                            <a className="rules-click">Saytın bütün qaydaları</a>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>         

                         
                </section>               
                < Footer />
                {/* <MyDropzone /> */}
                {/* <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                        {({getRootProps, getInputProps}) => (
                                            <section>
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <p>Drag 'n' drop some files here, or click to select files</p>
                                            </div>
                                            </section>
                                        )}
                                    </Dropzone> */}

            </div>
        )
    }
}

// function MyDropzone() {
//     const onDrop = useCallback((acceptedFiles) => {
//       acceptedFiles.forEach((file) => {
//         const reader = new FileReader()
  
//         reader.onabort = () => console.log('file reading was aborted')
//         reader.onerror = () => console.log('file reading has failed')
//         reader.onload = () => {
//         // Do whatever you want with the file contents
//           const binaryStr = reader.result
//           console.log(binaryStr)
//         }
//         reader.readAsArrayBuffer(file)
//       })
      
//     }, [])
//     const {getRootProps, getInputProps} = useDropzone({onDrop})
  
//     return (
//       <div {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//     )
//   }