import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formContainer: {
    position: 'relative',
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '10px',
    padding: '2rem',

    [theme.breakpoints.down('xs')]: {
      width: '80%', 
    },
    [theme.breakpoints.up('sm')]: {
      width: '70%', 
    },
    [theme.breakpoints.up('md')]: {
      width: '50%', 
    },
    [theme.breakpoints.up('lg')]: {
      width: '40%', 
    },
    [theme.breakpoints.up('xl')]: {
      width: '30%', 
    }
  },
  myGridContainer: {
    padding: '40px', 
    borderRadius: '8px',
    '& > .MuiGrid-item': {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        minWidth: '100%', 
      },

    },
    '& > .MuiGrid-item:last-child': {
      marginBottom: theme.spacing(4),
    },
  },

  gridItem: {
    flex: '0 0 100%',
    maxWidth: '100%',
  },


  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'purple !important',
  },

  formTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    fontSize:'150% !important',
  },

  form: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  submitButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    width: '90%',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
    backgroundColor: '#32418B !important',
    color: '#ffffff !important',
    '&:hover': {
      backgroundColor: '#1A2C6B',
    },
  },

  signInLink: {
    cursor: 'pointer',
    fontSize:'100% !important',
    color:'#fffacd !important'


  },
  linkContainer: {
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3)

  },

  snackbar: {
    '& .MuiSnackbar-root': {
      top: '20%', 
      [theme.breakpoints.down('sm')]: {
        top: '10%',
      },
    },
    '& .MuiSnackbar-anchorOriginTopCenter': {
      top: '50%', 
      transform: 'translateY(-50%)',
    },
    '& .MuiSnackbarContent-root': {
      backgroundColor: 'green',
      color: '#ffffff',
      justifyContent: 'center',
    },
  },

  alert: {
    '& .MuiAlert-root': {
      width: '100%',
      padding: theme.spacing(2),
    },
    '& .MuiAlert-icon': {
      color: '#ffffff',
    },
    '& .MuiAlert-filledSuccess': {
      backgroundColor: 'green',
    },
    '& .MuiAlert-message': {
      fontSize: '20px',
    },
  },

}));



export default useStyles;
