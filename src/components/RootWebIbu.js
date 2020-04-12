import React, {Component} from 'react';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';
import '../css/style.css';

import Greeting from './greeting/Greeting';
import LeftSide from './leftSide/LeftSide';
import Galery   from './galery/Galery';
import Blog     from './Blog/Blog';
import Contact  from './Contact/Contact';
import Footer  from './Footer/Footer';

class RootWebIbu extends Component{
    render(){
        return(
            <div className="banner-two-img" id="home">
                <LeftSide />
                <div className="banner-right-side">
                    <Greeting/>
                    <Galery />
                    <Blog />
                    <Contact />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default RootWebIbu;
