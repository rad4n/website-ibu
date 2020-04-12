import React, {Component} from 'react';
import Moment from 'moment';

class Galery extends Component {
  render(){
    let indonesia = require('moment/locale/id');
    let tgl_lahir = '19921122'; //masukan tanggal lahir Anda disini
    let tgl_karir = '20151004'; //masukan tanggal lahir Anda disini
    Moment.updateLocale('id',indonesia);
    return (
        <section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
            <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                <div className="position-title position-relative">
                    <h6 className="text-center top-title mb-2">Gallery</h6>
                    <div className="sub-position">
                    <h3 className="text-center title mb-3">Moment bersama Ibu saya</h3>
                    </div>
                    <div className="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
                    <p>Foto dan video di momen-momen berkesan bersama ibu saya, semoga bisa menjadi album hidup yang tidak luput oleh waktu</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 about-wthree-images">
                    <img src={require('../../images/bedah-buku.jpg')} alt="news image" className="img-fluid"/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 about-wthree-images">
                    <img src={require('../../images/bukber.jpg')} alt="news image" className="img-fluid"/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 about-wthree-images">
                    <img src={require('../../images/mesin-cuci.jpg')} alt="news image" className="img-fluid"/>
                    </div>
                </div>
                <div className="about-history my-lg-5 my-md-4 my-3">
                    <h2 className="pb-lg-4 pb-3">Sosok pertama yang menghantarkan saya kedunia</h2>
                    <p>Saya bersyukur telah dibesarkan dengan kasih sayang yang tulus dan apa adanya dari tangan beliau. Website ini saya buat agar saya senantiasa ingat tentang jasa dan doanya yang tak penah putus asa sepanjang masa.</p>
                </div>
                <div className="row text-center">

                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 count-num-txt">
                    <div className="number-w3three-info">
                        <h5>{Moment().diff(tgl_lahir, 'years')} tahun</h5>
                        <h6 className="pt-2">kasihnya mengalir</h6>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 count-num-txt">
                    <div className="number-w3three-info">
                        <h5>3 buku</h5>
                        <h6 className="pt-2">terbit karena doa beliau</h6>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 count-num-txt">
                    <div className="number-w3three-info">
                        <h5>{Moment().diff(tgl_karir, 'years')} tahun</h5>
                        <h6 className="pt-2">mendukung saya di karir web developer</h6>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 count-num-txt">
                    <div className="number-w3three-info">
                        <h5>1</h5>
                        <h6 className="pt-2">Keinginan dari beliau agar semua keluarga sehat</h6>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Galery;
