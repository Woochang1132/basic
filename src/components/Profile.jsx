import React from 'react';
import ProfileAvatar from './ProfileAvatar';

// 외부로부터 전달 받은 객체 props를 이용할 수 있다. 키 : 값
export default function Profile({image, name , title, isNew}) {
    return (
        <div className='profile'>
            <ProfileAvatar image={image} isNew={isNew}/>
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

