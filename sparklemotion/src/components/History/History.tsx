import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton, Box, Collapse } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from '@/components/History/HistoryStyles';

interface HistoryPanelProps {
  history: { transcript: string; message: string }[];
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({ history }) => {
  const [showHistory, setShowHistory] = useState(false);
  const classes = useStyles();

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <Box className={classes.historyContainer}>
      <IconButton onClick={toggleHistory} className={classes.closeButton}>
        {showHistory ? <CloseIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <Collapse in={showHistory}>
        <Card className={classes.historyCard}>
          <CardContent>
            {history.map((item, index) => (
              <div key={index}>
                {index < history.length - 1 && <hr />}
                <Typography component="div" className={classes.transcript}>
                  {item.transcript}
                </Typography>
                <Typography className={classes.message}>{item.message}</Typography>
              </div>
            )).reverse()}
          </CardContent>
        </Card>
      </Collapse>
    </Box>
  );
};

export default HistoryPanel;
