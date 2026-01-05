import ProfileIcon from '@/shared/assets/icons/avatar.svg?react';
import MainIcon from '@/shared/assets/icons/home.svg?react';
import AboutIcon from '@/shared/assets/icons/Info.svg?react';
import { getRouteAbout, getRouteMain, getRouteProfile } from '@/shared/const/router';
import type { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = (): SidebarItemType[] => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: 'О сайте',
        },
    ];
    // тут будет проверка ролей
    // eslint-disable-next-line no-constant-condition
    if (true) {
        sidebarItemsList.push({
            path: getRouteProfile(''),
            Icon: ProfileIcon,
            text: 'Профиль',
            authOnly: true,
        });
    }

    return sidebarItemsList;
};
