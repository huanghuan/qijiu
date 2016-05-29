var s="";
s+="<div id='header'>";
s+="<table cellpadding='0' cellspacing='0'><tr>";
s+="	<td width='480' align='left'><img src='images/logo.png'></td>";
s+="	<td width='160'><a href='d-index.html'>首页</a></td>";
s+="	<td width='160'><a href='#'>关于我们</a><div>";
s+="		<a href='d-about.html'>公司简介</a>";
s+="		<a href='#'>联系我们</a>";
s+="		<a href='#'>加入我们</a>";
s+="	</div></td>";
s+="	<td width='160'><a href='#'>医疗服务</a><div>";
s+="		<a href='d-services.html#health'>健康管理</a>";
s+="		<a href='d-services.html#consulting'>医疗咨询</a>";
s+="		<a href='#'>远程会诊</a>";
s+="		<a href='d-services.html#clinical'>门诊中心</a>";
s+="		<a href='d-services.html#imaging'>影像中心</a>";
s+="		<a href='d-services.html#hospital'>专科医院</a>";
s+="	</div></td>";
s+="	<td width='160'><a href='#'>就医信息</a><div>";
s+="		<a href='d-doctors.html'>专家介绍</a>";
s+="		<a href='#'>出诊时间</a>";
s+="		<a href='#'>预约就诊</a>";
s+="	</div></td>";
s+="	<td width='160'><a href='#'>资讯动态</a><div>";
s+="		<a href='#'>公司动态</a>";
s+="		<a href='#'>健康资讯</a>";
s+="		<a href='#'>行业新闻</a>";
s+="	</div></td>";
s+="</tr></table>";
s+="</div>";
s+="<div id='sidebar'>";
s+="<img src='images/cs.jpg'><a href='#'>在线咨询</a>";
s+="<img src='images/qq_.png'><a href='#'>QQ客服</a>";
s+="<img src='images/qr-code.png' title='扫描二维码关注微信公众号：柒玖医疗'>";
s+="</div>";
document.write(s);

var m, d;
function hideMenu() {
	if (m) {
		m.className = '';
		m = null;
	}
	if (d) {
		$(d).hide();
		d = null;
	}
}
$('#header td>a').mouseenter(function(event) {
	hideMenu();
	m = event.target, d = m.nextSibling;
	m.className = 'active';
	if (d && d.tagName == 'DIV') {
		$(d).css({
			left: $(m.parentNode).offset().left
		}).show();
	}
});
