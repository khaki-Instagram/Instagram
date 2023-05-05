// import {useState, useEffect} from "react";
// import Input from "./components/Input";
// import Button from "./components/loginButton";

// const User = {
//     email: 'test@example.com',
//     password: 'test1111@@@'
//   }

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [id, setId] = useState("");
//     const [number, setNumber] = useState("");
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");

//     const [emailValid, setEmailVaild] = useState(false);
//     const [passwordValid, setPasswordVaild] = useState(false);
//     const [notAllow, setNotAllow] = useState(true);

//     useEffect(() => {
//       if(emailValid && passwordValid) {
//         setNotAllow(false);
//         return;
//       }
//       setNotAllow(true);
//     }, [emailValid, passwordValid]);
    
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//         const regex =
//             /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
//         if (regex.test(e.target.value)) {
//             setEmailVaild(true);
//         } else {
//             setEmailVaild(false);
//         }
//     };
//     const handlePassword = (e) => {
//     setPassword(e.target.value);
//     const regex =
//         /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
//     if (regex.test(e.target.value)) {
//         setPasswordVaild(true);
//     } else {
//         setPasswordVaild(false);
//     }
//     };
//     const onClickConfirmButton = () => {
//     if(email === User.email && password === User.password) {
//         alert('로그인에 성공했습니다.')
//     } else {
//         alert("등록되지 않은 회원입니다.");
//     }
//     }

// const Login = () => {
//     return (
//         <main>
//         <div className="container">
//             <div className="loginContainer">
//             <div className="loginLogo"></div>
//             <form id="loginForm" onSubmit={onSubmit}>
//                 <div>
//                     <Input 
//                         type="text"
//                         placeholder="test@gmail.com"
//                         value={email}
//                         onChange={handleEmail}
//                     />
//                     <div className="errorMessageWrap">
//                         {!emailValid && email.length > 0 && (
//                         <div>올바른 이메일을 입력해주세요.</div>
//                         )}
//                     </div>
//                     <Input 
//                         type="password"
//                         placeholder="영문, 숫자, 특수문자 포함 8자 이상"
//                         value={password}
//                         onChange={handlePassword}
//                     />
//                     <div className="errorMessageWrap">
//                         {!passwordValid && password.length > 0 && (
//                         <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
//                         )}
//                     </div>
//                 </div>
//                 {/* 버튼 */}
//                 <div className="buttonArea">
//                 <Button
//                     label="로그인"
//                     className="bottomButton"
//                     styleClass="loginbutton"
//                     onClick={onClickConfirmButton} 
//                     disabled={notAllow} 
//                 />
//                 </div>

//                 {/* sns로그인 */}
//                 <div className="buttonArea">
//                 <div className="line-group">
//                     <div className="line"></div>
//                     <p
//                     style={{
//                         width: "15%",
//                         display: "flex",
//                         justifyContent: "center",
//                         cursor: "context-menu",
//                     }}>
//                     또는
//                     </p>
//                     <div className="line"></div>
//                 </div>

//                 <Button
//                     label="카카오로그인"
//                     styleClass="loginbutton"
//                     onClick={() => {
//                     alert("카카오!");
//                     }}
//                     disabled={false}
//                 />

//                 <Button
//                     label="네이버로그인"
//                     value="naver"
//                     styleClass="loginbutton"
//                     onClick={() => {
//                     alert("네이버!");
//                     }}
//                     disabled={false}
//                 />

//                 <Button
//                     label="구글로그인"
//                     styleClass="loginbutton"
//                     onClick={() => {
//                     alert("HEY GOOGLE!");
//                     }}
//                     disabled={false}
//                 />
//                 <p className="findByKey" style={{}}>
//                     비밀번호를 잊으셨나요?
//                 </p>
//                 </div>
//             </form>
//             </div>

//             <div className="joinMemberContainer">
//             <div className="memberContainer">
//                 <p
//                 style={{
//                     cursor: "context-menu",
//                 }}>
//                 계정이 없으신가요?
//                 </p>
//                 <p className="membership">가입하기</p>
//             </div>
//             </div>
//         </div>
//         </main>
//     );
//     }
// }

// export default Login