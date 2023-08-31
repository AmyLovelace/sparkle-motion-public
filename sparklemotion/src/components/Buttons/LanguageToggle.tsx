import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Tooltip } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language'; 
import useStyles from '@/components/Buttons/ButtonsStyles';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const classes = useStyles();

  const handleLanguageToggle = () => {
    const nextLanguage = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLanguage);
  };

  const getTooltipTitle = () => {
    return currentLanguage === 'en' ? t('changeLanguage') : t('changeLanguage');
  };

  return (
    <div className={classes.languageToggleContainer}>
      {/* <Tooltip title={getTooltipTitle()}> */}
        <Button
          onClick={handleLanguageToggle}
          className={classes.button}
          startIcon={<LanguageIcon />}
        >
          {currentLanguage === 'en' ? 'english' : 'español'}
        </Button>
      {/* </Tooltip> */}
    </div>
  );
};

export default LanguageToggle;
