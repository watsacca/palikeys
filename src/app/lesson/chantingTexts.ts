export let chantingTexts: string[];
export let morningChant: string[];
export let eveningChant: string[];
export const eightPreceptsChant: string[] = [];
export const asubaChant: string[] = [];


// from https://cdn.amaravati.org/wp content/uploads/2014/09/30/Chanting Book Vol 1 Web.pdf
const dedicationOfOfferings: string[] = [];

dedicationOfOfferings[0] = 'yo so bhagavā arahaṃ sammāsambuddho\n'
+ 'svākkhāto yena bhagavatā dhammo\n'
+ 'supaṭipanno yassa bhagavato sāvakasaṅgho\n'
+ 'tam mayaṃ bhagavantaṃ sadhammaṃ sasaṅghaṃ\n'
+ 'imehi sakkārehi yathārahaṃ āropitehi abhipūjayāma';

dedicationOfOfferings[1] = 'sādhu no bhante bhagavā sucira parinibbutopi\n'
  + 'pacchimā janatānukampa mānasā\n'
  + 'ime sakkāre duggata paṇṇākāra bhūte paṭiggaṇhātu\n'
  + 'amhākaṃ dīgharattaṃ hitāya sukhāya';

dedicationOfOfferings[2] = 'arahaṃ sammāsambuddho bhagavā\n'
  + 'buddhaṃ bhagavantaṃ abhivādemi\n'
  + 'svākkhāto bhagavatā dhammo\n'
  + 'dhammaṃ namassāmi\n'
  + 'supaṭipanno bhagavato sāvakasaṅgho\n'
  + 'saṅghaṃ namāmi';

const preliminaryHomage = 'handa mayaṃ buddhassa bhagavato\n' +
  'pubbabhāga namakāraṃ karomase\n' +
  'namo tassa bhagavato arahato sammāsambuddhassa\n' +
  'namo tassa bhagavato arahato sammāsambuddhassa\n' +
  'namo tassa bhagavato arahato sammāsambuddhassa';

morningChant = [...dedicationOfOfferings, preliminaryHomage];
eveningChant = [...dedicationOfOfferings, preliminaryHomage];

morningChant.push('handa mayaṃ buddhābhitthutiṃ karomase\n' +
  'yo so tathāgato arahaṃ sammāsambuddho\n' +
  'vijjācaraṇa sampanno\n' +
  'sugato\n' +
  'lokavidū\n' +
  'anuttaro purisadamma sārathi\n' +
  'satthā deva manussānaṃ\n' +
  'buddho bhagavā');

morningChant.push('yo imaṃ lokaṃ sadevakaṃ samārakaṃ sabrahmakaṃ\n' +
  'sassamaṇa brāhmaṇiṃ pajaṃ sadeva manussaṃ sayaṃ abhiññā sacchikatvā pavedesi\n' +
  'yo dhammaṃ desesi ādi kalyāṇaṃ majjhe kalyāṇaṃ pariyosāna kalyāṇaṃ\n' +
  'sātthaṃ sabyañjanaṃ kevala paripuṇṇaṃ parisuddhaṃ\n' +
  'brahma cariyaṃ pakāsesi\n' +
  'tam ahaṃ bhagavantaṃ abhipūjayāmi tam ahaṃ bhagavantaṃ sirasā namāmi');

morningChant.push('handa mayaṃ dhammābhitthutiṃ karomase\n'
  + 'yo so svākkhāto bhagavatā dhammo\n'
  + 'sandiṭṭhiko\n'
  + 'akāliko\n'
  + 'ehipassiko\n'
  + 'opanayiko\n'
  + 'paccattaṃ veditabbo viññūhi\n'
  + 'tam ahaṃ dhammaṃ abhipūjayāmi tam ahaṃ dhammaṃ sirasā namāmi');

morningChant.push('handa mayaṃ saṅghābhitthutiṃ karomase\n' +
  'yo so supaṭipanno bhagavato sāvakasaṅgho\n' +
  'ujupaṭipanno bhagavato sāvakasaṅgho\n' +
  'ñāyapaṭipanno bhagavato sāvakasaṅgho\n' +
  'sāmīcipaṭipanno bhagavato sāvakasaṅgho');

