import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, type ReactNode } from "react";
import { NavLink, type LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";
import { AppLinkTheme } from "./model/types/appLink";

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
    activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        activeClassName = "",
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [activeClassName]: isActive }, [
                    className,
                    cls[theme],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
