function ApplicationTabGroup(i,a,e){var t=Ti.UI.createTabGroup(),n=new i(L("home"));n.containingTab=Ti.UI.createTab({title:L("home"),window:n}),t.addTab(n.containingTab);var o=new e(L("about"));return o.containingTab=Ti.UI.createTab({title:L("about"),window:o}),t.addTab(o.containingTab),"iPhone OS"==Titanium.Platform.name?(n.hideNavBar(),o.hideNavBar(),t.bottom=-50):t.addEventListener("open",function(){t.animate({top:-65,duration:0})}),Ti.App.addEventListener("showTab1",function(){t.setActiveTab(0)}),Ti.App.addEventListener("showTab3",function(){t.setActiveTab(1)}),t}module.exports=ApplicationTabGroup;