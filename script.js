const TOTAL_QUESTIONS = 40;
const STORAGE_KEY = "chubu_hourei_quiz_20260701_answers_v2";

const trueFalseQuestions = [
  {
    number: 1,
    text: "一般乗用旅客自動車運送事業者が道路運送法に基づく命令に違反したときは許可を取り消されることがあります。",
    answer: "◯"
  },
  {
    number: 2,
    text: "個人タクシー事業者は、タクシーを運転中に自動車が転覆・転落する事故を引き起こした場合、死者又は重傷者が生じていなくても自動車事故報告書を提出しなければなりません。",
    answer: "◯"
  },
  {
    number: 3,
    text: "タクシー車両の点検整備記録簿の保存期間は、その点検整備の日から2年間と定められています。",
    answer: "✕"
  },
  {
    number: 4,
    text: "一般旅客自動車運送事業者が運輸を開始した場合は届け出る必要はありません。",
    answer: "✕"
  },
  {
    number: 5,
    text: "個人タクシー事業者が、その事業を30日間休止した場合には「運転日報」にその旨を明記することにより、道路運送法第38条第1項の規定による「事業の休止届出書」を提出する必要はありません。",
    answer: "◯"
  },
  {
    number: 6,
    text: "個人タクシー事業者は、運送の申込みを受けた順序によらずに旅客の運送を行うことができます。",
    answer: "✕"
  },
  {
    number: 7,
    text: "地方運輸局長は、道路運送法の規定で、法律の施行に必要な限度において一般旅客自動車運送事業者に事業に関する報告をさせることができることとされています。",
    answer: "◯"
  },
  {
    number: 8,
    text: "旅客自動車運送事業者は、事業用自動車に応急修理のために必要な器具及び部品を備えなければ、当該事業用自動車を旅客の運送の用に供してはなりませんが、運送の途中において当該事業用自動車に故障が発生した場合に、旅客の運送を容易に継続することができるときであっても、当該事業用自動車を旅客の運送の用に供することはできません。",
    answer: "✕"
  },
  {
    number: 9,
    text: "タクシー業務適正化特別措置法の単位地域内の個人タクシー事業者は、交付を受けている個人タクシー事業者乗務証の記載事項に変更があった場合は、直ちにその訂正を受けなければなりません。",
    answer: "◯"
  },
  {
    number: 10,
    text: "旅客の現在する事業用自動車では、危険物（旅客自動車運送事業運輸規則で規定されているもの）を運搬してはなりません。",
    answer: "◯"
  },
  {
    number: 11,
    text: "個人タクシー事業者が許可期限を更新しようとする場合、手続きについては、当該許可期限の満了後1か月以内に申請書を提出しなければなりません。",
    answer: "✕"
  },
  {
    number: 12,
    text: "一般乗用旅客自動車運送事業者が、標準運送約款と同一の運送約款を定めたときは、道路運送法の規定によりその運送約款は、認可を受けたものとみなされます。",
    answer: "◯"
  },
  {
    number: 13,
    text: "自動車事故報告規則の規定に基づく報告書については、事故に対する弁明書を添付することになっています。",
    answer: "✕"
  },
  {
    number: 14,
    text: "事業用自動車の使用者は、道路運送車両法の規定に基づき、当該自動車の定期点検整備を行わなければなりません。",
    answer: "◯"
  },
  {
    number: 15,
    text: "旅客自動車運送事業運輸規則においては、事業者に対して、タクシー車内に運賃及び料金並びに運送約款を旅客に見やすいように掲示することが義務付けられています。",
    answer: "✕"
  },
  {
    number: 16,
    text: "一般乗用旅客自動車運送事業者が道路運送法に規定する事業用自動車の使用停止処分を受けた場合には、自動車登録番号標の領置を受けるべきことを命ぜられることがありますが、個人タクシー事業者に限っては適用されません。",
    answer: "✕"
  },
  {
    number: 17,
    text: "道路運送法の規定では、許可又は認可には条件又は期限を付すことができるとされています。",
    answer: "◯"
  },
  {
    number: 18,
    text: "個人タクシー事業者の「輸送実績報告書」は、前年4月1日から本年3月31日の1年間の実働日数、走行キロ、運送回数等を報告するものです。",
    answer: "◯"
  },
  {
    number: 19,
    text: "事業者は、事業計画のうち自動車車庫の位置又は収容能力を変更しようとするときは、認可を受ける必要はありません。",
    answer: "✕"
  },
  {
    number: 20,
    text: "一般乗用旅客自動車運送事業の運送約款には、運送の引受けに関する事項等を定めることが必要ですが、運送責任の始期及び終期についても定めなければなりません。",
    answer: "◯"
  },
  {
    number: 21,
    text: "身体障害者割引は身体障害者福祉法による身体障害者手帳を所持している者に適用するものとし、営業的割引条件にも該当する場合は重複して適用します。",
    answer: "◯"
  },
  {
    number: 22,
    text: "運賃及び料金の収受に関する事項については、事業計画に定める必要はありません。",
    answer: "◯"
  },
  {
    number: 23,
    text: "事業報告書は、事業用自動車内に常に携帯しなければなりません。",
    answer: "✕"
  },
  {
    number: 24,
    text: "業務の開始及び終了の地点及び日時並びに主な経過地点及び業務に従事した距離は、業務記録に記録しなければなりません。",
    answer: "◯"
  },
  {
    number: 25,
    text: "一般乗用旅客自動車運送事業標準運送約款において、事業者は、道路の損壊により、輸送の安全の確保のため一時的に運行中止その他の措置をしたとき、これによって旅客が受けた損害を賠償する責任は負わないと定められています。",
    answer: "◯"
  },
  {
    number: 26,
    text: "タクシー事業者が旅客を運送中に事故に遭遇し旅客が負傷した場合、事故の過失の度合いによって旅客を保護する責任は免れます。",
    answer: "✕"
  },
  {
    number: 27,
    text: "1年以上の拘禁刑に処せられ、その執行を終わり、又は執行を受けることがなくなった日から2年を経過していない者であっても、個人タクシー事業の許可を受けることができます。",
    answer: "✕"
  },
  {
    number: 28,
    text: "事業者は、旅客に対する取扱いその他運輸に関して苦情を受けたときは、これについて遅滞なく弁明しなければならないことになっていますが、この場合、氏名及び住所を明らかにしない者に対しては、弁明をする必要はありません。",
    answer: "◯"
  },
  {
    number: 29,
    text: "個人タクシー事業者が、発地及び着地のいずれもが許可等を受けた営業区域外となる旅客の運送をした場合は、道路運送法違反になります。",
    answer: "◯"
  },
  {
    number: 30,
    text: "事業者が認可を受けている運賃及び料金を変更しようとする場合の認可申請書には変更の理由を記載する必要はありません。",
    answer: "✕"
  },
  {
    number: 31,
    text: "個人タクシー事業者の運送約款には、運賃及び料金の収受に関する事項を定める必要はありません。",
    answer: "✕"
  },
  {
    number: 32,
    text: "一般乗用旅客自動車運送事業者の事業用自動車の運転者は、迎車回送しようとする場合には、回送板を掲出しなければなりません。",
    answer: "✕"
  },
  {
    number: 33,
    text: "事業者は、営業所の名称その他国土交通省令で定める軽微な事項に係る変更については、届け出ればよいことになっています。",
    answer: "◯"
  },
  {
    number: 34,
    text: "旅客自動車運送事業運輸規則には、事業者間の活発な競争を促進することが、その目的として規定されています。",
    answer: "✕"
  },
  {
    number: 35,
    text: "旅客自動車運送事業者は、事業用自動車の本拠ごとに、自動車の点検及び清掃のための施設を設けなければなりませんが、個人タクシー事業者はその適用が除外されます。",
    answer: "✕"
  }
];

