javascript:

var href = $('#video-player video').attr('src');
var content = $('meta[property=og\\:title]').attr('content');
if(href !== undefined){
	(function(src, title){
		var popupContent = $(document.createElement('div')).append(
			$(document.createElement('h2')).text('다운로드가 준비됐습니다!')
		).append(
			$(document.createElement('h4')).text('아래의 링크를 눌러 다운로드 하십시오.')
		).append(
			$(document.createElement('a')).attr('href', src).attr('download', title).text('동영상 다운로드')
		);
		
		createPopup(popupContent, '동영상 다운로드');
	})(href, content);
}else{
	createPopup(
		$(document.createElement('h2')).html('오류!<br>동영상 플레이어가 준비될 때까지 조금만 기다려주세요 :D'),
		'조금만 더 기다려주세요!'
	);
}

function createPopup(content, title){
	var modal = $(document.createElement('div')).addClass('modal fade in').attr('role', 'dialog');
	modal.append(
		$(document.createElement('div')).addClass('modal-dialog').append(
			$(document.createElement('div')).addClass('modal-content').append(
				$(document.createElement('div')).addClass('modal-header').append(
					$(document.createElement('button')).addClass('close').append(
						$(document.createElement('span')).addClass('fa fa-times')
					).on('click', function(){
						modal.remove();
					})
				).append(
					$(document.createElement('h4')).text(title)
				)
			).append(
				$(document.createElement('div')).addClass('modal-body').append(content)
			)
		)
	);
	
	modal.css({
		display: "block"
	});
	
	$(document.body).append(modal);
}

//$('head').append($(document.createElement('script')).attr('src', 'http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'));
//WTF No bootstrap modal?
//.attr('data-dismiss', 'modal')
