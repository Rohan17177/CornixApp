import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../src/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import { sessionService } from 'redux-react-session';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(promise(),thunk),
        // other store enhancers if any
    ));
    sessionService.initSessionService(store,{ driver: 'COOKIES' })
  .then(() => console.log('Redux React Session is ready and a session was refreshed from your storage'))
  .catch(() => console.log('Redux React Session is ready and there is no session in your storage'));
    // sessionService.initSessionService(store, { driver: 'COOKIES' });
    export default store