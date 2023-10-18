import { useEffect } from 'react';
import './App.css';
import socket from './server';

function App() {
  useEffect(() => {
    askUserName();
  }, []);

  const askUserName = () => {
    const userName = prompt('당신의 이름을 입력하세요');
    console.log('uuu', userName);

    // socket를 사용해서 이름 보내기
    // .emit(대화의 제목, 보낼 내용, 콜백함수)
    socket.emit('login', userName, (res) => {
      console.log('Res', res);
    });
  };

  return (
    <div>
      <div className='App'></div>
    </div>
  );
}

export default App;
