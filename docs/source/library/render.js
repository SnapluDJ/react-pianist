/**
 * @since 2016-07-31 19:09
 * @author vivaxy
 */

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import setStyle from '../library/style';
import EntryWrapper from '../component/EntryWrapper';
import reducers from '../reducer';

const ID_SELECTOR = 'react-pianist';

class App extends Component {

    render () {

        let {
            children,
        } = this.props;

        let store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

        if (module.hot) {
            // Enable Webpack hot module replacement for reducers
            module.hot.accept('../reducer', () => {
                const nextRootReducer = require('../reducer').default;
                store.replaceReducer(nextRootReducer);
            });
        }

        return <Provider store={store}>
            {children}
        </Provider>;
    }
}

export default (Entry, element = document.getElementById(ID_SELECTOR)) => {

    setStyle();

    return render(
        <App>
            <EntryWrapper>
                <Entry/>
            </EntryWrapper>
        </App>,
        element
    );
};
