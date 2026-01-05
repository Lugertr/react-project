import LogoSvg from '@/shared/assets/icons/logo.svg?react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Icon } from '../Icon';
import { HStack } from '../Stack';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
    return (
        <HStack max justify="center" className={classNames(cls.appLogoWrapper, {}, [className])}>
            <Icon width={size} height={size} color="black" Svg={LogoSvg} className={cls.appLogo}></Icon>
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
        </HStack>
    );
});
