import logo from './logo.svg';
import './App.css';
import Box from './box';


function App() {
  return (
    
    <main>
      <div className="loginLogo">     
      </div>

      <div>
        <Box name = {'전화번호, 사용자 이름 또는 이메일'} />
        <Box name = {'비밀번호'}/>
        {/* 버튼 */}
        <Box/> 
        {/* sns로그인 */}
        <Box name = {'카카오로그인'}/>
        <Box name = {'네이버로그인'}/>
        <Box name = {'구글로그인'}/>
      </div>
    </main>
  );
}

export default App;
