import { WrapperStyle } from './styles';
import { useState } from 'react';

const Menu = (props) => {
const [ stateOpen, setStateOpen] = useState('tech');
const isSelected = (type) => stateOpen === type ? 'selected' : '';
const buttonClicked = (type) => {
 setStateOpen(type);
 props.menuShow(type);
}


    return <WrapperStyle color={props.color} theme={props.theme}>
        <div className={`button ` + isSelected('tech')}
        onClick={() => buttonClicked('tech')}
        >What have I used</div>
        <div className={`button ` + isSelected('timeline')}
        onClick={() => buttonClicked('timeline')}
        >Where have I worked</div>
    </WrapperStyle>;
};

export default Menu;