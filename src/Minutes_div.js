import React from "react";
import Block from './Block'
import './block_css.css';

class Minutes_div extends React.Component {
    constructor(props) {
        super(props);
        this.state = { minutes_left:0,minutes_right:0 };
    }

    gettime(){
        var date = new Date();
        var min = date.getMinutes();
        var l = Math.floor(min/10);
        var r = min%10;

        this.setState(state => ({
            minutes_left : l,
            minutes_right : r
        }
        ));

        //console.log("In getTime "+l+" "+r);

        var d_r = document.getElementsByClassName("Minute_div_right")[0];
        //console.log(d_r);

        var shift = 330 - ( (this.state.minutes_right + 1) * 33);
        d_r.style.transform = `translateY(${shift}px)`;

        var d_l = document.getElementsByClassName("Minute_div_left")[0];
        //console.log(d_l);

        shift = 330 - ( (this.state.minutes_left + 1) * 33);
        d_l.style.transform = `translateY(${shift}px)`;
    }

    componentDidMount(){
        setInterval( () => this.gettime() ,1000);
    }


    render() { 

        let type2 = 6,type3 = 10;

        return ( 
            <React.Fragment>
                <div className="Minute_div_left">
                    <Block size={type2} ></Block>
                </div>
                <div className="Minute_div_right">
                    <Block size={type3} ></Block>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Minutes_div;