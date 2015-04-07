
var boxOfficeAPI = 'http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=10&pageNo=1';
var listTemplate = $('listTemplate').innerHTML;

getJSON(boxOfficeAPI , function(boxOfficeData){

  console.log(boxOfficeData)

  var html = tmpl(listTemplate, {list: boxOfficeData.data});

  $('wrap').innerHTML = html;


});