const options = [
  { kana: "ア", text: "配慮" },
  { kana: "イ", text: "条件" },
  { kana: "ウ", text: "公の秩序若しくは善良の風俗" },
  { kana: "エ", text: "天災" },
  { kana: "オ", text: "車両" },
  { kana: "カ", text: "利用者の保護若しくは公共の福祉" },
  { kana: "キ", text: "装備" },
  { kana: "ク", text: "道路交通法" },
  { kana: "ケ", text: "事故" },
  { kana: "コ", text: "事業者" },
  { kana: "サ", text: "設備" },
  { kana: "シ", text: "疾病" },
  { kana: "ス", text: "国土交通省令" },
  { kana: "セ", text: "輸送の安全及び旅客の利便" },
  { kana: "ソ", text: "負担" }
];

const fillBlanks = [
  { id: 1, answer: "サ" },
  { id: 2, answer: "ソ" },
  { id: 3, answer: "ウ" },
  { id: 4, answer: "エ" },
  { id: 5, answer: "ス" }
];

let state = loadState();
let isGraded = false;
let showingAnswers = false;

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored && typeof stored === "object") {
      return {
        q1: stored.q1 || {},
        q2: stored.q2 || {}
      };
    }
  } catch (error) {
    console.warn("保存済み回答の読み込みに失敗しました。", error);
  }
  return { q1: {}, q2: {} };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function optionLabel(kana) {
  const found = options.find((option) => option.kana === kana);
  return found ? `${found.kana}. ${found.text}` : "未回答";
}

