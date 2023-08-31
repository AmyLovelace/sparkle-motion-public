import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FlareOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import useStyles from '@/components/SignUp/SignupStyles';
import { signUp } from '@/clients/api';
import ParticleBackground from '@/components/Background/ParticleBackground';
import options from '@/components/Background/options';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useFormik } from 'formik';
import validationSchema from '@/validation/validationSchema';
import { IconButton } from '@material-ui/core';
import LanguageToggle from '../Buttons/LanguageToggle';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
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

const SignUp = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema(),
    onSubmit: async (values) => {
      if (values.password !== values.confirmPassword) {
        formik.setErrors({ confirmPassword: t('passwordsDoNotMatch') });
        return;
      }
      const response = await signUp(values.username, values.password);
      console.log(response);

      setShowSuccessMessage(true);

      setTimeout(() => {
        navigate('/sparkle');
      }, 2000);
    },
  });

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <LanguageToggle/>
      <div className={classes.root}>
        <ParticleBackground options={options} />
        <Box className={classes.formContainer}>
          <Avatar className={classes.avatar}>
            <FlareOutlined />
          </Avatar>
          <Typography className={classes.formTitle}>
            {t('createAccount')}
          </Typography>
          <form onSubmit={formik.handleSubmit} className={classes.form}>
            <Grid container className={classes.myGridContainer}>
              <Grid item className={classes.gridItem}>
                <TextField
                  {...formik.getFieldProps('username')}
                  autoComplete="username"
                  required
                  fullWidth
                  id="username"
                  label={t('userNameLabel')}
                />
                {formik.touched.username && formik.errors.username && (
                  <div>{formik.errors.username}</div>
                )}
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField
                  {...formik.getFieldProps('password')}
                  required
                  fullWidth
                  name="password"
                  label={t('passwordLabel')}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    ),
                  }} />
                {formik.touched.password && formik.errors.password && (
                  <div>{formik.errors.password}</div>
                )}
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField
                  {...formik.getFieldProps('confirmPassword')}
                  required
                  fullWidth
                  name="confirmPassword"
                  label={t('confirmPasswordLabel')}
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    ),
                  }}
                />


                {formik.touched.confirmPassword &&
                  formik.values.confirmPassword &&
                  formik.values.password &&
                  formik.values.confirmPassword !== formik.values.password && (
                    <div>{t("passwordsDoNotMatch")}</div>
                  )}

                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <div>{formik.errors.confirmPassword}</div>
                )}
              </Grid>
            </Grid>
            <Button type="submit" className={classes.submitButton}>
              {t('signUp')}
            </Button>
            <Grid container className={classes.linkContainer}>
              <Grid item>
                <Link href="/login" className={classes.signInLink}>
                  {t('signInLink')}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </div>

      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={2000}
        onClose={handleCloseSuccessMessage}
        className={classes.snackbar}>
        <MuiAlert onClose={handleCloseSuccessMessage} className={classes.alert}>
          {t('userCreatedSuccessMessage')}
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default SignUp;
