import { useState } from 'react';

import { WrapperStyle } from './styles';


const Counter = () => {

const [stateCount, setStateCount] = useState(0);

    return <WrapperStyle>
        <div className='holder'>
            <div className='title'>Give Me A Message</div> 
            <div className='number'>me@owenmerry.com</div>
        </div>
    </WrapperStyle>;
};

export default Counter;