import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app')); // calling the component above that calls other components

// const AuthInfo = requireAuthentication(Info);


// const requireAuthentication = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAuth && <p>This is private info. Please don't share!</p>}
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

// ReactDOM.render(<AuthInfo isAuth={false} />, document.getElementById('app')); // calling the component above that calls other components