function renderTrueFalseQuestions() {
  const wrapper = document.getElementById("trueFalseQuestions");
  wrapper.innerHTML = "";

  trueFalseQuestions.forEach((question) => {
    const selected = state.q1[question.number] || "";
    const isCorrect = selected === question.answer;
    const card = document.createElement("article");
    card.className = "question-card";
    if (isGraded || showingAnswers) {
      card.classList.add(isCorrect ? "correct" : "incorrect");
    }
    card.id = `q1-${question.number}`;

    const head = document.createElement("div");
    head.className = "question-head";

    const number = document.createElement("span");
    number.className = "question-number";
    number.textContent = question.number;

    const text = document.createElement("p");
    text.className = "question-text";
    text.textContent = question.text;

    head.append(number, text);

    const buttonArea = document.createElement("div");
    buttonArea.className = "answer-buttons";

    ["◯", "✕"].forEach((mark) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "tf-btn";
      if (selected === mark) button.classList.add("selected");
      button.textContent = mark;
      button.setAttribute("aria-pressed", String(selected === mark));
      button.addEventListener("click", () => {
        state.q1[question.number] = mark;
        isGraded = false;
        showingAnswers = false;
        saveState();
        renderAll();
      });
      buttonArea.appendChild(button);
    });

    card.append(head, buttonArea);

    if (isGraded || showingAnswers) {
      const review = document.createElement("p");
      review.className = "review-text";
      const userAnswer = selected || "未回答";
      review.textContent = `あなたの回答：${userAnswer}　／　正答：${question.answer}`;
      card.appendChild(review);
    }

    wrapper.appendChild(card);
  });
}

function renderFillQuestion() {
  const article = document.getElementById("fillQuestion");
  article.innerHTML = `
    <p class="law-title">道路運送法第13条（運送引受義務）</p>
    <p>一般旅客自動車運送事業者（一般貸切旅客自動車運送事業者を除く。次条において同じ。）は、次の場合を除いては、運送の引受けを拒絶してはならない。</p>
    <p class="law-line">一　当該運送の申込みが第11条第1項の規定により認可を受けた運送約款（標準運送約款と同一の運送約款を定めているときは、当該運送約款）によらないものであるとき。</p>
    <p class="law-line">二　当該運送に適する<span class="blank-mark">①</span>がないとき。</p>
    <p class="law-line">三　当該運送に関し申込者から特別の<span class="blank-mark">②</span>を求められたとき。</p>
    <p class="law-line">四　当該運送が法令の規定又は<span class="blank-mark">③</span>に反するものであるとき。</p>
    <p class="law-line">五　<span class="blank-mark">④</span>その他やむを得ない事由による運送上の支障があるとき。</p>
    <p class="law-line">六　前各号に掲げる場合のほか、<span class="blank-mark">⑤</span>で定める正当な事由があるとき。</p>
  `;

  const list = document.getElementById("optionList");
  list.innerHTML = "";
  options.forEach((option) => {
    const item = document.createElement("div");
    item.className = "option-item";
    item.textContent = `${option.kana}. ${option.text}`;
    list.appendChild(item);
  });

  const selectorWrapper = document.getElementById("blankSelectors");
  selectorWrapper.innerHTML = "";

  fillBlanks.forEach((blank) => {
    const selected = state.q2[blank.id] || "";
    const isCorrect = selected === blank.answer;
    const card = document.createElement("div");
    card.className = "blank-card";
    if (isGraded || showingAnswers) {
      card.classList.add(isCorrect ? "correct" : "incorrect");
    }

    const label = document.createElement("label");
    label.htmlFor = `blank-${blank.id}`;
    label.textContent = `空欄 ${blank.id}`;

    const select = document.createElement("select");
    select.id = `blank-${blank.id}`;
    select.setAttribute("autocomplete", "off");

    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = "選択してください";
    empty.selected = !selected;
    select.appendChild(empty);

    options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.kana;
      optionElement.textContent = `${option.kana}. ${option.text}`;
      optionElement.selected = selected === option.kana;
      select.appendChild(optionElement);
    });

    select.value = selected;

    select.addEventListener("change", () => {
      state.q2[blank.id] = select.value;
      isGraded = false;
      showingAnswers = false;
      saveState();
      renderAll();
    });

    card.append(label, select);

    if (isGraded || showingAnswers) {
      const review = document.createElement("p");
      review.className = "blank-review";
      review.textContent = `あなた：${optionLabel(selected)}／正答：${optionLabel(blank.answer)}`;
      card.appendChild(review);
    }

    selectorWrapper.appendChild(card);
  });
}

function answeredCount() {
  const q1Answered = trueFalseQuestions.filter((question) => Boolean(state.q1[question.number])).length;
  const q2Answered = fillBlanks.filter((blank) => Boolean(state.q2[blank.id])).length;
  return q1Answered + q2Answered;
}

