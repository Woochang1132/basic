import React from 'react';

// 외부로부터 전달 받은 객체 props를 이용할 수 있다. 키 : 값
export default function ProfileAvatar({image , isNew}) {
    return (
        <div className='avatar'>
            <img className='photo' 
            src={image}
            alt="avatar" />
            {isNew && <span className='new'>New</span>}
        </div>
    );
}