export let chantingTexts: string[];
export let morningChant: string[];
export let eveningChant: string[];
export const eightPreceptsChant: string[] = [];
export const asubaChant: string[] = [];


// from https://cdn.amaravati.org/wp content/uploads/2014/09/30/Chanting Book Vol 1 Web.pdf
const dedicationOfOfferings: string[] = [];

dedicationOfOfferings[0] = 'Yo so bhagavā arahaṃ sammāsambuddho\n'
  + 'Svākkhāto yena bhagavatā dhammo\n'
  + 'Supaṭipanno yassa bhagavato sāvakasaṅgho\n'
  + 'Tam mayaṃ bhagavantaṃ sadhammaṃ sasaṅghaṃ\n'
  + 'Imehi sakkārehi yathārahaṃ āropitehi abhipūjayāma';

dedicationOfOfferings[1] = 'Sādhu no bhante bhagavā sucira parinibbutopi\n'
  + 'Pacchimā janatānukampa mānasā\n'
  + 'Ime sakkāre duggata paṇṇākāra bhūte paṭiggaṇhātu\n'
  + 'Amhākaṃ dīgharattaṃ hitāya sukhāya';

dedicationOfOfferings[2] = 'Arahaṃ sammāsambuddho bhagavā\n'
  + 'Buddhaṃ bhagavantaṃ abhivādemi\n'
  + 'Svākkhāto bhagavatā dhammo\n'
  + 'Dhammaṃ namassāmi\n'
  + 'Supaṭipanno bhagavato sāvakasaṅgho\n'
  + 'Saṅghaṃ namāmi';

const preliminaryHomage = 'Handa mayaṃ buddhassa bhagavato\n' +
  'pubbabhāga namakāraṃ karomase\n' +
  'Namo tassa bhagavato arahato sammāsambuddhassa\n' +
  'Namo tassa bhagavato arahato sammāsambuddhassa\n' +
  'Namo tassa bhagavato arahato sammāsambuddhassa';

morningChant = [...dedicationOfOfferings, preliminaryHomage];
eveningChant = [...dedicationOfOfferings, preliminaryHomage];

morningChant.push('Handa mayaṃ buddhābhitthutiṃ karomase\n' +
  'Yo so tathāgato arahaṃ sammāsambuddho\n' +
  'Vijjācaraṇa sampanno\n' +
  'Sugato\n' +
  'Lokavidū\n' +
  'Anuttaro purisadamma sārathi\n' +
  'Satthā deva manussānaṃ\n' +
  'Buddho bhagavā');

morningChant.push('Yo imaṃ lokaṃ sadevakaṃ samārakaṃ sabrahmakaṃ\n' +
  'Sassamaṇa brāhmaṇiṃ pajaṃ sadeva manussaṃ sayaṃ abhiññā sacchikatvā pavedesi\n' +
  'Yo dhammaṃ desesi ādi kalyāṇaṃ majjhe kalyāṇaṃ pariyosāna kalyāṇaṃ\n' +
  'Sātthaṃ sabyañjanaṃ kevala paripuṇṇaṃ parisuddhaṃ\n' +
  'brahma cariyaṃ pakāsesi\n' +
  'Tam ahaṃ bhagavantaṃ abhipūjayāmi tam ahaṃ bhagavantaṃ sirasā namāmi');

morningChant.push('Handa mayaṃ dhammābhitthutiṃ karomase\n'
  + 'Yo so svākkhāto bhagavatā dhammo\n'
  + 'Sandiṭṭhiko\n'
  + 'Akāliko\n'
  + 'Ehipassiko\n'
  + 'Opanayiko\n'
  + 'Paccattaṃ veditabbo viññūhi\n'
  + 'Tam ahaṃ dhammaṃ abhipūjayāmi tam ahaṃ dhammaṃ sirasā namāmi');

morningChant.push('Handa mayaṃ saṅghābhitthutiṃ karomase\n' +
  'Yo so supaṭipanno bhagavato sāvakasaṅgho\n' +
  'Ujupaṭipanno bhagavato sāvakasaṅgho\n' +
  'Ñāyapaṭipanno bhagavato sāvakasaṅgho\n' +
  'Sāmīcipaṭipanno bhagavato sāvakasaṅgho');

