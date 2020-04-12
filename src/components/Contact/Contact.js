import React, {Component} from 'react';

class Contact extends Component {
  render(){
    return (
        <section className="contact py-lg-4 py-md-3 py-sm-3 py-3" id="contact">
            <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                <div className="position-title position-relative">
                    <h6 className="text-center top-title mb-2">Jalin silahturahmi</h6>
                    <div className="sub-position">
                        <h3 className="text-center title mb-3">Kirim pesan & Doa</h3>
                    </div>
                    <div className="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
                        <p>Akan ada notifikasi email bila ada balasan jika sempat, pesan dan doa baik dari Anda akan saya sampaikan pada beliau.</p>
                    </div>
                </div>
                <div className=" contact-form-txt">
                    <form action="#" method="post">
                        <div className="w3pvt-wls-contact-mid">
                            <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                                <input type="text" className="form-control" placeholder="Nama Anda" required="" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                                <input type="text" className="form-control" placeholder="Link akun media sosial Anda (jika berkenan)" required="" />
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                                <input type="email" className="form-control" placeholder="Email" required="" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                                <input type="text" className="form-control" placeholder="Nama ibu Anda (jika berkenan)" />
                            </div>
                            </div>
                            <div className="form-group contact-forms">
                            <textarea className="form-control" placeholder="Doa ataupun pesan yang ingin disampaikan" rows="3" required=""></textarea>
                            </div>
                            <button type="submit" className="btn sent-butnn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
  }
}

export default Contact;
