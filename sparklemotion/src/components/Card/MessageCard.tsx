import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useStyles from '@/components/Card/MessageCardStyles'; 

interface MessageCardProps {
  transcript: string;
  message: string;
  show: boolean;
}

const MessageCard: React.FC<MessageCardProps> = ({ transcript, message, show }) => {
  const classes = useStyles();


  return (
    <Card className={classes.cardContent}>
      <CardContent>
        <Typography className={classes.fontSize14}>
          
        </Typography>
        <Typography className={classes.fontSize14}>
          {transcript}
        </Typography>
        <Typography className={classes.gutterBottom}>
          <hr />
        </Typography>
        <Typography>{message}</Typography>
      </CardContent>
    </Card>
  );
};

export default MessageCard;
