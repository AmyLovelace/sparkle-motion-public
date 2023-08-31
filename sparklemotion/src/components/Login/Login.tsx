import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Flare } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import useStyles from '@/components/Login/LoginStyles';
import ParticleBackground from '@/components/Background/ParticleBackground';
import options from '@/components/Background/options';
import { isAuthenticated } from '@/services/isAuthenticated';
import { login } from '@/clients/api';
import LoginRes from '@/interfaces/Login';
import LanguageToggle from '../Buttons/LanguageToggle';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const LoginOne = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleCloseErrorMessage = () => {
    setErrorMessage('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const response: AxiosResponse<LoginRes> = await login(
        data.get('username') as string,
        data.get('password') as string
      );

      const token = response.data.token;
      localStorage.setItem('token', JSON.stringify(token));

      if (isAuthenticated()) {
        navigate('/sparkle');
      } else {
        setErrorMessage(t('userLoginErrorMessage'));
      }
    } catch (error) {
      const errorMessage = typeof error === 'string' ? error : t('userLoginErrorMessageTwo');
      setErrorMessage(errorMessage);
    }
  };

  return (
    <ThemeProvider theme={theme}>
     <LanguageToggle/>
      <div className={classes.root}>
        <ParticleBackground options={options} />
        <Box className={classes.formContainer}>
          <Avatar className={classes.avatar}>
            <Flare />
          </Avatar>
          <Typography className={classes.formTitle}>
            {t('welcome')}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} className={classes.form}>
            <Grid container className={classes.myGridContainer}>
              <Grid item className={classes.gridItem}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  label={t('userNameLabel')}
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={t('passwordLabel')}
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item className={classes.gridItem}>
                <FormControlLabel
                  control={<Checkbox value="remember" />}
                  label={t('rememberMeLabel')}
                />
              </Grid>
            </Grid>
            <Button type="submit" className={classes.submitButton}>
              {t('signInButton')}
            </Button>
            <Grid container className={classes.linkContainer}>
              <Grid item>
                <Link href="#" className={classes.signInLink}>
                  {t('forgotPasswordLink')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
      <Snackbar open={!!errorMessage} autoHideDuration={6000} onClose={handleCloseErrorMessage}>
        <MuiAlert severity="error" onClose={handleCloseErrorMessage}>
          {errorMessage}
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default LoginOne;
