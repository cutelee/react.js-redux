import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

// store -> component의 props로 값 연결
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});

// store에 액션 전달할 수 있도록
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor(); // 임시
        dispatch(actions.setColor(color));
    }
});

// Counter 컴포넌트에 store에서 가져온 데이터를 전달해줄 수 있도록 연결
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


export default CounterContainer;
