import { type ComponentType, type SVGProps } from 'react';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
