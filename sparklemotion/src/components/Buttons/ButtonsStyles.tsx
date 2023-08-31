import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  micButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: 'lightgreen',
      boxShadow: '0 0 10px 3px rgba(0, 255, 0, 0.7)',
    },
  },

  resetButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: 'darkred',
      boxShadow: '0 0 10px 3px rgba(255, 0, 0, 0.7)',
    },
  },

  space: {
    margin: '0 10px',
  },

  languageToggleContainer: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    zIndex: 9999,
  },
    button: {
    color: '#ffffff',
  },
}));

export default useStyles;
