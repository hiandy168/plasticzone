//footer.js

var footerEvent={
    toRelease:function(){
        console.log("toRelease");
        
        // wx.navigateTo({
        //     url:"../headlinedetail/headlinedetail"
        // });
    },
    toIndex:function(){
        console.log("toIndex");
        // wx.navigateTo({
        //     url:"../index/index"
        // });
    }
}

function Footer(){
    var pages=getCurrentPages();
    var curPage=pages[pages.length-1];
    Object.assign(curPage,footerEvent);
    curPage.setData(footerData);
    return this;
    console.log(curPage.__route__);
    console.log(pages);
}

module.exports = {
   Footer
}

