import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    fontSize14: {
        marginBottom: theme.spacing(1.5),
        fontSize: ' 1.5rem !important',
      },
      gutterBottom: {
        marginBottom: theme.spacing(1.5),
      },
      cardContent: {
        padding: theme.spacing(2),
        background: '#ffffff',
        borderRadius: theme.spacing(1),
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        marginTop: theme.spacing(4),
        width: '80%',
        maxWidth: '500px',
      },

    




}));

export default useStyles;