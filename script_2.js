const basic = {
    notion : null,
    meaning : null,
    url : null
}

let arr = [];
let index = 0;

function add() {
    const new_notion = document.getElementById('notion').value;
    const new_meaning = document.getElementById('meaning').value;
    const new_url = document.getElementById('url').value;
    //하나라도 입력이 되지 않은 경우
     if (new_notion.length<1 || new_meaning.length<1 || new_url.length<1) {
         alert("내용을 입력해주세요.");
         return;
     } 
      // 이미 해당 개념이 존재하는 경우
     let exit = 0;
     exit = check_notion_index(new_notion);
     if(exit!=-1) { 
         arr[exit].meaning=String(new_meaning);
         arr[exit].url=String(new_url);
     }
     // 새로운 개념인 경우
     else {
         arr[index]= Object.assign({}, basic); //배열에 basic 객체를 할당해줌
         arr[index].notion=String(new_notion)
         arr[index].meaning=String(new_meaning);
         arr[index++].url=String(new_url);
    }
}

 //존재한다면 해당 개념의 인덱스를, 아니면 0을 반환
 function check_notion_index(new_notion) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].notion === new_notion) {
        return i;
      }
    }
    return -1; 
  }

function showAll() {
    let show = document.getElementById("show");
    show.innerHTML="";
    for(let i=0; i<arr.length; i++){
        show.innerHTML += check_notion_index(arr[i].notion)+1+". "+"[" + arr[i].notion + "]<br/>"  // [notion]
        + "meaning: " +  arr[i].meaning + "<br/>"     // meaning: 
        + "url: " + arr[i].url + "<br/><br/>";      
    }
}

function search(){
    const search = document.getElementById('search').value;
    let number = check_notion_index(search);
    if(isFinite(search)==false && number!=-1) {
        alert(`${arr[number].notion}의 번호는 ${number+1}입니다.`);
    }
    else {
        alert(`${search}번의 개념은 ${arr[search-1].notion}입니다.`);
    }
}
