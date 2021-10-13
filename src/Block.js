import React from 'react';
import './block_css.css'

class Block extends React.Component {
  render() { 
    var size = this.props.size;
    let blocks = [];
    
    for(var i=0;i<size;i++){
      blocks.push(<div className="block" key={i}> <b> {i} </b> </div>)
    }

    return (
      <div className="blocks_div">
        {blocks}
      </div>
    );
  }
}
 
export default Block;