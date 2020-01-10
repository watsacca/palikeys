export let chantingTexts: string[];
export const closingHomage: string[] = [];
export let morningChant: string[];
export let eveningChant: string[];
export const eightPreceptsChant: string[] = [];
export const asubaChant: string[] = [];


// from https://cdn.amaravati.org/wp content/uploads/2014/09/30/Chanting Book Vol 1 Web.pdf
const dedicationOfOfferings: string[] = [];

dedicationOfOfferings.push('yo so bhagavā arahaṃ sammāsambuddho');
dedicationOfOfferings.push('svākkhāto yena bhagavatā dhammo');
dedicationOfOfferings.push('supaṭipanno yassa bhagavato sāvakasaṅgho');
dedicationOfOfferings.push('tam mayaṃ bhagavantaṃ sadhammaṃ sasaṅghaṃ');
dedicationOfOfferings.push('imehi sakkārehi yathārahaṃ āropitehi abhipūjayāma');

dedicationOfOfferings.push('sādhu no bhante bhagavā sucira parinibbutopi');
dedicationOfOfferings.push('pacchimā janatānukampa mānasā');
dedicationOfOfferings.push('ime sakkāre duggata paṇṇākāra bhūte paṭiggaṇhātu');
dedicationOfOfferings.push('amhākaṃ dīgharattaṃ hitāya sukhāya');

dedicationOfOfferings.push('arahaṃ sammāsambuddho bhagavā');
dedicationOfOfferings.push('buddhaṃ bhagavantaṃ abhivādemi');
dedicationOfOfferings.push('svākkhāto bhagavatā dhammo\ndhammaṃ namassāmi');
dedicationOfOfferings.push('supaṭipanno bhagavato sāvakasaṅgho\nsaṅghaṃ namāmi');

const preliminaryHomage: string[] = [];
preliminaryHomage.push('handa mayaṃ buddhassa bhagavato');
preliminaryHomage.push('pubbabhāga namakāraṃ karomase');
preliminaryHomage.push('namo tassa bhagavato arahato sammāsambuddhassa\n' +
  'namo tassa bhagavato arahato sammāsambuddhassa\n' +
  'namo tassa bhagavato arahato sammāsambuddhassa');

const dedi3: string [] = [];
const dedi5: string [] = [];

for (let i = 0; i < dedicationOfOfferings.length; i++) {
  if (i % 3 === 0) {
    dedi3.push(dedicationOfOfferings[i]);
  } else {
    dedi3[dedi3.length - 1] += '\n' + dedicationOfOfferings[i];
  }
}

for (let i = 0; i < dedicationOfOfferings.length; i++) {
  if (i % 5 === 0) {
    dedi5.push(dedicationOfOfferings[i]);
  } else {
    dedi5[dedi5.length - 1] += '\n' + dedicationOfOfferings[i];
  }
}

morningChant = [...dedicationOfOfferings, ...dedi3, ...dedi5, ...preliminaryHomage];
eveningChant = [...dedicationOfOfferings, ...preliminaryHomage];

morningChant.push('handa mayaṃ buddhābhitthutiṃ karomase');
morningChant.push('yo so tathāgato arahaṃ sammāsambuddho');
morningChant.push('vijjācaraṇa sampanno');
morningChant.push('sugato lokavidū anuttaro purisadamma sārathi');
morningChant.push('satthā deva manussānaṃ');
morningChant.push('buddho bhagavā');

morningChant.push('yo imaṃ lokaṃ sadevakaṃ samārakaṃ sabrahmakaṃ');
morningChant.push('sassamaṇa brāhmaṇiṃ pajaṃ sadeva manussaṃ sayaṃ abhiññā sacchikatvā pavedesi');
morningChant.push('yo dhammaṃ desesi ādi kalyāṇaṃ majjhe kalyāṇaṃ pariyosāna kalyāṇaṃ');
morningChant.push('sātthaṃ sabyañjanaṃ kevala paripuṇṇaṃ parisuddhaṃ');
morningChant.push('brahma cariyaṃ pakāsesi');
morningChant.push('tam ahaṃ bhagavantaṃ abhipūjayāmi tam ahaṃ bhagavantaṃ sirasā namāmi');

morningChant.push('handa mayaṃ dhammābhitthutiṃ karomase');
morningChant.push('yo so svākkhāto bhagavatā dhammo');
morningChant.push('sandiṭṭhiko akāliko ehipassiko opanayiko');
morningChant.push('paccattaṃ veditabbo viññūhi');
morningChant.push('tam ahaṃ dhammaṃ abhipūjayāmi tam ahaṃ dhammaṃ sirasā namāmi');

