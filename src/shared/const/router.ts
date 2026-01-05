export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    CHESS = 'chess',
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteChess = () => `/${AppRoutes.CHESS}`;
export const getRouteAbout = () => `/${AppRoutes.ABOUT}`;
export const getRouteProfile = (id: string) => `/profile/${id}`;
