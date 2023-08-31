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
  messageCardContainer: {
    position: 'absolute',
    bottom: '10%', 
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  
}));

export default useStyles;
