const characters = {

sunhyuk:{
name:"권선혁",
title:"팀장 · 저승사자",
quote:"...하필 우리 매장에서.",
info:"진명 : 시백(時白)<br>제3구역 《경계》 관리자",
image:"images/sunhyuk.png"
},

taeo:{
name:"윤태오",
title:"MD · 구미호",
quote:"들킨 이상 어쩔 수 없잖아요~?",
info:"873세 구미호",
image:"images/taeo.png"
},

sion:{
name:"비시온",
title:"알바 · 도깨비",
quote:"......",
info:"제17구역 오래된 문에서 태어난 도깨비",
image:"images/sion.png"
},

doyoon:{
name:"강도윤",
title:"야간 경비 · 늑대 수인",
quote:"배고픈데.",
info:"경계 보안 담당",
image:"images/doyoon.png"
},

johwi:{
name:"한조휘",
title:"감사팀장 · 순혈 흡혈귀",
quote:"규정 제17조 위반입니다.",
info:"본사 감사팀",
image:"images/johwi.png"
},

yeomra:{
name:"염라",
title:"저승 최고 관리자",
quote:"선혁아. 변명 말고 보고서.",
info:"경계 설립자",
image:"images/yeomra.png"
}

};

function showCharacter(id){

document.getElementById("charName").innerHTML=
characters[id].name;

document.getElementById("charTitle").innerHTML=
characters[id].title;

document.getElementById("charQuote").innerHTML=
characters[id].quote;

document.getElementById("charInfo").innerHTML=
characters[id].info;

document.getElementById("charImage").src=
characters[id].image;
}