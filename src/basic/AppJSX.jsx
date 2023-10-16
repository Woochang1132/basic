import "./App.css";

// 자바스크립트 코드를 사용하려면 {}중괄호 안에 작성해야 한다.
function AppJSX() {
  const name = "woochang";
  const list = ["우유", "딸기", "바나나", "요거트"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h1>Hello2</h1>
      <p>{name}</p>
      <ul>
        {
          /*  생략 버전
        {list.map((item) => (
          <li>{item}</li>
        ))} 
        */
          list.map((item) => {
            // 변수의 값을 가져오려면 무조건 {}안에 표현
            return <li>{item}</li>;
          })
        }
      </ul>
      <img
        // 객체 object 형식으로 작성하고 있기 때문에 {}안에 사용해야 한다. 키 : '값'
        style={{ width: "200px", height: "200px" }}
        src="https://cdn.pixabay.com/photo/2023/09/17/10/17/milky-way-8258264_1280.jpg"
        alt="nature"
      ></img>
    </>
  );
}

export default AppJSX;
