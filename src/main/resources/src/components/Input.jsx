import React from "react";

function input({Value, onChange}) {
  return (
    <label>
      {/* <span>전화번호, 사용자 이름 또는 이메일</span> */}
      <input
        className="inputBox"
        value={Value}
        onChange={onChange}></input>
    </label>
  );
}

export default input;
