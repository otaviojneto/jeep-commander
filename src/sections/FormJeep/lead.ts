import axios from 'axios';
import Leads from '../../@types/Leads';

const leadSend = (values: Leads) => {
  axios.post('https://lead.fcalatam.com.br/HubMicroservices', {
    callback: 'JSONPCallback',
    origin: 'internet',
    SubOrigem__c: 'Teaser Commander',
    form: 'Proposal',
    retUrl: 'https://www.jeep.com.br/solicite_seu.html',
    uf: 'SP',
    cidade: 'Santo Andre',
    country: 'Brasil',
    productGroup: '',
    referer:
      'https://www.jeep.com.br/solicite_seu.html?cod=600&amp;modelo=Renegade',
    description: '',
    source: '',
    medium: '',
    campaign: '',
    content: '',
    term: '',
    google_client_id: 'GA1.3.973012844.1618408549',
    _: '3564354973514',
    dealersCode: 55554,
    productCode: '61112X0',
    firstName: values.name,
    email: values.email,
    phone: values.phone,
    cpf: values.cpf,
    message: values.message,
    enableMsgPhone: true,
    enableMsgEmail: true,
    gaclientid: '973012844.1618408549',
    hasSendToEmail: false,
    msc_ano_modelo: '2021',
    brand: 'jeep',
    leadType: 'GENERIC_LEAD',
    ObservacaoCliente__c: `Mensagem: ${values.message}`,
  });
};

export default leadSend;
