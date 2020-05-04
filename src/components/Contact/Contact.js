import React, {Component} from 'react';

class Contact extends Component {
    state = {
        formPesan :{
            nama    : '',
            email   : '',
            ibu     : '',
            medsos  : '',
            pesan   : '',

        }
    }

    handleFormChange = (event) =>{
        let formPesanNew = {...this.state.formPesan};
        formPesanNew[event.target.name] = event.target.value;
        this.setState({
            formPesan : formPesanNew
        });
    }

    handleSubmit = () =>{

        const requestOptions = {    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.formPesan)
        };
        
        //masukan endpoint API Anda dari cloud functions firebase
        fetch('', requestOptions)
        .then(response => response.json())
        .then((data)=>{
            console.log(data);
            alert('Data berhasil tersimpan');
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    render(){
        return (
            <section className="contact py-lg-4 py-md-3 py-sm-3 py-3" id="contact">
                <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                    <div className="position-title position-relative">
                        <h6 className="text-center top-title mb-2">Jejak silahturahmi</h6>
                        <div className="sub-position">
                            <h3 className="text-center title mb-3">Kirim pesan & Doa</h3>
                        </div>
                        <div className="title-wls-text text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
                            <p>Jika ada pesan dan doa baik dari Anda untuk beliau akan saya sampaikan. Akan ada notifikasi email bila ada balasan jika sempat.</p>
                            <p>Anda juga bisa ceritakan sosok ibu Anda dan harapan yang ingin Anda capai untuk kebahagiaan beliau. Sehingga kita bisa saling berbagi inspirasi.</p>
                            <p>Semoga form ini bisa menjadi media tali silahturahmi baru untuk kita.</p>
                        </div>
                    </div>
                    <div className=" contact-form-txt">
                        <form action="#" method="post">
                            <div className="w3pvt-wls-contact-mid">
                                <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                                    <input name="nama" type="text" className="form-control" placeholder="Nama Anda" required="" onChange={this.handleFormChange} />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                                    <input name="medsos" type="text" className="form-control" placeholder="Link akun media sosial Anda (jika berkenan)" onChange={this.handleFormChange}  />
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                                    <input name="email" type="email" className="form-control" placeholder="Email" required="" onChange={this.handleFormChange}/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 form-group contact-forms">
                                    <input name="ibu" type="text" className="form-control" placeholder="Nama ibu Anda (jika berkenan)" onChange={this.handleFormChange}/>
                                </div>
                                </div>
                                <div className="form-group contact-forms">
                                <textarea name="pesan" className="form-control" placeholder="Doa ataupun pesan yang ingin disampaikan" rows="3" required="" onChange={this.handleFormChange}></textarea>
                                </div>
                                <button type="button" className="btn sent-butnn" onClick={this.handleSubmit}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
