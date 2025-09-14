'use client';

import React, { useState } from 'react';
import Modal from './common/Modal';
import NewPost from './NewPost';
import Post from './Post';

const PostList = () => {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    const changeBodyHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEnteredBody(event.target.value);
    };

    const changeAuthorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredAuthor(event.target.value);
    };

    const hideModalHandler = () => {
        setModalIsVisible(false);
    };

    const showModalHandler = () => {
        setModalIsVisible(true);
    };

    return (
        <>
            {modalIsVisible ? (
                <Modal onClose={hideModalHandler}>
                    <NewPost
                        onBodyChange={changeBodyHandler}
                        onAuthorChange={changeAuthorHandler}
                    />
                </Modal>
            ) : null}
            <ul className="list-none max-w-4xl my-4 mx-auto p-4 grid gap-4 grid-cols-3">
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Maximum" body="안녕하세요" />
            </ul>
        </>
    );
};

export default PostList;

/**
 * NOTE :: 한 가지 상태에 대해서 두 가지 컴포넌트에서 값이 필요하다면,
 * 그 컴포넌트를 모두 감싸는 래퍼 컴포넌트까지 상태를 올린다.
 */
