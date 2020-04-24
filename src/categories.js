import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SelectCtegory from './Component/SelectCategory'
// import categoryIco1 from './images/category-1.svg'
// import categoryIco2 from './images/category-2.svg'
// import categoryIco3 from './images/category-3.svg'
// import categoryIco4 from './images/category-4.svg'
// import categoryIco5 from './images/category-5.svg'
// import categoryIco6 from './images/category-6.svg'
// import categoryIco7 from './images/category-7.svg'
// import categoryIco8 from './images/category-8.svg'
// import categoryIco9 from './images/category-9.svg'
// import categoryIco10 from './images/category-10.svg'
// import categoryIco11 from './images/category-11.svg'
// import categoryIco12 from './images/category-12.svg'

const allData = [
    {
        "cities": [
          {
            "name": {
              "az": "Baku",
              "en": "Baku"
            }
          }
        ],
        "categories": [
          {
            "id": 1,
            "name": "Daşınmaz əmlak",
            "slug": "dasinmaz-emlak",
            "isMain": 1,
            "category_id": null,
            "image_path": ".\/images\/category-1.svg",
            "created_at": "2020-03-07 15:06:24",
            "updated_at": "2020-03-07 15:06:24",
            "ad_count": 0,
            "sub_categories": [
              {
                "id": 6,
                "name": "Mənzillər",
                "slug": "menziller",
                "isMain": 0,
                "category_id": 1,
                "image_path": null,
                "created_at": "2020-03-07 15:06:24",
                "updated_at": "2020-03-07 15:06:24",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 7,
                "name": "Villalar, bağ evləri",
                "slug": "villalar-bag-evleri",
                "isMain": 0,
                "category_id": 1,
                "image_path": null,
                "created_at": "2020-03-07 15:06:24",
                "updated_at": "2020-03-07 15:06:24",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 8,
                "name": "Obyektlər və ofislər",
                "slug": "obyektler-ve-ofisler",
                "isMain": 0,
                "category_id": 1,
                "image_path": null,
                "created_at": "2020-03-07 15:06:24",
                "updated_at": "2020-03-07 15:06:24",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 9,
                "name": "Torpaq",
                "slug": "torpaq",
                "isMain": 0,
                "category_id": 1,
                "image_path": null,
                "created_at": "2020-03-07 15:06:24",
                "updated_at": "2020-03-07 15:06:24",
                "ad_count": 1,
                "sub_categories": []
              },
              {
                "id": 10,
                "name": "Xaricdə əmlak",
                "slug": "xaricde-emlak",
                "isMain": 0,
                "category_id": 1,
                "image_path": null,
                "created_at": "2020-03-07 15:06:24",
                "updated_at": "2020-03-07 15:06:24",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 11,
                "name": "Qarajlar",
                "slug": "qarajlar",
                "isMain": 0,
                "category_id": 1,
                "image_path": null,
                "created_at": "2020-03-07 15:06:24",
                "updated_at": "2020-03-07 15:06:24",
                "ad_count": 0,
                "sub_categories": []
              }
            ]
          },
          {
            "id": 2,
            "name": "Elektronika",
            "slug": "elektronika",
            "isMain": 1,
            "category_id": null,
            "image_path": ".\/images\/category-2.svg",
            "created_at": "2020-03-07 15:06:24",
            "updated_at": "2020-03-07 15:06:24",
            "ad_count": 0,
            "sub_categories": [
              {
                "id": 12,
                "name": "Telefonlar",
                "slug": "telefonlar",
                "isMain": 0,
                "category_id": 2,
                "image_path": null,
                "created_at": "2020-03-07 15:06:24",
                "updated_at": "2020-03-07 15:06:24",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 13,
                "name": "Nömrələr və SİM-kartlar",
                "slug": "noemreler-ve-sim-kartlar",
                "isMain": 0,
                "category_id": 2,
                "image_path": null,
                "created_at": "2020-03-07 15:06:24",
                "updated_at": "2020-03-07 15:06:24",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 14,
                "name": "Audio və video",
                "slug": "audio-ve-video",
                "isMain": 0,
                "category_id": 2,
                "image_path": null,
                "created_at": "2020-03-07 15:06:24",
                "updated_at": "2020-03-07 15:06:24",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 15,
                "name": "Kompüter aksesuarları",
                "slug": "kompueter-aksesuarlari",
                "isMain": 0,
                "category_id": 2,
                "image_path": null,
                "created_at": "2020-03-07 15:06:24",
                "updated_at": "2020-03-07 15:06:24",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 16,
                "name": "Komponentlər və monitorlar",
                "slug": "komponentler-ve-monitorlar",
                "isMain": 0,
                "category_id": 2,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 17,
                "name": "Noutbuklar və Netbuklar",
                "slug": "noutbuklar-ve-netbuklar",
                "isMain": 0,
                "category_id": 2,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 18,
                "name": "Oyunlar, pultlar və proqramlar",
                "slug": "oyunlar-pultlar-ve-proqramlar",
                "isMain": 0,
                "category_id": 2,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 19,
                "name": "Foto texnika",
                "slug": "foto-texnika",
                "isMain": 0,
                "category_id": 2,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 20,
                "name": "Masaüstü kompüterlər",
                "slug": "masauestue-kompueterler",
                "isMain": 0,
                "category_id": 2,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 21,
                "name": "Ofis avadanlığı və istehlak",
                "slug": "ofis-avadanligi-ve-istehlak",
                "isMain": 0,
                "category_id": 2,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 22,
                "name": "Planşet və elektron kitablar",
                "slug": "planset-ve-elektron-kitablar",
                "isMain": 0,
                "category_id": 2,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              }
            ]
          },
          {
            "id": 3,
            "name": "Ev və bağ üçün",
            "slug": "ev-ve-bag-uecuen",
            "isMain": 1,
            "category_id": null,
            "image_path": ".\/images\/category-3.svg",
            "created_at": "2020-03-07 15:06:24",
            "updated_at": "2020-03-07 15:06:24",
            "ad_count": 0,
            "sub_categories": [
              {
                "id": 23,
                "name": "Mebel və interyer",
                "slug": "mebel-ve-interyer",
                "isMain": 0,
                "category_id": 3,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 24,
                "name": "Təmir və tikinti",
                "slug": "temir-ve-tikinti",
                "isMain": 0,
                "category_id": 3,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 25,
                "name": "Məişət texnikası",
                "slug": "meiset-texnikasi",
                "isMain": 0,
                "category_id": 3,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 26,
                "name": "Qab-qacaq və mətbəx ləvazimatları",
                "slug": "qab-qacaq-ve-metbex-levazimatlari",
                "isMain": 0,
                "category_id": 3,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 27,
                "name": "Bitkilər",
                "slug": "bitkiler",
                "isMain": 0,
                "category_id": 3,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              }
            ]
          },
          {
            "id": 4,
            "name": "Nəqliyyat",
            "slug": "neqliyyat",
            "isMain": 1,
            "category_id": null,
            "image_path": ".\/images\/category-4.svg",
            "created_at": "2020-03-07 15:06:24",
            "updated_at": "2020-03-07 15:06:24",
            "ad_count": 0,
            "sub_categories": [
              {
                "id": 28,
                "name": "Ehtiyat hissələri və aksesuarlar",
                "slug": "ehtiyat-hisseleri-ve-aksesuarlar",
                "isMain": 0,
                "category_id": 4,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 29,
                "name": "Avtomobillər",
                "slug": "avtomobiller",
                "isMain": 0,
                "category_id": 4,
                "image_path": null,
                "created_at": "2020-03-07 15:06:25",
                "updated_at": "2020-03-07 15:06:25",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 30,
                "name": "Avtobuslar və xüsusi texnika",
                "slug": "avtobuslar-ve-xuesusi-texnika",
                "isMain": 0,
                "category_id": 4,
                "image_path": null,
                "created_at": "2020-03-07 15:06:26",
                "updated_at": "2020-03-07 15:06:26",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 31,
                "name": "Motosikletlər və mopedlər",
                "slug": "motosikletler-ve-mopedler",
                "isMain": 0,
                "category_id": 4,
                "image_path": null,
                "created_at": "2020-03-07 15:06:26",
                "updated_at": "2020-03-07 15:06:26",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 32,
                "name": "Su nəqliyyatı",
                "slug": "su-neqliyyati",
                "isMain": 0,
                "category_id": 4,
                "image_path": null,
                "created_at": "2020-03-07 15:06:26",
                "updated_at": "2020-03-07 15:06:26",
                "ad_count": 0,
                "sub_categories": []
              }
            ]
          },
          {
            "id": 5,
            "name": "Şəxsi əşyalar",
            "slug": "sexsi-esyalar",
            "isMain": 1,
            "category_id": null,
            "image_path": ".\/images\/category-5.svg",
            "created_at": "2020-03-07 15:06:24",
            "updated_at": "2020-03-07 15:06:24",
            "ad_count": 0,
            "sub_categories": [
              {
                "id": 33,
                "name": "Saat və zinət əşyaları",
                "slug": "saat-ve-zinet-esyalari",
                "isMain": 0,
                "category_id": 5,
                "image_path": null,
                "created_at": "2020-03-07 15:06:26",
                "updated_at": "2020-03-07 15:06:26",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 34,
                "name": "Geyim və ayaqqabılar",
                "slug": "geyim-ve-ayaqqabilar",
                "isMain": 0,
                "category_id": 5,
                "image_path": null,
                "created_at": "2020-03-07 15:06:26",
                "updated_at": "2020-03-07 15:06:26",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 35,
                "name": "Sağlamlıq və gözəllik",
                "slug": "saglamliq-ve-goezellik",
                "isMain": 0,
                "category_id": 5,
                "image_path": null,
                "created_at": "2020-03-07 15:06:26",
                "updated_at": "2020-03-07 15:06:26",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 36,
                "name": "Aksesuarlar",
                "slug": "aksesuarlar",
                "isMain": 0,
                "category_id": 5,
                "image_path": null,
                "created_at": "2020-03-07 15:06:26",
                "updated_at": "2020-03-07 15:06:26",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 37,
                "name": "İtmiş əşyalar",
                "slug": "itmis-esyalar",
                "isMain": 0,
                "category_id": 5,
                "image_path": null,
                "created_at": "2020-03-07 15:06:26",
                "updated_at": "2020-03-07 15:06:26",
                "ad_count": 0,
                "sub_categories": []
              },
              {
                "id": 38,
                "name": "İtmiş əşyalar",
                "slug": "itmis-esyalar-1",
                "isMain": 0,
                "category_id": 5,
                "image_path": null,
                "created_at": "2020-03-07 15:06:26",
                "updated_at": "2020-03-07 15:06:26",
                "ad_count": 0,
                "sub_categories": []
              }
            ]
          }
        ]
      }
]
{allData.map(data => {
    console.log(data.cities.map(inner =>  { return inner.name.az}))  
})}

