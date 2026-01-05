import ThemeIcon from '@/shared/assets/icons/theme.svg?react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Icon } from '@/shared/ui/Icon';
import { memo, useCallback } from 'react';

export const ThemeSwitcher = memo(() => {
    const { toggleTheme } = useTheme();

    const onToggleHandler = useCallback(() => {
        toggleTheme();
    }, [toggleTheme]);

    return <Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />;
});
