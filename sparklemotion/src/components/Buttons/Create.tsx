import React from 'react';
import Fab from '@mui/material/Fab';
import MicIcon from '@mui/icons-material/Mic';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import useStyles from '@/components/Buttons/ButtonsStyles'; 

interface ContainedButtonsProps {
  listening: boolean;
  startListening: (event: React.MouseEvent<HTMLButtonElement>) => void;
  stopListening: (event: React.MouseEvent<HTMLButtonElement>) => void;
  resetTranscript: () => void;
  resetMessage: () => void;
}

const ContainedButtons: React.FC<ContainedButtonsProps> = ({
  listening,
  startListening,
  stopListening,
  resetTranscript,
  resetMessage,
}) => {
  const classes = useStyles();

  const handleListenClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (listening) {
      stopListening(event);
    } else {
      startListening(event);
    }
  };

  const handleResetClick = () => {
    resetTranscript();
    resetMessage();
  };

 
  return (
    <div className={classes.root}>
      <Fab
        onClick={handleListenClick}
        className={listening ? classes.micButton : ''}
      >
        <MicIcon />
      </Fab>
      <div className={classes.space} />
      <Fab
        onClick={handleResetClick}
        className={classes.resetButton}
      >
        <RestartAltIcon />
      </Fab>
    
    </div>
  );
};

export default ContainedButtons;
