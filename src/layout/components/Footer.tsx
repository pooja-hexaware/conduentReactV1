import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

type IProps = {
  label: string;
};

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  position: 'fixed',
  bottom: 0,
  width: '100%',
  display: 'grid',
  placeItems: 'center',
}));

function Footer({ label }: IProps) {
  return (
    <StyledFooter>
      <Typography variant="body2" color="textSecondary">
        {label}
      </Typography>
    </StyledFooter>
  );
}

export default Footer;
