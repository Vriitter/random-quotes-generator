const quotes = [
   {
     "text": "Что разум человека может постигнуть и во что он может поверить, того он способен достичь",
     "author": "Наполеон Хилл, журналист и писатель"
   },
   {
     "text": "Стремитесь не к успеху, а к ценностям, которые он дает​",
     "author": "Альберт Эйнштейн"
   },
   {
     "text": "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других",
     "author": "Флоренс Найтингейл"
   },
   {
     "text": "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр",
     "author": "Майкл Джордан"
   },
   {
     "text": "Сложнее всего начать действовать, все остальное зависит только от упорства",
     "author": "Амелия Эрхарт"
   },
   {
     "text": "Надо любить жизнь больше, чем смысл жизни",
     "author": "Федор Достоевский"
   },
   {
     "text": "Жизнь - это то, что с тобой происходит, пока ты строишь планы",
     "author": "Джон Леннон"
   },
   {
     "text": "Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно",
     "author": "Альберт Эйнштейн"
   },
   {
     "text": "Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали",
     "author": "Марк Твен"
   },
   {
     "text": "Начинать всегда стоит с того, что сеет сомнения",
     "author": "Борис Стругацкий"
   },
   {
     "text": "Настоящая ответственность бывает только личной",
     "author": "Фазиль Искандер"
   },
   {
     "text": "Неосмысленная жизнь не стоит того, чтобы жить",
     "author": "Сократ"
   },
   {
     "text": "80% успеха - это появиться в нужном месте в нужное время",
     "author": "Вуди Аллен"
   },
   {
     "text": "Ваше время ограничено, не тратьте его, живя чужой жизнью",
     "author": "Стив Джобс"
   },
   {
     "text": "Победа - это еще не все, все - это постоянное желание побеждать",
     "author": "Винс Ломбарди, тренер по американскому футболу"
   },
   {
     "text": "Наука — это организованные знания, мудрость — это организованная жизнь",
     "author": "Иммануил Кант"
   },
   {
     "text": "В моем словаре нет слова «невозможно»",
     "author": "Наполеон Бонапарт"
   },
   {
     "text": "Вы никогда не пересечете океан, если не наберетесь мужества потерять берег из виду",
     "author": "Христофор Колумб"
   },
   {
     "text": "Свобода ничего не стоит, если она не включает в себя свободу ошибаться",
     "author": "Махатма Ганди"
   },
   {
     "text": "Либо вы управляете вашим днем, либо день управляет вами",
     "author": "Джим Рон, оратор и бизнес-тренер"
   },
   {
     "text": "Если вы думаете, что на что-то способны, вы правы; если думаете, что у вас ничего не получится - вы тоже правы",
     "author": "Генри Форд"
   },
   {
     "text": "Два самых важных дня в твоей жизни: день, когда ты появился на свет, и день, когда понял, зачем",
     "author": "Марк Твен"
   },
   {
     "text": "Начинайте делать все, что вы можете сделать – и даже то, о чем можете хотя бы мечтать",
     "author": "Иоганн Вольфганг Гете"
   },
   {
     "text": "Лучшая месть – огромный успех",
     "author": "Фрэнк Синатра"
   },
   {
     "text": "Зачастую говорят, что мотивации хватает ненадолго",
     "author": "Зиг Зиглар, писатель, бизнесмен и консультант по маркетингу"
   },
   {
     "text": "Слабые люди всю жизнь стараются быть не хуже других",
     "author": "Борис Акунин"
   },
   {
     "text": "Все дело в мыслях",
     "author": "Лев Толстой"
   },
   {
     "text": "Есть только один способ избежать критики: ничего не делайте, ничего не говорите и будьте никем",
     "author": "Аристотель"
   },
   {
     "text": "Человек, которым вам суждено стать – это только тот человек, которым вы сами решите стать",
     "author": "Ральф Уолдо Эмерсон, эссеист, поэт и философ"
   },
   {
     "text": "Идите уверенно по направлению к мечте",
     "author": "Генри Дэвид Торо, писатель, мыслитель, натуралист"
   },
   {
     "text": "Надеюсь, что в конце своих дней, когда я предстану перед Богом, у меня не останется ни капли таланта, чтобы я могла сказать ему: “Я использовала все, что ты дал мне”",
     "author": "Эрма Бомбек, писатель, журналист"
   },
   {
     "text": "Лучше быть уверенным в хорошем результате, чем надеяться на отличный",
     "author": "Уоррен Баффет"
   },
   {
     "text": "Некоторые вещи могут завладеть вашим вниманием, но сосредоточьтесь лучше на тех, что завладевают вашим сердцем",
     "author": "Индийская поговорка"
   },
   {
     "text": "Стоит только поверить, что вы можете – и вы уже на полпути к цели",
     "author": "Теодор Рузвельт"
   },
   {
     "text": "Не стоит винить ребенка за то, что он боится темноты",
     "author": "Платон"
   },
   {
     "text": "Научитесь говорить “Я не знаю”, и это уже будет прогресс",
     "author": "Моисей Маймонид, еврейский философ и богослов"
   },
   {
     "text": "Начните оттуда, где вы сейчас находитесь",
     "author": "Артур Эш, теннисист"
   },
   {
     "text": "Когда мне было 5 лет, мама всегда говорила, что главное в жизни – счастье",
     "author": "Джон Леннон"
   },
   {
     "text": "Упади семь раз и восемь раз поднимись",
     "author": "Японская поговорка"
   },
   {
     "text": "Когда закрывается одна дверь к счастью, тут же открывается другая",
     "author": "Элен Келлер, писательница, лектор, политическая активистка"
   },
   {
     "text": "У всего есть своя красота, но не каждый может ее увидеть",
     "author": "Конфуций"
   },
   {
     "text": "Как прекрасно, что не нужно ждать ни минуты, чтобы начать делать мир лучше",
     "author": "Анна Франк"
   },
   {
     "text": "Когда я освобождаюсь от того, кто я есть, я становлюсь тем, кем я могу быть",
     "author": "Лао Цзы"
   },
   {
     "text": "Счастье – это не нечто готовое",
     "author": "Далай Лама"
   },
   {
     "text": "Если вам предлагают место в ракетоносителе, не спрашивайте, что за место! Просто займите его",
     "author": "Шерил Сэндберг, операционный директор Facebook"
   },
   {
     "text": "Сначала определитесь со своим идеалом: поставьте цель",
     "author": "Аристотель"
   },
   {
     "text": "Если нет ветра, беритесь за вёсла",
     "author": "Латинская поговорка"
   },
   {
     "text": "Всегда опирайтесь на мысль о том, что ваше собственное решение добиться успеха намного важнее всего другого",
     "author": "Авраам Линкольн"
   },
   {
     "text": "Успех — это способность идти от поражения к поражению, не теряя оптимизма",
     "author": "Уинстон Черчилль"
   },
   {
     "text": "Они спрашивают: «Как ты можешь управиться со всеми делами за пятнадцать минут?» Я отвечаю: «Это просто",
     "author": "Ричард Брэнсон, британский предприниматель, основатель корпорации Virgin"
   },
   {
     "text": "Каждый хочет изменить человечество, но никто не задумывается о том, как изменить себя",
     "author": "Лев Толстой"
   },
   {
     "text": "Важно верить, что талант нам даётся не просто так – и что любой ценой его нужно для чего-то использовать",
     "author": "Мари Кюри"
   },
   {
     "text": "Если внутренний голос говорит вам, что вы не можете рисовать – рисуйте как можно больше, тогда этот голос затихнет",
     "author": "Винсент Ван Гог"
   },
   {
     "text": "Определенность цели - отправная точка всех достижений",
     "author": "Уильям Клемент Стоун, писатель и бизнесмен"
   },
   {
     "text": "Мы становимся тем, о чем мы думаем",
     "author": "Эрл Найтингейл, радиоведущий"
   },
   {
     "text": "Я не жертва обстоятельств, я - результат моих решений",
     "author": "Стивен Кови, консультант и преподаватель по организационному управлению"
   },
   {
     "text": "Лучшее время, чтобы посадить дерево, было 20 лет назад",
     "author": "Китайская пословица"
   },
   {
     "text": "Все дети - художники",
     "author": "Пабло Пикассо"
   },
   {
     "text": "Я был поражен тем, как важно предпринимать действия",
     "author": "Леонардо да Винчи"
   },
   {
     "text": "Что такое деньги? Человек успешен, если утром он просыпается, вечером возвращается в постель, а в перерыве делает то, что ему нравится",
     "author": "Боб Дилан"
   },
   {
     "text": "Я не провалил тест",
     "author": "Бенджамин Франклин"
   },
   {
     "text": "Поражение – не поражение, если только вы не признаете его таковым в своем сознании",
     "author": "Брюс Ли"
   },
   {
     "text": "Неудача – это просто возможность начать снова, но уже более мудро",
     "author": "Генри Форд"
   },
   {
     "text": "Я уверен: нельзя позволять, чтобы тебя остановило убогое словцо «нельзя»",
     "author": "Ричард Брэнсон"
   },
   {
     "text": "Никогда не делает ошибок только тот, кто не пробует ничего нового",
     "author": "Альберт Эйнштейн"
   },
   {
     "text": "Ты становишься тем, во что веришь",
     "author": "Опра Уинфри, телеведущая"
   },
   {
     "text": "Счастье не в том, чтобы делать всегда, что хочешь, а в том, чтобы всегда хотеть того, что делаешь",
     "author": "Лев Толстой"
   },
   {
     "text": "Я лучше умру от страсти, чем от скуки",
     "author": "Винсент ван Гог"
   },
   {
     "text": "Быстрее всего учишься в трех случаях — до 7 лет, на тренингах, и когда жизнь загнала тебя в угол",
     "author": "Стивен Кови"
   },
   {
     "text": "Люди забудут, что ты говорил, забудут, что ты делал, но никогда не забудут, что ты заставил их почувствовать",
     "author": "Майя Энджелоу, писательница и поэтесса"
   },
   {
     "text": "Наше сознание - это все",
     "author": "Будда"
   },
   {
     "text": "Если ты хочешь построить корабль, не надо созывать людей, планировать, делить работу, доставать инструменты",
     "author": "Антуан де Сент-Экзюпери"
   },
   {
     "text": "Никогда не думайте, что вы уже все знаете",
     "author": "Иван Павлов, ученый-физиолог"
   },
   {
     "text": "Не столь важно, как медленно ты идешь, как то, как долго ты идешь, не останавливаясь",
     "author": "Конфуций"
   },
   {
     "text": "Если вы думаете о том, что имеете в жизни, вы всегда сможете иметь больше",
     "author": "Опра Уинфри"
   },
   {
     "text": "Как можно быстрее превращайте ваши масштабные мысли в масштабные действия",
     "author": "Дональд Трамп"
   },
   {
     "text": "Чтобы вести людей за собой, иди за ними",
     "author": "Лао Цзы"
   },
   {
     "text": "Запомните, что не достичь успеха – иногда тоже большая удача",
     "author": "Далай Лама"
   },
   {
     "text": "Всегда выбирайте самый трудный путь - на нем вы не встретите конкурентов",
     "author": "Шарль де Голль"
   },
   {
     "text": "Одна законченная результативная задача стоит полусотни полузаконченных задач",
     "author": "Малкольм Форбс"
   },
   {
     "text": "Наша жизнь начинает подходить к концу, когда мы перестаём говорить о действительно важных вещах",
     "author": "Мартин Лютер Кинг-младший"
   },
   {
     "text": "Беда не приходит одна, но и удача тоже",
     "author": "Ромен Роллан, писатель"
   },
   {
     "text": "Всякая мысль подобна тесту, стоит помять ее хорошенько — все из нее сделаешь",
     "author": "Иван Тургенев"
   },
   {
     "text": "Делай все, что можешь, там, где ты находишься, используя все, что имеешь",
     "author": "Теодор Рузвельт"
   },
   {
     "text": "Запомните, никто не может заставить вас чувствовать себя неполноценным без вашего на то согласия",
     "author": "Элеонор Рузвельт"
   },
   {
     "text": "Мир делится на два класса — одни веруют в невероятное, другие совершают невозможное",
     "author": "Оскар Уайлд"
   },
   {
     "text": "Единственное счастье в жизни — это постоянное стремление вперед",
     "author": "Эмиль Золя"
   },
   {
     "text": "Выживает не самый сильный, а самый восприимчивый к переменам",
     "author": "Чарльз Дарвин"
   },
   {
     "text": "Ты можешь сказать, что у тебя плохая генетика, плохой обмен веществ, а можешь просто поднять свою задницу с дивана и начать работать над собой, задаться целью и верить в себя",
     "author": "Арнольд Шварцнеггер"
   },
   {
     "text": "Ни разу не упасть — не самая большая заслуга в жизни",
     "author": "Нельсон Мандела"
   },
   {
     "text": "Вопрос не в том, кто мне разрешит, а в том, кто сможет мне запретить",
     "author": "Айн Рэнд"
   },
   {
     "text": "Когда кажется, что весь мир настроен против вас, вспомните, что самолет взлетает не по ветру, а против него",
     "author": "Генри Форд"
   },
   {
     "text": "Жизнь меряется не тем, сколько в ней лет, а тем, сколько в этих годах настоящей жизни",
     "author": "Авраам Линкольн"
   },
   {
     "text": "Приносить пользу миру — это единственный способ стать счастливым",
     "author": "Ханс Кристиан Андерсен"
   },
   {
     "text": "Либо напиши что-нибудь стоящее, либо делай что-нибудь, о чем стоит написать",
     "author": "Бенджамин Франклин"
   },
   {
     "text": "Единственный способ сделать что-то очень хорошо – любить то, что ты делаешь",
     "author": "Стив Джобс"
   },
   {
     "text": "Мудрый человек требует всего только от себя, ничтожный же человек требует всего от других",
     "author": "Лев Толстой"
   },
   {
     "text": "Велики те, кто видит, что миром правят мысли",
     "author": "Ральф Эмерсон"
   },
   {
     "text": "Перед тем как карабкаться на лестницу успеха, убедитесь, что она прислонена к стене того здания, что вам нужно",
     "author": "Стивен Кови"
   },
   {
     "text": "У истоков каждого успешного предприятия стоит однажды принятое смелое решение",
     "author": "Питер Друкер, американский экономист"
   }
 ];