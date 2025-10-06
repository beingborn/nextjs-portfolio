'use client';

import { X } from 'lucide-react';
import { useRef, useState } from 'react';
import Button from './Button';

/*
    업로드 기능 구현 

    요구사항 
    1. multiple, single 선택 가능
    2. maxSize 선택 가능
    3. 선택한 파일 업로드 가능
    4. 초기화 기능 
    5. 각자 삭제 기능 
*/

export default function FileUpload({ multiple = true, maximumNumOfFiles = 5 }) {
    const [fileList, setFileList] = useState([]);
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileDelete = (fileName) => {
        setFileList((prevFileList) => prevFileList.filter((file) => file.name !== fileName));
    };

    const handleUpload = (e) => {
        const files = Array.from(e.target.files);

        if (files.length > maximumNumOfFiles) {
            alert('최대 파일 갯수를 초과했습니다');

            return;
        }

        setFileList(files);
    };

    return (
        <div className="flex flex-col gap-4">
            <div>
                <Button type="button" onClick={handleClick}>
                    파일 업로드
                </Button>
                <input
                    type="file"
                    multiple={multiple}
                    ref={fileInputRef}
                    onChange={handleUpload}
                    style={{ display: 'none' }}
                />
            </div>
            <div>
                <ul>
                    {fileList.length > 0 ? (
                        fileList.map((file) => (
                            <li
                                className="flex items-center justify-between py-3 border-b border-b-border-pri"
                                key={file.name}
                            >
                                {file.name}
                                <button type="button" onClick={() => handleFileDelete(file.name)}>
                                    <X size={20} />
                                </button>
                            </li>
                        ))
                    ) : (
                        <p>업로드된 파일이 없어요</p>
                    )}
                </ul>
            </div>
        </div>
    );
}
