import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    transcript: {
        fontSize: ' 1.2rem !important',
    },

    message: {
        fontSize: ' 1.2rem !important',
    },

    closeButton: {
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        backgroundColor: '#1F618D',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#782CB3',
        },
    },
    historyContainer: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
    },
    historyCard: {
        width: '300px',
    },




}));

export default useStyles;