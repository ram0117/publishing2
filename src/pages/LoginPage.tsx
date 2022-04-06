import React from 'react';
import { TextField } from '../components/TextField';

export const LoginPage = () => {
    return <div className="m-4">
        <div className="text-3xl font-bold mb-10"> 로그인</div>
        <div>
            <TextField label="이메일" placeholder="이메일을 입력하세요." />
            <TextField label="비밀번호" placeholder="비밀번호를 입력하세요." type="password"/>
        </div>
        <div>
           <div className='bg-gray-800 text-white text-center'>로그인</div> 
           <div>회원가입</div>
        </div>
    </div>;
};