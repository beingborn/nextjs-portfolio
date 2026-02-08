'use client';

const Header = () => {
    return (
        <header className="min-h-[60px] sticky z-50 top-0 text-point flex justify-between items-center px-4 bg-zinc-200">
            <div className="flex items-center gap-1">
                <span>사이드바 접기</span>
            </div>
            <div className="flex gap-2 items-center">
                <a href="/pages/login">로그인</a>
                <a href="#">회원가입</a>
            </div>
        </header>
    );
};

export default Header;
