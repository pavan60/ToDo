import React from "react";
import Block from './Block'
import './block_css.css';

class Hours_div extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hours_left:0,hours_right:0  };
    }

    gettime(){
        var date = new Date();
        var hrs = date.getHours();
        var l = Math.floor(hrs/10);
        var r = hrs%10;

        this.setState(state => ({
            hours_left : l,
            hours_right : r
        }
        ));

        //console.log("In getTime "+l+" "+r);

        var d_r = document.getElementsByClassName("Hour_div_right")[0];
        //console.log(d_r);

        var shift = 330 - ( (this.state.hours_right + 1) * 33);
        d_r.style.transform = `translateY(${shift}px)`;

        var d_l = document.getElementsByClassName("Hour_div_left")[0];
        //console.log(d_l);

        shift = 330 - ( (this.state.hours_left + 1) * 33);
        d_l.style.transform = `translateY(${shift}px)`;
    }

    componentDidMount(){
        setInterval( () => this.gettime() ,1000);
    }


    render() { 

        let type1 = 3,type3 = 10;

        return ( 
            <React.Fragment>
                <div className="Hour_div_left">
                <Block size={type1} ></Block>
                </div>
                <div className="Hour_div_right">
                <Block size={type3} ></Block>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Hours_div;