morningChant.push('handa mayaṃ saṅghābhitthutiṃ karomase');
morningChant.push('yo so supaṭipanno bhagavato sāvakasaṅgho');
morningChant.push('ujupaṭipanno bhagavato sāvakasaṅgho');
morningChant.push('ñāyapaṭipanno bhagavato sāvakasaṅgho');
morningChant.push('sāmīcipaṭipanno bhagavato sāvakasaṅgho');

morningChant.push('yadidaṃ cattāri purisayugāni aṭṭha purisapuggalā');
morningChant.push('esa bhagavato sāvakasaṅgho');
morningChant.push('āhuneyyo pāhuneyyo dakkhiṇeyyo');
morningChant.push('añjali karaṇīyo');
morningChant.push('anuttaraṃ puññakkhettaṃ lokassa');
morningChant.push('tam ahaṃ saṅghaṃ abhipūjayāmi tam ahaṃ saṅghaṃ sirasā namāmi');

morningChant.push('handa mayaṃ ratanattaya paṇāma gāthāyo c’eva');
morningChant.push('saṃvega parikittana pāṭhañca bhaṇāmase');
morningChant.push('buddho susuddho karuṇā mahaṇṇavo');
morningChant.push('yo’ccanta suddhabbara ñāṇa locano');
morningChant.push('lokassa pāpūpakilesa ghātako');
morningChant.push('vandāmi buddhaṃ aham ādarena taṃ');

morningChant.push('dhammo padīpo viya tassa satthuno');
morningChant.push('yo magga pākāmata bheda bhinnako');
morningChant.push('lokuttaro yo ca tad attha dīpano');
morningChant.push('vandāmi dhammaṃ aham ādarena taṃ');

morningChant.push('saṅgho sukhettābhyati khetta saññito');
morningChant.push('yo diṭṭha santo sugatānubodhako');
morningChant.push('lolappahīno ariyo sumedhaso');
morningChant.push('vandāmi saṅghaṃ aham ādarena taṃ');
morningChant.push('iccevam ekantabhipūja neyyakaṃ vatthuttayaṃ vandayatābhisaṅkhataṃ');

morningChant.push('puññaṃ mayā yaṃ mama sabbupaddavā mā hontu ve tassa pabhāva siddhiyā');
morningChant.push('idha tathāgato loke uppanno arahaṃ sammāsambuddho');
morningChant.push('dhammo ca desito niyyāniko upasamiko parinibbāniko sambodhagāmī sugatappavedito');

morningChant.push('mayan taṃ dhammaṃ sutvā evaṃ jānāma');
morningChant.push('jātipi dukkhā');
morningChant.push('jarāpi dukkhā');
morningChant.push('maraṇampi dukkhaṃ');
morningChant.push('soka parideva dukkha domanass’upāyāsāpi dukkhā');
morningChant.push('appiyehi sampayogo dukkho');
morningChant.push('piyehi vippayogo dukkho');
morningChant.push('yamp’icchaṃ na labhati tampi dukkhaṃ');

morningChant.push('saṅkhittena pañcupādānakkhandhā dukkhā');
morningChant.push('seyyathīdaṃ');
morningChant.push('rūpūpādānakkhandho');
morningChant.push('vedanūpādānakkhandho');
morningChant.push('saññūpādānakkhandho');
morningChant.push('saṅkhārūpādānakkhandho');
morningChant.push('viññāṇūpādānakkhandho');

morningChant.push('yesaṃ pariññāya');
morningChant.push('dharamāno so bhagavā evaṃ bahulaṃ sāvake vineti');
morningChant.push('evaṃ bhāgā ca panassa bhagavato sāvakesu anusāsanī bahulā pavattati');
morningChant.push('rūpaṃ aniccaṃ');
morningChant.push('vedanā aniccā');
morningChant.push('saññā aniccā');
morningChant.push('saṅkhārā aniccā');
morningChant.push('viññāṇaṃ aniccaṃ');

morningChant.push('rūpaṃ anattā');
morningChant.push('vedanā anattā');
morningChant.push('saññā anattā');
morningChant.push('saṅkhārā anattā');
morningChant.push('viññāṇaṃ anattā');

