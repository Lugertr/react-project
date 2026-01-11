import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './TextSpan.module.scss';

export enum TextSpanTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export type TextSpanAlign = 'right' | 'left' | 'center';

export type TextSpanSize = 's' | 'm' | 'l';

interface TextSpanProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextSpanTheme;
    align?: TextSpanAlign;
    size?: TextSpanSize;
    bold?: boolean;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSpanSize, string> = {
    s: 'size_s',
    m: 'size_m',
    l: 'size_l',
};

const mapSizeToHeaderTag: Record<TextSpanSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

export const TextSpan = memo((props: TextSpanProps) => {
    const { className, text, title, variant = 'primary', align = 'left', size = 'm', bold } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, cls[variant], cls[align], sizeClass];

    return (
        <div className={classNames(cls.TextSpan, { [cls.bold]: bold }, additionalClasses)}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