morningChant.push('Yadidaṃ cattāri purisayugāni aṭṭha purisapuggalā\n' +
  'Esa bhagavato sāvakasaṅgho\n' +
  'Āhuneyyo\n' +
  'Pāhuneyyo\n' +
  'Dakkhiṇeyyo\n' +
  'Añjali karaṇīyo\n' +
  'Anuttaraṃ puññakkhettaṃ lokassa\n' +
  'Tam ahaṃ saṅghaṃ abhipūjayāmi tam ahaṃ saṅghaṃ sirasā namāmi');

morningChant.push('Handa mayaṃ ratanattaya paṇāma gāthāyo c’eva\n' +
  'saṃvega parikittana pāṭhañca bhaṇāmase\n' +
  'Buddho susuddho karuṇā mahaṇṇavo\n' +
  'Yo’ccanta suddhabbara ñāṇa locano\n' +
  'Lokassa pāpūpakilesa ghātako\n' +
  'Vandāmi buddhaṃ aham ādarena taṃ');

morningChant.push('Dhammo padīpo viya tassa satthuno\n' +
  'Yo magga pākāmata bheda bhinnako\n' +
  'Lokuttaro yo ca tad attha dīpano\n' +
  'Vandāmi dhammaṃ aham ādarena taṃ');

morningChant.push('Saṅgho sukhettābhyati khetta saññito\n' +
  'Yo diṭṭha santo sugatānubodhako\n' +
  'Lolappahīno ariyo sumedhaso\n' +
  'Vandāmi saṅghaṃ aham ādarena taṃ\n' +
  'Iccevam ekantabhipūja neyyakaṃ vatthuttayaṃ vandayatābhisaṅkhataṃ');

morningChant.push('Puññaṃ mayā yaṃ mama sabbupaddavā mā hontu ve tassa pabhāva siddhiyā\n' +
  'Idha tathāgato loke uppanno arahaṃ sammāsambuddho\n' +
  'Dhammo ca desito niyyāniko upasamiko parinibbāniko sambodhagāmī sugatappavedito');

morningChant.push('Mayan taṃ dhammaṃ sutvā evaṃ jānāma\n' +
  'Jātipi dukkhā\n' +
  'Jarāpi dukkhā\n' +
  'Maraṇampi dukkhaṃ\n' +
  'Soka parideva dukkha domanass’upāyāsāpi dukkhā\n' +
  'Appiyehi sampayogo dukkho\n' +
  'Piyehi vippayogo dukkho\n' +
  'Yamp’icchaṃ na labhati tampi dukkhaṃ');

morningChant.push('Saṅkhittena pañcupādānakkhandhā dukkhā\n' +
  'Seyyathīdaṃ\n' +
  'Rūpūpādānakkhandho\n' +
  'Vedanūpādānakkhandho\n' +
  'Saññūpādānakkhandho\n' +
  'Saṅkhārūpādānakkhandho\n' +
  'Viññāṇūpādānakkhandho');

morningChant.push('Yesaṃ pariññāya\n' +
  'Dharamāno so bhagavā evaṃ bahulaṃ sāvake vineti\n' +
  'Evaṃ bhāgā ca panassa bhagavato sāvakesu anusāsanī bahulā pavattati\n' +
  'Rūpaṃ aniccaṃ\n' +
  'Vedanā aniccā\n' +
  'Saññā aniccā\n' +
  'Saṅkhārā aniccā\n' +
  'Viññāṇaṃ aniccaṃ');

morningChant.push('Rūpaṃ anattā\n' +
  'Vedanā anattā\n' +
  'Saññā anattā\n' +
  'Saṅkhārā anattā\n' +
  'Viññāṇaṃ anattā');

