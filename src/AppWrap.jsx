import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar>
            <Avatar
                image = 'https://cdn.pixabay.com/photo/2023/09/17/10/17/milky-way-8258264_1280.jpg'
                name  = 'Bob'
                size  = {100}
            />

            <p>안녕하세요!</p>
            </Navbar>

            <Navbar>
            <p>안녕하세요!</p>
            </Navbar>
        </div>
    );
}


function Navbar({ children }){
    return(
        <header style={{backgroundColor: 'yellow'}}>
            {children}
        </header>
    );
}

function Avatar({image, name , size}){
    return (
        <div>
            <img
              src={image}
              alt={`${name}`}
              width={size}
              height={size}
              style={{borderRadius: '50%'}}
            />
        </div>
    )
}