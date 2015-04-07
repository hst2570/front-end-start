
var btnSearch = $('search');
var addData = $('addMore');
var pageNum = 1;

btnSearch.addEventListener('click', search);
addData.addEventListener('click', addPage);

function addPage(event){
  pageNum=pageNum+1;
  search(event);
  };

function search(event){
  var keyword = $('keyword').value;
  var listTemplate = $('listTemplate').innerHTML;
  var DaumAPI = "https://apis.daum.net/search/board?apikey=fdada071f31587e4d580f801f1a99542&q="+keyword+"&output=json&pageno="+pageNum;

console.log(keyword);

getJSON(DaumAPI , function(DaumData){

  console.log(DaumData.channel.item)

  var html = tmpl(listTemplate, {list: DaumData.channel.item});

  $('wrap').innerHTML += html;
});
};