morningChant.push('Sabbe saṅkhārā aniccā\n' +
  'Sabbe dhammā anattā’ti\n' +
  'Te mayaṃ otiṇṇāmha jātiyā jarā maraṇena\n' +
  'Sokehi paridevehi dukkhehi domanassehi upāyāsehi\n' +
  'Dukkhotiṇṇā dukkha paretā\n' +
  'Appeva nāmimassa kevalassa dukkha kkhandhassa antakiriyā paññāyethā’ti');

morningChant.push('Cira parinibbutampi taṃ bhagavantaṃ uddissa arahantaṃ sammāsambuddhaṃ\n' +
  'Saddhā agārasmā anagāriyaṃ pabbajitā\n' +
  'Tasmiṃ bhagavati brahma cariyaṃ carāma\n' +
  'Bhikkhūnaṃ sikkhāsājīva samāpannā\n' +
  'Taṃ no brahma cariyaṃ imassa kevalassa dukkha kkhandhassa\n' +
  'antakiriyāya saṃvattatu');

morningChant.push('Cira parinibbutampi taṃ bhagavantaṃ saraṇaṃ gatā\n' +
  'Dhammañca saṅghañca\n' +
  'Tassa bhagavato sāsanaṃ yathā sati yathā balaṃ manasikaroma anupaṭipajjāma\n' +
  'Sā sā no paṭipatti\n' +
  'Imassa kevalassa dukkha kkhandhassa antakiriyāya saṃvattatu');

const closingHomage = 'Arahaṃ sammāsambuddho bhagavā\n' +
  'Buddhaṃ bhagavantaṃ abhivādemi\n' +
  'Svākkhāto bhagavatā dhammo\n' +
  'Dhammaṃ namassāmi\n' +
  'Supaṭipanno bhagavato sāvakasaṅgho\n' +
  'Saṅghaṃ namāmi';

eveningChant.push('Handa mayaṃ buddhānussatinayaṃ karomase\n' +
  'Taṃ kho pana bhagavantaṃ evaṃ kalyāṇo kittisaddo abbhuggato\n' +
  'Itipi so bhagavā arahaṃ sammāsambuddho\n' +
  'Vijjācaraṇa sampanno sugato lokavidū\n' +
  'Anuttaro purisadamma sārathi satthā deva manussānaṃ buddho bhagavā’ti');

eveningChant.push('Buddh’vārahanta varatādiguṇābhiyutto\n' +
  'Suddhābhiñāṇa karuṇāhi samāgatatto\n' +
  'Bodhesi yo sujanataṃ kamalaṃ va sūro\n' +
  'Vandām’ahaṃ tam araṇaṃ sirasā jinendaṃ\n' +
  'Buddho yo sabba pāṇīnaṃ saraṇaṃ khemam uttamaṃ');

eveningChant.push('Paṭhamānussatiṭṭhānaṃ vandāmi taṃ siren’ahaṃ\n' +
  'Buddhassāh’asmi dāso va buddho me sāmi kissaro\n' +
  'Buddho dukkhassa ghātā ca vidhātā ca hitassa me\n' +
  'Buddhass’āhaṃ niyyādemi sarīrañ jīvitañ cidaṃ\n' +
  'Vandanto’haṃ carissāmi buddhass’eva subodhitaṃ');

eveningChant.push('Natthi me saraṇaṃ aññaṃ buddho me saraṇaṃ varaṃ\n' +
  'Etena sacca vajjena vaḍḍheyyaṃ satthu sāsane\n' +
  'Buddhaṃ me vandamānena\n' +
  'yaṃ puññaṃ pasutaṃ idha\n' +
  'Sabbepi antarāyā me māhesuṃ tassa tejasā');

eveningChant.push('Kāyena vācāya va cetasā vā\n' +
  'Buddhe kukammaṃ pakataṃ mayā yaṃ\n' +
  'Buddho paṭiggaṇhātu accayantaṃ\n' +
  'Kālantare saṃvarituṃ va buddhe');

eveningChant.push('Handa mayaṃ dhammānussatinayaṃ karomase\n' +
  'Svākkhāto bhagavatā dhammo\n' +
  'Sandiṭṭhiko akāliko ehipassiko\n' +
  'Opanayiko paccattaṃ veditabbo viññūhī’ti');