morningChant.push('yadidaṃ cattāri purisayugāni aṭṭha purisapuggalā\n' +
  'esa bhagavato sāvakasaṅgho\n' +
  'āhuneyyo\n' +
  'pāhuneyyo\n' +
  'dakkhiṇeyyo\n' +
  'añjali karaṇīyo\n' +
  'anuttaraṃ puññakkhettaṃ lokassa\n' +
  'tam ahaṃ saṅghaṃ abhipūjayāmi tam ahaṃ saṅghaṃ sirasā namāmi');

morningChant.push('handa mayaṃ ratanattaya paṇāma gāthāyo c’eva\n' +
  'saṃvega parikittana pāṭhañca bhaṇāmase\n' +
  'buddho susuddho karuṇā mahaṇṇavo\n' +
  'yo’ccanta suddhabbara ñāṇa locano\n' +
  'lokassa pāpūpakilesa ghātako\n' +
  'vandāmi buddhaṃ aham ādarena taṃ');

morningChant.push('dhammo padīpo viya tassa satthuno\n' +
  'yo magga pākāmata bheda bhinnako\n' +
  'lokuttaro yo ca tad attha dīpano\n' +
  'vandāmi dhammaṃ aham ādarena taṃ');

morningChant.push('saṅgho sukhettābhyati khetta saññito\n' +
  'yo diṭṭha santo sugatānubodhako\n' +
  'lolappahīno ariyo sumedhaso\n' +
  'vandāmi saṅghaṃ aham ādarena taṃ\n' +
  'iccevam ekantabhipūja neyyakaṃ vatthuttayaṃ vandayatābhisaṅkhataṃ');

morningChant.push('puññaṃ mayā yaṃ mama sabbupaddavā mā hontu ve tassa pabhāva siddhiyā\n' +
  'idha tathāgato loke uppanno arahaṃ sammāsambuddho\n' +
  'dhammo ca desito niyyāniko upasamiko parinibbāniko sambodhagāmī sugatappavedito');

morningChant.push('mayan taṃ dhammaṃ sutvā evaṃ jānāma\n' +
  'jātipi dukkhā\n' +
  'jarāpi dukkhā\n' +
  'maraṇampi dukkhaṃ\n' +
  'soka parideva dukkha domanass’upāyāsāpi dukkhā\n' +
  'appiyehi sampayogo dukkho\n' +
  'piyehi vippayogo dukkho\n' +
  'yamp’icchaṃ na labhati tampi dukkhaṃ');

morningChant.push('saṅkhittena pañcupādānakkhandhā dukkhā\n' +
  'seyyathīdaṃ\n' +
  'rūpūpādānakkhandho\n' +
  'vedanūpādānakkhandho\n' +
  'saññūpādānakkhandho\n' +
  'saṅkhārūpādānakkhandho\n' +
  'viññāṇūpādānakkhandho');

morningChant.push('yesaṃ pariññāya\n' +
  'dharamāno so bhagavā evaṃ bahulaṃ sāvake vineti\n' +
  'evaṃ bhāgā ca panassa bhagavato sāvakesu anusāsanī bahulā pavattati\n' +
  'rūpaṃ aniccaṃ\n' +
  'vedanā aniccā\n' +
  'saññā aniccā\n' +
  'saṅkhārā aniccā\n' +
  'viññāṇaṃ aniccaṃ');

morningChant.push('rūpaṃ anattā\n' +
  'vedanā anattā\n' +
  'saññā anattā\n' +
  'saṅkhārā anattā\n' +
  'viññāṇaṃ anattā');

morningChant.push('sabbe saṅkhārā aniccā\n' +
  'sabbe dhammā anattā’ti\n' +
  'te mayaṃ otiṇṇāmha jātiyā jarā maraṇena\n' +
  'sokehi paridevehi dukkhehi domanassehi upāyāsehi\n' +
  'dukkhotiṇṇā dukkha paretā\n' +
  'appeva nāmimassa kevalassa dukkha kkhandhassa antakiriyā paññāyethā’ti');