morningChant.push('sabbe saṅkhārā aniccā');
morningChant.push('sabbe dhammā anattā’ti');
morningChant.push('te mayaṃ otiṇṇāmha jātiyā jarā maraṇena');
morningChant.push('sokehi paridevehi dukkhehi domanassehi upāyāsehi');
morningChant.push('dukkhotiṇṇā dukkha paretā');
morningChant.push('appeva nāmimassa kevalassa dukkha kkhandhassa antakiriyā paññāyethā’ti');

morningChant.push('cira parinibbutampi taṃ bhagavantaṃ uddissa arahantaṃ sammāsambuddhaṃ');
morningChant.push('saddhā agārasmā anagāriyaṃ pabbajitā');
morningChant.push('tasmiṃ bhagavati brahma cariyaṃ carāma');
morningChant.push('bhikkhūnaṃ sikkhāsājīva samāpannā');
morningChant.push('taṃ no brahma cariyaṃ imassa kevalassa dukkha kkhandhassa');
morningChant.push('antakiriyāya saṃvattatu');

morningChant.push('cira parinibbutampi taṃ bhagavantaṃ saraṇaṃ gatā');
morningChant.push('dhammañca saṅghañca');
morningChant.push('tassa bhagavato sāsanaṃ yathā sati yathā balaṃ manasikaroma anupaṭipajjāma');
morningChant.push('sā sā no paṭipatti');
morningChant.push('imassa kevalassa dukkha kkhandhassa antakiriyāya saṃvattatu');

closingHomage.push('arahaṃ sammāsambuddho bhagavā');
closingHomage.push('buddhaṃ bhagavantaṃ abhivādemi');
closingHomage.push('svākkhāto bhagavatā dhammo');
closingHomage.push('dhammaṃ namassāmi');
closingHomage.push('supaṭipanno bhagavato sāvakasaṅgho');
closingHomage.push('saṅghaṃ namāmi');

eveningChant.push('handa mayaṃ buddhānussatinayaṃ karomase');
eveningChant.push('taṃ kho pana bhagavantaṃ evaṃ kalyāṇo kittisaddo abbhuggato');
eveningChant.push('itipi so bhagavā arahaṃ sammāsambuddho');
eveningChant.push('vijjācaraṇa sampanno sugato lokavidū');
eveningChant.push('anuttaro purisadamma sārathi satthā deva manussānaṃ buddho bhagavā’ti');

eveningChant.push('buddh’vārahanta varatādiguṇābhiyutto');
eveningChant.push('suddhābhiñāṇa karuṇāhi samāgatatto');
eveningChant.push('bodhesi yo sujanataṃ kamalaṃ va sūro');
eveningChant.push('vandām’ahaṃ tam araṇaṃ sirasā jinendaṃ');
eveningChant.push('buddho yo sabba pāṇīnaṃ saraṇaṃ khemam uttamaṃ');

eveningChant.push('paṭhamānussatiṭṭhānaṃ vandāmi taṃ siren’ahaṃ');
eveningChant.push('buddhassāh’asmi dāso va buddho me sāmi kissaro');
eveningChant.push('buddho dukkhassa ghātā ca vidhātā ca hitassa me');
eveningChant.push('buddhass’āhaṃ niyyādemi sarīrañ jīvitañ cidaṃ');
eveningChant.push('vandanto’haṃ carissāmi buddhass’eva subodhitaṃ');

eveningChant.push('natthi me saraṇaṃ aññaṃ buddho me saraṇaṃ varaṃ');
eveningChant.push('etena sacca vajjena vaḍḍheyyaṃ satthu sāsane');
eveningChant.push('buddhaṃ me vandamānena');
eveningChant.push('yaṃ puññaṃ pasutaṃ idha');
eveningChant.push('sabbepi antarāyā me māhesuṃ tassa tejasā');

eveningChant.push('kāyena vācāya va cetasā vā');
eveningChant.push('buddhe kukammaṃ pakataṃ mayā yaṃ');
eveningChant.push('buddho paṭiggaṇhātu accayantaṃ');
eveningChant.push('kālantare saṃvarituṃ va buddhe');

eveningChant.push('handa mayaṃ dhammānussatinayaṃ karomase');
eveningChant.push('svākkhāto bhagavatā dhammo');
eveningChant.push('sandiṭṭhiko akāliko ehipassiko');
eveningChant.push('opanayiko paccattaṃ veditabbo viññūhī’ti');

eveningChant.push('handa mayaṃ dhammābhigītiṃ karomase');
eveningChant.push('svākkhātat’ādiguṇa yoga vasena seyyo');
eveningChant.push('yo magga pāka pariyatti vimokkha bhedo');
eveningChant.push('dhammo kuloka patanā tada dhāri dhārī');
eveningChant.push('vandām’ahaṃ tama haraṃ vara dhammam etaṃ');

