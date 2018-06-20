import shortid from 'shortid'
let intialState = 
{
    id:'',
    messageType:'',
    text:''
}
export default function flashmessages(state = intialState,action={})
{
 

    switch(action.type)
    {
            case 'ADD_FLASH_MESSAGES':
            {
             
                 return  {id:shortid.generate(),messageType:action.messageType,text:action.text}
            
            }
            case 'DELETE_FLASH_MESSAGE':
            {
                return 
            }
            default:
            {
                return state;
            }
    }
}