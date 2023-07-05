import { AppBarProps } from '@mui/material/AppBar';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import BasicMenu from './BasicMenu';
import { useDispatch } from '@/store';
import { openDrawer } from '../../store/slices/theme.slice';
import { useSelector } from '@/store';

const drawerWidth = 240;

interface IProps extends AppBarProps {
  open?: boolean;
}

const StyledHeader = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<IProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Header() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const open = useSelector(state => state.theme.layout.isDrawerOpen);

  return (
    <StyledHeader open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open-drawer"
          onClick={() => dispatch(openDrawer())}
          sx={{
            opacity: open ? 0 : 1,
            transition: theme.transitions.create('opacity', {
              easing: theme.transitions.easing.sharp,
              duration: !open
                ? theme.transitions.duration.enteringScreen
                : theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <BasicMenu />
      </Toolbar>
    </StyledHeader>
  );
}

export default Header;