eveningChant.push('dhammo yo sabba pāṇīnaṃ saraṇaṃ khemam uttamaṃ');
eveningChant.push('dutiyānussatiṭṭhānaṃ vandāmi taṃ siren’ahaṃ');
eveningChant.push('dhammassāh’asmi dāso va dhammo me sāmi kissaro');
eveningChant.push('dhammo dukkhassa ghātā ca vidhātā ca hitassa me');
eveningChant.push('dhammass’āhaṃ niyyādemi sarīrañ jīvitañ cidaṃ');

eveningChant.push('vandantohaṃ carissāmi dhammass’eva sudhammataṃ');
eveningChant.push('natthi me saraṇaṃ aññaṃ dhammo me saraṇaṃ varaṃ');
eveningChant.push('etena sacca vajjena vaḍḍheyyaṃ satthu sāsane');
eveningChant.push('dhammaṃ me vandamānena');
eveningChant.push('yaṃ puññaṃ pasutaṃ idha');

eveningChant.push('sabbepi antarāyā me māhesuṃ tassa tejasā');
eveningChant.push('kāyena vācāya va cetasā vā');
eveningChant.push('dhamme kukammaṃ pakataṃ mayā yaṃ');
eveningChant.push('dhammo paṭiggaṇhātu accayantaṃ');
eveningChant.push('kālantare saṃvarituṃ va dhamme');

eveningChant.push('handa mayaṃ saṅghānussatinayaṃ karomase');
eveningChant.push('supaṭipanno bhagavato sāvakasaṅgho');
eveningChant.push('ujupaṭipanno bhagavato sāvakasaṅgho');
eveningChant.push('ñāyapaṭipanno bhagavato sāvakasaṅgho');
eveningChant.push('sāmīcipaṭipanno bhagavato sāvakasaṅgho');

eveningChant.push('yadidaṃ cattāri purisayugāni aṭṭha purisapuggalā');
eveningChant.push('esa bhagavato sāvakasaṅgho');
eveningChant.push('āhuneyyo pāhuneyyo dakkhiṇeyyo añjali karaṇīyo');
eveningChant.push('anuttaraṃ puññakkhettaṃ lokassā’ti');

eveningChant.push('handa mayaṃ saṅghābhigītiṃ karomase');
eveningChant.push('saddhammajo supaṭipatti guṇādiyutto');
eveningChant.push('yo’ṭṭhabbidho ariyapuggala saṅgha seṭṭho');
eveningChant.push('sīlādidhamma pavarāsaya kāya citto');
eveningChant.push('vandām’ahaṃ tam ariyāna gaṇaṃ susuddhaṃ');

eveningChant.push('saṅgho yo sabba pāṇīnaṃ saraṇaṃ khemam uttamaṃ');
eveningChant.push('tatiyānussatiṭṭhānaṃ vandāmi taṃ siren’ahaṃ');
eveningChant.push('saṅghass’āhasmi dāso va saṅgho me sāmi kissaro');
eveningChant.push('saṅgho dukkhassa ghātā ca vidhātā ca hitassa me');
eveningChant.push('saṅghass’āhaṃ niyyādemi sarīrañ jīvitañ cidaṃ');
eveningChant.push('vandanto’haṃ carissāmi saṅghassopaṭipannataṃ');

eveningChant.push('natthi me saraṇaṃ aññaṃ saṅgho me saraṇaṃ varaṃ');
eveningChant.push('etena sacca vajjena vaḍḍheyyaṃ satthu sāsane');
eveningChant.push('saṅghaṃ me vandamānena');
eveningChant.push('yaṃ puññaṃ pasutaṃ idha');

eveningChant.push('sabbepi antarāyā me māhesuṃ tassa tejasā');
eveningChant.push('kāyena vācāya va cetasā vā');
eveningChant.push('saṅghe kukammaṃ pakataṃ mayā yaṃ');
eveningChant.push('saṅgho paṭiggaṇhātu accayantaṃ');
eveningChant.push('kālantare saṃvarituṃ va saṅghe');

eightPreceptsChant.push('mayaṃ bhante tisaraṇena saha aṭṭha sīlāni yācāma\n' +
  'dutiyampi mayaṃ bhante tisaraṇena saha aṭṭha sīlāni yācāma\n' +
  'tatiyampi mayaṃ bhante tisaraṇena saha aṭṭha sīlāni yācāma\n');

