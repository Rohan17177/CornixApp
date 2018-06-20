import React from 'react'
import {connect} from 'react-redux';
import classnames from 'classnames'
import store from '../../store';
import PropTypes from "prop-types"

class FlashMesageList extends React.Component
{

    DeleteFlashmessage()
    {
        store.dispatch({type: 'ADD_FLASH_MESSAGES' ,messageType:'',text:''});
    }

    render()
    {
          return(
          
          <div style={{position:"relative"}} className ={classnames('alert',
              {'alert-success': this.props.type ==='success',
              'alert-danger': this.props.type ==='error'})}>
             {!!this.props.message && <a  onClick={this.DeleteFlashmessage.bind(this)} className={classnames('close')} data-dismiss="alert" aria-label="close">&times;</a>}
               {this.props.message}
              </div>)
           
    }
}

FlashMesageList.propTypes=
{
    // eslint-disable-next-line
    message:PropTypes.string.isRequired,
    // eslint-disable-next-line
    type: PropTypes.string.isRequired,
    // eslint-disable-next-line
    id:PropTypes.string.isRequired
}
function mapStateToProps(state)
{
     console.log('Flash',state);
    return{ message: state.FlashMessages.text,type:state.FlashMessages.messageType ,id:state.FlashMessages.id}
}


export default connect(mapStateToProps)(FlashMesageList);