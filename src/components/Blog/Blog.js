import React, {Component} from 'react';

class Blog extends Component {
  render(){
    return (
        <section className="blog py-lg-4 py-md-3 py-sm-3 py-3" id="blog">
            <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                <div className="position-title position-relative">
                    <h6 className="text-center top-title mb-2">Pecahan kisah</h6>
                    <div className="sub-position">
                    <h3 className="text-center title mb-3">Latest Post Blog</h3>
                    </div>
                    <div className="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
                    <p>Beberapa artikel yang bisa saya tulis sebagai memori dan pembelajaran hidup saya untuk masa depan nanti.</p>
                    </div>
                </div>
                <div className="row mt-lg-4 mt-3">
                    <div className="col-lg-6 col-md-6 col-sm-6 blog-two-two">
                    <div className="blog-date-time mb-2">
                        <ul>
                            <li>
                                <a href="#contact">01 Juni 2016</a>
                            </li>
                        </ul>
                    </div>
                    <h4 className="mb-3">
                        <a href="#contact">Acara bedah buku pertama</a>
                    </h4>
                    <p>Suatu kebanggaan bisa mengajak beliau untuk hadir dalam acara bedah buku perdana saya. Semoga bisa menjadi kebanggaan untuk beliau juga</p>
                    <div className="view-buttn my-md-4 my-sm-4 my-3">
                        <a href="#" className="btn">Detail</a>
                    </div>
                    <img src={require('../../images/bedah-buku.jpg')} alt="news image" className="img-fluid " />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 blog-two-two mt-3">
                    <img src={require('../../images/mesin-cuci.jpg')} alt="news image" className="img-fluid" />
                    <div className="blog-date-time mt-lg-4 mt-3 mb-2">
                        <ul>
                            <li>
                                <a href="#">11 Juni 2016</a>
                            </li>
                        </ul>
                    </div>
                    <h4 className="mb-3">
                        <a href="#">Hadiah mesin cuci</a>
                    </h4>
                    <p>Saat orang tua saya menginginkan mesin cuci, baru berkesempatan saat ini saya membelikanya, semoga bisa meringankan pekerjaannya.</p>
                    <div className="view-buttn mt-md-4 mt-sm-4 mt-3">
                        <a href="#" className="btn">Detail</a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Blog;
