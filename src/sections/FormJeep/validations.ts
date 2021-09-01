import * as yup from 'yup';

const requiredField = 'Campo obrigatório';

const validation = yup.object().shape({
  name: yup.string().required(requiredField),
  profile: yup.string(),
  email: yup.string().required(requiredField),
  cpf: yup.string().required(requiredField),
  phone: yup.string().required(requiredField),
  message: yup.string(),
});

export default validation;
