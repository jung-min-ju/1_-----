var n = 0;

// Notion 객체
var NotionObject = {
  notion: null,
  meaning: null,
  url: null
};

// Notion 배열 생성
let Arr = [];

// 추가 함수
function add(){
  Arr[n] = Object.assign({}, NotionObject); 
  const input =  String(document.getElementById("notion").value);
  // notion은 필수 항목, 없으면 팝업창
  if(input.length < 1){
    alert("notion is nessesary");
    return;
  }
  // 같은 이름의 notion 이미 존재한다면 meaning 수정
  if(searchIndex(input) != -1){
    Arr[searchIndex(input)].meaning = verify(String(document.getElementById("meaning").value));
    Arr[searchIndex(input)].url = verify(String(document.getElementById("url").value));
    return;
  }
  // 입력값 있고 배열에 존재하지 않는 단어라면 새로운 객체 생성
  Arr[n].notion = String(document.getElementById("notion").value);
  Arr[n].meaning = verify(String(document.getElementById("meaning").value));
  Arr[n].url = verify(String(document.getElementById("url").value));
  n++;
  return;
} 

function showAll(){
  // 매 회 출력 전에 선을 출력하여 구분
  // 외않되?
  // let line = document.createAttribute("p");
  // line.innerHTML = "--------------------------------------";
  // document.body.appendChild(line);
  for (var i = 0; i < n; i++){
    showResult(i, Arr[i].notion, Arr[i].meaning, Arr[i].url);
  }
}

function search() {
  var keyword = String(document.getElementById("search").value);
  if(keyword.length < 1){
    alert("keyword is nessessary");
    return;
  }
  var index = searchIndex(keyword);

  if(index != -1){
    alert(keyword + " is number " + index+1);
    return;
  }
  alert("There is no notion named " + keyword);
  return;
}

function searchIndex(keyword) {
  for(var i = 0; i < n; i++){
    if(Arr[i].notion == keyword){
      return i;
    }
  }
  return -1;
}

// undefined 여부 확인 함수
// undefiend면 내용 없음을 보여주기
function verify(input) {
  if (input.length < 1) {
    return "undefined yet";
  }
  else
    return input;
}

function showResult(num, notion, meaning, url) {
  var sentence = document.createElement("p");
  sentence.innerHTML = ++num
  + ".<br/>" + "[" + notion + "]<br/>"  // [notion]
  + "meaning: " + meaning + "<br/>"     // meaning: ~
  + "url: " + url;                      // url: ~
  // result 요소의 child로서 확장
  document.getElementById("result").appendChild(sentence);
}