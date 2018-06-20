import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch} from 'react-router';
import store from "./store";
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';

//layouts
import LoginLayOut from "./LayOuts/LoginLayOut";
import AdminLayOut from "./LayOuts/AdminLayOut";


//components
import LoginScreen from './Components/Login/LoginScreen';
import SignUpScreen from './Components/SignUp/SignUpScreen';
import DashboardScreen from "./Components/DashBoard/DashBoard";
import GroupsScreen from "./Components/Groups/GroupsScreen"
import Trading from './Components/Settings/Trading/Trading';
import CreateGroupScreen from './Components/Groups/CreateGroup';
import EditGroup from './Components/Groups/EditGroup';
import ChangePassword from './Components/UserSettings/ChangePassword/ChangePassword';
import ChangePhone from './Components/UserSettings/ChangePhone/ChangePhone';
import { Provider as ReactAlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import NotFound from './Components/NotFound/NotFound';
import PortFolio from './Components/Portfolio/Portofolio';
const options = {
    timeout: 1000,
    position: "top center"
  };



const IsLoggedIn = JSON.parse(localStorage.getItem('IsLoggedIn'))
class Routes extends React.Component {

    constructor(props) {
        super(props)

    }
    componentWillMount() {
    }
    render() {

        return (
         <ReactAlertProvider template={AlertTemplate} {...options}>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                            <Route exact path='/'      render={(props) => <LoginLayOut IsLoggedIn={IsLoggedIn}{...props}><LoginScreen IsLoggedIn={IsLoggedIn} /></LoginLayOut>} />
                            <Route  path='/login'      render={(props) => <LoginLayOut IsLoggedIn={IsLoggedIn}{...props}><LoginScreen IsLoggedIn={IsLoggedIn} /></LoginLayOut>} />
                            <Route path='/dashboard'   render={(props) => <AdminLayOut IsLoggedIn={IsLoggedIn} {...props} ><DashboardScreen /></AdminLayOut>} />
                            <Route path='/groups'      render={() => <AdminLayOut><GroupsScreen /></AdminLayOut>} />
                            <Route path='/trading'     render={() => <AdminLayOut><Trading /></AdminLayOut>} />
                            <Route path='/portfolio'     render={() => <AdminLayOut><PortFolio /></AdminLayOut>} />
                            <Route path='/creategroup' render={() => <AdminLayOut><CreateGroupScreen /></AdminLayOut>} />
                            <Route path='/changepassword' render={() => <AdminLayOut><ChangePassword /></AdminLayOut>} />
                            <Route path='/editgroup'   render={() => <AdminLayOut><EditGroup /></AdminLayOut>} />
                            <Route path='/changephone' render={() => <AdminLayOut><ChangePhone /></AdminLayOut>} />
                            <Route path='/signup'      render={() => <LoginLayOut><SignUpScreen /></LoginLayOut>} />
                            <Route path='*'  render={()=><NotFound/>}  />
                    </Switch>
                  
                </BrowserRouter>
            </Provider>
            </ReactAlertProvider>
        )
    }
}
export default Routes;