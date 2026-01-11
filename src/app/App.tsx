import { getUserInited } from '@/entities/User/model/selectors/getUserInited/getUserInited';
import { initAuthData } from '@/entities/User/model/services/initAuthData';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />;
    }

    return (
        <div id="app" className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar></Navbar>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
                <footer className="footer wrapper"></footer>
            </Suspense>
        </div>
    );
}

export default App;
