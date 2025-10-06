'use client';

interface NewPostProps {
    onBodyChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onAuthorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewPost = ({ onBodyChange, onAuthorChange }: NewPostProps) => {
    return (
        <form className="bg-blue-200 p-4 w-80 mx-auto rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
            <p>
                <label htmlFor="body" className="block mb-0.5 font-bold">
                    Text
                </label>
                <textarea
                    id="body"
                    required
                    onChange={onBodyChange}
                    rows={3}
                    className="block w-full font-inherit p-2 rounded-lg border-none bg-blue-100 text-[#28262c] resize-none"
                />
            </p>
            <p>
                <label htmlFor="name" className="block mb-0.5  font-bold">
                    Your name
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    onChange={onAuthorChange}
                    className="block w-full font-inherit p-2 rounded-lg border-none bg-blue-100 text-[#28262c]"
                />
            </p>
            <div className="flex justify-end gap-2 mt-4">
                <button
                    type="button"
                    className="font-inherit px-6 py-2 rounded bg-transparent text-white hover:text-blue-300 transition-colors"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="font-inherit px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default NewPost;

/**
 * NOTO :: on이라는 접두어를 이벤트 핸들러 함수 이름에 붙이는 것이 일반적인 관습
 * 이벤트가 발생했을 때 실행되는 함수임을 명시해주는 것으로 코드 가독성, 일관성 향상
 */
