import {
  Counter, 
  TitleText, 
  Menu, 
  Technologies, 
  Timeline
} from '../components/';
import { useState } from 'react';

export default function Home() {

  const [stateMenu, setStateMenu] = useState('tech');

const menuShow = (type) => {
  setStateMenu(type);
}

  return (
    <div>
      <style jsx global>{`
      html, body, textarea {
          font-family: 'Roboto', sans-serif;
          margin:0px;
          padding:0px;
          }
          a{text-decoration: none;}
          .website-holder{
            max-width:960px;
            margin: 10px auto;
            padding: 0px 10px;
          }
      `}
      </style>
      <div className='website-holder'>
        <Counter />
        <TitleText />
        <Menu menuShow={menuShow}/>
        
        {stateMenu === 'tech' && (
          <Technologies />
        )}

        {stateMenu === 'timeline' && (
          <Timeline/>
        )}
      </div>
    </div>
  )
}
