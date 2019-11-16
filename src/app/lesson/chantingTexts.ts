export let chantingTexts: string[];
export let morningChant: string[];
export let eveningChant: string[];


// from https://cdn.amaravati.org/wp-content/uploads/2014/09/30/Chanting-Book-Vol-1-Web.pdf
const dedicationOfOfferings: string[] = [];

dedicationOfOfferings[0] = 'Yo so bhagavā arahaṃ sammāsambuddho\n'
  + 'Svākkhāto yena bhagavatā dhammo\n'
  + 'Supaṭipanno yassa bhagavato sāvakasaṅgho\n'
  + 'Tam-mayaṃ bhagavantaṃ sadhammaṃ sasaṅghaṃ\n'
  + 'Imehi sakkārehi yathārahaṃ āropitehi abhipūjayāma';

dedicationOfOfferings[1] = 'Sādhu no bhante bhagavā sucira-parinibbutopi\n'
  + 'Pacchimā-janatānukampa-mānasā\n'
  + 'Ime sakkāre duggata-paṇṇākāra-bhūte paṭiggaṇhātu\n'
  + 'Amhākaṃ dīgharattaṃ hitāya sukhāya\n';

dedicationOfOfferings[2] = 'Arahaṃ sammāsambuddho bhagavā\n'
  + 'Buddhaṃ bhagavantaṃ abhivādemi\n'
  + 'Svākkhāto bhagavatā dhammo\n'
  + 'Dhammaṃ namassāmi\n'
  + 'Supaṭipanno bhagavato sāvakasaṅgho\n'
  + 'Saṅghaṃ namāmi\n';

const preliminaryHomage = 'Handa mayaṃ buddhassa bhagavato\n' +
  'pubbabhāga-namakāraṃ karomase\n' +
  'Namo tassa bhagavato arahato sammāsambuddhassa\n' +
  'Namo tassa bhagavato arahato sammāsambuddhassa\n' +
  'Namo tassa bhagavato arahato sammāsambuddhassa\n';

morningChant = [...dedicationOfOfferings, preliminaryHomage];
eveningChant = [...dedicationOfOfferings, preliminaryHomage];

morningChant.push('Handa mayaṃ buddhābhitthutiṃ karomase\n' +
  'Yo so tathāgato arahaṃ sammāsambuddho\n' +
  'Vijjācaraṇa-sampanno\n' +
  'Sugato\n' +
  'Lokavidū\n' +
  'Anuttaro purisadamma-sārathi\n' +
  'Satthā deva-manussānaṃ\n' +
  'Buddho bhagavā\n');

morningChant.push('Yo imaṃ lokaṃ sadevakaṃ samārakaṃ sabrahmakaṃ\n' +
  'Sassamaṇa-brāhmaṇiṃ pajaṃ sadeva-manussaṃ sayaṃ abhiññā sacchikatvā pavedesi\n' +
  'Yo dhammaṃ desesi ādi-kalyāṇaṃ majjhe-kalyāṇaṃ pariyosāna-kalyāṇaṃ\n' +
  'Sātthaṃ sabyañjanaṃ kevala-paripuṇṇaṃ parisuddhaṃ\n' +
  'brahma-cariyaṃ pakāsesi\n' +
  'Tam-ahaṃ bhagavantaṃ abhipūjayāmi tam-ahaṃ bhagavantaṃ sirasā namāmi\n');

chantingTexts = [...morningChant /*, ...eveningChant */];
