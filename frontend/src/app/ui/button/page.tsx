'use client';

import { Button, Card } from '@/components/ui';
import { GuideCardTitle } from '@/features/ui/components';

export default function ButtonTest() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <Card>
                <Card.Body>
                    <GuideCardTitle>Default</GuideCardTitle>
                    <div className="flex gap-2 items-center">
                        <Button intent={'primary'}>Primary</Button>
                        <Button intent={'secondary'}>Secondary</Button>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <GuideCardTitle>Outline</GuideCardTitle>
                    <div className="flex gap-2 items-center">
                        <Button variant={'outline'} intent={'primary'}>
                            Primary + Outline
                        </Button>
                        <Button variant={'outline'} intent={'secondary'}>
                            Secondary + Outline
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <GuideCardTitle>Size</GuideCardTitle>
                    <div className="flex gap-2 items-center">
                        <Button intent={'primary'} size={'sm'}>
                            Small
                        </Button>
                        <Button intent={'primary'} size={'md'}>
                            Medium
                        </Button>
                        <Button intent={'primary'} size={'lg'}>
                            Large
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <GuideCardTitle>Block</GuideCardTitle>
                    <div className="flex flex-col gap-2">
                        <Button intent={'primary'} fullWidth>
                            Block
                        </Button>
                        <Button intent={'secondary'} fullWidth>
                            Block
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <GuideCardTitle>Disabled</GuideCardTitle>
                    <div className="flex gap-2">
                        <Button intent={'primary'} loading>
                            Disabled - Loading
                        </Button>
                        <Button intent={'secondary'} disabled>
                            Disabled - Disabled
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
