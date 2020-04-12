import React, {Component} from 'react';

class Greeting extends Component {
  render(){
    return (
        <div className="banner-right-txt text-center">
            <h5 className="mb-2">Dengan bangga saya ingin memperkenalkan sosok yang selama ini mendoakan saya dengan tulus. Mohon doanya untuk </h5>
            <h4>Nama Ibu Anda</h4>
            <div className="two-demo-button mt-3">
            <p>Ibu saya</p>
            <p>agar selalu diberi kesehatan dan dalam lindungan sang pencipta</p>
            </div>
            <p>Karena berkat doa beliau, Tuhan masih memperkenankan saya untuk bernafas hingga hari ini. Jika pun berkenan, Anda bisa mengirim pesan atau harapan yang ingin disampaikan kepada ibu saya   dan semoga bisa menjadi motivasi saya juga untuk berkarya</p>
            <div className="view-buttn mt-md-4 mt-sm-4 mt-3">
            <a href="#contact" className="btn">Kirim pesan/Doa</a>
            </div>
        </div>
    );
  }
}

export default Greeting;
