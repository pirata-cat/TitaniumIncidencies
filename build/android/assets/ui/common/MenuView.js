function MenuView(e){var t=Ti.UI.createView({backgroundColor:"black",height:50,left:10,right:10,layout:"horizontal"}),i=[{text:L("home"),onClickEvent:"showTab1"},{text:L("about"),onClickEvent:"showTab3"}];for(var n in i){var a=i[n],o=Ti.UI.createLabel({height:50,width:"50%",text:a.text,textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER,color:"white",onClickEvent:a.onClickEvent});o.addEventListener("click",function(e){Ti.App.fireEvent(e.source.onClickEvent)}),o.backgroundColor=e==a.text?"#555555":"#222222",t.add(o)}return t}module.exports=MenuView;