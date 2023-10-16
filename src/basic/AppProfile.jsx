import "./App.css";
import Profile from './components/Profile';
import ProfileAvatar from './components/ProfileAvatar';

// 자바스크립트 코드를 사용하려면 {}중괄호 안에 작성해야 한다.
function AppProfile() {
  return (
    <>
       <ProfileAvatar image='https://cdn.pixabay.com/photo/2023/09/17/10/17/milky-way-8258264_1280.jpg'
      isNew={true}></ProfileAvatar>

      <Profile image='https://cdn.pixabay.com/photo/2023/09/17/10/17/milky-way-8258264_1280.jpg'
      name='James Kim' title='프론트엔드 개발자'
      isNew={true}
      />
      <Profile image='https://cdn.pixabay.com/photo/2023/10/03/09/19/sunrise-8290940_1280.jpg' 
      name='Anna Young' title='백엔드 개발자'
      isNew={true}
      />
      <Profile image='https://cdn.pixabay.com/photo/2023/10/03/08/31/tree-8290838_1280.jpg' 
      name='Bob Yu' title='프론트엔드 개발자'/>
      
    </>

   
  );
}

export default AppProfile;
