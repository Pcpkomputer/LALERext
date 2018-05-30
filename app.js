//$('iframe').remove();

	if(location.href.match('awsubs.co')){
	///iklan////
	$('#if_abd_media_1526894765').empty();
	$('#adbBgOverlay').empty();
	$('.iklansamping').empty();
	$('iframe').empty();
	$('.iklanhead').empty();
	$('.iklanpusat').empty();
	$('.sidebar_right').html('');
	};
	///////////

	if(location.href.match('oploverz.in')){
	///iklan////
	$('#if_abd_media_1526894765').empty();
	$('#adbBgOverlay').empty();
	$('script').remove();
	$('iframe').remove();
	$('#sidebar').remove();
	$('.left').remove();
	$('#btm_banner').remove();
	$('.headads').remove();
	};
	///////////

$(function(){

	$('#bsamFB7sUI').remove();
	$('s').remove();
	$('b').remove();

	function decode(x){
		var val=x.replace('%3A',':');
		var val=val.replace('%2F%2F','//');
		var val=val.replace('%2F','/');
		return val;
	};

	let urls=location.href;
	if(urls.match('94lauin')){
		var a=$('script');
		for(i=0;i<a.length;i++){
			if(a[i]['outerHTML'].match('#pleasewait')){
				var index=i;
			}
			else{
				console.log(i);
			}
		};
		let script=$("script")[index]['outerHTML'];
		let link=/window.location=\"([^\"]+)\";/.exec(script)[1];
		$("head").empty();
		$("body").empty();
		location.href=link;
	};

	if(urls.match('bolaoke')){
		var a=$('script');
		for(i=0;i<a.length;i++){
			if(a[i]['outerHTML'].match('window.open')){
				var index=i;
			}
			else{
				console.log(i);
			}
		};
		let script=$('script')[index]['innerHTML'];
		let link=/var a='(.*)';window.open/.exec(script)[1];
		$("head").empty();
		$("body").empty();
		location.href=link;
	};

	if(urls.match('short.awsubs')){
		let script=$('a')[4]['href'];
		$("head").empty();
		$("body").empty();
		location.href=script;
	};

	if(urls.match('awsubsco.cf')){
		for(x=0;x<$('script').length;x++){
    var a=$('script')[x]['outerHTML'];
    if(a.match('p_name')){
        var index=x;
			}
    else{
        console.log(x);
			}
		}
		var a=$('script')[index]['outerHTML'];
		var b=/d_link = \'(.*)\';/.exec(a)[1];
		var val=decode(b);
		$("head").empty();
		$("body").empty();
		location.href=val;
	};

	if(urls.match('siotong')){
		var a=$('script');
		for(i=0;i<a.length;i++){
			if(a[i]['outerHTML'].match('window.location')){
				var index=i;
			}
			else{
				console.log(i);
			}
		};
		let script=a[index]['innerHTML'];
		let link=/window.location=\"([^\"]+)\";/.exec(script)[1];
		$("head").empty();
		$("body").empty();
		location.href=link;
	};

	if(urls.match('greget.space')){
		var a=$('script');
		for(i=0;i<a.length;i++){
			if(a[i]['outerHTML'].match('window.location')){
				var index=i;
			}
			else{
				console.log(i);
			}
		};
	 let script=$('script')[index]['outerHTML'];
	 let link=/window.location=\"([^\"]+)\";/.exec(script)[1];
	 $("head").empty();
	 $("body").empty();
	 location.href=link;
	};

	if(urls.match('plantaheim')){
		var a=$('script');
		for(i=0;i<a.length;i++){
			if(a[i]['outerHTML'].match('base64_decode')){
				var index=i;
			}
			else{
				console.log(i);
			}
		};
		let script=$('script')[index]['outerHTML'];
		let link=/base64_decode\(\"(.*)\"\);window.open/.exec(script)[1];
		$("head").empty();
		$("body").empty();
		location.href=atob(link);
	};

	if(urls.match('healthtod.com')){
		link=urls;
		$("head").empty();
		$("body").empty();
		$.getJSON('https://test-yudha.herokuapp.com/api?link='+link,function(data){
			var direct=atob(data.data);
			location.href=direct;
		});
	};

	if(urls.match('lindung.in')){
		var a=$('script');
		for(i=0;i<a.length;i++){
			if(a[i]['outerHTML'].match('base64_decode')){
				var index=i;
			}
			else{
				console.log(i);
			}
		};
		let script=$('script')[index]['outerHTML'];
		let link=/base64_decode\(\"(.*)\"\);window.open/.exec(script)[1];
		$("head").empty();
		$("body").empty();
		location.href=atob(link);
	};

	if(urls.match('gameinfo.pw')){
		link=urls;
		$("head").empty();
		$("body").empty();
		$("body").append('<h1>Sedang diproses, tunggu sebentar... [jika tidak ada respon refresh page]</h1>');
		$.getJSON('https://test-yudha.herokuapp.com/api?link='+link,function(data){
			location.href=data.data;
		});
	};

	if(urls.match('bagilagi.com')){
		link=urls;
		$("head").empty();
		$("body").empty();
		$("body").append('<h1>Sedang diproses, tunggu sebentar... [jika tidak ada respon refresh page]</h1>');
		$.getJSON('https://test-yudha.herokuapp.com/api?link='+link,function(data){
			location.href=data.data;
		});
	};

});
