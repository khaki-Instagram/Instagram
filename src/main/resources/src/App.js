import {useState} from "react";
import "./App.css"; //경로추가하는 방법
import "./Box";
import Input from "./components/Input";
import Button from "./components/loginButton";

function App() {
  const [setId, setIdValue] = useState([]); 
  const [setPw, setPwValue] = useState([]);
  const onChangeId = (event) => setIdValue(event.target.value);
  const onChangePw = (event) => setPwValue(event.target.value);
  console.log(setId);
  console.log(setPw);
  
  const onSubmit = (event) => {
  event.preventDefault();
  if (setId === "") {
    return;
  }
}
  return (
    <main>
      <div className="container">
        <div className="loginContainer">
          <div className="loginLogo"></div>
          <form id="loginForm" onSubmit={onSubmit}>
            <div>
              <Input onChange={onChangeId} value={setId} />
              <Input onChange={onChangePw} value={setPw} />
            </div>
            {/* 버튼 */}
            <div className="buttonArea">
              <Button
                label="로그인"
                styleClass="loginbutton"
                onClick={() => {
                  alert("로그인!");
                  setIdValue(setId);
                  setPwValue(setPw);
                }}
                disabled={false}
              />
            </div>

            {/* sns로그인 */}
            <div className="buttonArea">
              <div className="line-group">
                <div className="line"></div>
                <p
                  style={{
                    width: "15%",
                    display: "flex",
                    justifyContent: "center",
                    cursor: "context-menu",
                  }}>
                  또는
                </p>
                <div className="line"></div>
              </div>

              <Button
                label="카카오로그인"
                styleClass="loginbutton"
                onClick={() => {
                  alert("카카오!");
                }}
                disabled={false}
              />

              <Button
                label="네이버로그인"
                value="naver"
                styleClass="loginbutton"
                onClick={() => {
                  alert("네이버!");
                }}
                disabled={false}
              />

              <Button
                label="구글로그인"
                styleClass="loginbutton"
                onClick={() => {
                  alert("HEY GOOGLE!");
                }}
                disabled={false}
              />
              <p className="findByKey" style={{}}>
                비밀번호를 잊으셨나요?
              </p>
            </div>
          </form>
        </div>

        <div className="joinMemberContainer">
          <div className="memberContainer">
            <p
              style={{
                cursor: "context-menu",
              }}>
              계정이 없으신가요?
            </p>
            <p className="membership">가입하기</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
