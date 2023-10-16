import React, { useState } from 'react';

export default function Counter({total,onClick}) {
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <p className='number'>{count} <span className='total'>/{total}</span></p>
            <button className='button' onClick={() => {
                // 직접적으로 count++ 접근하게 되면 crash 발생하게 된다. 
                //setCount(count+1);
                // 이전 상태 값을 전달 받아서 콜백 함수로 처리한다.
                setCount((prev) => prev + 1);
                onClick();
            }}>Add+</button>
        </div>
    );
}

