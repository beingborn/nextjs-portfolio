'use client';

import {
    AboutSection,
    ContactSection,
    ExperienceSection,
    SkillSection,
} from '@/app/(home)/_components';
import { Tabs } from '@/components/ui';

export default function Home() {
    return (
        <Tabs variant="contained" defaultActiveTab="aboutMe">
            <div className="flex items-center gap-2">
                <Tabs.Button value="aboutMe">AboutME</Tabs.Button>
                <Tabs.Button value="skillExperience">Skill & Experience</Tabs.Button>
                <Tabs.Button value="contact">Contact</Tabs.Button>
            </div>
            <Tabs.Panel className="flex" value="aboutMe">
                <AboutSection />
            </Tabs.Panel>
            <Tabs.Panel className="flex h-full mt-8 flex-col gap-8" value="skillExperience">
                <SkillSection />
                <ExperienceSection />
            </Tabs.Panel>
            <Tabs.Panel className="flex items-center h-full" value="contact">
                <ContactSection />
            </Tabs.Panel>
        </Tabs>
    );
}
