export interface Qna {
    id: string;
    question: string;
    answer: string;
}

export const QNA: Qna[] = [
    {
        id: 'question-1',
        question: '왜 프론트엔드 개발자인가요?',
        answer: '사용자와 직접 소통하며 작업을 할 수 있을 때 전 큰 작업의 보람을 느낍니다. 퍼블리셔로 일하며 웹 접근성 작업을 하며 실제 장애 사용자들의 편에서 OO해서 이런걸 느꼈습니다.',
    },
    {
        id: 'question-2',
        question: '장점을 말해주세요',
        answer: '전 작업을 정말 좋아하는 사람입니다. 특정 새로운 기능을 맞추는걸 좋아해요',
    },
    {
        id: 'question-3',
        question: '앞으로 어떤 사람이 되고 싶나요?',
        answer: '이런 사람이 되고 싶습니다',
    },
    {
        id: 'question-4',
        question: '포트폴리오는 왜 이렇게 만들었나요?',
        answer: '이런식으로 만들고 싶었던 이유는.. ',
    },
];
