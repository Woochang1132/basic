import React, {useState} from 'react';

const obj = {
    name : '엘리',
    title : '개발자',
    mentor: {
        name : '밥',
        title : '시니어 개발자',
        teacher : {
            name : '3중 연산자'
        }
    },
};
const name = '업데이트 이름'

const update = {
    // 3중 객체도 spread 연산자를 활용해서 다음과 같이 업데이트 가능하다.
    // ...obj, mentor : {...obj.mentor, teacher : {...obj.mentor.teacher, name : name}},
    
    // 첫번째 요소를 변경하는 경우
    //...obj, name : name

    // 이중 객체의 요소를 변경하는 경우
    ...obj, mentor : {...obj.mentor, name : name}
};
console.log("update", update)

const fruitOne = ['apple'];
const fruitTwo = ['banana', 'grape'];
const result = [...fruitOne , ...fruitTwo];
//console.log("result >> " , result);

let user = { name : 'kim', city : 'Seoul'};
user = {...user, age : 28};
//console.log("user >>" , user)

user = {...user};
//console.log("user >>" , user)

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: '엘리',
        title : '개발자',
        mentor: {
            name : '밥',
            title: '시니어개발자',
        },
    })
    return (
        <div>
          <h1>
            {person.name}는 {person.title}  
          </h1> 
          <p>
            {person.name}의 멘토는 {person.mentor.name} {person.mentor.title}  
          </p> 
          <button
            onClick={() => {
                const name = prompt(`what's your mentor's name?`)
                //setPerson(prev => ({prev.name === name ? person.name = prev.name : person.name = name  }))
                setPerson((person) => ({...person, mentor : {
                    ...person.mentor, name : name
                }}))
            }}
          >
            멘토 이름 바꾸기
          </button>
          <button
          onClick={() => {
            const title = prompt(`what's your mentor's title?`)
            setPerson((person) => ({...person, mentor : {...person.mentor, title : title}}))
          }}>
            멘토 타이틀 바꾸기
          </button>
        </div>
    );
}

