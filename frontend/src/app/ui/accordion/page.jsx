import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    AccordionWrapper,
} from '@/app/components/common';

export default function AccordionTestPage() {
    return (
        <AccordionWrapper type="multi" defaultValue="acco-1">
            <AccordionItem value="acco-1">
                <AccordionTrigger>아코디언1</AccordionTrigger>
                <AccordionContent>
                    <p>아코디언1 내용은 정말 다양합니다</p>
                    <p>아코디언1 내용은 정말 다양합니다</p>
                    <p>아코디언1 내용은 정말 다양합니다</p>
                    <p>아코디언1 내용은 정말 다양합니다</p>
                    <p>아코디언1 내용은 정말 다양합니다</p>
                    <p>아코디언1 내용은 정말 다양합니다</p>
                    <p>아코디언1 내용은 정말 다양합니다</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="acco-2">
                <AccordionTrigger>아코디언2</AccordionTrigger>
                <AccordionContent>아코디언2 내용</AccordionContent>
            </AccordionItem>
            <AccordionItem value="acco-3">
                <AccordionTrigger>아코디언3</AccordionTrigger>
                <AccordionContent>아코디언3 내용</AccordionContent>
            </AccordionItem>
        </AccordionWrapper>
    );
}
