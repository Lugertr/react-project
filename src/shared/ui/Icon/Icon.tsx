import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, type ComponentType, type SVGProps } from "react";
import cls from "./Icon.module.scss";

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface IconBaseProps extends Omit<SVGProps<SVGSVGElement>, "onClick"> {
    className?: string;
    Svg: SvgComponent;
    width?: number | string;
    height?: number | string;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                type="button"
                className={cls.button}
                onClick={props.onClick}
                style={{ height, width }}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