export default class Categories extends Component {
    state = {
        activeCategoryId: null,
        categories: [],
        city: []
    }
    
    componentDidMount() {
        fetch('http://192.168.88.253:8000/api/elanlar/newad',{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            method: 'post',
            // body: users 
        }).then(resp => {
            return resp.json()
        }).then(data => {
            console.log(data)
            console.log(data.cities.map(city =>  city.name))
            // console.log(cat)
                this.setState({
                    categories: data,
                    city:data.cities.map(inner =>  { return inner.name.az})
                    // img: data.map(inner => { return inner.image_path })
                })
                console.log(this.state.img)
                // console.log(this.state.categories)
            // this.setState({
            //     categories: [...categories, data]
            // })
        })
    }
    _categoryClick(id) {
        this.setState({
            activeCategoryId: this.state.activeCategoryId === id ? null : id
        })
    }
    
    render() {
        
        const categories = this.state.categories;
        // const categoryIcon = this.state.img
        // const gridCategory = [...Array(Math.ceil(categories.length / 4)).keys()].map((index) => {
        //     const categoriesView = categories.slice(index * 4, index * 4 + 4).map(category => (
        //         <div>
        //             <a  className={`d-flex align-items-center cat-links ${this.state.activeCategoryId === category.id ? 'triangle' : ''}`}
                        
        //                 onClick={() => this._categoryClick(category.id)}
        //             >
        //                 {/* {categoryIcon.map(img => { */}
        //                     <div className="img-circle">
        //                         <img src={category.image_path} alt=""/>
        //                     </div>
        //                 {/* // })} */}
        //                  { category.name }
        //             </a>
        //         </div>
        //     ))
        //     const subCategoriesView = categories.slice(index * 4, index * 4 + 4).map((category, index) => (
        //         <div className={`w-100 content ${this.state.activeCategoryId === category.id ? 'content-active' : ''}`} id={`subcategory-${category.id}`} key={index}>
        //             <div className="heading-content w-100 d-flex">
        //                 <a href={category.slug} className="mr-3">Bütün elanlar</a>
        //                 {/* <span className="number-doo number-all">{ category.sub_categories.map(item => item.count).reduce((a, b) => a + b, 0)}</span> */}
        //                 {/* <span className="number-doo number-all">{ category.ad_count}</span> */}
        //             </div>
        //             <div className="mega-sub">   
        //                 { category.sub_categories.map((item, index) => (
        //                     <div className="d-flex" key={index}>
        //                         <Link to={item.slug} className="mr-2">{ item.name }</Link>
        //                         {/* <span className="number-doo">{ category.name }</span> */}
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     ))
        //     return (
        //         <div className="category-row">
        //             <div className="main-links">
        //                 { categoriesView } 
        //             </div>
        //             <div className="subcategory-inner">
        //                 { subCategoriesView }
        //             </div>
        //         </div>
        //     )
        // })
        return (
            <div>
                <div className="category">
                    <div className="grid-category">
                    {/* {gridCategory}  */}
             
                    </div>
                </div>
            </div>
        )
    }
}


 class Select extends Component {
    render() {
        return (
            <div>
                <select name="" id="">
                    <option value="">{this.state.city}</option>
                </select>
            </div>
        )
    }
}
