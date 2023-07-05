import { CircularProgress, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from '@/store';
import Footer from './components/Footer';
import SideNavBar from './components/SideNavBar';
import Wrapper from './components/Wrapper';
import Header from './components/Header';

function Layout() {
  const themeConfig = useSelector(state => state.theme.theme);
  const theme = createTheme(themeConfig);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <CssBaseline />
        <Header />
        <SideNavBar />
        <section id="layout__container">
          <Suspense fallback={<Fallback />}>
            <Outlet />
          </Suspense>
        </section>
        <Footer label="@Hexaware Technologies | All rights reserved" />
      </Wrapper>
    </ThemeProvider>
  );
}

const Fallback = () => (
  <div className="w-full h-[80vh] grid place-content-center">
    <CircularProgress />
  </div>
);

export default Layout;
