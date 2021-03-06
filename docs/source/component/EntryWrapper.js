/**
 * @since 2016-09-01 08:18
 * @author vivaxy
 */

import React, { Component } from 'react';
import Toast from 'react-pianist/Toast';

import connect from '../library/connect';
import action from '../action';

@connect(state => ({}), {
    hideToastAction: action.toast.hideToast,
})
export default class EntryWrapper extends Component {

    render () {

        let {
            children,
            toastState,
            hideToastAction,
        } = this.props;

        return <div>
            <div>
                {children}
            </div>
            <Toast open={toastState.show}>
                {toastState.message}
            </Toast>
        </div>
    }

}
