/* eslint-disable default-param-last */

import PropTypes from 'prop-types';
import LayoutConstant from "./layoutConstant";

ThemeReducer.propTypes = {
    state: PropTypes.object,
    action: PropTypes.object,
  };
const initialState = {
    selectedTheme: 1,
}

export default function ThemeReducer(state = initialState, action){
    switch(action.type){
        case LayoutConstant.CHANGE_THEME: {return {
            ...state,
            selectedTheme:action.payload
        }}
        default: return state
    }
}