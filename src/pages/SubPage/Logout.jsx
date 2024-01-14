import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Component() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.setItem('isLogin', false);
        console.log('로그아웃 상태 저장됨:', localStorage.getItem('isLogin')); // 저장된 값을 콘솔에 출력
        alert('로그아웃되었습니다.');
        navigate('/');
    };

    return (
        <div>
            <p>로그아웃하는 페이지</p>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
};
