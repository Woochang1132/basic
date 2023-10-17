import React,{useState} from 'react';
import './AppXY.css';


export default function AppXY() {
    // 요소를 따로따로 관리하는 것이 아닌 한 곳에서 한번에 관리하기
    const [position, setPosition] = useState({x : 0 , y : 0}); 

/*  
    const [x, setX] = useState(0);
    const [y, setY] = useState(0); 
*/
    return (
        <div className='container' 
        onPointerMove={(event) => {
            //console.log(event.clientX, event.clientY);
/*             
            setX(event.clientX);
            setY(event.clientY); 
*/
            setPosition(prev => ({ x: event.clientX, y : prev.y}));
        }}> 
            <div className='pointer' style={{transform: `translate(${position.x}px, ${position.y}px)`}}></div>
        </div>
    );
}

