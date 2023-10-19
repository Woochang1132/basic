import React, {useCallback, useMemo, useReducer, memo} from 'react';
import personReducer from './reducer/person-reducer'

export default function AppMentor() {
   // const [person, setPerson] = useState(initialPerson);
   // personReducer 객체를 새롭게 만들어 갈 로직
   // dispatch, personReducer를 호출하는 용도
   const [person, dispatch] = useReducer(personReducer, initialPerson); 
   
   const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름이 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    // setPerson(prev => ({prev.name === name ? person.name = prev.name : person.name = name  }))
    // 배열에 있는 요소이고 객체가 2개중에서 어떤 이름을 바꾸고 싶은 지 알아야 한다.
    // 달라진 점 : 객체가 아닌 배열이다.
    dispatch({type: 'updated', prev, current})
   },[])

    const handleAdd = useCallback(() => {
      const name = prompt(`추가할 멘토의 이름은 무엇인가요?`);
      const title = prompt(`멘토의 직책은 무엇인가요?`);
      dispatch({type : 'added', name , title})
    },[])

    

    const handleDelete = useCallback(() => {
      const name = prompt(`누구의 이름을 삭제하고 싶은가요?!`);
      //const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
      // setPerson(prev => ({prev.name === name ? person.name = prev.name : person.name = name  }))
      // 배열에 있는 요소이고 객체가 2개중에서 어떤 이름을 바꾸고 싶은 지 알아야 한다.
      // 해당 조건을 충족하는 친구들로 다시 배열이 구성된다.
      dispatch({type : 'deleted', name})
    }, [])
    
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
          <Button text='멘토 이름 바꾸기' onClick={handleUpdate}></Button>

          <Button text='멘토 추가하기' onClick={handleAdd}></Button>

          <Button text='멘토 삭제하기' onClick={handleDelete}></Button>
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


const Button = memo(({text, onClick}) => {
  console.log("Button", text, 're-rendering');
  const result = useMemo(() => calculateSomething(), []) // 한 번만 실행되고, 메모가 된 이후에는 계산하는 로직 실행하지 X, 
  // [text] , text가 변경되면 다시금 해당, function이 호출된다.
  return (
    <button 
    onClick={onClick}
    style={{
      backgroundColor: 'black',
      color : 'white',
      borderRadius : '20px',
      margin: '0.4rem'
    }}
    >
      {`${text} ${result}`}
    </button>
  );
})

function calculateSomething(){
  for(let i = 0; i < 10000; i++){
    console.log('!');
  }
  return 10;
}