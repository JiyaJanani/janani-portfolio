import React from 'react';
import './IntroSection.css';
import image from '../../assets/janani-crop-400x400.png';
import { TypeAnimation } from 'react-type-animation';

function IntroSection() {
    return (
        <div>
            <h1>Hi, I am Janani Senrayaperumal</h1>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'I am a front-end developer',
                    1000,
                    'I am a influener',
                    1000,
                    'I am a traveller',
                    1000,
                    'I am a animal lover',
                    1000,
                    'I am a great human being.....',
                    1000,
                ]}
                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
            />
        </div>
    );
}

export default IntroSection;
