import React, { Component } from "react"
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import InputBoxes  from "./InputBoxes"
import { Link } from "react-router-dom";
const children =[]
class Limitbuy extends Component {
    constructor(props) {
        super(props)

        this.state =
            {
            counter:0
            }
            this.removeSingleChild = this.removeSingleChild.bind(this)
    }


    appendChild() {
       this.setState({counter:this.state.counter+1})
      children.push(<InputBoxes removeSingleChild={this.removeSingleChild}  counter={this.state.counter}  />)
    

    
    }
    removeChild() {
        children.pop(<InputBoxes  />)
      }
      removeSingleChild(d)
      {
          console.log("dfdsfdsf",d)
          document.getElementById(d).remove()
      }
    render() {
       
        return (
            <div className="row buy-wrapper">
                <div className="buy left">
                    <div className="flex-middle ">
                        <div className="chart-coin">
                            <label className="bloked">Choose Pair</label>
                            <select className="select input-field">
                                <option>BTC</option>
                                <option>BTC</option>
                                <option>BTC</option>
                            </select>
                        </div>
                        <div className="chart">
                            <div className="img-chart" style={{ width: '70%', marginLeft: '22%' }}>
                                <CircularProgressbar background styles={{
                                    path: { stroke: `#7c8eb7` },
                                    trail: { stroke: '#f3f7ff', border: 'black 1px 1px' },
                                    text: {
                                        fontWeight: "bold",
                                        fill: '#a3afcd', fontSize: 18
                                    },
                                    background: { fill: "#ffffff" }
                                }}
                                    initialAnimation={true}
                                    percentage={60} />
                            </div>
                            <span>Total Amount: <b>0.123546</b></span>
                        </div>
                    </div>
                </div>
                <div className="buy right">
                    <div className="inlined actions">
                        <Link to={'/portfolio'}  onClick={this.appendChild.bind(this)} className="action"><span className="fa fa-plus"></span></Link>
                        <Link to={'/portfolio'}  onClick={this.removeChild.bind(this)} className="action"><span className="fa fa-minus"></span></Link>
                        <div className="add-rem-data">
                            <div className="form-group formg-tbl">
                                <div className="formg-tbl-row">
                                    <div className="formg-tbl-cell">Price</div>
                                    <div className="formg-tbl-cell">Percentage</div>
                                    <div className="formg-tbl-cell">Amount</div>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Limitbuy