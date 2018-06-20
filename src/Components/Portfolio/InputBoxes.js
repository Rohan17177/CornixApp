import  React,{Component}  from 'react'


class InputBoxes extends Component{


    constructor(props)
    {
        super(props)


        console.log("Props",props)
    }

    render()
    {
    return (
        <div className= {`formg-tbl-row `} id={`dom${this.props.counter}`}>
            <div className="formg-tbl-cell"><div className="ico-field"><input type="text" className="input-field" /></div></div>
            <div className="formg-tbl-cell"><div className="ico-field"><input type="text" className="input-field" /></div></div>
            <div className="formg-tbl-cell"><div className="ico-field"><input type="text" className="input-field" /></div>
            <a onClick={()=>this.props.removeSingleChild(`dom${this.props.counter}`)} className="action xx"><img src={require("../../img/ic-times.png")} /></a></div>
        </div>
    )
}
};
export default  InputBoxes;
