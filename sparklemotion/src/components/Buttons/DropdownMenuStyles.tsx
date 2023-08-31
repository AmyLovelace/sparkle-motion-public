import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom:'205vh',

    },
    button: {
        marginLeft: theme.spacing(1),
    },
    historyButton: {
        display: 'flex',
        flexDirection: 'column',
  
    },
    historyIcon: {


    },
    menuIcon:{
        color:'#ffffff',
        fontSize: '70px !important', 

    },
    languageButton: {
        fontSize: '0.7vh',

    },
    popover: {
        zIndex: theme.zIndex.modal + 1, 
    },
    languageBtn: {
        padding: '0px',
        width: '18vw',
        height:'17vh',
        display: 'flex',
        alignItems: 'right',
    },

}))

export default useStyles;