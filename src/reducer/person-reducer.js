// 전달 받은 person이라는 객체를 action에 따라 가공해서 새로운 객체를 return한다.
// action의 내용에 따른 person의 객체 내용이 다르다.
export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      // const prev = action.prev;
      // const current = action.current;
      // 위에 내용을 축약한 게 밑에 내용이다.
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          // 배열의 요소는 (mentor)에 담겨서 순환된다.
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: name, title: title }],
      };
    }
    case "deleted": {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name),
      };
    }
    default: {
      throw Error(`알 수 없는 액션 타입이다 : ${action.type}`);
    }
  }
}
