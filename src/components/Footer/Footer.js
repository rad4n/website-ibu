import React, {Component} from 'react';
import Moment from 'moment';

class Footer extends Component {
  render(){
    return (
        <footer className=" py-lg-3 py-md-2 py-sm-3 py-2">
            <div className="container pb-lg-3 pb-2">
                <div className="bottem-txt-footer text-center pt-md-4 pt-3">
                    <p>
                    © {Moment().format('Y')}. All Rights Reserved | Design by
                    <a href="http://dadan.id" target="_blank"> Dadan</a>
                    </p>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
