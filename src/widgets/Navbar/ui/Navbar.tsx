import { getRouteChess } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { AppLinkTheme } from '@/shared/ui/AppLink/model/types/appLink';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/model/types/button';
import { memo } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <AppLink to={getRouteChess()} theme={AppLinkTheme.SECONDARY} className={cls.createBtn}>
                Шахматы
            </AppLink>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
                test
            </Button>
        </header>
    );
});
