System.register("chunks:///_virtual/developer_dialog",["./SidebarDiaolog.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/SidebarDiaolog.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseComp.ts","./platform-const.ts","./platform.ts","./GameApp.ts","./GameUIConfig.ts"],(function(e){var n,o,t,a,c,i,s,r;return{setters:[function(e){n=e.inheritsLoose},function(e){o=e.cclegacy,t=e._decorator},function(e){a=e.BaseComp},function(e){c=e.PlatformCode},function(e){i=e.platform},function(e){s=e.GameApp},function(e){r=e.ViewName}],execute:function(){var u;o._RF.push({},"432573xeGtAZoytcwwzgiKc","SidebarDiaolog",void 0);var l=t.ccclass;t.property,e("sidebarPanel",l("sidebarPanel")(u=function(e){function o(){return e.apply(this,arguments)||this}n(o,e);var t=o.prototype;return t.start=function(){},t.update=function(e){},t.onDouyinGame=function(){i.string()==c.Bytedance?tt.navigateToScene&&tt.navigateToScene({scene:"sidebar",success:function(e){console.log("navigate to scene success")},fail:function(e){console.log("navigate to scene fail: ",e)}}):console.log("onAdd..1...")},t.onClose=function(){s.Layer.remove(r.TTSSIDEBAR)},o}(a))||u);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/developer_dialog', 'chunks:///_virtual/developer_dialog'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});