eveningChant.push('Handa mayaṃ dhammābhigītiṃ karomase\n' +
  'Svākkhātat’ādiguṇa yoga vasena seyyo\n' +
  'Yo magga pāka pariyatti vimokkha bhedo\n' +
  'Dhammo kuloka patanā tada dhāri dhārī\n' +
  'Vandām’ahaṃ tama haraṃ vara dhammam etaṃ');

eveningChant.push('Dhammo yo sabba pāṇīnaṃ saraṇaṃ khemam uttamaṃ\n' +
  'Dutiyānussatiṭṭhānaṃ vandāmi taṃ siren’ahaṃ\n' +
  'Dhammassāh’asmi dāso va dhammo me sāmi kissaro\n' +
  'Dhammo dukkhassa ghātā ca vidhātā ca hitassa me\n' +
  'Dhammass’āhaṃ niyyādemi sarīrañ jīvitañ cidaṃ');

eveningChant.push('Vandantohaṃ carissāmi dhammass’eva sudhammataṃ\n' +
  'Natthi me saraṇaṃ aññaṃ dhammo me saraṇaṃ varaṃ\n' +
  'Etena sacca vajjena vaḍḍheyyaṃ satthu sāsane\n' +
  'Dhammaṃ me vandamānena\n' +
  'yaṃ puññaṃ pasutaṃ idha');

eveningChant.push('Sabbepi antarāyā me māhesuṃ tassa tejasā\n' +
  'Kāyena vācāya va cetasā vā\n' +
  'Dhamme kukammaṃ pakataṃ mayā yaṃ\n' +
  'Dhammo paṭiggaṇhātu accayantaṃ\n' +
  'Kālantare saṃvarituṃ va dhamme');

eveningChant.push('Handa mayaṃ saṅghānussatinayaṃ karomase\n' +
  'Supaṭipanno bhagavato sāvakasaṅgho\n' +
  'Ujupaṭipanno bhagavato sāvakasaṅgho\n' +
  'Ñāyapaṭipanno bhagavato sāvakasaṅgho\n' +
  'Sāmīcipaṭipanno bhagavato sāvakasaṅgho');

eveningChant.push('Yadidaṃ cattāri purisayugāni aṭṭha purisapuggalā\n' +
  'Esa bhagavato sāvakasaṅgho\n' +
  'Āhuneyyo pāhuneyyo dakkhiṇeyyo añjali karaṇīyo\n' +
  'Anuttaraṃ puññakkhettaṃ lokassā’ti');

eveningChant.push('Handa mayaṃ saṅghābhigītiṃ karomase\n' +
  'Saddhammajo supaṭipatti guṇādiyutto\n' +
  'Yo’ṭṭhabbidho ariyapuggala saṅgha seṭṭho\n' +
  'Sīlādidhamma pavarāsaya kāya citto\n' +
  'Vandām’ahaṃ tam ariyāna gaṇaṃ susuddhaṃ');

eveningChant.push('Saṅgho yo sabba pāṇīnaṃ saraṇaṃ khemam uttamaṃ\n' +
  'Tatiyānussatiṭṭhānaṃ vandāmi taṃ siren’ahaṃ' +
  'Saṅghass’āhasmi dāso va saṅgho me sāmi kissaro\n' +
  'Saṅgho dukkhassa ghātā ca vidhātā ca hitassa me\n' +
  'Saṅghass’āhaṃ niyyādemi sarīrañ jīvitañ cidaṃ\n' +
  'Vandanto’haṃ carissāmi saṅghassopaṭipannataṃ');

eveningChant.push('Natthi me saraṇaṃ aññaṃ saṅgho me saraṇaṃ varaṃ\n' +
  'Etena sacca vajjena vaḍḍheyyaṃ satthu sāsane\n' +
  'Saṅghaṃ me vandamānena\n' +
  'yaṃ puññaṃ pasutaṃ idha');

eveningChant.push('Sabbepi antarāyā me māhesuṃ tassa tejasā\n' +
  'Kāyena vācāya va cetasā vā\n' +
  'Saṅghe kukammaṃ pakataṃ mayā yaṃ\n' +
  'Saṅgho paṭiggaṇhātu accayantaṃ\n' +
  'Kālantare saṃvarituṃ va saṅghe');

