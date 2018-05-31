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

	function base64_encode(data) {

    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        enc = '',
        tmp_arr = [];

    if (!data) {
        return data;
    }

    data = unescape(encodeURIComponent(data))

    do {
       
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1 << 16 | o2 << 8 | o3;

        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;

       
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    var r = data.length % 3;

    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
}

function base64_decode(data) {

    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        dec = '',
        tmp_arr = [];

    if (!data) {
        return data;
    }

    data += '';

    do {
        
        h1 = b64.indexOf(data.charAt(i++));
        h2 = b64.indexOf(data.charAt(i++));
        h3 = b64.indexOf(data.charAt(i++));
        h4 = b64.indexOf(data.charAt(i++));

        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

        o1 = bits >> 16 & 0xff;
        o2 = bits >> 8 & 0xff;
        o3 = bits & 0xff;

        if (h3 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1);
        } else if (h4 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1, o2);
        } else {
            tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
        }
    } while (i < data.length);

    dec = tmp_arr.join('');

    return decodeURIComponent(escape(dec.replace(/\0+$/, '')));
}

	function decode(x){
		var val=x.replace('%3A',':');
		var val=val.replace('%2F%2F','//');
		var val=val.replace('%2F','/');
		var val=val.replace('%2F','/');
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

	if(urls.match('safelinkreviewx.com')){
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
	if(urls.match('menantisenja.com')){
		$("head").empty();
		$("body").empty();
		$("body").append('<h1>Sedang diproses, tunggu sebentar... [jika tidak ada respon refresh page]</h1>');
		var grab=/\?site=.*/.exec(urls)[0];
		var grab='https://kurosafe.menantisenja.com/redirect/'+grab;
		location.href=grab;
	};

	if(urls.match('kurosafe.website')){
		$("head").empty();
		$("body").empty();
		$("body").append('<h1>Sedang diproses, tunggu sebentar... [jika tidak ada respon refresh page]</h1>');
		var grab=/\?site=.*/.exec(urls)[0];
		var grab='https://kurosafe.website/redirect/'+grab;
		location.href=grab; 
	};

	if(urls.match('fmlawkers.club')){
		//$("head").empty();
		//$("body").empty();
		//$("body").append('<h1>Sedang diproses, tunggu sebentar... [jika tidak ada respon refresh page]</h1>');
		var grab=/\?site=[^=]+/.exec(urls)[0];
		location.href='http://fmlawkers.club/goto/'+grab;
	};

	if(urls.match('zonawibu.bid')){
		var a=$('a');
		for(x=0;x<a.length;x++){
			if(a[x]['outerHTML'].match('Menuju')){
				var index=x;
			}
			else{
				console.log(x);
			}
		}
		var link=a[index]['href'];
		location.href=link;
	};

		if(urls.match('7linx.us')){
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

	if(urls.match('http://ryuka.xyz/lawyer/')){
		var id=urls.match(/\?r=.*/)[0];
		location.href='http://ryuka.xyz/lawyer/get/'+id;
	};

});