morningChant.push('cira parinibbutampi taṃ bhagavantaṃ uddissa arahantaṃ sammāsambuddhaṃ\n' +
  'saddhā agārasmā anagāriyaṃ pabbajitā\n' +
  'tasmiṃ bhagavati brahma cariyaṃ carāma\n' +
  'bhikkhūnaṃ sikkhāsājīva samāpannā\n' +
  'taṃ no brahma cariyaṃ imassa kevalassa dukkha kkhandhassa\n' +
  'antakiriyāya saṃvattatu');

morningChant.push('cira parinibbutampi taṃ bhagavantaṃ saraṇaṃ gatā\n' +
  'dhammañca saṅghañca\n' +
  'tassa bhagavato sāsanaṃ yathā sati yathā balaṃ manasikaroma anupaṭipajjāma\n' +
  'sā sā no paṭipatti\n' +
  'imassa kevalassa dukkha kkhandhassa antakiriyāya saṃvattatu');

const closingHomage = 'arahaṃ sammāsambuddho bhagavā\n' +
  'buddhaṃ bhagavantaṃ abhivādemi\n' +
  'svākkhāto bhagavatā dhammo\n' +
  'dhammaṃ namassāmi\n' +
  'supaṭipanno bhagavato sāvakasaṅgho\n' +
  'saṅghaṃ namāmi';

eveningChant.push('handa mayaṃ buddhānussatinayaṃ karomase\n' +
  'taṃ kho pana bhagavantaṃ evaṃ kalyāṇo kittisaddo abbhuggato\n' +
  'itipi so bhagavā arahaṃ sammāsambuddho\n' +
  'vijjācaraṇa sampanno sugato lokavidū\n' +
  'anuttaro purisadamma sārathi satthā deva manussānaṃ buddho bhagavā’ti');

eveningChant.push('buddh’vārahanta varatādiguṇābhiyutto\n' +
  'suddhābhiñāṇa karuṇāhi samāgatatto\n' +
  'bodhesi yo sujanataṃ kamalaṃ va sūro\n' +
  'vandām’ahaṃ tam araṇaṃ sirasā jinendaṃ\n' +
  'buddho yo sabba pāṇīnaṃ saraṇaṃ khemam uttamaṃ');

eveningChant.push('paṭhamānussatiṭṭhānaṃ vandāmi taṃ siren’ahaṃ\n' +
  'buddhassāh’asmi dāso va buddho me sāmi kissaro\n' +
  'buddho dukkhassa ghātā ca vidhātā ca hitassa me\n' +
  'buddhass’āhaṃ niyyādemi sarīrañ jīvitañ cidaṃ\n' +
  'vandanto’haṃ carissāmi buddhass’eva subodhitaṃ');

eveningChant.push('natthi me saraṇaṃ aññaṃ buddho me saraṇaṃ varaṃ\n' +
  'etena sacca vajjena vaḍḍheyyaṃ satthu sāsane\n' +
  'buddhaṃ me vandamānena\n' +
  'yaṃ puññaṃ pasutaṃ idha\n' +
  'sabbepi antarāyā me māhesuṃ tassa tejasā');

eveningChant.push('kāyena vācāya va cetasā vā\n' +
  'buddhe kukammaṃ pakataṃ mayā yaṃ\n' +
  'buddho paṭiggaṇhātu accayantaṃ\n' +
  'kālantare saṃvarituṃ va buddhe');

eveningChant.push('handa mayaṃ dhammānussatinayaṃ karomase\n' +
  'svākkhāto bhagavatā dhammo\n' +
  'sandiṭṭhiko akāliko ehipassiko\n' +
  'opanayiko paccattaṃ veditabbo viññūhī’ti');

eveningChant.push('handa mayaṃ dhammābhigītiṃ karomase\n' +
  'svākkhātat’ādiguṇa yoga vasena seyyo\n' +
  'yo magga pāka pariyatti vimokkha bhedo\n' +
  'dhammo kuloka patanā tada dhāri dhārī\n' +
  'vandām’ahaṃ tama haraṃ vara dhammam etaṃ');

