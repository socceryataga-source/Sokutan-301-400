const QUIZ_META = {
  "min": 301,
  "max": 400,
  "title": "超頻出語句クイズ（No.301-400）",
  "label": "professor 〜 concept"
};

const WORD_DATA = [
  {
    "serial": 301,
    "wordNo": "842",
    "word": "professor",
    "answer": "教授",
    "options": [
      "中心",
      "意思疎通",
      "現実",
      "教授"
    ],
    "example": "The professor distributed handouts to his students.",
    "translation": "教授は学生にプリントを配った。"
  },
  {
    "serial": 302,
    "wordNo": "843",
    "word": "diet",
    "answer": "食事",
    "options": [
      "地域社会",
      "記事、論文",
      "食事",
      "会社"
    ],
    "example": "You should change your diet if you want to stay healthy.",
    "translation": "健康でいたいなら食事を変えるべきだ。"
  },
  {
    "serial": 303,
    "wordNo": "846",
    "word": "colleague",
    "answer": "同僚",
    "options": [
      "自由",
      "政策",
      "真実、事実",
      "同僚"
    ],
    "example": "Luckily, I get on really well with my colleagues at my part-time job.",
    "translation": "幸運にも、私はアルバイト先の同僚ととてもうまくやっている。"
  },
  {
    "serial": 304,
    "wordNo": "847",
    "word": "room",
    "answer": "余地",
    "options": [
      "余地",
      "概念",
      "重要性",
      "市民、国民"
    ],
    "example": "There is no room for improvement in your report!",
    "translation": "あなたのレポートには改善の余地はありません（完璧です）。"
  },
  {
    "serial": 305,
    "wordNo": "849",
    "word": "participant",
    "answer": "参加者",
    "options": [
      "炭素",
      "会社",
      "参加者",
      "計画"
    ],
    "example": "There were over 25 participants in the quiz.",
    "translation": "クイズの参加者は25人以上いた。"
  },
  {
    "serial": 306,
    "wordNo": "865",
    "word": "company",
    "answer": "会社",
    "options": [
      "税金",
      "能力",
      "会社",
      "計画"
    ],
    "example": "My father works for an insurance company in Tokyo.",
    "translation": "父は東京の保険会社で働いています。"
  },
  {
    "serial": 307,
    "wordNo": "871",
    "word": "relationship",
    "answer": "関係",
    "options": [
      "食事",
      "意思疎通",
      "関係",
      "学期"
    ],
    "example": "The two brothers had a really bad relationship and were always fighting.",
    "translation": "２人の兄弟は本当に仲が悪く、いつも喧嘩をしていた。"
  },
  {
    "serial": 308,
    "wordNo": "873",
    "word": "examine",
    "answer": "調べる",
    "options": [
      "調べる",
      "損害与える",
      "購入する",
      "受け取る"
    ],
    "example": "He examined the painting carefully to see if it was genuine.",
    "translation": "彼は本物かどうかを見るためにその絵を注意深く調べた。"
  },
  {
    "serial": 309,
    "wordNo": "874",
    "word": "exist",
    "answer": "存在する",
    "options": [
      "改善する",
      "設計する",
      "清潔な",
      "存在する"
    ],
    "example": "What if aliens exist and have visited the earth?",
    "translation": "宇宙人が存在し、地球を訪れたことがあったらどうしますか。"
  },
  {
    "serial": 310,
    "wordNo": "875",
    "word": "importance",
    "answer": "重要性",
    "options": [
      "重要性",
      "地位",
      "計画",
      "料金"
    ],
    "example": "It is not until you get sick that you realize the importance of health.",
    "translation": "病気になって初めて健康の重要性に気づく。"
  },
  {
    "serial": 311,
    "wordNo": "877",
    "word": "quality",
    "answer": "質",
    "options": [
      "均衡",
      "現実",
      "質",
      "表面"
    ],
    "example": "The quality of their products is really high.",
    "translation": "彼らの製品の品質は本当に高い。"
  },
  {
    "serial": 312,
    "wordNo": "884",
    "word": "fuel",
    "answer": "燃料",
    "options": [
      "収入",
      "燃料",
      "機会",
      "食事"
    ],
    "example": "They are proud of producing the most fuel-efficient car.",
    "translation": "彼らは最も燃料効率のよい車を生産していると自負している。"
  },
  {
    "serial": 313,
    "wordNo": "886",
    "word": "evolve",
    "answer": "進化する",
    "options": [
      "寂しく思う",
      "人供給するfor",
      "進化する",
      "許す"
    ],
    "example": "Technology has evolved rapidly over the past 20 years.",
    "translation": "テクノロジーはこの20年で急速に進化した。"
  },
  {
    "serial": 314,
    "wordNo": "895",
    "word": "discover",
    "answer": "気づく",
    "options": [
      "広げる",
      "気づく",
      "観察する",
      "防ぐ"
    ],
    "example": "I discovered that he was very shy.",
    "translation": "私は彼がとても恥ずかしがり屋だと気づいた。"
  },
  {
    "serial": 315,
    "wordNo": "898",
    "word": "indeed",
    "answer": "実に",
    "options": [
      "実に",
      "料金",
      "寂しく思う",
      "出版する"
    ],
    "example": "It is very hot, indeed.",
    "translation": "実に暑い。"
  },
  {
    "serial": 316,
    "wordNo": "900",
    "word": "earn",
    "answer": "得る",
    "options": [
      "受け取る",
      "得る",
      "続く",
      "議論する"
    ],
    "example": "I don't earn enough money to support my family.",
    "translation": "私は家族を養うのに十分な収入を得ていない。"
  },
  {
    "serial": 317,
    "wordNo": "901",
    "word": "income",
    "answer": "収入",
    "options": [
      "収入",
      "市民、国民",
      "意思疎通",
      "均衡"
    ],
    "example": "His income has risen a lot this year.",
    "translation": "彼の収入は今年大幅に増えた。"
  },
  {
    "serial": 318,
    "wordNo": "902",
    "word": "tax",
    "answer": "税金",
    "options": [
      "税金",
      "表面",
      "意思疎通",
      "政策"
    ],
    "example": "The government plans to raise taxes next year.",
    "translation": "政府は来年に増税を予定している。"
  },
  {
    "serial": 319,
    "wordNo": "907",
    "word": "content",
    "answer": "内容",
    "options": [
      "内容",
      "活動的な、活発な",
      "気づいて",
      "あとで"
    ],
    "example": "The contents of the book are given on the first page.",
    "translation": "本の内容は最初のページに書かれている。"
  },
  {
    "serial": 320,
    "wordNo": "908",
    "word": "die",
    "answer": "死ぬ",
    "options": [
      "主要な",
      "特定する",
      "死ぬ",
      "受け取る"
    ],
    "example": "The number of people who die of cancer is on the rise in that country.",
    "translation": "その国ではがんで死亡する人の数が増えている。"
  },
  {
    "serial": 321,
    "wordNo": "912",
    "word": "later",
    "answer": "あとで",
    "options": [
      "活動的な、活発な",
      "内容",
      "あとで",
      "金融の"
    ],
    "example": "I will see you later after the lesson.",
    "translation": "後ほどレッスンが終わったら会いましょう。"
  },
  {
    "serial": 322,
    "wordNo": "919",
    "word": "advance",
    "answer": "進歩",
    "options": [
      "学期",
      "対立",
      "進歩",
      "同僚"
    ],
    "example": "We have made rapid advances in robotics and AI technology.",
    "translation": "私たちはロボット工学やAI技術を急速に進歩させた。"
  },
  {
    "serial": 323,
    "wordNo": "926",
    "word": "require",
    "answer": "必要とする",
    "options": [
      "得る",
      "必要とする",
      "紹介する",
      "続く"
    ],
    "example": "You are required to send the documents by the end of the week.",
    "translation": "今週末までに書類を送ることが求められる。"
  },
  {
    "serial": 324,
    "wordNo": "927",
    "word": "relate",
    "answer": "関係がある",
    "options": [
      "続く",
      "探し求める",
      "関係がある",
      "防ぐ"
    ],
    "example": "The issue is related to the lack of funds.",
    "translation": "その問題は資金不足と関係している。"
  },
  {
    "serial": 325,
    "wordNo": "943",
    "word": "stick",
    "answer": "くっつく",
    "options": [
      "死ぬ",
      "出版する",
      "特定する",
      "くっつく"
    ],
    "example": "I was stuck as I couldn't find an answer to the puzzle.",
    "translation": "パズルの答えが見つからず、行き詰まってしまった。"
  },
  {
    "serial": 326,
    "wordNo": "957",
    "word": "major",
    "answer": "主要な",
    "options": [
      "紹介する",
      "描く",
      "主要な",
      "購入する"
    ],
    "example": "Fast foods are the major cause of people being overweight.",
    "translation": "ファストフードは人々が太りすぎる主な原因だ。"
  },
  {
    "serial": 327,
    "wordNo": "961",
    "word": "opinion",
    "answer": "意見",
    "options": [
      "意見",
      "燃料",
      "重要性",
      "傾向"
    ],
    "example": "My opinion is that smoking should be completely banned.",
    "translation": "私の意見では、喫煙は全面的に禁止されるべきだ。"
  },
  {
    "serial": 328,
    "wordNo": "963",
    "word": "deal",
    "answer": "取り引き",
    "options": [
      "工程",
      "市民、国民",
      "取り引き",
      "表面"
    ],
    "example": "The waiter dealt with the angry customer very well.",
    "translation": "ウェイターは怒っている客に非常にうまく対応した。"
  },
  {
    "serial": 329,
    "wordNo": "973",
    "word": "famous",
    "answer": "～で有名なfor",
    "options": [
      "気づいて",
      "活動的な、活発な",
      "ありそうな",
      "～で有名なfor"
    ],
    "example": "Kyoto is famous for its historical buildings.",
    "translation": "京都は歴史的な建築物で有名だ。"
  },
  {
    "serial": 330,
    "wordNo": "981",
    "word": "surface",
    "answer": "表面",
    "options": [
      "能力",
      "取り組み",
      "表面",
      "機会"
    ],
    "example": "The surface of the table was covered with dust.",
    "translation": "テーブルの表面は埃で覆われていた。"
  },
  {
    "serial": 331,
    "wordNo": "982",
    "word": "ignore",
    "answer": "無視する",
    "options": [
      "住所",
      "寂しく思う",
      "紹介する",
      "無視する"
    ],
    "example": "I tried to ignore the noisy children in the coffee shop.",
    "translation": "喫茶店で騒ぐ子供たちを無視しようとした。"
  },
  {
    "serial": 332,
    "wordNo": "983",
    "word": "miss",
    "answer": "寂しく思う",
    "options": [
      "寂しく思う",
      "約束する",
      "改善する",
      "気づく"
    ],
    "example": "I missed the last train home last night.",
    "translation": "昨夜は帰りの終電を逃してしまった。"
  },
  {
    "serial": 333,
    "wordNo": "989",
    "word": "ability",
    "answer": "能力",
    "options": [
      "能力",
      "表面",
      "重要性",
      "概念"
    ],
    "example": "He has the ability to speak four languages.",
    "translation": "彼は4カ国語を話す能力がある。"
  },
  {
    "serial": 334,
    "wordNo": "992",
    "word": "damage",
    "answer": "損害与える",
    "options": [
      "進化する",
      "議論する",
      "損害与える",
      "勧める"
    ],
    "example": "The storm did a lot of damage to the trees in the park.",
    "translation": "嵐は公園の木々に大きな被害を与えた。"
  },
  {
    "serial": 335,
    "wordNo": "998",
    "word": "article",
    "answer": "記事、論文",
    "options": [
      "記事、論文",
      "対立",
      "結果",
      "中心"
    ],
    "example": "There was a great article about our restaurant in the paper.",
    "translation": "私たちのレストランについての素晴らしい記事が新聞に掲載された。"
  },
  {
    "serial": 336,
    "wordNo": "999",
    "word": "observe",
    "answer": "観察する",
    "options": [
      "約束する",
      "雇う",
      "観察する",
      "達成する"
    ],
    "example": "The scientist observed the animals for days to understand their lifestyle.",
    "translation": "科学者は動物の生活様式を理解するために何日も動物を観察した。"
  },
  {
    "serial": 337,
    "wordNo": "1000",
    "word": "active",
    "answer": "活動的な、活発な",
    "options": [
      "学問の",
      "一般的な",
      "ありそうな",
      "活動的な、活発な"
    ],
    "example": "He is very active and enjoys all kinds of outdoor activities.",
    "translation": "彼はとても活動的で、あらゆる野外活動を楽しんでいる。"
  },
  {
    "serial": 338,
    "wordNo": "1003",
    "word": "object",
    "answer": "物",
    "options": [
      "維持する",
      "清潔な",
      "物",
      "改善する"
    ],
    "example": "She objected to the questions by the police officer.",
    "translation": "彼女は警官からの質問に抗議した。"
  },
  {
    "serial": 339,
    "wordNo": "1004",
    "word": "attack",
    "answer": "攻撃",
    "options": [
      "攻撃",
      "料金",
      "地位",
      "税金"
    ],
    "example": "The dog suddenly attacked the small child.",
    "translation": "その犬は突然小さな子供を襲った。"
  },
  {
    "serial": 340,
    "wordNo": "1006",
    "word": "issue",
    "answer": "問題",
    "options": [
      "接続",
      "意思疎通",
      "機会",
      "問題"
    ],
    "example": "The main issue is where the government is going to get the money.",
    "translation": "主な問題は、政府がどこでお金を手に入れるかということだ。"
  },
  {
    "serial": 341,
    "wordNo": "1009",
    "word": "center",
    "answer": "中心",
    "options": [
      "会社",
      "中心",
      "記事、論文",
      "質"
    ],
    "example": "New York is the center of the financial world.",
    "translation": "ニューヨークは金融界の中心地だ。"
  },
  {
    "serial": 342,
    "wordNo": "1013",
    "word": "balance",
    "answer": "均衡",
    "options": [
      "取り引き",
      "自由",
      "政策",
      "均衡"
    ],
    "example": "It is important to get the correct balance between study and rest.",
    "translation": "勉強と休養のバランスを正しくとることが重要だ。"
  },
  {
    "serial": 343,
    "wordNo": "1018",
    "word": "freedom",
    "answer": "自由",
    "options": [
      "真実、事実",
      "自由",
      "対立",
      "教授"
    ],
    "example": "When I got a job, I had the freedom to do whatever I wanted.",
    "translation": "就職した頃は、好きなことをする自由があった。"
  },
  {
    "serial": 344,
    "wordNo": "1022",
    "word": "reality",
    "answer": "現実",
    "options": [
      "計画",
      "現実",
      "参加者",
      "同僚"
    ],
    "example": "The reality of his situation became clear to him.",
    "translation": "彼の状況の実態が明らかになった。"
  },
  {
    "serial": 345,
    "wordNo": "1027",
    "word": "receive",
    "answer": "受け取る",
    "options": [
      "設計する",
      "無視する",
      "紹介する",
      "受け取る"
    ],
    "example": "I received your parcel in the post.",
    "translation": "郵便であなたの小包を受け取った。"
  },
  {
    "serial": 346,
    "wordNo": "1030",
    "word": "address",
    "answer": "住所",
    "options": [
      "観察する",
      "支える",
      "住所",
      "必要とする"
    ],
    "example": "The speaker addressed the audience politely.",
    "translation": "講演者は聴衆に丁寧に語りかけた。"
  },
  {
    "serial": 347,
    "wordNo": "1033",
    "word": "introduce",
    "answer": "紹介する",
    "options": [
      "得る",
      "雇う",
      "紹介する",
      "改善する"
    ],
    "example": "I would like to introduce our speaker tonight.",
    "translation": "今夜の講演者を紹介します。"
  },
  {
    "serial": 348,
    "wordNo": "1044",
    "word": "truth",
    "answer": "真実、事実",
    "options": [
      "接続",
      "市民、国民",
      "真実、事実",
      "意思疎通"
    ],
    "example": "The mother told the young child to tell the truth.",
    "translation": "母親は幼い子供に本当のことを言うように言った。"
  },
  {
    "serial": 349,
    "wordNo": "1049",
    "word": "purchase",
    "answer": "購入する",
    "options": [
      "防ぐ",
      "設計する",
      "購入する",
      "進化する"
    ],
    "example": "If you can prove that you purchased that here, we will replace it.",
    "translation": "ここでそれを購入したことを証明できれば取り替えます。"
  },
  {
    "serial": 350,
    "wordNo": "1054",
    "word": "likely",
    "answer": "ありそうな",
    "options": [
      "到着予定で",
      "ありそうな",
      "気づいて",
      "かなり"
    ],
    "example": "He is likely to study physics at university.",
    "translation": "彼はたぶん大学で物理学を学ぶだろう。"
  },
  {
    "serial": 351,
    "wordNo": "1059",
    "word": "communication",
    "answer": "意思疎通",
    "options": [
      "税金",
      "重要性",
      "意思疎通",
      "均衡"
    ],
    "example": "I have improved my English communication skills.",
    "translation": "私は英語のコミュニケーション能力を向上させた。"
  },
  {
    "serial": 352,
    "wordNo": "1060",
    "word": "support",
    "answer": "支える",
    "options": [
      "支える",
      "改善する",
      "雇う",
      "必要とする"
    ],
    "example": "The political party is supported by about 40 percent of the population.",
    "translation": "その政党は人口の約40%から支持されている。"
  },
  {
    "serial": 353,
    "wordNo": "1064",
    "word": "last",
    "answer": "続く",
    "options": [
      "気づく",
      "受け取る",
      "調べる",
      "続く"
    ],
    "example": "The rain lasted for three days.",
    "translation": "雨は3日間続いた。"
  },
  {
    "serial": 354,
    "wordNo": "1065",
    "word": "term",
    "answer": "学期",
    "options": [
      "対立",
      "学期",
      "課題",
      "現実"
    ],
    "example": "During the first term of the year, you will study general subjects.",
    "translation": "年の最初の学期は一般科目を勉強する。"
  },
  {
    "serial": 355,
    "wordNo": "1070",
    "word": "seek",
    "answer": "探し求める",
    "options": [
      "くっつく",
      "死ぬ",
      "探し求める",
      "無視する"
    ],
    "example": "He sought help from a doctor to relieve his headache.",
    "translation": "頭痛を和らげるために彼は医者に助けを求めた。"
  },
  {
    "serial": 356,
    "wordNo": "1088",
    "word": "consequence",
    "answer": "結果",
    "options": [
      "結果",
      "意見",
      "評論家",
      "食事"
    ],
    "example": "Think of the consequences of your actions before you act.",
    "translation": "行動する前に自分の行動の結果を考えなさい。"
  },
  {
    "serial": 357,
    "wordNo": "1091",
    "word": "recommend",
    "answer": "勧める",
    "options": [
      "勧める",
      "調べる",
      "雇う",
      "約束する"
    ],
    "example": "My teacher recommended that I study English hard for the sake of my future.",
    "translation": "私の先生は私に将来のために英語を一生懸命勉強するように勧めた。"
  },
  {
    "serial": 358,
    "wordNo": "1101",
    "word": "argue",
    "answer": "議論する",
    "options": [
      "議論する",
      "採用する",
      "住所",
      "存在する"
    ],
    "example": "She argued with him about the new plan.",
    "translation": "彼女は彼と新しい計画について議論した。"
  },
  {
    "serial": 359,
    "wordNo": "1104",
    "word": "critic",
    "answer": "評論家",
    "options": [
      "質",
      "評論家",
      "傾向",
      "参加者"
    ],
    "example": "The art critic wrote a book on how to analyze art works.",
    "translation": "その美術評論家は美術作品の分析方法についての本を書いた。"
  },
  {
    "serial": 360,
    "wordNo": "1107",
    "word": "responsible",
    "answer": "責任がある",
    "options": [
      "責任がある",
      "到着予定で",
      "都市の",
      "かなり"
    ],
    "example": "A bus driver is responsible for the safety of passengers.",
    "translation": "バスの運転手は乗客の安全に責任がある。"
  },
  {
    "serial": 361,
    "wordNo": "1108",
    "word": "due",
    "answer": "到着予定で",
    "options": [
      "～で有名なfor",
      "気づいて",
      "到着予定で",
      "学問の"
    ],
    "example": "Your parcel is due on Monday.",
    "translation": "小包は月曜日に届く予定だ。"
  },
  {
    "serial": 362,
    "wordNo": "1110",
    "word": "spread",
    "answer": "広げる",
    "options": [
      "広げる",
      "支える",
      "改善する",
      "続く"
    ],
    "example": "The virus quickly spread through the class.",
    "translation": "ウイルスはあっという間にクラス中に広まった。"
  },
  {
    "serial": 363,
    "wordNo": "1117",
    "word": "conflict",
    "answer": "対立",
    "options": [
      "燃料",
      "対立",
      "工程",
      "結果"
    ],
    "example": "The conflict between the army and the people lasted for two days.",
    "translation": "軍と民衆の対立は2日続いた。"
  },
  {
    "serial": 364,
    "wordNo": "1123",
    "word": "identify",
    "answer": "特定する",
    "options": [
      "特定する",
      "寂しく思う",
      "無視する",
      "人供給するfor"
    ],
    "example": "The police finally identified the cause of the fire.",
    "translation": "警察はついにその火事の原因を特定した。"
  },
  {
    "serial": 365,
    "wordNo": "1128",
    "word": "pretty",
    "answer": "かなり",
    "options": [
      "かなり",
      "気づいて",
      "活動的な、活発な",
      "～で有名なfor"
    ],
    "example": "I did pretty well in the interview.",
    "translation": "私は面接でかなりうまくやった。"
  },
  {
    "serial": 366,
    "wordNo": "1131",
    "word": "draw",
    "answer": "描く",
    "options": [
      "描く",
      "調べる",
      "防ぐ",
      "広げる"
    ],
    "example": "The child drew a picture of her parents and brother.",
    "translation": "その子供は両親と弟の絵を描いた。"
  },
  {
    "serial": 367,
    "wordNo": "1140",
    "word": "design",
    "answer": "設計する",
    "options": [
      "設計する",
      "くっつく",
      "続く",
      "得る"
    ],
    "example": "The house is specially designed for people who have mobility problems.",
    "translation": "この家は移動が困難な人のために特別に設計されている。"
  },
  {
    "serial": 368,
    "wordNo": "1145",
    "word": "prevent",
    "answer": "防ぐ",
    "options": [
      "続く",
      "防ぐ",
      "気づく",
      "必要とする"
    ],
    "example": "Regular visits to the dentist will prevent you from having problems with your teeth.",
    "translation": "定期的に歯医者に行くことで、歯のトラブルを防ぐことができる。"
  },
  {
    "serial": 369,
    "wordNo": "1148",
    "word": "allow",
    "answer": "許す",
    "options": [
      "支える",
      "無視する",
      "死ぬ",
      "許す"
    ],
    "example": "At my school, students are not allowed to have a part-time job.",
    "translation": "私の学校では、生徒はアルバイトをすることが許されていない。"
  },
  {
    "serial": 370,
    "wordNo": "1152",
    "word": "trend",
    "answer": "傾向",
    "options": [
      "傾向",
      "関係",
      "市民、国民",
      "対立"
    ],
    "example": "The figure shows an upward trend in the occurrence of cyber bullying.",
    "translation": "その図はネットいじめの発生の増加傾向を示している。"
  },
  {
    "serial": 371,
    "wordNo": "1153",
    "word": "step",
    "answer": "工程",
    "options": [
      "余地",
      "工程",
      "攻撃",
      "地域社会"
    ],
    "example": "There are only three steps to this process.",
    "translation": "この工程には3段階しかない。"
  },
  {
    "serial": 372,
    "wordNo": "1156",
    "word": "publish",
    "answer": "出版する",
    "options": [
      "寂しく思う",
      "出版する",
      "住所",
      "雇う"
    ],
    "example": "He has published a number of books on Japanese history.",
    "translation": "彼は日本の歴史に関する多数の本を出版している。"
  },
  {
    "serial": 373,
    "wordNo": "1158",
    "word": "academic",
    "answer": "学問の",
    "options": [
      "活動的な、活発な",
      "都市の",
      "気づいて",
      "学問の"
    ],
    "example": "His academic background is excellent but he has little teaching experience.",
    "translation": "彼は学歴は優秀だが、指導経験はほとんどない。"
  },
  {
    "serial": 374,
    "wordNo": "1159",
    "word": "urban",
    "answer": "都市の",
    "options": [
      "都市の",
      "ありそうな",
      "～で有名なfor",
      "気づいて"
    ],
    "example": "We decided to move to an urban area rather than live in the countryside.",
    "translation": "私たちは田舎に住むよりも都市部に引っ越すことにした。"
  },
  {
    "serial": 375,
    "wordNo": "1163",
    "word": "carbon",
    "answer": "炭素",
    "options": [
      "炭素",
      "中心",
      "意見",
      "記事、論文"
    ],
    "example": "Global warming is mainly caused by rising carbon emissions.",
    "translation": "地球温暖化は主に炭素排出量の増加によって引き起こされる。"
  },
  {
    "serial": 376,
    "wordNo": "1170",
    "word": "temperature",
    "answer": "気温",
    "options": [
      "均衡",
      "料金",
      "気温",
      "意思疎通"
    ],
    "example": "Today the temperature is a really pleasant 22 degrees.",
    "translation": "今日は気温が非常に快適な22度だ。"
  },
  {
    "serial": 377,
    "wordNo": "1174",
    "word": "promise",
    "answer": "約束する",
    "options": [
      "約束する",
      "～答えるto",
      "観察する",
      "防ぐ"
    ],
    "example": "I promised my mother that I would wash the dishes every day.",
    "translation": "母に毎日皿洗いをすると約束した。"
  },
  {
    "serial": 378,
    "wordNo": "1176",
    "word": "project",
    "answer": "計画",
    "options": [
      "対立",
      "計画",
      "能力",
      "市民、国民"
    ],
    "example": "We worked on the project during the summer holiday.",
    "translation": "私たちは夏休みの間にその計画に取り組んだ。"
  },
  {
    "serial": 379,
    "wordNo": "1181",
    "word": "maintain",
    "answer": "維持する",
    "options": [
      "購入する",
      "人供給するfor",
      "維持する",
      "～答えるto"
    ],
    "example": "The new teacher found it hard to maintain discipline in the class.",
    "translation": "新任の教師はクラスの規律を維持するのが難しいと感じていた。"
  },
  {
    "serial": 380,
    "wordNo": "1182",
    "word": "task",
    "answer": "課題",
    "options": [
      "能力",
      "課題",
      "攻撃",
      "収入"
    ],
    "example": "Our main task today is to sell as many products as we can.",
    "translation": "今日の我々の主な仕事は、できるだけ多くの製品を売ることだ。"
  },
  {
    "serial": 381,
    "wordNo": "1185",
    "word": "financial",
    "answer": "金融の",
    "options": [
      "活動的な、活発な",
      "責任がある",
      "金融の",
      "一般的な"
    ],
    "example": "The financial crisis of 2018 hurt many countries in Asia.",
    "translation": "2018年の金融危機はアジアの多くの国に打撃を与えた。"
  },
  {
    "serial": 382,
    "wordNo": "1186",
    "word": "approach",
    "answer": "取り組み",
    "options": [
      "意見",
      "表面",
      "取り組み",
      "市民、国民"
    ],
    "example": "The man quietly approached the fox.",
    "translation": "男は静かにキツネに近づいた。"
  },
  {
    "serial": 383,
    "wordNo": "1189",
    "word": "community",
    "answer": "地域社会",
    "options": [
      "地域社会",
      "燃料",
      "真実、事実",
      "概念"
    ],
    "example": "Our neighborhood feels like a comfortable community as everybody is so friendly.",
    "translation": "私たちの地域は、みんながとても友好的で、快適な社会のように感じる。"
  },
  {
    "serial": 384,
    "wordNo": "1192",
    "word": "adopt",
    "answer": "採用する",
    "options": [
      "主要な",
      "広げる",
      "採用する",
      "観察する"
    ],
    "example": "We are trying to adopt a new system of management for the school.",
    "translation": "私たちは学校管理のための新しいシステムを採用しようとしている。"
  },
  {
    "serial": 385,
    "wordNo": "1195",
    "word": "citizen",
    "answer": "市民、国民",
    "options": [
      "余地",
      "取り組み",
      "市民、国民",
      "均衡"
    ],
    "example": "The government should protect and care for its citizens.",
    "translation": "政府は国民を保護し、配慮すべきだ。"
  },
  {
    "serial": 386,
    "wordNo": "1196",
    "word": "improve",
    "answer": "改善する",
    "options": [
      "必要とする",
      "改善する",
      "観察する",
      "気づく"
    ],
    "example": "My math skills have really improved with our new teacher.",
    "translation": "新しい先生になって、私の数学の技能は本当に向上した。"
  },
  {
    "serial": 387,
    "wordNo": "1200",
    "word": "connection",
    "answer": "接続",
    "options": [
      "接続",
      "攻撃",
      "概念",
      "問題"
    ],
    "example": "The Internet connection here is really bad.",
    "translation": "ここのインターネット接続は本当に悪い。"
  },
  {
    "serial": 388,
    "wordNo": "1202",
    "word": "policy",
    "answer": "政策",
    "options": [
      "対立",
      "政策",
      "取り組み",
      "評論家"
    ],
    "example": "I believe in the idea that honesty is the best policy.",
    "translation": "正直は最善の策という考えは正しいと思う。"
  },
  {
    "serial": 389,
    "wordNo": "1209",
    "word": "aware",
    "answer": "気づいて",
    "options": [
      "気づいて",
      "～で有名なfor",
      "一般的な",
      "金融の"
    ],
    "example": "He was not aware that his name was called.",
    "translation": "彼は自分の名前が呼ばれたことに気づかなかった。"
  },
  {
    "serial": 390,
    "wordNo": "1213",
    "word": "status",
    "answer": "地位",
    "options": [
      "中心",
      "意見",
      "地位",
      "食事"
    ],
    "example": "The gigantic tomb shows the social status of the ruler at that time.",
    "translation": "その巨大な墓は当時の統治者の社会的地位を示している。"
  },
  {
    "serial": 391,
    "wordNo": "1216",
    "word": "charge",
    "answer": "料金",
    "options": [
      "課題",
      "料金",
      "評論家",
      "気温"
    ],
    "example": "The parking charge is 200 yen per hour.",
    "translation": "駐車料金は1時間200円です。"
  },
  {
    "serial": 392,
    "wordNo": "1217",
    "word": "general",
    "answer": "一般的な",
    "options": [
      "内容",
      "一般的な",
      "気づいて",
      "都市の"
    ],
    "example": "The general opinion is that the manager should resign.",
    "translation": "一般的な意見としては、監督は辞任すべきだ。"
  },
  {
    "serial": 393,
    "wordNo": "1219",
    "word": "notice",
    "answer": "気づく",
    "options": [
      "主要な",
      "調べる",
      "気づく",
      "購入する"
    ],
    "example": "I didn't notice that the house had been knocked down.",
    "translation": "その家が取り壊されたことに気づかなかった。"
  },
  {
    "serial": 394,
    "wordNo": "1223",
    "word": "hire",
    "answer": "雇う",
    "options": [
      "雇う",
      "受け取る",
      "広げる",
      "必要とする"
    ],
    "example": "We need to hire two more members of staff.",
    "translation": "スタッフをあと2人雇う必要がある。"
  },
  {
    "serial": 395,
    "wordNo": "1224",
    "word": "achieve",
    "answer": "達成する",
    "options": [
      "雇う",
      "許す",
      "無視する",
      "達成する"
    ],
    "example": "She finally achieved her ambition of traveling around Europe.",
    "translation": "彼女はヨーロッパを旅行するという野望をついに達成した。"
  },
  {
    "serial": 396,
    "wordNo": "1225",
    "word": "provide",
    "answer": "人供給するfor",
    "options": [
      "維持する",
      "人供給するfor",
      "設計する",
      "関係がある"
    ],
    "example": "Cows provide us with milk.",
    "translation": "雌牛は我々にミルクを供給する。"
  },
  {
    "serial": 397,
    "wordNo": "1227",
    "word": "opportunity",
    "answer": "機会",
    "options": [
      "市民、国民",
      "機会",
      "真実、事実",
      "結果"
    ],
    "example": "Studying abroad gives you a great opportunity to experience a different culture.",
    "translation": "留学することで、異なる文化を体験する素晴らしい機会が得られる。"
  },
  {
    "serial": 398,
    "wordNo": "1228",
    "word": "respond",
    "answer": "～答えるto",
    "options": [
      "設計する",
      "気づく",
      "住所",
      "～答えるto"
    ],
    "example": "I didn't know how to respond to the questions from the media.",
    "translation": "メディアからの質問にどう答えればよいかわからなかった。"
  },
  {
    "serial": 399,
    "wordNo": "1232",
    "word": "clean",
    "answer": "清潔な",
    "options": [
      "清潔な",
      "維持する",
      "設計する",
      "物"
    ],
    "example": "The hotel was really clean and comfortable.",
    "translation": "そのホテルは本当に清潔で快適だった。"
  },
  {
    "serial": 400,
    "wordNo": "1240",
    "word": "concept",
    "answer": "概念",
    "options": [
      "概念",
      "税金",
      "接続",
      "余地"
    ],
    "example": "This book explains how the concept of zero was discovered.",
    "translation": "この本はどのようにゼロという概念が発見されたかを説明している。"
  }
];
