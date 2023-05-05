import { useState } from 'react'
import '../components/register.css'
import imgLogo from "../images/instagramAi.png"

const Register = () => {

    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");



    return (
        <div className="register-container">
            <div className="main-container">
                <div className="register-image">
                    <img className="imgLogo" src={imgLogo} alt="인스타" />
                </div>
                
                <h2 className ="notice-text">친구들의 사진과 동영상을 보려면 가입하세요.</h2>

                <div className="line-group">
                    <div className="line"></div>
                    <p className="line-text">또는</p>
                    <div className="line"></div>
                </div>

                <div className="input-group">
                    <input className="register-input" 
                        placeholder="휴대폰 번호 또는 이메일 주소" 
                        value={number}
                        onChange={(e) => {
                            setNumber(e.target.value);
                        }}
                    ></input>
                    <input className="register-input" 
                        placeholder="성명" 
                        value={id}
                        onChange={(e) => {
                            setId(e.target.value);
                        }}
                    ></input>
                    <input className="register-input" 
                        placeholder="사용자 이름" 
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}    
                    ></input>
                    <input className="register-input" 
                        placeholder="비밀번호" 
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    ></input>
                </div>

                <p className="more-information">
                    저희 서비스를 이용하는 사람이 회원님의 연락처 정보를
                    Instagram에 업로드했을 수도 있습니다. 
                    <span className="link">더 알아보기</span>
                </p>

                <div className="button-group">
                    <button className="register-button">가입</button>
                </div>
            </div>
            <div className="serve-container">
                <p>계정이 있으신가요? <span className="link">로그인</span></p>
            </div>
        </div>
    )
    
}
export default Register