eveningChant.push('dhammo yo sabba pāṇīnaṃ saraṇaṃ khemam uttamaṃ\n' +
  'dutiyānussatiṭṭhānaṃ vandāmi taṃ siren’ahaṃ\n' +
  'dhammassāh’asmi dāso va dhammo me sāmi kissaro\n' +
  'dhammo dukkhassa ghātā ca vidhātā ca hitassa me\n' +
  'dhammass’āhaṃ niyyādemi sarīrañ jīvitañ cidaṃ');

eveningChant.push('vandantohaṃ carissāmi dhammass’eva sudhammataṃ\n' +
  'natthi me saraṇaṃ aññaṃ dhammo me saraṇaṃ varaṃ\n' +
  'etena sacca vajjena vaḍḍheyyaṃ satthu sāsane\n' +
  'dhammaṃ me vandamānena\n' +
  'yaṃ puññaṃ pasutaṃ idha');

eveningChant.push('sabbepi antarāyā me māhesuṃ tassa tejasā\n' +
  'kāyena vācāya va cetasā vā\n' +
  'dhamme kukammaṃ pakataṃ mayā yaṃ\n' +
  'dhammo paṭiggaṇhātu accayantaṃ\n' +
  'kālantare saṃvarituṃ va dhamme');

eveningChant.push('handa mayaṃ saṅghānussatinayaṃ karomase\n' +
  'supaṭipanno bhagavato sāvakasaṅgho\n' +
  'ujupaṭipanno bhagavato sāvakasaṅgho\n' +
  'ñāyapaṭipanno bhagavato sāvakasaṅgho\n' +
  'sāmīcipaṭipanno bhagavato sāvakasaṅgho');

eveningChant.push('yadidaṃ cattāri purisayugāni aṭṭha purisapuggalā\n' +
  'esa bhagavato sāvakasaṅgho\n' +
  'āhuneyyo pāhuneyyo dakkhiṇeyyo añjali karaṇīyo\n' +
  'anuttaraṃ puññakkhettaṃ lokassā’ti');

eveningChant.push('handa mayaṃ saṅghābhigītiṃ karomase\n' +
  'saddhammajo supaṭipatti guṇādiyutto\n' +
  'yo’ṭṭhabbidho ariyapuggala saṅgha seṭṭho\n' +
  'sīlādidhamma pavarāsaya kāya citto\n' +
  'vandām’ahaṃ tam ariyāna gaṇaṃ susuddhaṃ');

eveningChant.push('saṅgho yo sabba pāṇīnaṃ saraṇaṃ khemam uttamaṃ\n' +
  'tatiyānussatiṭṭhānaṃ vandāmi taṃ siren’ahaṃ' +
  'saṅghass’āhasmi dāso va saṅgho me sāmi kissaro\n' +
  'saṅgho dukkhassa ghātā ca vidhātā ca hitassa me\n' +
  'saṅghass’āhaṃ niyyādemi sarīrañ jīvitañ cidaṃ\n' +
  'vandanto’haṃ carissāmi saṅghassopaṭipannataṃ');

eveningChant.push('natthi me saraṇaṃ aññaṃ saṅgho me saraṇaṃ varaṃ\n' +
  'etena sacca vajjena vaḍḍheyyaṃ satthu sāsane\n' +
  'saṅghaṃ me vandamānena\n' +
  'yaṃ puññaṃ pasutaṃ idha');

eveningChant.push('sabbepi antarāyā me māhesuṃ tassa tejasā\n' +
  'kāyena vācāya va cetasā vā\n' +
  'saṅghe kukammaṃ pakataṃ mayā yaṃ\n' +
  'saṅgho paṭiggaṇhātu accayantaṃ\n' +
  'kālantare saṃvarituṃ va saṅghe');

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

chantingTexts = [...morningChant, closingHomage, ...eveningChant, ...eightPreceptsChant, ...asubaChant];
