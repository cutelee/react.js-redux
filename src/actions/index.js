// action creator
import * as types from './ActionTypes';

export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

// 파라미터를 통해 값을 받아서 넣어줄 수도 있음
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});
