//headline.js
var WxParse = require('../../wxParse/wxParse.js');

var app = getApp();
Page({
  data: {

  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    //String2
    //var article = '<div class="adf;">我是HTML代码</div>';

var article = `
<p align="left" style="text-indent:18.75pt;background:white;">
↵	<strong style="line-height:1.5;">中国1月银行代客结售汇逆差大幅缩小</strong>
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<span style="line-height:1.5;">1月银行代客结售汇逆差</span><span lang="EN-US" style="line-height:1.5;">1077</span><span style="line-height:1.5;">亿元人民币，较去年</span><span lang="EN-US" style="line-height:1.5;">12</span><span style="line-height:1.5;">月逆差</span><span lang="EN-US" style="line-height:1.5;">2983</span><span style="line-height:1.5;">亿元大幅缩小。外管局发言人表示，</span><span lang="EN-US" style="line-height:1.5;">2017</span><span style="line-height:1.5;">年以来我国跨境资金流出压力明显缓解。外部环境不确定性不会改变我国跨境资金流动的中长期发展趋势。</span>
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<strong style="line-height:1.5;text-indent:18.75pt;">再融资新政出台 应流股份取消股东大会并修改重组细节</strong>
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<span style="line-height:1.5;"><span style="line-height:16.3636px;text-indent:25px;white-space:normal;background-color:#FFFFFF;">A股上市公司应流股份上周六公告称，公司原计划于2月22日召开临时股东大会审议重大资产重组相关议案。但由于证监会日前发布了再融资新政，公司正对重组案进行相应调整，因此决定取消临时股东大会。</span></span> 
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<strong style="line-height:1.5;">连降15个月！央行1月外汇占款下降2088亿元</strong> 
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	中国央行上周五公布数据显示，今年1月外汇占款减少2087.66亿元，降幅较此前数月收窄，但为连续第15个月减少。此前公布的1月外储余额跌破3万亿美元，创近六年新低，连降7个月。
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<strong style="line-height:1.5;">G20会议前日德警告美国财长：别宣布日元过低 小心讨论金融去监管</strong> 
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<span style="line-height:1.5;">在3月的G20财长和央行行长会议召开之前，努钦宣誓就任美国财长。近期德国财长警告，新财长应小心谈论削减金融监管，欧洲央行行长认为这“令人担忧”。日本财长称：不要说日元疲软，“G7和G20不会接受外汇干预”。</span> 
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<strong style="line-height:1.5;">十年来最快增速！美国家庭负债接近金融危机时的巅峰水平</strong> 
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<span style="line-height:1.5;">截至去年四季度，美国家庭总负债接近2008年三季度的峰值水平，季度增速为三年来最快。2016年全年，美国家庭总负债增速则创十年来最快。其中，车贷、学生贷款双双创纪录新高，房贷已增至2007年三季度来的最高水平。</span><span style="line-height:1.5;"></span> 
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<strong style="line-height:1.5;">1430亿美元报价遭拒 卡夫亨氏撤回收购联合利华要约</strong> 
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<span style="line-height:1.5;">巴菲特持股的卡夫亨氏上周日宣布，收回约1430亿美元收购联合利华的要约。分析师评价，联合利华反收购实力不是很强，迅速撤回要约或影响卡夫收购声誉。上周五传出联合利华以估值低为由拒绝收购消息后，联合利华欧股美股均收创新高。</span> 
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<strong style="line-height:1.5;">扔了经济模型！为减税增支，特朗普</strong><span lang="EN-US" style="line-height:1.5;"><strong>“</strong></span><strong style="line-height:1.5;">决定</strong><span lang="EN-US" style="line-height:1.5;"><strong>”</strong></span><strong style="line-height:1.5;">美国</strong><span lang="EN-US" style="line-height:1.5;"><strong>GDP</strong></span><strong style="line-height:1.5;">增速应为</strong><span lang="EN-US" style="line-height:1.5;"><strong>3.2%</strong></span>
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<span style="line-height:1.5;">减税的同时又要增加军事和基建开支，还不能大幅提高赤字。特朗普提出未来</span><span lang="EN-US" style="line-height:1.5;">10</span><span style="line-height:1.5;">年年均</span><span lang="EN-US" style="line-height:1.5;">3.2%</span><span style="line-height:1.5;">的经济增长目标，大大高于国会预算办公室预估的</span><span lang="EN-US" style="line-height:1.5;">1.8-1.9%</span><span style="line-height:1.5;">。白宫经济顾问委员会犯难了：他们第一次被要求按增长目标回填数字。</span>
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<b style="line-height:1.5;text-indent:18.75pt;">今日要闻提醒</b>
↵</p>
↵<div align="center">
↵	<div align="center">
↵		<table border="1" cellspacing="0" cellpadding="0"  style="width:459.95pt;border:none;">
↵			<tbody>
↵				<tr>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<b><span>时间<span></span></span></b> 
↵						</p>
↵					</td>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<b><span>财经事件<span></span></span></b> 
↵						</p>
↵					</td>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<b><span>重要性<span></span></span></b> 
↵						</p>
↵					</td>
↵				</tr>
↵				<tr>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span>5:45</span> 
↵						</p>
↵					</td>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span>四季度<span>PPI</span>投出季环比<span></span></span> 
↵						</p>
↵					</td>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span style="color:red;">★★<span></span></span> 
↵						</p>
↵					</td>
↵				</tr>
↵				<tr>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span>7:50</span> 
↵						</p>
↵					</td>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span>1</span><span>月末季调商品贸易帐<span></span></span> 
↵						</p>
↵					</td>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span style="color:red;">★★<span></span></span> 
↵						</p>
↵					</td>
↵				</tr>
↵				<tr>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span>8:01</span> 
↵						</p>
↵					</td>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span>2</span><span>月<span>Rightmove</span>平均房屋要价指数环比<span></span></span> 
↵						</p>
↵					</td>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span style="color:red;">★★<span></span></span> 
↵						</p>
↵					</td>
↵				</tr>
↵				<tr>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span>8:01</span> 
↵						</p>
↵					</td>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span>&nbsp;2</span><span>月<span>Rightmove</span>平均房屋要价指数同比<span></span></span> 
↵						</p>
↵					</td>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span style="color:red;">★★<span></span></span> 
↵						</p>
↵					</td>
↵				</tr>
↵				<tr>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span>21:30</span> 
↵						</p>
↵					</td>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span>12</span><span>月批发销售环比<span></span></span> 
↵						</p>
↵					</td>
↵					<td  style="border:solid windowtext 1.5pt;">
↵						<p align="center" style="text-align:center;">
↵							<span style="color:red;">★★</span> 
↵						</p>
↵					</td>
↵				</tr>
↵			</tbody>
↵		</table>
↵	</div>
↵</div>
↵<p>
↵	<br />
↵</p>
↵<p align="left" style="text-align:right;text-indent:18.75pt;background:white;">
↵	&nbsp;<b style="text-align:right;text-indent:18.75pt;line-height:1.5;">交流热线：0533-7859005</b> 
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<br />
↵</p>
↵<p align="left" style="text-indent:18.75pt;background:white;">
↵	<b>扫描下方二维码进入“塑料圈”观看更多精彩内容</b> 
↵</p>
↵<p align="left" style="text-align:center;text-indent:18.75pt;background:white;">
↵	&nbsp;<img src="http://statics.myplas.com/upload/17/01/25/5887ef947b5a2.jpg" alt="" /> 
↵</p>`;

    var that = this;
    WxParse.wxParse('article', 'html', article, that, 5);
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    //String3
    
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    //String4
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
    //String5
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
    //String6
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
    //String7
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
    //String8
  }
})