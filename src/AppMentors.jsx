import React, {useState} from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState(initialPerson);
    const handleUpdate = () => {
      
        const prev = prompt(`누구의 이름이 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        // setPerson(prev => ({prev.name === name ? person.name = prev.name : person.name = name  }))
        // 배열에 있는 요소이고 객체가 2개중에서 어떤 이름을 바꾸고 싶은 지 알아야 한다.
        // 달라진 점 : 객체가 아닌 배열이다.
        setPerson((person) => ({...person, mentors : person.mentors.map((mentor) => {
          // 배열의 요소는 (mentor)에 담겨서 순환된다.
          if(mentor.name === prev){
            return {...mentor, name : current}
          }
          return mentor;
        })}))
    };

    const handleAdd = () => {
        const name = prompt(`추가할 멘토의 이름은 무엇인가요?`);
        const title = prompt(`멘토의 직책은 무엇인가요?`);
        setPerson((person) => ({...person, mentors : [...person.mentors, {name : name , title : title}]}))
    }

    const handleDelete = () => {
        const name = prompt(`누구의 이름을 삭제하고 싶은가요?!`);
        //const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        // setPerson(prev => ({prev.name === name ? person.name = prev.name : person.name = name  }))
        // 배열에 있는 요소이고 객체가 2개중에서 어떤 이름을 바꾸고 싶은 지 알아야 한다.
        // 해당 조건을 충족하는 친구들로 다시 배열이 구성된다.
        setPerson((person) => ({...person, mentors : person.mentors.filter((mentor) => mentor.name !== name )}))
    }
    
    return (
        <div>
          <h1>
            {person.name}는 {person.title}  
          </h1> 
          <p>
            {person.name}의 멘토는 :
          </p>
          <ul>
              { person.mentors.map((mentor, index) => (
                  <li key={index}>
                    {mentor.name} ({mentor.title})
                  </li>
              ))}
          </ul> 
          <button
            onClick={handleUpdate}
          >
            멘토 이름 바꾸기
          </button>

          <button
            onClick={handleAdd}
          >
            멘토 추가하기
          </button>

          <button
            onClick={handleDelete}
          >
            멘토 삭제하기
          </button>
        </div>
    );
}


const initialPerson = {
  name: '엘리',
  title : '개발자',
  mentors: 
 [ 
  {
      name : '밥',
      title: '시니어개발자',
  },
  {
      name : '제임스',
      title : '시니어 개발자'
  }
]
};