function scoreAnswers() {
  const q1Correct = trueFalseQuestions.filter((question) => state.q1[question.number] === question.answer).length;
  const q2Correct = fillBlanks.filter((blank) => state.q2[blank.id] === blank.answer).length;
  return q1Correct + q2Correct;
}

function updateProgress() {
  const count = answeredCount();
  const percentage = Math.round((count / TOTAL_QUESTIONS) * 100);
  document.getElementById("answeredCount").textContent = `回答済み ${count} / ${TOTAL_QUESTIONS}`;
  document.getElementById("progressBar").style.width = `${percentage}%`;
}

function showResult() {
  const resultPanel = document.getElementById("resultPanel");
  const correct = scoreAnswers();
  const rate = (correct / TOTAL_QUESTIONS) * 100;
  let message = "";
  let className = "result-panel";

  if (correct === TOTAL_QUESTIONS) {
    message = "完璧です！　満点おめでとうございます！";
    className += " full";
  } else if (rate >= 90) {
    message = "合格圏内です！　満点めざしてがんばりましょう！";
    className += " pass";
  } else {
    message = "さらなる努力を！";
    className += " fail";
  }

  resultPanel.className = className;
  resultPanel.innerHTML = `
    <h2 class="result-title">${message}</h2>
    <p class="result-score">${correct} / ${TOTAL_QUESTIONS}問正解　正答率 ${rate.toFixed(1)}％</p>
  `;
}

function grade() {
  const count = answeredCount();
  if (count < TOTAL_QUESTIONS) {
    const remaining = TOTAL_QUESTIONS - count;
    const proceed = window.confirm(`未回答が${remaining}問あります。未回答は不正解として採点します。採点しますか？`);
    if (!proceed) return;
  }

  isGraded = true;
  showingAnswers = false;
  renderAll();
  showResult();
  document.getElementById("resultPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showAnswers() {
  showingAnswers = true;
  isGraded = false;
  renderAll();
  const resultPanel = document.getElementById("resultPanel");
  resultPanel.className = "result-panel";
  resultPanel.innerHTML = `
    <h2 class="result-title">正答を表示しました</h2>
    <p class="result-score">各問題カードに正答を表示しています。</p>
  `;
}

function hideResultPanel() {
  const resultPanel = document.getElementById("resultPanel");
  resultPanel.className = "result-panel hidden";
  resultPanel.innerHTML = "";
}

function clearReviewMarks() {
  document.querySelectorAll(".review-text, .blank-review").forEach((element) => element.remove());
  document.querySelectorAll(".correct, .incorrect").forEach((element) => {
    element.classList.remove("correct", "incorrect");
  });
}

function clearAnswerControls() {
  // 〇×ボタンの選択状態を完全に外す。
  document.querySelectorAll(".tf-btn").forEach((button) => {
    button.classList.remove("selected");
    button.setAttribute("aria-pressed", "false");
  });

  // 語群プルダウンを必ず先頭の「選択してください」に戻す。
  document.querySelectorAll("select").forEach((select) => {
    Array.from(select.options).forEach((option, index) => {
      option.selected = index === 0;
      option.defaultSelected = index === 0;
    });
    select.value = "";
    select.selectedIndex = 0;
  });
}

function clearSavedAnswers() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    Object.keys(localStorage)
      .filter((key) => key.startsWith("chubu_hourei_quiz"))
      .forEach((key) => localStorage.removeItem(key));
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("保存済み回答の削除に失敗しました。", error);
  }
}

function resetAnswers() {
  // 「やり直す」は、回答・採点結果・正答表示・画面上の選択色をすべて初期化する。
  state = { q1: {}, q2: {} };
  isGraded = false;
  showingAnswers = false;

  clearSavedAnswers();
  hideResultPanel();
  clearReviewMarks();
  clearAnswerControls();

  // 再描画して、内部状態と画面表示を完全に一致させる。
  renderAll();
  clearReviewMarks();
  clearAnswerControls();
  updateProgress();
  hideResultPanel();

  // 一部スマホブラウザのフォーム復元対策として、描画後にも再度クリアする。
  window.setTimeout(() => {
    state = { q1: {}, q2: {} };
    clearSavedAnswers();
    clearReviewMarks();
    clearAnswerControls();
    updateProgress();
    hideResultPanel();
  }, 0);
}


function renderAll() {
  renderTrueFalseQuestions();
  renderFillQuestion();
  updateProgress();
  if (!isGraded && !showingAnswers) {
    hideResultPanel();
  }
}

document.getElementById("gradeButton").addEventListener("click", grade);
document.getElementById("showAnswersButton").addEventListener("click", showAnswers);
document.getElementById("resetButton").addEventListener("click", resetAnswers);

renderAll();
