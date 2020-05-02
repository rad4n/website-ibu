import React, {Component} from 'react';

class LeftSide extends Component {
  render(){
    return (
        <div className="banner-left-side">
            <div className="logo">
                <h1>
                <a href="index.html">Ibu saya</a>
                </h1>
            </div>
            <ul id="menu">
                <li>
                <input id="check02" type="checkbox" name="menu" />
                <label for="check02">
                    <span className="fa fa-bars" aria-hidden="true"></span>
                </label>
                <ul className="submenu">
                    <li>
                    <a href="index.html" className="active">Home</a>
                    </li>
                    <li>
                    <a href="#about">Galeri</a>
                    </li>
                    <li>
                    <a href="#blog">Blog</a>
                    </li>
                    <li>
                    <a href="#contact">Kirim pesan / Doa</a>
                    </li>
                </ul>
                </li>
            </ul>
        </div>
    );
  }
}

export default LeftSide;
