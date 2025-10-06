'use client';

/* 
    필요 기능 

    1. Bold 처리 
    2. 제목 설정    
    3. Italic 처리 
    4. Image 첨부 
    5. 저장하기
    6. 게시 카테고리 설정
    7. 데이터 베이스 Json Post
*/

import { HeadingButton } from '@/components/tiptap-ui/heading-button';
import { EditorContent, EditorContext, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic } from 'lucide-react';
import { useState } from 'react';
import Button from './Button';

export default function Tiptap() {
    const [text, setText] = useState();

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
        ],
        content: '<p className="text-text-thr">내용을 입력해주세요.</p>',

        // Don't render immediately on the server to avoid SSR issues
        immediatelyRender: false,
    });

    return (
        <>
            <div>
                <label htmlFor=""></label>
                <input type="text" placeholder="제목 입력" />
            </div>
            <div>
                <label htmlFor=""></label>
                <select>
                    <option value="">메인</option>
                    <option value="">공지사항</option>
                    <option value="">게시판</option>
                </select>
            </div>

            <EditorContext.Provider value={{ editor }}>
                <div
                    className="flex items-center border border-b border-border-pri"
                    id="toolbar-header"
                >
                    <button onClick={() => editor.chain().focus().toggleBold().run()}>
                        <Bold />
                    </button>
                    <button onClick={() => editor.chain().focus().toggleItalic().run()}>
                        <Italic />
                    </button>
                    <HeadingButton editor={editor} level={1} hideWhenUnavailable={true} />
                    <HeadingButton editor={editor} level={2} hideWhenUnavailable={true} />
                    <HeadingButton editor={editor} level={3} hideWhenUnavailable={true} />
                </div>
                <EditorContent editor={editor} role="presentation" />
                <div id="toolbar-footer">
                    <Button
                        onClick={() => {
                            setText(editor.getHTML());
                        }}
                    >
                        저장하기
                    </Button>
                </div>
            </EditorContext.Provider>
        </>
    );
}
