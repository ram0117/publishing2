import React from 'react';
import { TextField } from '../components/TextField';

export const HomePage = () => {
  return <div>
     <div className="text-3xl font-bold mb-1 m-10"> 회원가입</div>
        <div className="m-10">
            <TextField label="이름" placeholder="이름을 입력하세요(예:김예람)" />
            <TextField label="아이디" placeholder="특수문자1개이상" type="password"/>
            <TextField label="비밀번호" placeholder="비밀번호를 입력하세요." type="password"/>
            <TextField label="비밀번호확인" placeholder="비밀번호를 입력하세요." type="password"/>
            <TextField label="이메일" placeholder="이메일을 입력하세요." type="password"/>
        </div>
        <div>
           <div></div> 
           <div className="w-24 h-22 bg-gray-800 text-sm text-white text-center p-4 mr-2">회원가입완료</div>
        </div>
    </div>;
};
 


