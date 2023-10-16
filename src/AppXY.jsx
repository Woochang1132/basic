import React,{useState} from 'react';
import './AppXY.css';


export default function AppXY() {
    // 요소를 따로따로 관리하는 것이 아닌 한 곳에서 한번에 관리하기
    // 초기값을 어떤 형태로 잡을 지는 useState([]), useSate({}), useState(x)
    const [position, setPosition] = useState({x : 0 , y : 0, z : 0}); 

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
            // 이전 상태 유지할 요소가 2개 이상이라면 ...spread 연산자와 바뀌는 요소만 적용하면 된다.
            setPosition(prev => ({...prev, x: event.clientX}));
        }}> 
            <div className='pointer' style={{transform: `translate(${position.x}px, ${position.y}px)`}}></div>
        </div>
    );
}

