import React from 'react';
import ProfileAvatar from './ProfileAvatar';

// 외부로부터 전달 받은 객체 props를 이용할 수 있다. 키 : 값
export default function Profile({image, name , title, isNew}) {
    const handleClick = (event) => {
        console.log(event);
        alert('버튼이 클릭됨');
    };
    return (
        <div className='profile'>
            {/* 주의하기 onclick event가 발생했을 때 handleClick()을 통해 어떤 값을 return
            받는 것이 아닌 참조값을 전달해서 호출해야한다. */}
            <button onClick={handleClick}>버튼</button>
            <ProfileAvatar image={image} isNew={isNew}/>
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

