import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    collapsed: {
      backgroundColor: '#f5f5f5'
    },
    root: {
      flexGrow: 1,
      opacity: 0.5
    },
    flex: {
      flex: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 300
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    appbar: {
      boxShadow: 'none',
      opacity: 1.0
    },
    secondary: {
      padding: 0
    }
  });

export default styles;
