// Bodies of the news articles that predate the CMS, migrated from the old per-article
// page files (one React component each) into data for the shared article template.
// Text is unchanged apart from removed emoji. Dates follow the news list (news.js).
// Blocks: { type: 'p', text } | { type: 'quote', by, paragraphs }. **bold** is supported.
// Imported only by the article page, so it stays out of the home/list bundles.

export const articles = [
  {
    "slug": "stovykla-2025",
    "date": "2025-06-30",
    "badge": "Stovyklos apžvalga",
    "title": "Dalis FA „Kaunas“ auklėtinių sezoną užbaigė smagioje dienos stovykloje, o dalis turnyruose!",
    "images": [
      "/naujienos/stovykla.jpg",
      "/naujienos/stovykla2.jpg",
      "/naujienos/stovykla3.jpg"
    ],
    "imageAlt": "Stovyklos nuotrauka",
    "blocks": [
      {
        "type": "quote",
        "by": "Trenerių Tomo ir Gabrieliaus komentaras",
        "paragraphs": [
          "„Vaikai ne tik aktyviai sportavo du kartus per dieną, bet ir turiningai leido laiką įvairiose veiklose. Aplankėme kino teatrą, dalyvavome viktorinoje, kūrėme kūrybinėse dirbtuvėse, tyrinėjome Mokslo salą, lankėmės baseine, kur vaikai įgijo saugaus elgesio vandenyje pažymėjimus, išbandėme VR kambario pramogas ir dar daugiau.",
          "Smagiausia matyti spindinčias vaikų akis, jų džiaugsmą, naujas patirtis ir augantį pasitikėjimą savimi. Tai – neįkainojama.“"
        ]
      }
    ]
  },
  {
    "slug": "hegelman-turnyras",
    "date": "2025-06-30",
    "badge": "Hegelman turnyras",
    "title": "2019/20m. auklėtiniai sezoną užbaigė Hegelman turnyre",
    "images": [
      "/naujienos/hegelman.jpg",
      "/naujienos/hegelman2.jpg"
    ],
    "imageAlt": "Hegelman turnyro nuotrauka",
    "blocks": [
      {
        "type": "quote",
        "by": "Treneris Tomas",
        "paragraphs": [
          "„Sėkmingas turnyras mūsų berniukams! Puikiai gynėmės, o su kamuoliu nepriekaištingai varžovus apžaizdėme ir pelnėme įvarčius. Viso turnyro metu išlaikėme aukštą intensyvumą, kas labai džiugina ir motyvuoja ateities iššūkiams.“"
        ]
      }
    ]
  },
  {
    "slug": "summer-victory",
    "date": "2025-06-23",
    "badge": "Summer Victory CUP",
    "title": "Trijų komandų sezonas baigėsi turnyre Garliavoje",
    "images": [
      "/naujienos/summervictory.jpg",
      "/naujienos/summervictory1.jpg",
      "/naujienos/summervictory2.jpg",
      "/naujienos/summervictory3.jpg",
      "/naujienos/summervictory4.jpg"
    ],
    "imageAlt": "Turnyro nuotrauka",
    "blocks": [
      {
        "type": "quote",
        "by": "Trenerio komentaras (2015 m. grupė)",
        "paragraphs": [
          "„Labai džiaugiuosi vaikų nusiteikimu turnyrui – jie buvo labai motyvuoti, kovėsi dėl kiekvieno kamuolio...“"
        ]
      },
      {
        "type": "quote",
        "by": "Trenerio Ernesto komentaras (2017/18 m.)",
        "paragraphs": [
          "„Turnyrą pradėjome pozityviai... žaidėme prieš vyresnius varžovus, tai buvo vertinga patirtis.“"
        ]
      },
      {
        "type": "quote",
        "by": "Trenerio Tomo komentaras (2019/20 m.)",
        "paragraphs": [
          "„Turnyras buvo nelengvas, bet vaikai kovojo iš visų jėgų. Tobuliname 1v1 situacijas.“"
        ]
      }
    ]
  },
  {
    "slug": "dobrecova-cup-2025",
    "date": "2025-08-11",
    "badge": "Dobrecova CUP",
    "title": "Rugpjūčio 8–10 dienomis FA KAUNAS auklėtiniai dalyvavo „Dobrecova CUP“ turnyre Latvijoje.",
    "images": [
      "/naujienos/dobrecova.jpg",
      "/naujienos/dobrecova1.jpg",
      "/naujienos/dobrecova2.jpg",
      "/naujienos/dobrecova3.jpg",
      "/naujienos/dobrecova4.jpg",
      "/naujienos/dobrecova5.jpg"
    ],
    "imageAlt": "Turnyro nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "Rugpjūčio 8–10 dienomis FA KAUNAS auklėtiniai dalyvavo „Dobrecova CUP“ turnyre Latvijoje. 2015 m. gimimo futbolininkai, pasiskirstę į dvi grupes su treneriais Gabrielium ir Marium, varžėsi su dar 46 komandomis iš Latvijos, Estijos ir Lietuvos."
      },
      {
        "type": "p",
        "text": "FA „Kaunas White“ grupė galutinėje lentelėje iš 48 komandų užėmė 32-ąją vietą, o FA „Kaunas Blue“ per plauką liko nuo nugalėtojų pakylos ir tenkinosi 4-ąja vieta."
      },
      {
        "type": "quote",
        "by": "Trenerio Gabrieliaus komentaras",
        "paragraphs": [
          "„Kai prieš keliaujant į šį turnyrą pasakiau, kad mūsų tikslas – jį laimėti, daug kas šypsojosi, net ir patys vaikai nelabai tikėjo tuo, ką kalba treneris. Akademijoje visą dėmesį skiriame futbolininkų ugdymui, o ne rezultatui, bet šį kartą norėjome, kad vaikai patys pajustų ir suprastų, jog jų sunkus darbas treniruotėse ir rungtynėse nėra veltui. Labai gaila berniukų, kad tik per plauką liko nuo nugalėtojų pakylos. Pusfinalyje po baudinių serijos pralaimėjome FC Riga akademijai, o rungtynėse dėl trečios vietos prieš Liepojos futbolininkus, pirmaujant 2:0, leidome varžovams rezultatą išlyginti ir baudinių serijoje vėl buvome silpnesni. Puiki patirtis, aukšto lygio varžovai, baudinių serijos – visa tai išryškina stipriąsias ir silpnąsias sportininkų savybes. Lemiamais momentais berniukai vis dar susiduria su psichologiniais sunkumais, trūksta lyderystės, sportinio pykčio, tam tikro „naglumo“. Tačiau viso turnyro metu matėme, kad kai vyrukai nusiteikę ir demonstruoja tvirtą charakterį, juos įveikti yra be galo sunku, o kartais net beveik neįmanoma. Matau savo auklėtinius kasdien, žinau, kiek mes su treneriais įdedame darbo į jų rengimą, žinau, kaip sunkiai berniukai dirba treniruotėse. Net nėra abejonių, kad rezultatai anksčiau ar vėliau ateis. O dabar, pasisėmę motyvacijos ir naujos patirties, toliau augsime ir tobulėsime. Noriu padėkoti tėveliams, kurie mus išleidžia į keliones užsienyje, palaiko vaikus, padeda už aikštės ribų. Turime pačią šauniausią bendruomenę Lietuvoje. AČIŪ!“"
        ]
      }
    ]
  },
  {
    "slug": "vasaros-stovykla-mragowo-2025",
    "date": "2025-08-04",
    "badge": "Vasaros stovykla Lenkijoje",
    "title": "Sėkminga FA Kaunas vasaros stovykla Lenkijoje: kokybė, darbas ir komandinė dvasia.",
    "images": [
      "/naujienos/mragowo.jpg",
      "/naujienos/mragowo1.jpg",
      "/naujienos/mragowo2.jpg",
      "/naujienos/mragowo3.jpg",
      "/naujienos/mragowo4.jpg",
      "/naujienos/mragowo5.jpg",
      "/naujienos/mragowo6.jpg",
      "/naujienos/mragowo7.jpg",
      "/naujienos/mragowo8.jpg",
      "/naujienos/mragowo9.jpg",
      "/naujienos/mragowo10.jpg",
      "/naujienos/mragowo11.jpg"
    ],
    "imageAlt": "Stovyklos nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "Vos pasibaigus vasaros atostogoms, FA Kaunas 2015 m. Mėlinųjų grupė išvyko į sportinę stovyklą Lenkijoje, Mrągowo mieste. Savaitę trukusi stovykla buvo skirta fiziniam pasirengimui, techninių įgūdžių tobulinimui bei komandos vienybės stiprinimui."
      },
      {
        "type": "quote",
        "by": "Trenerio Gabrieliaus komentaras",
        "paragraphs": [
          "„Po vasaros visi sugrįžta šiek tiek,,apsunkę\"– tai natūralu. Bet jau nuo pirmų dienų matėme, kaip greitai vaikai įeina į ritmą. Dirbome du kartus per dieną, o per savaitę sužaidėme net penkerias kontrolines rungtynes. Progresas – akivaizdus“."
        ]
      },
      {
        "type": "p",
        "text": "Be intensyvių treniruočių, daug dėmesio skirta ir kokybiškam laisvalaikiui. Vaikai žaidė stalo žaidimus, mini golfą, linksminosi ant batutų, maudėsi baseine ir ežere, o svarbiausia – stiprino tarpusavio ryšius, kurie ne mažiau svarbūs aikštelėje nei už jos ribų."
      },
      {
        "type": "p",
        "text": "„Tokios stovyklos prilygsta keliems mėnesiams įprasto darbo Lietuvoje. Per trumpą laiką galime padaryti daug: tiek fiziškai, tiek psichologiškai pasiruošti sezonui, sustiprinti komandą kaip vienetą. Tokių stovyklų norėtųsi kuo daugiau“, – akcentavo treneris."
      },
      {
        "type": "p",
        "text": "Grįžusi komanda tęsia pasiruošimą artėjančiam sezonui Kaune, o jau šį savaitgalį vyks į tarptautinį turnyrą Latvijoje – Dobrecova CUP, kur galės pasitikrinti jėgas prieš stiprias užsienio komandas."
      },
      {
        "type": "p",
        "text": "FA Kaunas vyr. treneris nuoširdžiai dėkoja visiems tėveliams už pasitikėjimą ir suteikiamas galimybes auginti jaunąją futbolo kartą!"
      }
    ]
  },
  {
    "slug": "lff-talentu-centras",
    "date": "2025-09-09",
    "badge": "LFF regioninis talentų centras",
    "title": "Net penki FA KAUNAS auklėtiniai – LFF regioniniame talentų centre!",
    "images": [
      "/naujienos/talentai.jpg"
    ],
    "imageAlt": "LFF talentų centro nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "2015–2016 m. gimimo grupės atrankas įveikę berniukai turės galimybę du kartus per savaitę treniruotis su geriausiais Kauno regiono futbolininkais ir dar sparčiau tobulėti."
      },
      {
        "type": "quote",
        "by": "Trenerio Gabrieliaus komentaras",
        "paragraphs": [
          "„Džiugina toks žaidėjų įvertinimas – tai rodo, kad berniukų pastangos ir požiūris į treniruočių procesą yra teisingi. Žinau, kad turime ir daugiau vaikų, vertų būti šiame projekte. Neabejoju, kad atkakliai dirbdami jie pasieks savo svajones.“"
        ]
      }
    ],
    "description": "2015–2016 m. grupės berniukai įveikė atrankas ir du kartus per savaitę treniruosis su geriausiais Kauno regiono futbolininkais LFF regioniniame talentų centre."
  },
  {
    "slug": "neodenta-2025",
    "date": "2025-09-14",
    "badge": "Neodenta turnyras",
    "title": "Futbolo šventė mūsų komandai – dalyvavome „Neodenta“ turnyre",
    "images": [
      "/naujienos/neodenta.jpg",
      "/naujienos/neodenta1.jpg",
      "/naujienos/neodenta2.jpg",
      "/naujienos/neodenta3.jpg",
      "/naujienos/neodenta4.jpg",
      "/naujienos/neodenta5.jpg"
    ],
    "imageAlt": "Neodenta turnyro nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "2019/20 m. mažiausiųjų „Neodenta“ turnyro rungtynės"
      },
      {
        "type": "p",
        "text": "Trenerio Tomo komentaras:"
      },
      {
        "type": "p",
        "text": "„Šį sekmadienį dalyvavome **„Neodenta“** futbolo turnyre, kuris tapo tikra švente mūsų komandai. Kiekvienas rungtynių momentas buvo pilnas džiaugsmo ir kovos. Svarbiausia – ne tik laimėti, bet ir mėgautis žaidimu bei tobulėti kaip komanda. Esame motyvuoti ir pasiryžę toliau siekti pergalės ir augti tiek aikštėje, tiek už jos ribų.“"
      }
    ]
  },
  {
    "slug": "kaff-prezidento-2025",
    "date": "2025-09-21",
    "badge": "KAFF Prezidento taurė",
    "title": "Rugsėjo 21 d. 2019–20 m. grupė dalyvavo turnyre „KAFF Prezidento taurė“",
    "images": [
      "/naujienos/kaff1.jpg",
      "/naujienos/kaff2.jpg",
      "/naujienos/kaff3.jpg",
      "/naujienos/kaff4.jpg",
      "/naujienos/kaff5.jpg"
    ],
    "imageAlt": "KAFF Prezidento taurės nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "2019/20 m. grupės dalyvavimas turnyre"
      },
      {
        "type": "p",
        "text": "Trenerio Tomo komentaras:"
      },
      {
        "type": "p",
        "text": "„Turnyras pažymėtas geromis nuotaikomis, puikiu oru ir drąsiais debiutais. Turėjome berniukų, kuriems šis turnyras buvo pirmasis ir jie puikiai susitvarkė su šiuo iššūkiu."
      },
      {
        "type": "p",
        "text": "Kaip jau ir įprasta, berniukai buvo kovingi ir drąsūs. Ateityje norime, kad artimose dvikovose mums nereikėtų kovoti su varžovais „per jėgą“, o galėtume juos įveikti dėl aukštesnio meistriškumo. Tuo ir dirbsime toliau!“"
      }
    ]
  },
  {
    "slug": "rudens-taure",
    "date": "2025-09-27",
    "badge": "FM „Ąžuolas“ – „Rudens taurė“",
    "title": "FM „Ąžuolas“ turnyras „Rudens taurė“",
    "images": [
      "/naujienos/rudens.jpg",
      "/naujienos/rudens1.jpg",
      "/naujienos/rudens2.jpg",
      "/naujienos/rudens3.jpg",
      "/naujienos/rudens4.jpg"
    ],
    "imageAlt": "Turnyro nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "Rugsėjo 27 d. vyko FM „Ąžuolas“ futbolo turnyras „Rudens taurė“."
      },
      {
        "type": "p",
        "text": "2015 m. Juodųjų grupė šiame turnyre kovojo iki paskutinės minutės."
      },
      {
        "type": "quote",
        "by": "Trenerio Tomo komentaras",
        "paragraphs": [
          "„Mūsų komandai turnyras nebuvo lengvas, tačiau vaikinai puikiai atsilaikė – parodė charakterį ir kovojo iki paskutinės turnyro sekundės. Manau, kad tokie turnyrai jiems yra labai svarbūs – čia jie susiduria su kitokiais iššūkiais nei treniruotėse. Artimiausiu metu stengsimės kuo daugiau dalyvauti varžybose, semtis patirties ir tobulėti.“"
        ]
      },
      {
        "type": "p",
        "text": "Taip pat 2018 m. grupė grįžo namo be pralaimėjimų!"
      },
      {
        "type": "quote",
        "by": "Trenerio Ernesto komentaras",
        "paragraphs": [
          "„Dar prieš rungtynes su vaikais aptarėme žaidimo planą ir jo nuosekliai laikėmės. Džiaugiuosi, kad gynyboje žaidėme drausmingai – vieni kitiems padėdami ir neleisdami varžovams lengvai pelnyti įvarčių. Kovojome dėl kiekvieno kamuolio su maksimaliu atsidavimu.",
          "Taip pat pademonstravome, kad gebame ne tik gintis, bet ir kurti atakas. Pasinaudodami laisvu žaidėju greitai keitėme žaidimo kryptį iš vieno krašto į kitą, o tai leido pelnyti nemažai įvarčių. Visą turnyrą lydėjo gera nuotaika – vaikai mėgavosi žaidimu ir rodė norą tobulėti.",
          "Toliau treniruotėse nuosekliai dirbsime, kad kiekvienas žaidėjas stiprintų savo individualius futbolo įgūdžius, o komandinis žaidimas taptų dar brandesnis.“"
        ]
      },
      {
        "type": "p",
        "text": "Didelis ačiū tėveliams už jų kantrybę ir nuolatinį palaikymą!"
      }
    ]
  },
  {
    "slug": "zalgiris-futsal-cup",
    "date": "2025-09-28",
    "badge": "Žalgiris Futsal CUP",
    "title": "Žalgiris Futsal CUP turnyras",
    "images": [
      "/naujienos/zalgiris.jpg",
      "/naujienos/zalgiris1.jpg",
      "/naujienos/zalgiris2.jpg",
      "/naujienos/zalgiris3.jpg",
      "/naujienos/zalgiris4.jpg"
    ],
    "imageAlt": "Turnyro nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "Rugsėjo 28 d. vyko „Žalgiris Futsal CUP“ turnyras."
      },
      {
        "type": "quote",
        "by": "Trenerio Luko komentaras",
        "paragraphs": [
          "„Gal po ilgesnio laiko jautėsi žaidybinės praktikos trūkumas. Norėjosi, kad vaikai žaistų nuo pat turnyro pradžios taip, kaip žaidė paskutines dvejas rungtynes. Tačiau yra ir daug pozityvių dalykų – pelnėme daug įvarčių tiek individualiais, tiek komandiniais veiksmais. Pagrindinė problema buvo koncentracijos stoka ir per lengvai dovanojami įvarčiai varžovams. Su vaikinais pasikalbėjome, kad, kaip ir treniruotėse, dažnai prarandame susikaupimą gynyboje. To stengsimės išvengti treniruočių procese – dirbsime, kad kiekvienas rungtynes žaistume nuo pradžios iki galo su didesne motyvacija ir užsidegimu kiekviename aikštės centimetre.“"
        ]
      },
      {
        "type": "quote",
        "by": "Trenerio Tomo komentaras",
        "paragraphs": [
          "„Vaikai gavo daug žaidybinio laiko. Viso turnyro metu komandoje vyravo gera nuotaika, daug bendravome – tai jautėsi ir aikštelėje. Vaikai stengiasi padėti vieni kitiems, žaidžia kietai, bet kartu pagarbiai ir kultūringai elgiasi su varžovais.",
          "Aikštelėje jaunieji sportininkai labai stengėsi – jiems didžiausia pagarba. Taip, yra dalykų, kurie dar nesiseka, darome klaidų, bet vaikai atiduoda viską, ką esame juos išmokę. O kartais – net daugiau. Turime labai gerą kolektyvą. Turime dėl jo pasistengti, duoti vaikams kuo daugiau, ir viskas bus gerai.“"
        ]
      },
      {
        "type": "p",
        "text": "Mažieji – 2019/20 m. grupė – nepraleidžia turnyrų ir taip pat dalyvavo „Žalgiris Futsal Cup“ turnyre."
      }
    ]
  },
  {
    "slug": "balcia-cup-2025",
    "date": "2025-10-06",
    "badge": "„Balcia Cup“ turnyras",
    "title": "Puikus žaidimas ir vienybė aikštėje – „Balcia Cup“ 2019/20m. turnyro akimirkos",
    "images": [
      "/naujienos/balcia.jpg",
      "/naujienos/balcia1.jpg",
      "/naujienos/balcia2.jpg"
    ],
    "imageAlt": "Balcia Cup nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "Puikus žaidimas, daug džiaugsmo ir vienybė aikštėje! 2019/20m. grupės futbolininkai dalyvavo „Balcia Cup“ turnyre, kur pademonstravo gražų komandinį žaidimą, kovingumą ir tikrą futbolo dvasią."
      },
      {
        "type": "quote",
        "by": "Trenerio Tomo komentaras",
        "paragraphs": [
          "„Labai smagiai praleidome sekmadienio rytą. Turnyre pelnėme nemažai įvarčių ir džiaugsmingai juos šventėme. Džiaugiuosi, kad vaikai aikštėje elgiasi kaip tikri futbolininkai – švenčia įvarčius, palaiko vieni kitus. Turime nuostabius vaikus ir labai laukiame kitų turnyrų.“"
        ]
      }
    ],
    "description": "Smagus sekmadienio rytas, daug įvarčių ir gera nuotaika – mūsų 2019/20m. grupės dalyvavimas „Balcia Cup“ turnyre."
  },
  {
    "slug": "sportfan-turnyras",
    "date": "2025-10-12",
    "badge": "Sportfan turnyras",
    "title": "2019/2020 m. grupės „Sportfan“ futbolo turnyras!",
    "images": [
      "/naujienos/sportfan.jpg"
    ],
    "imageAlt": "Sportfan turnyro nuotrauka",
    "blocks": [
      {
        "type": "quote",
        "by": "Trenerio Tomo komentaras",
        "paragraphs": [
          "„Puikiai praleidome sekmadienio pirmąją dienos pusę. Vaikų atsidavimas – puikus. Jie kovoja, stengiasi žaisti protingai, klausosi trenerių patarimų ir, svarbiausia, iš jų mokosi. Tai – itin svarbu. Nuoširdžiai lenkiu galvą prieš tėvelius, kurie taip atsakingai žiūri į viską. Turnyruose dalyvaujame beveik kiekvieną savaitgalį – tai skatina mus visus tobulėti, stengtis ir jūsų nenuvilti.“"
        ]
      }
    ]
  },
  {
    "slug": "kick-off-2025",
    "date": "2025-10-12",
    "badge": "„Kick Off CUP“ turnyras",
    "title": "Aukšto lygio iššūkiai ir didžiulė patirtis – FA KAUNAS U11 komanda „Kick Off CUP“ turnyre Lenkijoje",
    "images": [
      "/naujienos/kickoff1.jpg",
      "/naujienos/kickoff2.jpg",
      "/naujienos/kickoff3.jpg",
      "/naujienos/kickoff4.jpg",
      "/naujienos/kickoff5.jpg"
    ],
    "imageAlt": "Kick Off Cup turnyro nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "Spalio 10–12 dienomis FA KAUNAS U11 komanda dalyvavo „Kick Off CUP“ turnyre Lenkijoje, Sianovo mieste. Per dvi dienas sužaidėme 14 rungtynių su aukščiausio lygio varžovais iš Lenkijos, Anglijos, Švedijos ir Čekijos. Tai buvo aukšto lygio turnyras, puikios gyvenimo sąlygos, stiprūs varžovai, nauji iššūkiai ir milžiniška patirtis mūsų sportininkams."
      },
      {
        "type": "quote",
        "by": "Trenerio Gabrielius komentaras",
        "paragraphs": [
          "„Turnyre netrūko iššūkių, nelepino ir oro sąlygos – sunki aikštė, permirkusi nuo lietaus. Po pirmųjų dviejų rungtynių dėl traumos praradome vieną puolimo lyderių. Tačiau didžiuojuosi savo auklėtiniais, nes nuo pirmųjų žingsnių futbole berniukus mokome ir reikalaujame iš jų gebėjimo žaisti įvairiose pozicijose. Šio turnyro metu vaikai parodė, kad kiekvienas iš jų sugeba atlikti šią užduotį ir nepasimeta net sudėtingose situacijose, gebėdami atlikti savo vaidmenį aikštėje.",
          "Dar kartą įsitikinome, kad, įdedant maksimalias pastangas, galime konkuruoti su aukščiausio lygio varžovais. Labiausiai į akis krinta du dalykai, kuriais atsiliekame nuo Europos elito – fizinės savybės ir komunikacija. Elitinių akademijų sportininkai yra ankstyvesnio brendimo, viską atlieka su lengvumu, be didelių pastangų – jie apdovanoti gamtos, o mums belieka tik dirbti ir kryptingai tobulėti treniruotėse, kad priartėtume prie jų lygio.",
          "Komunikaciją privalome gerinti, ir tam skirsime labai didelį dėmesį treniruočių ir rungtynių metu. „Futbolo šalių“ vaikams tai išmokti yra žymiai lengviau – jie futbolą mato kasdien, seka savo idealus, gyvena futbolo aplinkoje. Mes tokios kultūros neturime, tačiau stengiamės ją kurti ir dedame visas pastangas, kad tiek treniruotėse, tiek po jų vaikai „gyventų futbolu“."
        ]
      },
      {
        "type": "p",
        "text": "Džiugina tai, kad nei vieniems varžovams nenusileidome sprendimų priėmime, susitarimų vykdyme, bendroje fizinėje ištvermėje – vaikai puikiai atlaikė aukštą tempą viso turnyro metu ir daugelyje rungtynių dominavo aikštėje. Noriu padėkoti tėveliams, kurie suteikia vaikams galimybes kaupti tarptautinę patirtį aukščiausio lygio turnyruose. Toliau nuosekliai ir kryptingai dirbsime treniruotėse bei rungtynėse ir lauksime artėjančių iššūkių!“"
      }
    ],
    "description": "FA KAUNAS U11 komanda dalyvavo prestižiniame „Kick Off CUP“ turnyre Sianove, Lenkijoje, susitiko su Europos elito komandomis ir parsivežė neįkainojamos patirties."
  },
  {
    "slug": "kauno-rajono-taure-2025",
    "date": "2025-10-20",
    "badge": "„Kauno rajono taurė“ turnyras",
    "title": "Tobulėjimas su kiekvienu turnyru: 2019/2020 m. grupės pasirodymas „Kauno rajono taurė“",
    "images": [
      "/naujienos/kaunotaure1.jpg",
      "/naujienos/kaunotaure2.jpg"
    ],
    "imageAlt": "Kauno rajono taurė nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "Sekmadienį 2019–2020 m. vaikai dalyvavo futbolo turnyre „Kauno rajono taurė“."
      },
      {
        "type": "quote",
        "by": "Trenerio Tomo komentaras",
        "paragraphs": [
          "„Labiausiai džiugina tai, kad tai, ko mokomės treniruotėse, vaikai pritaiko varžybose. Su kiekvienu turnyru matome jų tobulėjimą. Labai smagu, kad turime nemažai vaikų, kurie patys stengiasi, nori laimėti ir po truputį tampa tikrais futbolininkais.",
          "Tokie vaikai tobulėja daug greičiau – jie yra kantrūs ir vis geriau supranta, kad norint nuolat laimėti, reikia atkakliai dirbti treniruotėse. Tikslas – turėti kuo daugiau tokių vaikų. O viskas prasideda nuo darbo treniruotėse. Tad keliausime ten ir toliau kryptingai dirbsime.“"
        ]
      }
    ],
    "description": "FA KAUNAS 2019/2020 m. grupės futbolininkai demonstravo tobulėjimą ir kovingumą „Kauno rajono taurė“ turnyre. Treneris Tomas džiaugiasi vaikų pastangomis pritaikyti treniruočių žinias."
  },
  {
    "slug": "azuolo-rudens-taure-2025",
    "date": "2025-10-27",
    "badge": "Ąžuolo rudens taurė",
    "title": "Savaitgalinis „Ąžuolo rudens taurės“ turnyras!",
    "images": [
      "/naujienos/azuolo1.jpg",
      "/naujienos/azuolo2.jpg",
      "/naujienos/azuolo3.jpg"
    ],
    "imageAlt": "Turnyro nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "**2018 m. komanda dalyvavo „Ąžuolo“ turnyre.**"
      },
      {
        "type": "quote",
        "by": "Treneris Tomas",
        "paragraphs": [
          "„Prie komandos prisijungė keli 2019 m. gimimo vaikai. Jiems tai buvo pirmieji kartai žaidžiant 5x5 futbolą, tačiau jie visiškai neišsigando – degė noru žaisti ir padėjo komandai. Manau, labai svarbu suteikti tokią progą tobulėti vaikams, kurie kiekvienoje treniruotėje rodo, kad nori ir jau gali žengti žingsnį į priekį, žaisdami su vyresniais. Likusiems vaikams turnyras taip pat buvo sėkmingas. Tikiu, kad kiekvienas išsinešė ką nors naudingo. Visi be išimties labai stengėsi – manau, tai ir yra svarbiausia. Visa kita paliekame treniruotėms.“"
        ]
      },
      {
        "type": "p",
        "text": "**2017/2018 m. komanda – po čempionato į turnyrą!**"
      },
      {
        "type": "quote",
        "by": "Treneris Ernestas",
        "paragraphs": [
          "„Po įtemptų čempionato rungtynių mūsų berniukams pavyko sėkmingai reabilituotis „Ąžuolo rudens taurės“ turnyre. Nors pirmąsias rungtynes pralaimėjome, pakoregavus žaidimo stilių visos likusios dvikovos buvo laimėtos. Smagu matyti, kad komanda vis labiau susižaidžia – žaidėjai vieni kitus labiau palaiko gynyboje, perėmę kamuolį stengiasi jį išlaikyti, o ne tiesiog spirt bet kur. Tai rodo augantį komandinį supratimą ir brandą aikštėje. Turnyras tapo puikia patirtimi visai komandai. Džiaugiamės, kad vaikai klausėsi, stengėsi įgyvendinti užduotis ir turnyrą užbaigė geros nuotaikos bei šiek tiek paaugę – tiek kaip žaidėjai, tiek kaip komandos nariai.“"
        ]
      },
      {
        "type": "p",
        "text": "**Nuoširdžiai dėkojame tėveliams** už didžiulį palaikymą ir buvimą kartu!"
      }
    ]
  },
  {
    "slug": "resort-niegocin-cup-2025",
    "date": "2025-11-30",
    "badge": "2017 m. komandos išvyka į Lenkiją",
    "title": "FA KAUNAS 2017 m. komandos turnyras „Resort Niegocin Cup\" Lenkijoje",
    "images": [
      "/naujienos/lenkija1.jpg",
      "/naujienos/lenkija2.jpg",
      "/naujienos/lenkija3.jpg",
      "/naujienos/lenkija4.jpg",
      "/naujienos/lenkija5.jpg",
      "/naujienos/lenkija6.jpg"
    ],
    "imageAlt": "",
    "blocks": [
      {
        "type": "p",
        "text": "2025-11-28/30"
      },
      {
        "type": "p",
        "text": "FA Kaunas 2017 m. komanda savaitgalį dalyvavo turnyre Lenkijoje, kuriame buvo sužaista nemažai rungtynių su kaimyninės Lenkijos varžovais"
      },
      {
        "type": "quote",
        "by": "Treneris Ernestas Bernota apie turnyrą",
        "paragraphs": [
          "„2017 Komandos pirmoji išvyka į Lenkiją, sudalyvavome 3 dienų futbolo turnyre\"Resort Niegocin Cup\", žaidėme ne tik futbolą, bet turėjome ir puikų laisvalaikį, kurio metu gerinome tarpusavio ryšį per įvairiausius žaidimus, taip pat džiaugiuosi berniukų drausme viso turnyro metu Turėjome įtemptą rungtynių tvarkaraštį, sužaidėme 12 rungtynių po 20 minučių, kurios pareikalavo labai daug jėgų, nes žaidėme didesnėje aikštelėje nei esam įpratę. Turėjome ir gerų rungtynių, ir prastesnių, po kurių berniukams kilo daug įvairių emocijų, bendrai esu patenkintas vaikinų kovingumu aikštelėje, pradėjome rodyti charakterį ir daugiau komunikuoti tarpusavyje, kas yra didelė pagalba komandoje žaidimo metu. Grįžome namo su dideliu bagažu patirties, dar drąsesni, savarankiškesni ir stipresni!\""
        ]
      },
      {
        "type": "p",
        "text": "Rungtynių MVP apdovanojimus gavo **Radvilas Juodis, Matas Petkevičius, Arijus Ročka, Marko Bjelan** Taip pat naudingiausiu žaidėju komandoje išrinktas **Arijus Ročka**"
      },
      {
        "type": "p",
        "text": "Labai didelis **AČIŪ tėveliams** už pasitikėjimą ir galingą palaikymą tribūnose!"
      }
    ]
  },
  {
    "slug": "neodenta-blitz-cup-2025",
    "date": "2025-11-30",
    "badge": "2019/2020 m. komandos turnyras",
    "title": "FA Kaunas 2019/2020 m. komandos Neodenta „Blitz Cup\" turnyre",
    "images": [
      "/naujienos/blitz1.jpg",
      "/naujienos/blitz2.jpg",
      "/naujienos/blitz3.jpg",
      "/naujienos/blitz4.jpg",
      "/naujienos/blitz5.jpg",
      "/naujienos/blitz6.jpg"
    ],
    "imageAlt": "",
    "blocks": [
      {
        "type": "p",
        "text": "2025-11-29/30"
      },
      {
        "type": "p",
        "text": "Lapkričio 29–30 dienomis FA Kaunas 2019/2020 metų gimimo komandos dalyvavo Neodenta „Blitz Cup\" turnyre. Mažieji mūsų akademijos auklėtiniai sužaidė didelį kiekį rungtynių, pasisėmė puikių emocijų ir, svarbiausia, įgavo daug žaidybinės patirties"
      },
      {
        "type": "p",
        "text": "Apie turnyrą ir įspūdžius pasakoja akademijos treneriai **Lukas Sipavičius** ir **Tomas Macelis**:"
      },
      {
        "type": "p",
        "text": "**Tomas Macelis:** „Turnyras nebuvo lengvas. Žaidėme 4x4, ką darome retai. Taip pat susitikome su vyresniais ir fiziškai stipresniais varžovais. Tačiau džiaugiuosi, kad mūsų vaikai neišsigando ir kovojo kaip ir pridera. Jaučiame, kad turime gerinti techniką. Vaikai judrūs, greiti, tačiau silpnai valdome kamuolį. Ties tuo ir dirbsime.\""
      },
      {
        "type": "p",
        "text": "**Lukas Sipavičius:** „Džiugina, kad visi vaikai turi daug noro ir energijos, veržiasi į aikštelę žaisti, drąsiai žaidžia vienas prieš vieną, naudoja tai, ką mokomės treniruotėse. Daugumai vaikinų tai buvo pirmas turnyras ant tokios dangos, tad komandinio žaidimo nebuvo daug, tačiau individualūs vaikų sugebėjimai tikrai džiugino. Dėjome dar vieną žingsnį į priekį savo futbolo kelionėje ir su kiekvienu turnyru vis labiau stengsimės tobulėti.\""
      }
    ]
  },
  {
    "slug": "remigijus-mikalainis-2025",
    "date": "2025-12-02",
    "badge": "Naujas treneris akademijoje",
    "title": "Prie FA Kaunas prisijungė vartininkų treneris Remigijus Mikalainis",
    "images": [
      "/naujienos/remigijus1.jpg"
    ],
    "imageAlt": "",
    "blocks": [
      {
        "type": "p",
        "text": "Džiaugiamės galėdami pranešti, kad prie mūsų akademijos trenerių kolektyvo prisijungė **Remigijus Mikalainis**! Treneris akademijoje rūpinsis vartininkų įgūdžių tobulinimu"
      },
      {
        "type": "p",
        "text": "Remigijus turi sukaupęs nemažą patirtį jaunųjų futbolininkų ir ypač vartininkų ugdyme. Savo futbolininko karjeroje Remigijus atstovavo tokius klubus kaip **FK Sūduva**, **Hedensted IF (Danija)**, **FC Hegelmann**."
      },
      {
        "type": "p",
        "text": "Didžiuojamės galimybe suteikti savo akademijos vartininkams specializuotas vartininkų treniruotes, taip augindami dar profesionalesnę futbolininkų kartą"
      }
    ]
  },
  {
    "slug": "kaunas-football-fest-2025",
    "date": "2025-12-06",
    "badge": "Tarptautinis turnyras „Kaunas Football Fest“",
    "title": "Dviguba FA Kaunas 2015 m. komandos sėkmė turnyre „Kaunas Football Fest“",
    "images": [
      "/naujienos/kaunasfest1.jpg",
      "/naujienos/kaunasfest2.jpg",
      "/naujienos/kaunasfest3.jpg",
      "/naujienos/kaunasfest4.jpg",
      "/naujienos/kaunasfest5.jpg",
      "/naujienos/kaunasfest6.jpg",
      "/naujienos/kaunasfest7.jpg",
      "/naujienos/kaunasfest8.jpg",
      "/naujienos/kaunasfest9.jpg",
      "/naujienos/kaunasfest10.jpg"
    ],
    "imageAlt": "Kaunas Football Fest nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "Praėjusį savaitgalį FA Kaunas 2015 m. komanda dalyvavo viename didžiausių tarptautinių futbolo turnyrų Lietuvoje – **„Kaunas Football Fest“**, kuriame rungtyniavo komandos iš Lietuvos, Latvijos, Estijos, Lenkijos, Ukrainos ir net Gruzijos."
      },
      {
        "type": "p",
        "text": "**FA Kaunas Blue** komanda po puikaus pasirodymo turnyre ir įnirtingos kovos finale tapo turnyro **vicečempionais**!"
      },
      {
        "type": "p",
        "text": "**FA Kaunas White** komanda turnyro „konferencijų lygoje“ iškovojo **1-ąją vietą**, o bendroje įskaitoje turnyre užėmė 17-tą vietą."
      },
      {
        "type": "p",
        "text": "Geriausiais komandų žaidėjais buvo išrinkti **Matas Ruočkus** ir **Jonas Vaivilavičius**."
      },
      {
        "type": "quote",
        "by": "Trenerio Gabrieliaus Zagursko komentaras",
        "paragraphs": [
          "„Esu patenkintas auklėtinių pasirodymu. Visi 20 vaikų parodė, kad gali konkuruoti prieš bet kuriuos varžovus. Džiugina vaikų darbas gynyboje – praleidome labai mažai įvarčių, tai sunkaus darbo treniruotėse vaisiai.",
          "Galbūt negalime pasigirti kažkokiu išskirtiniu talentu, bet noras, maksimalios pastangos, azartas ir kovingumas šiame turnyre buvo aukščiausio lygio. Matau savo auklėtinius beveik kasdien, žinau, kaip sunkiai jie dirba treniruotėse, kiek daug darbo įdedam visi kartu, todėl džiugu, kad berniukams šį kartą pavyko pralaužti 4 vietos „prakeiksmą“ ir tapti turnyro vicečempionais.",
          "Toliau disciplinuotai ir kryptingai dirbsime treniruotėse ir tikiu, kad šių vaikų laukia šviesi ateitis. Labai noriu padėkoti tėveliams, kurie kaip ir visuomet mus nuostabiai palaikė – jūs esate mūsų papildomas žaidėjas aikštėje. AČIŪ!“"
        ]
      },
      {
        "type": "quote",
        "by": "Trenerio Remigijaus Mikalainio komentaras",
        "paragraphs": [
          "„Tai pirmas toks turnyras, į kurį vykau su šia komanda. Vaikai parodė ir įrodė, kad turi noro ir galimybių kovoti su absoliučiai visais. Smagu matyti, jog laikomės savo plano ir taisyklių – tai parodo mūsų disciplinos lygį.",
          "Taip pat džiaugiuosi už mūsų vartininkus, kurie daugybę kartų gelbėjo mus nuo pavojingų atakų ir smūgių. Turime dar daug darbo, bet judame labai teisinga kryptimi.“"
        ]
      },
      {
        "type": "quote",
        "by": "Trenerio Tomo Macelio komentaras",
        "paragraphs": [
          "„Komanda turėjo daug gerų momentų. Mūsų sportininkai labai stengėsi – kai kuriuos pirmą kartą mačiau taip pavargusius. Deja, iš to didelio noro darėme nemažai klaidų. Kažkur pritrūko sėkmės, ir kalbant apie rezultatą, manau, kad jis neatspindi mūsų žaidimo.",
          "Labiausiai džiaugiuosi vaikų atsidavimu. Linkiu ir toliau rodyti tokį norą ir tokias pastangas varžybose bei kiekvienoje treniruotėje.“"
        ]
      },
      {
        "type": "p",
        "text": "**FA Kaunas** dėkoja visiems sergantiems už mus varžybose ir turnyruose. AČIŪ JUMS!"
      }
    ],
    "description": "FA Kaunas 2015 m. komanda puikiai pasirodė „Kaunas Football Fest“: Blue tapo turnyro vicečempionais, o White laimėjo „konferencijų lygą“. Treneriai džiaugiasi vaikų darbu ir atsidavimu."
  },
  {
    "slug": "kids-cup-vilnius-2025",
    "date": "2025-12-07",
    "badge": "„Kids Cup“ turnyras",
    "title": "Mūsų akademijos 2019-20m. gim. grupė dalyvavo Kids Cup turnyre Vilniuje",
    "images": [
      "/naujienos/kidscup1.jpg"
    ],
    "imageAlt": "Kids Cup turnyro nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "Gruodžio 7d. vieni jauniausių mūsų akademijos futbolininkų sėkmingai sužaidė su komandomis iš visos Lietuvos ir pasisėmė puikios patirties"
      },
      {
        "type": "quote",
        "by": "Mintimis apie turnyrą dalinasi treneris Tomas Macelis",
        "paragraphs": [
          "„Labai džiaugiuosi vaikų pastangomis. Mačiau, kad paskutinėse rungtynėse vaikai jau buvo pavargę, bet žaidė su gera energija iki pat pabaigos.",
          "Taip pat labai džiaugiuosi, kad vaikai patobulėjo žaidime vienas prieš vieną. Daro vis daugiau triukų, staigiau apsivarinėja varžovus.",
          "Visada stengiamės žaisti kietai. Matau, kad paskutiniu metu esame šiek tiek mažiau kibūs gynyboje. Tą bandysime pagerinti treniruotėse ir stengsimės sukelti kuo daugiau nepatogumų varžovams puolant.",
          "O daugiausiai dėmesio turime skirti intensyvumui treniruotėse. Turime didinti tempą, priversti vaikus greičiau mąstyti, reaguoti ir atiduoti visas jėgas.“"
        ]
      }
    ],
    "description": "FA KAUNAS 2019–20 m. gim. grupė Gruodžio 7 d. dalyvavo „Kids Cup“ turnyre Vilniuje, sužaidė su komandomis iš visos Lietuvos ir pasisėmė vertingos patirties. Trenerio Tomo Macelio įžvalgos po turnyro."
  },
  {
    "slug": "kaunas-football-fest-2017",
    "date": "2025-12-19",
    "badge": "Turnyras „Kaunas Football Fest“",
    "title": "FA Kaunas 2017 m. komandos patirtis turnyre „Kaunas Football Fest“",
    "images": [
      "/naujienos/kff2017_1.jpg",
      "/naujienos/kff2017_2.jpg",
      "/naujienos/kff2017_3.jpg",
      "/naujienos/kff2017_4.jpg"
    ],
    "imageAlt": "Kaunas Football Fest nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "**FA Kaunas 2017 m. gimimo** komanda dalyvavo dviejų dienų turnyre **„Kaunas Football Fest“**."
      },
      {
        "type": "p",
        "text": "Daug rungtynių, daug įvarčių ir didelis bagažas patirties įgautas per savaitgalį."
      },
      {
        "type": "quote",
        "by": "Trenerio Ernesto Bernotos komentaras apie turnyrą",
        "paragraphs": [
          "Pirmą dieną turėjome 8 rungtynes ir sekėsi ne taip gerai kaip norėjome — išėjome į aikštelę kažko išsigandę, bandėme žaisti futbolą stovėdami vietoje, sprendimai irgi nebuvo patys geriausi. Nemažai turėjome ką aptarti su berniukais.",
          "Antrąją dieną žaidėme 4 rungtynes visai kitaip nusiteikę — visi stengėsi pagerinti savo žaidimą, buvom pasiruošę ir vaizdas aikštelėje iškarto buvo žymiai geresnis.",
          "Komandos naudingiausiu žaidėju išrinktas vartininkas **Matas Petkevičius**.",
          "Tėveliai verti atskiro padėkojimo už išskirtinį garsų palaikymą — vaikams tai labai svarbu. Ačiū Jums!"
        ]
      }
    ],
    "description": "FA Kaunas 2017 m. gimimo komanda dviejų dienų turnyre „Kaunas Football Fest“ sužaidė daug rungtynių, pelnė įvarčių ir sukaupė vertingos patirties. Trenerio Ernesto Bernotos komentaras ir naudingiausias žaidėjas – Matas Petkevičius."
  },
  {
    "slug": "friendly-match-ibra",
    "date": "2025-12-20",
    "badge": "Draugiškos rungtynės su IBRA Football Academy",
    "title": "Mažieji FA Kaunas auklėtiniai sužaidė draugiškas rungtynes su IBRA Football Academy",
    "images": [
      "/naujienos/ibra1.jpg",
      "/naujienos/ibra2.jpg",
      "/naujienos/ibra3.jpg",
      "/naujienos/ibra4.jpg"
    ],
    "imageAlt": "FA Kaunas draugiškos rungtynės nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "Mažieji **FA Kaunas** auklėtiniai su tikslu įgauti daugiau patirties sužaidė draugiškas rungtynes su **IBRA Football Academy** komanda."
      },
      {
        "type": "quote",
        "by": "Trenerio Tomo Macelio komentaras",
        "paragraphs": [
          "Žaisti 4 prieš 4 tampa vis lengviau. Vaikai pradeda suprasti ką kiekvienas turi daryti aikštėje ir bando įvykdyti paskirtas užduotis jiems.",
          "Su kiekvienomis rungtynėmis vis geriau žaidžiame, įmušame vis daugiau įvarčių. Labai džiaugiuosi, kad vaikai nori mokytis ir tobulėti. Tai yra svarbiausia."
        ]
      }
    ],
    "description": "Mažieji FA Kaunas auklėtiniai sužaidė draugiškas rungtynes su IBRA Football Academy komanda, siekdami įgauti daugiau patirties. Trenerio Tomo Macelio komentaras apie progresą žaidžiant 4 prieš 4."
  },
  {
    "slug": "azuolo-turnyras-2015",
    "date": "2025-12-21",
    "badge": "Turnyras „Ąžuolas“",
    "title": "FA Kaunas 2015 m. komanda dalyvavo „Ąžuolo“ turnyre",
    "images": [
      "/naujienos/azuolas1.jpg",
      "/naujienos/azuolas2.jpg"
    ],
    "imageAlt": "Ąžuolo turnyro nuotrauka",
    "blocks": [
      {
        "type": "p",
        "text": "Trenerio **Tomo Macelio** treniruojama **2015 metų gimimo** komanda dalyvavo **„Ąžuolo“ turnyre**."
      },
      {
        "type": "quote",
        "by": "Trenerio komentaras",
        "paragraphs": [
          "Komandos tikslas turnyre buvo išlikti susikaupus ir susikoncentravus viso turnyro metu ir viską daryti maksimaliomis pastangomis. Manau, kad vaikams tai neblogai sekėsi.",
          "Žinoma, tikiu, kad visada galima pasirodyti geriau, tačiau šios dienos turnyru esu patenkintas. Matome vietas, kurias turime tobulinti su vaikinais, taigi dirbsime ties jomis.",
          "Tokie turnyrai yra puiki praktika tiek vaikams, tiek mums, treneriams — išbandyti savo jėgas bei įžvelgti, kurios vaikinų savybės pasireiškia stipriausiai."
        ]
      }
    ],
    "description": "Trenerio Tomo Macelio treniruojama FA Kaunas 2015 m. gimimo komanda dalyvavo „Ąžuolo“ turnyre. Trenerio komentaras apie komandos tikslus, susikaupimą ir tobulėjimo kryptis."
  }
];
