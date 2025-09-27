'use client';

import { useState } from "react";
import { PageTitle } from "../../components/common";

/* 
    GUESTBOOK 
    - 입력 및 저장 기능 필요 
    - PageNation으로 N개 이상 시 옆으로 넘기는 것 필요

    []

    하단 : 
    

    입력 값 : 

    {
        user: "",
        comment: "",
    }
*/

const POSTITCOLORS = [
    '#d1e8f2',
    '#fdcc84',
    '#feebda',
    '#fee6e6',
    '#e7f1f2'
]

const GUESTBOOK = [
    {
        id : 1,
        user : "이민혁",
        comment: "멋진 포트폴리오에요",
        color: '#d1e8f2'
    },
    {
        id : 2,
        user : "REEE",
        comment: "멋진 포트폴리오에요2",
        color: '#fdcc84'
    },
    {
        id : 3,
        user : "REEE",
        comment: "멋진 포트폴리오에요3",
        color: '#fee6e6',
    }
]

export default function GuestbookPage() {
    const [guestbook, setGuestBook] = useState(GUESTBOOK);
    const [postColor, setPostColor] = useState(POSTITCOLORS[0]);

    const [form, setForm] = useState({
        id : "",
        user: "",
        comment: "",
        color: postColor
    })

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const newGuest = {
            id: 4,
            user: form.user,
            comment: form.comment,
            color: form.color,
        }

        setGuestBook((prevGuestBook) => [...prevGuestBook, newGuest]);
    }

    function handleColor(color) {
        setPostColor(color)
    }

    function handleInput(name, event) {
        setForm((prevForm) => ({
            ...prevForm,
            [name]: event.target.value,
        }));
    }

    return (
        <>
            <PageTitle title="방명록" />
            <div className="p-4 bg-blue-50 rounded-2xl mb-6">
                <p>방문해주셔서 감사합니다!</p>
                <p>자유로운 피드백 부탁드립니다</p>
            </div>
            <div className="flex flex-col gap-5 max-w-[1440px]">
                <div id="post">
                    <div className="flex items-center gap-2">
                    <div className="p-4" style={{ backgroundColor: postColor }}>
                            <form onSubmit={handleFormSubmit}>
                                {POSTITCOLORS.map(postitcolor => (
                                    <button                             
                                        key={postitcolor} 
                                        type="button" 
                                        onClick={() => handleColor(postitcolor)}
                                        className="w-6 h-6 rounded border border-gray-300 hover:scale-110 transition-transform"
                                        style={{ backgroundColor: postitcolor }}
                                    ></button>
                                ))}
                                <input type="text" placeholder="유저명" value={form.user} onChange={(e) => handleInput('user', e)}/>
                                <input type="text" placeholder="글 내용" value={form.comment} onChange={(e) => handleInput('comment', e)}/>
                                <button type="submit">업로드</button>
                            </form>                   
                        </div>
                    </div>
                </div>  
                <div>
                    <ul>                    
                        {guestbook.map(guest => (
                            <li style={{backgroundColor : guest.color}} key={guest.id}>
                                <strong>{guest.user}</strong>
                                <p>{guest.comment}</p>
                            </li>
                            ))
                        }                    
                    </ul>
                </div>
            </div>
        </>             
    )
}