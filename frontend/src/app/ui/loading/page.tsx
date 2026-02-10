'use client';

import { Button, Card, Loading, Spinner } from '@/components/ui';
import { GuideCardTitle } from '@/features/ui/components';
import { useState } from 'react';

export default function LoadingTest() {
    const [loading, setIsLoading] = useState(false);

    const handleLoading = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    if (loading) return <Loading />;

    return (
        <div className="grid grid-cols-2 gap-4">
            <Card>
                <Card.Body>
                    <GuideCardTitle>Spinner</GuideCardTitle>
                    <div className="flex items-center gap-2">
                        <Spinner size={40} />
                        <Spinner size={60} />
                        <Spinner size={80} />
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <GuideCardTitle>Loading + Spinner</GuideCardTitle>
                    <Button onClick={handleLoading}>Set Loading Test</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
