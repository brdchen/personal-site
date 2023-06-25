import React, { FunctionComponent, memo } from 'react'
import twemoji from 'twemoji'
import './Twemoji.css';

interface Props {
    emoji: string | HTMLElement;
}

const Twemoji: FunctionComponent<Props> = ({ emoji }) => (
    <span
        dangerouslySetInnerHTML={{
            __html: twemoji.parse(emoji, {
                folder: 'svg',
                ext: '.svg',
                className: 'emoji'
            })
        }}
    />
);

export default memo(Twemoji);