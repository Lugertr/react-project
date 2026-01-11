import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { LoginModal } from '@/features/AuthByUsername';
import { getRouteChess } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { AppLinkTheme } from '@/shared/ui/AppLink/model/types/appLink';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/model/types/button';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
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
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                Войти
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    );
});