eightPreceptsChant.push('namo tassa bhagavato arahato sammāsambuddhassa\n' +
  'namo tassa bhagavato arahato sammāsambuddhassa\n' +
  'namo tassa bhagavato arahato sammāsambuddhassa');

eightPreceptsChant.push('buddhaṃ saraṇaṃ gacchāmi\n' +
  'dhammaṃ saraṇaṃ gacchāmi\n' +
  'saṅghaṃ saraṇaṃ gacchāmi');

eightPreceptsChant.push('dutiyampi buddhaṃ saraṇaṃ gacchāmi\n' +
  'dutiyampi dhammaṃ saraṇaṃ gacchāmi\n' +
  'dutiyampi saṅghaṃ saraṇaṃ gacchāmi');

eightPreceptsChant.push('tatiyampi buddhaṃ saraṇaṃ gacchāmi\n' +
  'tatiyampi dhammaṃ saraṇaṃ gacchāmi\n' +
  'tatiyampi saṅghaṃ saraṇaṃ gacchāmi');

eightPreceptsChant.push('tisaraṇa gamanaṃ niṭṭhitaṃ\n' +
  'āma bhante');

eightPreceptsChant.push('pāṇātipātā veramaṇī sikkhāpadaṃ samādiyāmi\n\n' +
  'adinnādānā veramaṇī sikkhāpadaṃ samādiyāmi\n' +
  'abrahmacariyā veramaṇī sikkhāpadaṃ samādiyāmi\n' +
  'musāvādā veramaṇī sikkhāpadaṃ samādiyāmi');

eightPreceptsChant.push('surāmeraya majja pamādaṭṭhānā veramaṇī sikkhāpadaṃ samādiyāmi\n' +
  'vikālabhojanā veramaṇī sikkhāpadaṃ samādiyāmi\n' +
  'nacca gīta vādita visūkadassanā\n' +
  'mālā gandha vilepana dhāraṇa maṇḍana vibhūsanaṭṭhānā\n' +
  'veramaṇī sikkhāpadaṃ samādiyāmi\n' +
  'uccāsayana mahāsayanā veramaṇī sikkhāpadaṃ samādiyāmi');

eightPreceptsChant.push('imāni aṭṭha sikkhāpadāni samādiyāmi\n' +
  'imāni aṭṭha sikkhāpadāni samādiyāmi\n' +
  'imāni aṭṭha sikkhāpadāni samādiyāmi\n' +
  'imāni aṭṭha sikkhāpadāni samādiyāmi');

eightPreceptsChant.push('imāni aṭṭha sikkhāpadāni\n' +
  'sīlena sugatiṃ yanti\n' +
  'sīlena bhogasampadā\n' +
  'sīlena nibbutiṃ yanti\n' +
  'tasmā sīlaṃ visodhaye');

asubaChant.push('handa mayaṃ dvattiṃsākāra pāṭhaṃ bhaṇāmase\n' +
  'ayaṃ kho me kāyo uddhaṃ pādatalā adho kesamatthakā\n' +
  'tacapariyanto pūro nānappakārassa asucino\n' +
  'atthi imasmiṃ kāye\n' +
  'sādhu, sādhu, sādhu');

asubaChant.push('kesā\n' +
  'lomā\n' +
  'nakhā\n' +
  'dantā\n' +
  'taco\n' +
  'maṃsaṃ\n' +
  'nahārū');

asubaChant.push('aṭṭhī\n' +
  'aṭṭhimiñjaṃ\n' +
  'vakkaṃ\n' +
  'hadayaṃ\n' +
  'yakanaṃ\n' +
  'kilomakaṃ\n' +
  'pihakaṃ');

asubaChant.push('papphāsaṃ\n' +
  'antaṃ\n' +
  'antaguṇaṃ\n' +
  'udariyaṃ\n' +
  'karīsaṃ\n' +
  'pittaṃ\n' +
  'semhaṃ');

asubaChant.push('pubbo\n' +
  'lohitaṃ\n' +
  'sedo\n' +
  'medo\n' +
  'assu\n' +
  'vasā\n');

asubaChant.push('kheḷo\n' +
  'siṅghāṇikā\n' +
  'lasikā\n' +
  'muttaṃ\n' +
  'matthaluṅgan’ti\n');

asubaChant.push('evam ayaṃ me kāyo uddhaṃ pādatalā adho kesamatthakā\n' +
  'tacapariyanto pūro nānappakārassa asucino');

chantingTexts = [...morningChant, ...closingHomage, ...eveningChant, ...eightPreceptsChant, ...asubaChant];
