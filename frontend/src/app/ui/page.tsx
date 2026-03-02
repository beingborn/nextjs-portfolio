import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function UserInterface() {
    return (
        <section>
            <Link
                className="text-white inline-flex items-center gap-2 border p-2 bg-secondary-500 hover:underline rounded-lg  transition-all duration-300"
                href="https://699d535ab73546f406674150-uoqrcznzfx.chromatic.com/?path=/docs/ui-button--docs"
            >
                컴포넌트 스토리북 링크
                <ExternalLink size={20} />
            </Link>

            <div className="p-4">
                <p className="text-lg font-semibold mb-3">Storybook 도입 및 운영 요약</p>
                <ul className="list-disc pl-5 space-y-2 text-text-main">
                    <li>
                        공용 UI 컴포넌트를 독립적으로 확인하고 문서화하기 위해 Storybook을
                        도입했습니다.
                    </li>
                    <li>
                        초기 설정을 직접 구성했고, 주요 컴포넌트(Button, Card, Input, TextArea)
                        스토리를 작성했습니다.
                    </li>
                    <li>
                        GitHub Actions 기반 CI로 Chromatic 자동 배포를 연결해 변경 사항을 리뷰
                        가능한 형태로 운영하고 있습니다.
                    </li>
                </ul>
            </div>
        </section>
    );
}
