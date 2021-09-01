import React, { useCallback, useState } from 'react';
import { Formik, Form } from 'formik';

import lead from './lead';
import Leads from '../../@types/Leads';

import {
  Button,
  TextField,
  TextArea,
  Select,
} from '../../components';
import profiles from '../../mocks/profiles';
import { tagManagerArgs } from '../../tracks/Tracks';
import { mask } from '../../Utils';

import initialValues from './initialValues';
import {
  ButtonField,
  Col,
  FormSession,
  LeadSent,
  RowField,
  SelectStyle,
  TextDescription,
} from './styles';
import validations from './validations';

const FormJeep: React.FC = () => {
  const [leadSent, setLeadSent] = useState(false);

  const handleTagClickSubmit = useCallback(() => {
    tagManagerArgs({
      event: 'interaction',
      brand: 'jeep',
      segment: 'landing-page',
      product: 'commander',
      path: 'teaser',
      pageSection: 'conteudo',
      pageSubsection: 'lead-cadastro',
      interactionType: 'clique',
      elementCategory: 'submit',
      element: 'enviar',
      selectedValue: null,
    });
  }, []);

  const handleTagSuccessSubmit = useCallback(() => {
    tagManagerArgs({
      event: 'interaction',
      brand: 'jeep',
      segment: 'landing-page',
      product: 'commander',
      path: 'teaser',
      pageSection: 'conteudo',
      pageSubsection: 'lead-cadastro',
      interactionType: 'abriu',
      elementCategory: 'submit-success',
      element: 'seus-dados-foram-enviados-com-sucesso',
      selectedValue: null,
    });
  }, []);

  const onSave = async (values: Leads) => {
    handleTagClickSubmit();
    try {
      await lead(values);
      handleTagSuccessSubmit();
      setLeadSent(true);
    } catch (e) {
      console.log(e.response?.status);
    }
  };

  if (leadSent) {
    return (
      <LeadSent onClick={() => setLeadSent(false)}>
        Seus dados foram enviados com sucesso.
      </LeadSent>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validations}
      onSubmit={values => onSave(values)}
    >
      {({ handleSubmit, setFieldValue, errors, values }) => (
        <Form>
          <FormSession>
            <RowField>
              <Col>
                <TextField
                  name="name"
                  label="Nome Completo"
                  error={errors.name}
                  tag="nome-completo"
                  onChange={value =>
                    setFieldValue('name', value)
                  }
                />
              </Col>

              <Col>
                <SelectStyle>
                  <Select
                    name="profile"
                    tag={values.profile}
                    label="Selecione o seu perfil"
                    error={errors.profile}
                    options={profiles}
                    onChange={value =>
                      setFieldValue('profile', value)
                    }
                  />
                </SelectStyle>
              </Col>

              <Col>
                <TextField
                  name="email"
                  label="E-mail"
                  type="email"
                  error={errors.email}
                  onChange={value =>
                    setFieldValue('email', value)
                  }
                  tag="email"
                />
              </Col>

              <Col>
                <TextField
                  name="cpf"
                  label="CPF/CNPJ"
                  error={errors.cpf}
                  mask={
                    values.profile === 'pessoa-juridica'
                      ? mask.cnpj
                      : mask.cpf
                  }
                  onChange={value => setFieldValue('cpf', value)}
                  tag="cfp-cnpj"
                />
              </Col>

              <Col>
                <TextField
                  name="phone"
                  label="Telefone"
                  error={errors.phone}
                  mask={mask.phone}
                  onChange={value =>
                    setFieldValue('phone', value)
                  }
                  tag="phone"
                />
              </Col>

              <Col>
                <TextArea
                  name="message"
                  label="Mensagem"
                  error={errors.message}
                  tag="message"
                />
              </Col>

              <TextDescription>
                Seus dados pessoais poderão ser utilizados pela
                Jeep e pela Concessionária para fins de envio de
                comunicações de marketing de produtos e serviços
                relacionados à Jeep. A Jeep compartilhará seus
                dados pessoais com a instituição financeira
                parceira e com demais empresas do grupo (Fiat,
                Chrysler, Dogde e Ram) para viabilizar o envio de
                uma proposta de financiamento do veículo de seu
                interesse. Para mais detalhes sobre como
                desativar o recebimento de comunicações de
                marketing e outras informações sobre como a Jeep
                trata seus dados pessoais, acesse a Política de
                Privacidade{' '}
                <a href="https://www.jeep.com.br/politica-de-privacidade.html">
                  disponível aqui
                </a>
                .
              </TextDescription>
            </RowField>

            <ButtonField>
              <Button
                onClick={() => {
                  handleTagClickSubmit();
                  handleSubmit();
                }}
              >
                Enviar
              </Button>
            </ButtonField>
          </FormSession>
        </Form>
      )}
    </Formik>
  );
};

export default FormJeep;
