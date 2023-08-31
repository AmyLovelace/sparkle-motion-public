import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const validationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    username: Yup.string().required(t('required')),
    password: Yup.string()
      .min(8, t('min'))
      .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/, t('matches'))
      .required(t('required2')),
      
  });
};

export default validationSchema;