eightPreceptsChant.push('Mayaṃ bhante tisaraṇena saha aṭṭha sīlāni yācāma\n' +
  'Dutiyampi mayaṃ bhante tisaraṇena saha aṭṭha sīlāni yācāma\n' +
  'Tatiyampi mayaṃ bhante tisaraṇena saha aṭṭha sīlāni yācāma\n');

eightPreceptsChant.push('Namo tassa bhagavato arahato sammāsambuddhassa\n' +
  'Namo tassa bhagavato arahato sammāsambuddhassa\n' +
  'Namo tassa bhagavato arahato sammāsambuddhassa');

eightPreceptsChant.push('Buddhaṃ saraṇaṃ gacchāmi\n' +
  'Dhammaṃ saraṇaṃ gacchāmi\n' +
  'Saṅghaṃ saraṇaṃ gacchāmi');

eightPreceptsChant.push('Dutiyampi buddhaṃ saraṇaṃ gacchāmi\n' +
  'Dutiyampi dhammaṃ saraṇaṃ gacchāmi\n' +
  'Dutiyampi saṅghaṃ saraṇaṃ gacchāmi');

eightPreceptsChant.push('Tatiyampi buddhaṃ saraṇaṃ gacchāmi\n' +
  'Tatiyampi dhammaṃ saraṇaṃ gacchāmi\n' +
  'Tatiyampi saṅghaṃ saraṇaṃ gacchāmi');

eightPreceptsChant.push('Tisaraṇa gamanaṃ niṭṭhitaṃ\n' +
  'Āma bhante');

eightPreceptsChant.push(' Pāṇātipātā veramaṇī sikkhāpadaṃ samādiyāmi\n\n' +
  'Adinnādānā veramaṇī sikkhāpadaṃ samādiyāmi\n' +
  'Abrahmacariyā veramaṇī sikkhāpadaṃ samādiyāmi\n' +
  'Musāvādā veramaṇī sikkhāpadaṃ samādiyāmi');

eightPreceptsChant.push('Surāmeraya majja pamādaṭṭhānā veramaṇī sikkhāpadaṃ samādiyāmi\n' +
  'Vikālabhojanā veramaṇī sikkhāpadaṃ samādiyāmi\n' +
  'Nacca gīta vādita visūkadassanā\n' +
  'mālā gandha vilepana dhāraṇa maṇḍana vibhūsanaṭṭhānā\n' +
  'veramaṇī sikkhāpadaṃ samādiyāmi\n' +
  'Uccāsayana mahāsayanā veramaṇī sikkhāpadaṃ samādiyāmi');

eightPreceptsChant.push('Imāni aṭṭha sikkhāpadāni samādiyāmi\n' +
  'Imāni aṭṭha sikkhāpadāni samādiyāmi\n' +
  'Imāni aṭṭha sikkhāpadāni samādiyāmi\n' +
  'Imāni aṭṭha sikkhāpadāni samādiyāmi');

eightPreceptsChant.push('Imāni aṭṭha sikkhāpadāni\n' +
  'Sīlena sugatiṃ yanti\n' +
  'Sīlena bhogasampadā\n' +
  'Sīlena nibbutiṃ yanti\n' +
  'Tasmā sīlaṃ visodhaye');

asubaChant.push('Handa mayaṃ dvattiṃsākāra pāṭhaṃ bhaṇāmase\n' +
  'Ayaṃ kho me kāyo uddhaṃ pādatalā adho kesamatthakā\n' +
  'tacapariyanto pūro nānappakārassa asucino\n' +
  'Atthi imasmiṃ kāye\n' +
  'Sādhu, sādhu, sādhu');

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

asubaChant.push('Evam ayaṃ me kāyo uddhaṃ pādatalā adho kesamatthakā\n' +
  'tacapariyanto pūro nānappakārassa asucino');

chantingTexts = [...morningChant, closingHomage, ...eveningChant, ...eightPreceptsChant, ...asubaChant];
