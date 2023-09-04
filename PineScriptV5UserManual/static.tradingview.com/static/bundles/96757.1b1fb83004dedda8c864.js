"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[96757],{881383:(e,t,n)=>{n.d(t,{getLiveRegionInstance:()=>o,initLiveRegion:()=>r});n(50959);class i{constructor(e,t=[]){this._messagesQueue=[],this._alternate=!1,this._renderedMessage=null,this._idCounter=0,this._containers=[...t],this._type=e}setContainers(e){this._containers=[...e]}addMessage(e,t=0){const n=this._generateId(),i={id:n,message:e,destroyTimeout:this._calculateDestroyTimeout(e,t)};return this._messagesQueue.push(i),this._renderedMessage||this._renderMessage(),{...i,type:this._type,destroy:this._getDestroyMessageCallback(n)}}destroyAll(){var e;this._messagesQueue=[],clearTimeout(null===(e=this._renderedMessage)||void 0===e?void 0:e.destroyTimer),this._containers.forEach((e=>{e.innerText=""})),this._renderedMessage=null,this._alternate=!1}_generateId(){return`live-region-${this._type}-${this._idCounter++}`}_calculateDestroyTimeout(e,t=0){const n=50*e.trim().length+200,i=250*e.trim().length;return Math.min(Math.max(n,t),i)}_findById(e){var t;return(null===(t=this._renderedMessage)||void 0===t?void 0:t.id)===e?this._renderedMessage:this._messagesQueue.find((t=>t.id===e))}_getDestroyMessageCallback(e){return async t=>{const n=this._findById(e);return!!n&&(n.renderedTo?!!t&&(this._removeRenderedMessage(),this._renderMessage(),!0):(this._removeFromQueue(n),!0))}}_removeRenderedMessage(){var e;const t=null===(e=this._renderedMessage)||void 0===e?void 0:e.renderedTo;t&&(t.innerText=""),this._renderedMessage=null}_removeFromQueue(e){this._messagesQueue=this._messagesQueue.filter((t=>t!==e))}async _renderMessage(){if(!this._containers.length||!this._messagesQueue.length)return;const e=this._alternate?this._containers[0]:this._containers[1],t=this._messagesQueue.shift();let n;e.innerText=t.message;const i=new Promise(((e,i)=>{n=setTimeout((()=>{var n;if((null===(n=this._renderedMessage)||void 0===n?void 0:n.id)===t.id)return this._removeRenderedMessage(),void this._renderMessage().then(e);i("Currently rendered message is not the one that you 're trying to destroy")}),t.destroyTimeout)}));this._renderedMessage={...t,renderedTo:e,destroyTimer:n,destroyPromise:i},this._alternate=!this._alternate}}class s extends i{}const a=new class{constructor(){this.isInited=!1,this._politeQueue=new s("polite"),this._assertiveQueue=new s("assertive")}renderTo(e,t=!1){return t&&this.destroy(),this._init(e)}destroy(){this._politeQueue.destroyAll(),this._assertiveQueue.destroyAll(),this.isInited=!1}sayPolitely(e,t){return this.isInited?this._politeQueue.addMessage(e,t):null}interrupt(e,t){return this.isInited?this._assertiveQueue.addMessage(e,t):null}_init(e){if(!e)return!1;if(this.isInited)return!1;return!!this._setContainers(e)&&(this.isInited=!0,!0)}_setContainers(e){const t=document.getElementById(e);if(!t)return!1;const n=t.querySelectorAll('[aria-live="polite"]'),i=t.querySelectorAll('[aria-live="assertive"]');return!(!n||2!==n.length||!i||2!==i.length)&&(this._politeQueue.setContainers([n[0],n[1]]),
this._assertiveQueue.setContainers([i[0],i[1]]),!0)}};function o(){return a}function r(e){return o().renderTo(e),o()}},690936:(e,t,n)=>{n.d(t,{openStreamMiniPlayer:()=>s});var i=n(320058);function s(e){Promise.all([n.e(22666),n.e(62253),n.e(9817),n.e(92108),n.e(57281),n.e(15250),n.e(35495),n.e(962),n.e(745),n.e(1480),n.e(51701)]).then(n.bind(n,693567)).then((t=>{const n=i.MiniPlayerSessionStorage.getItem(),s=n?JSON.parse(n):null,a=s?s.time:e.currentTime?e.currentTime:void 0,o=s?s.speed:e.currentSpeed?e.currentSpeed:void 0,r=s?s.currentVolume:e.currentVolume?e.currentVolume:void 0;t.renderStreamMiniPlayer({stream:e.stream,currentTime:a,currentSpeed:o,currentVolume:r,isTheaterMode:e.isTheaterMode,setMiniModeOnPageStream:e.setMiniModeOnPageStream})}))}},320058:(e,t,n)=>{n.d(t,{MiniPlayerSessionStorage:()=>s});const i="stream-mini-player";var s;!function(e){e.getItem=function(){return window.sessionStorage.getItem(i)},e.setItem=function(e,t,n,s){const a={time:t,data:e,url:null==e?void 0:e.url,speed:n,currentVolume:s};window.sessionStorage.setItem(i,JSON.stringify(a))},e.removeItem=function(){window.sessionStorage.removeItem(i)}}(s||(s={}))},167989:(e,t,n)=>{n.d(t,{initSubscribeToGlobalEventsStorage:()=>s});var i=n(251954);function s(){window.subscribeSignInViaSocialNetwork=e=>{i.subscribe("SignInSocialButtonClick",e,null)},window.subscribeGlobalEventsStorage=(e,t)=>{i.subscribe(e,t,null)}}},46277:(e,t,n)=>{n.r(t),n.d(t,{DialogAction:()=>s,FeatureId:()=>i,createExtendedSolution:()=>c,errorCode:()=>o,trackSocialNetworkEvent:()=>r});var i,s,a=n(776734);!function(e){e.CreateIdea="free__create_public_idea",e.CreateComment="free__create_comment",e.CreateMessageChat="free__create_message_chat"}(i||(i={})),function(e){e.Open="open",e.OpenSolution="open_solution"}(s||(s={}));const o="permissions_denied";async function r(e,t){var n;const i=await(0,a.getTracker)();if(i){const s=null===(n=window.user.id)||void 0===n?void 0:n.toString();i.trackPermissionDialog(e,t,s||"")}}function c(e,t){var n;const i=null===(n=e.match(/\d+\//gm))||void 0===n?void 0:n[0];return e.replace(i||"",i+t)}},685483:(e,t,n)=>{n(309858);var i=n(444372),s=n(960337),a=n(371927),o=n(883882),r=n(345848),c=n(226722),l=n(685459),u=n.n(l),d=n(201089);const h=(0,d.getLogger)("UserSessions");let m,g=0,f=!1,_=!1;const p=new(u());function w(e){if(f){ChartApiInstance.connect({tokenGrabSession:e});const t=ChartApiInstance.connectDfd;return f=!1,m&&(t.then((function(){(0,r.trackEvent)("Auth","Different Device Active Recovery"),m.destroy(),m=void 0})),t.catch((function(){f=!0})),f||p.emitEvent("Session recovered")),t}}c.TVXWindowEvents.on("session_captured",(function(){w()})),o.pushStreamMultiplexer.on("auth",(function(e){if(is_authenticated&&user&&user.session_hash&&"active_session_changed"===e.type&&e.timestamp>g){if(g=e.timestamp,user.session_hash===e.source_session&&e.source_session in e.changes&&"cycled"===e.changes[e.source_session].a&&(user.session_hash=e.changes[e.source_session].h),
user.session_hash in e.changes&&"logout"===e.changes[user.session_hash].a)return void(e.source_session!==user.session_hash&&(t=e.device_info,(0,s.createGoProDialog)({feature:"sessionLogout",customParams:t,actions:[{action:a.PredefinedAction.Close,text:i.t(null,{context:"input"},n(309633))}]})));if(!e.active_sessions)return;let o=!1;for(let t=e.active_sessions.length-1;t>=0;t--)user.session_hash===e.active_sessions[t]&&(o=!0);o?m&&w():function(e){if(f)return;let t=!1;if(ChartApiInstance&&(ChartApiInstance.disconnect(),t=!0),t){(0,r.trackEvent)("Auth","Different Device Active Dialog"),f=!0,h.logNormal("Different device connection detected: "+JSON.stringify(e));const t=function(){_=!1;const e=w(!0);e&&e.then((function(){c.TVXWindowEvents.emit("session_captured")}))};if(!_){const o={feature:"sessionLock",customParams:e,actionAfterClose:t,actions:[{action:a.PredefinedAction.Close,text:i.t(null,void 0,n(436598)),onClick:t}]};(0,s.createGoProDialog)(o).then((()=>{_=!0}))}p.emitEvent("Session broken down.")}}(e.device_info)}var t}));n(583912),n(849289);var v=n(77034),y=n.n(v),b=n(799786);y().safari&&(0,b.createGroup)().add({desc:"Prevent exit native fullscreen",hotkey:27,handler:()=>{}});n(547982);var S=n(730128),P=n.n(S),T=n(318172),M=n(638456),D=n(531005);function L(e){const t=e.target,n=t.closest&&t.closest(":link");n&&n.target&&n.relList&&n.relList.add("noopener")}var I=n(778785);var C=n(43464),k=n(261030);function A(){var e;const t=null===(e=(0,M.desktopAppVersion)())||void 0===e?void 0:e.match(/1.0.(\d+)/);((0,M.isWindows)()||(0,M.isMac)())&&t&&Number(t[1])<=15&&async function(){const{showUpdateAppDialog:e,updateDesktopAppDialogKey:t,dialogHideValue:i}=await Promise.all([n.e(75288),n.e(22666),n.e(62253),n.e(92191),n.e(9817),n.e(92108),n.e(68992),n.e(33199),n.e(61298),n.e(967),n.e(36953),n.e(27781),n.e(43508),n.e(48767),n.e(962),n.e(745),n.e(8658),n.e(90680),n.e(7333)]).then(n.bind(n,852445));window.sessionStorage.getItem(t)!==i&&e()}()}var E=n(120780);async function x(){const e=await Promise.all([n.e(92191),n.e(56400),n.e(98899),n.e(3630),n.e(962),n.e(13830),n.e(59805)]).then(n.bind(n,770025));await e.showSurveyToast()&&async function(){(await Promise.all([n.e(22666),n.e(62253),n.e(9817),n.e(92108),n.e(61298),n.e(41732),n.e(962),n.e(745),n.e(36320)]).then(n.bind(n,540072))).renderSurveyDialog()}(),(0,E.fetch)("/api/v1/users/accept-survey/",{method:"POST",credentials:"include"})}var O=n(320058),R=n(690936);async function N(e){const[{signInBannerWatcher:t},{globalToasts:i}]=await Promise.all([Promise.all([n.e(962),n.e(94578)]).then(n.bind(n,923995)),Promise.all([n.e(98899),n.e(3630),n.e(962),n.e(13830),n.e(94291)]).then(n.bind(n,13830))]);t.showBanner(e),t.onResize((e=>{const t=e+"px";i.update({rootContainerOptions:{bottom:t}})}))}var V=n(740254),F=n(833813),G=n(881383),Q=(n(659863),n(501437)),j=n(691805),$=n(588948),W=n(707957);const B=new W.Delegate;function H(){(0,j.appendScript)("https://accounts.google.com/gsi/client"),window.handleGoogleCredentialResponse=e=>{const t=(0,Q.getUrlParams)();(0,
r.trackEvent)("Login","one tap sign in"),window.open(`/accounts/complete/android-jwt/?token=${e.credential}&feature_source=google_one_tap&utm_source=${t.utmsource}&utm_medium=${t.utmmedium}`)},window.logMomentNotification=e=>{e.isDisplayed()?(B.fire("shown"),window.is_authenticated?J():window.loginStateChange.subscribe(null,J,!0)):e.isSkippedMoment()&&!e.isDisplayed()?B.fire(e.getSkippedReason()):B.fire(null)};const e=document.createElement("div");if(e.setAttribute("id","g_id_onload"),e.setAttribute("data-prompt_parent_id","one-tap-signin-container"),e.setAttribute("data-client_id",window.GOOGLE_CLIENT_ID),e.setAttribute("data-callback","handleGoogleCredentialResponse"),e.setAttribute("data-moment_callback","logMomentNotification"),e.setAttribute("data-cancel_on_tap_outside","false"),window.TradingView.onChartPage){const e=document.createElement("div");e.setAttribute("id","one-tap-signin-container"),e.style.top="36px",e.style.position="fixed",e.style.right="39px",e.style.zIndex="9999",document.body.appendChild(e)}document.body.appendChild(e)}function J(){window.google.accounts.id.cancel()}var Y=n(125226);var q=n(819470),U=n(860037),z=n(278062),X=n(392896),K=n(706474),Z=n(12481),ee=n(49437),te=n(175203),ne=n(541558);const ie="activeBrowserTabsCounter";let se=null;class ae{constructor(){this._isMasterTab=!1,this._lastState={tabs:[],ts:0},this._sendReport=(0,Z.default)(((e,t)=>{this._isMasterTab&&(te.telemetry.sendReport("site","browsers_tabs_ratio_frame",{value:e}),te.telemetry.sendReport("site","browsers_tabs_count_frame",{value:t}))}),2e4),this._guid=(0,ne.guid)(),this._initTimer()}unregisterTab(){clearInterval(this._timerId);const e=this._getState();e.tabs=e.tabs.filter((e=>e[0]!==this._guid)),e.ts=Date.now(),this._setState(e)}static getInstance(){return null===se&&(se=new ae),se}_checkIsMaster(e){const t=0===e.tabs.length,n=Date.now()-e.ts>2e4;return t||n||e.tabs[0][0]===this._guid}_countVisibleTabsRatio(e){const t=e.reduce(((e,t)=>e+("visible"===t[1]?1:0)),0);return Math.round(t/e.length*100)}_getState(){const e=ee.TVLocalStorage.getItem(ie),t=null!==e?JSON.parse(e):this._lastState;return this._lastState=t,t}_setState(e){ee.TVLocalStorage.setItem(ie,JSON.stringify(e))}_pulse(){const e=this._lastState.tabs,t=document.visibilityState,n=this._getState(),i=n.tabs.find((e=>e[0]===this._guid)),s=this._isMasterTab;this._isMasterTab=this._checkIsMaster(n);const a=!s&&this._isMasterTab;if(void 0!==i&&i[1]!==t&&(i[1]=t),a)n.tabs=[[this._guid,t]],n.ts=Date.now(),this._isMasterTab=!0,this._sendReport(100,1);else if(this._isMasterTab){n.ts=Date.now();const t=this._countVisibleTabsRatio(e),i=this._countVisibleTabsRatio(n.tabs);t!==i&&this._sendReport(i,n.tabs.length)}else void 0===i&&n.tabs.push([this._guid,t]);this._setState(n)}_initTimer(){this._pulse(),this._timerId=setInterval((()=>this._pulse()),1e4)}}var oe=n(46277),re=n(167989),ce=n(16188),le=n(960769);const ue=()=>{const e=JSON.parse(ee.TVLocalStorage.getItem("password_popup_data")||"null");(0,
Y.isFeatureEnabled)("change_password_suggestion_popup")&&(!(null==e?void 0:e.lastTimestamp)||function(e,t,n){const i=n?le.utc:le,s=i(e).startOf("day"),a=i(t).startOf("day");return s.diff(a,"days")}(new Date,new Date(e.lastTimestamp))>=2)&&(!(null==e?void 0:e.showCount)||e.showCount<3)&&(ee.TVLocalStorage.setItem("password_popup_data",JSON.stringify({lastTimestamp:(new Date).getTime(),showCount:(null==e?void 0:e.showCount)?e.showCount+1:1})),Promise.all([n.e(19466),n.e(22666),n.e(62253),n.e(92191),n.e(9817),n.e(34465),n.e(92108),n.e(69121),n.e(66639),n.e(88194),n.e(87845),n.e(68992),n.e(33199),n.e(61298),n.e(967),n.e(36953),n.e(27781),n.e(60123),n.e(43508),n.e(48767),n.e(92397),n.e(962),n.e(97433),n.e(745),n.e(8658),n.e(90680),n.e(58431),n.e(42533)]).then(n.bind(n,384844)).then((({changePasswordDialog:e})=>e())))};var de=n(823127);const he=(0,d.getLogger)("Chart.Base");var me;if(window.initData.lfs&&(me=P().prototype.disconnect,P().prototype.disconnect=function(e){e||me.call(this)}),loginStateChange.subscribe(window,(function(e){if(user&&is_authenticated){TVLocalStorage.getItem("paid_account_username")&&TVLocalStorage.removeItem("paid_account_username");const e=TVLocalStorage.getItem("last_username"),t=TVLocalStorage.getItem("previous_username");e!==user.username&&(TVLocalStorage.setItem("last_username",user.username),e&&e!==t&&(TVLocalStorage.setItem("previous_username",e),(0,X.paidAccountCheck)({isNeedCancelButton:!0}).catch((()=>{})))),ue()}else{const e=TVLocalStorage.getItem("paid_account_username");e&&Promise.resolve().then(n.bind(n,781666)).then((t=>t.showSignModal({source:"Paid Account Popup",username:e})))}e||(0,D.reconnectChartApi)()})),de((function(){"#signin"===window.location.hash?Promise.resolve().then(n.bind(n,781666)).then((e=>e.showSignModal({source:"Redirect"}))):"#signup"===window.location.hash&&Promise.resolve().then(n.bind(n,781666)).then((e=>e.showSignModal({mode:"signup",source:"Redirect"}))),de(".js-time-upd").timeUpdate(),(0,M.checkPageType)("mobile")?k.cookieSettingsReady.resolve():(0,C.initCookiesNotification)().then((async()=>{const e=(0,K.placementFromPageLocation)();if(e){if((0,V.enabled)(F.ProductFeatures.NO_SPONSORED_ADS))return;let t=!0;"ru"===window.locale&&(0,Y.isFeatureEnabled)("careers_toast")&&(t=!await async function(){return(await Promise.all([n.e(92191),n.e(56400),n.e(98899),n.e(3630),n.e(5292),n.e(962),n.e(13830),n.e(13087)]).then(n.bind(n,577683))).initNotification()}()),t&&await Promise.all([Promise.all([n.e(56400),n.e(9944),n.e(40254),n.e(83639),n.e(34136)]).then(n.bind(n,968241)),Promise.all([n.e(98899),n.e(3630),n.e(962),n.e(13830),n.e(94291)]).then(n.bind(n,13830))]).then((([t,n])=>{t.platformPlacement.setPlacement(e.placement).setToasts(n.globalToasts).addTargeting("placement",e.targeting).display()}))}})),(0,Y.isFeatureEnabled)("desktop_version_notification_enabled")&&(0,M.isDesktopApp)()&&A(),window.initData.show_idc_dialog?n.e(9726).then(n.bind(n,827189)).then((e=>{e.showIdcAgreementDialog()
})):(window.initData.banned_payments&&Promise.all([n.e(54712),n.e(76592),n.e(33371),n.e(58755),n.e(39843),n.e(34873),n.e(60380),n.e(25977),n.e(25208),n.e(11595),n.e(7156),n.e(29201)]).then(n.bind(n,424569)).then((({warningDialog:e})=>{e({title:i.t(null,void 0,n(300963)),content:"<p>"+i.t(null,void 0,n(440957))+"</p>",closeButtonText:i.t(null,{context:"input"},n(309633))}).open()})),window.initData.show_user_survey&&x())})),TradingView.onChartPage||(he.logNormal("low quality mode is enabled"),ChartApiInstance.enableLowQualityMode()),window.pro=new T.Pro(window.shopConf),loginStateChange.fire(!0),Promise.all([n.e(8658),n.e(38578)]).then(n.t.bind(n,208658,23)).then((({default:e})=>{e.init()})),!window.is_authenticated){let e,t={};const n=(0,q.getReferralParams)();n&&"direct_affiliate_params"===n.key?t=n.params:n&&"_referralProgramId"===n.key&&(e=n.params);const i=t.aff_id;if(i||e){const n=window.location.hostname.split("."),s=n.slice(1,n.length).join(".");i&&i.length<=32?((0,r.trackEvent)("Affiliate Program","Referral Visit (Direct)",i),z.PartnerAPI.addClick({target_link:t.target_link,aff_id:t.aff_id,aff_sub:t.aff_sub,aff_source:t.source,aff_unique1:t.aff_unique1,aff_sub2:t.aff_sub2,aff_sub3:t.aff_sub3,aff_click_id:t.aff_click_id,file_id:t.file_id,url_id:t.url_id}).catch((e=>he.logNormal(`Service Partner Program - request error - ${e}`))),ce.set("direct_affiliate_params",JSON.stringify(t),90,"/",s?`.${s}`:""),(0,q.createReferralWelcome)()):e&&e.length<=150&&(ce.set("_referralProgramId",e,0,"/",s?`.${s}`:""),(0,q.createReferralWelcome)())}}if(document.addEventListener("click",L,!0),n.e(14436).then(n.bind(n,231326)).then((e=>{(new e.GdprNotification).showIfNotAccepted()})),n.e(72226).then(n.bind(n,727655)).then((e=>{e.openSupportDialogOnLoad()})),n.e(14309).then(n.bind(n,211860)).then((e=>{e.openPaymentOrderDialogOnLoad()})),n.e(99140).then(n.bind(n,130179)).then((e=>{e.openCoinsDialogOnLoad()})),I.mobiletouch||Promise.all([n.e(25034),n.e(92191),n.e(4015),n.e(72639),n.e(66639),n.e(32109),n.e(89842),n.e(54712),n.e(88548),n.e(76592),n.e(13423),n.e(33371),n.e(42254),n.e(42244),n.e(6744),n.e(73628),n.e(17834),n.e(45403),n.e(68299),n.e(44861),n.e(4809),n.e(41603),n.e(84277),n.e(62196),n.e(71161),n.e(962),n.e(20651),n.e(10315),n.e(47792),n.e(23409),n.e(60146),n.e(10341),n.e(89568)]).then(n.t.bind(n,304808,23)),!window.is_authenticated&&(window.GOOGLE_CLIENT_ID&&!(0,$.getFreshInitData)().googleSigninPopupDisabled&&(M.CheckMobile.iOS()?setTimeout((()=>{H()}),6e4):H()),window.location.pathname.startsWith("/symbols")&&(0,Y.isFeatureEnabled)("enable_sign_in_banner_on_symbol_page"))){const e=setTimeout((()=>N(200)),5e3),t=n=>{"shown"===n?clearTimeout(e):(clearTimeout(e),setTimeout((()=>N(200)),3e3),B.unsubscribe(null,t))};B.subscribe(null,t)}if(window.initData.offlineAlertEventsOnInit&&!window.TradingView.onChartPage&&Promise.all([n.e(22666),n.e(48986),n.e(7116),n.e(89916),n.e(962),n.e(69752),n.e(90071),n.e(91046)]).then(n.bind(n,724721)).then((({tryInitAlertsNotifications:e})=>e())),async function(){
(await Promise.all([n.e(92191),n.e(56400),n.e(98899),n.e(3630),n.e(25807),n.e(962),n.e(13830),n.e(97276)]).then(n.bind(n,914389))).initNotification()}(),document.addEventListener("DOMContentLoaded",(function(){document.addEventListener("click",(e=>{if(e.target.matches(".js-open-support-dialog")&&((0,U.showSupportDialog)(),e.preventDefault()),e.target.search&&!1===window.location.pathname.startsWith("/support")){const t=(0,Q.getQueryParams)(e.target.search.substring(1));if("solution"in t){const n=t.solution.match(/[a-zA-Z\_]+/g);(0,U.showSupportDialog)({solutionId:parseInt(t.solution,10)}),n&&!e.defaultPrevented&&(0,oe.trackSocialNetworkEvent)(n[0],oe.DialogAction.OpenSolution),e.preventDefault()}}}))})),(0,Y.isFeatureEnabled)("count-browser-tabs")){const e=ae.getInstance();window.addEventListener("unload",(()=>e.unregisterTab()))}try{var ge=O.MiniPlayerSessionStorage.getItem();null!==ge&&(window.location.pathname.startsWith("/streams")&&0!==window.location.pathname.split("/streams/")[1].length?O.MiniPlayerSessionStorage.removeItem():(0,R.openStreamMiniPlayer)({stream:JSON.parse(ge).data}))}catch(e){}(0,G.initLiveRegion)("aria-live-regions-wrapper"),(0,re.initSubscribeToGlobalEventsStorage)()},706474:(e,t,n)=>{n.d(t,{placementFromPageLocation:()=>s});var i=n(890972);function s(){if(window.TradingView.onChartPage)return{placement:i.Placement.Platform,targeting:i.PlacementTargeting.Platform};const e=window.location.pathname;return e.startsWith("/heatmap")?{placement:i.Placement.HeatMap,targeting:i.PlacementTargeting.HeatMap}:/^\/(crypto-|forex-)?screener\//.test(e)?{placement:i.Placement.Screener,targeting:i.PlacementTargeting.Screener}:void 0}},55826:(e,t,n)=>{n.r(t),n.d(t,{agoDateFormatter:()=>m,destroy:()=>f,getFormattedDataByDate:()=>d,jQueryCompatibleAgoDateFormatter:()=>h,jQueryCompatibleDestroy:()=>g,shortFormat:()=>_});var i=n(444372),s=n(960769);const a={L:"MMM D",LL:"YYYY MMM D",LLL:"HH:mm - YYYY MMM D"},o={ja:a,ko:a};function r(e){return 6e4-e%6e4}function c(e){const t=36e5;return t-e%t}function l(e){const t=864e5;return t-e%t}function u(e){const t=e.getAttribute("data-ago-date-timer");t&&clearTimeout(+t)}function d({date:e,forceAgoFormat:t,customDateFormat:n,customDateFormatLocale:i}){s.relativeTimeThreshold("h",24),"number"==typeof e&&(e=new Date(e));const a=s(new Date).diff(e),u=function(e){let t=200;if((e=Math.floor(e/6e4))<60)t+=r(e);else if(e<1440)t+=c(e);else{if(!(e<43200))return 0;t+=l(e)}return t}(a),d=o[window.language];let h="",m={L:"L",LL:"LL",LLL:"LLL"};d&&(m=d),i&&(m.LLL=i),h=t||Math.round(a/36e5)<24?s(e).fromNow():n?s(e).format(n):e.getFullYear()===(new Date).getFullYear()?s(e).format(m.L):s(e).format(m.LL);return{diff:a,formattedDate:s(e).format(m.LLL),text:h,updateTimeout:u}}function h(e,t,n,i,s){const a=Array.from(e);for(const e of a)m(e,t,n,i,s)}function m(e,t,n,i,s){const{diff:a,formattedDate:o,text:r,updateTimeout:c}=d({date:t,forceAgoFormat:n,customDateFormat:s}),l=e.parentElement;if(null!==l&&l.classList.toggle("just-now",a<45e3),e.setAttribute("title",o),e.textContent=r,c){u(e)
;const n=setTimeout((()=>{m(e,t)}),c);e.setAttribute("data-ago-date-timer",n.toString())}else e.removeAttribute("data-ago-date-timer");if(i){const t=e.closest(".js-visible-after-ago-formatter-inited");null!==t&&t.classList.remove("i-invisible","js-visible-after-ago-formatter-inited")}}function g(e){const t=Array.from(e);for(const e of t)f(e)}function f(e){u(e);const t=Array.from(e.querySelectorAll("[data-ago-date-timer]"));for(const e of t)u(e)}function _(e){let t=Math.floor(e/6e4),s="",a=0;return t<60?(s=(t<1?0:t)+i.t(null,{context:"date_diff_short"},n(242893)),a=r(e)):t<1440?(t=Math.floor(t/60),s=t+i.t(null,{context:"date_diff_short"},n(197929)),a=c(e)):t<43200?(t=Math.floor(t/1440),s=t+i.t(null,{context:"date_diff_short"},n(291059)),a=l(e)):t<15768e3?(t=Math.floor(t/43200),s=t+i.t(null,{context:"date_diff_short"},n(198738))):(t=Math.floor(t/15768e3),s=t+i.t(null,{context:"date_diff_short"},n(630424))),a&&(a+=200),{text:s,timeout:a}}},278062:(e,t,n)=>{n.d(t,{PartnerAPI:()=>u,PartnerStatus:()=>c,PartnerType:()=>r,PayoutHistoryType:()=>l,PayoutType:()=>a,getPartnerDetails:()=>g});const i=window.initData.tvPartnersHost,s=`${i}/api/v1`;var a,o,r,c,l,u;function d(e){return`${s}${e}/`}function h(e,t,n,i){let s=d(e);return t&&!n&&(s=d(`${e}/${t}`)),t&&n&&(s=d(`${e}/${t}/${n}`)),i&&(s+=`?sort=${i}`),s}async function m(e,t,n){const i={method:e,credentials:"include"};return i.headers=new Headers,i.headers.set("Content-Type","application/json"),i.headers.set("Accept","application/json"),void 0!==n&&(i.body=JSON.stringify(n)),fetch(t,i).then((e=>e.json())).then((e=>{if(e.error)throw new Error(e.error);return e}))}async function g(){const e={method:"GET"};return e.headers=new Headers,e.headers.set("Content-Type","application/json"),fetch("/partners/details/").then((e=>e.json()))}!function(e){e.Paypal="paypal",e.Wire="wire"}(a||(a={})),function(e){e.USD="usd"}(o||(o={})),function(e){e.Lifetime30="lifetime30",e.CPA="cpa"}(r||(r={})),function(e){e.Pending="pending",e.Active="active",e.Rejected="rejected",e.Blocked="blocked",e.NotVerified="not_verified"}(c||(c={})),function(e){e.Pending="pending",e.Completed="completed",e.InProgress="in_progress",e.DjangoError="django_eror",e.PayoutError="payout_error"}(l||(l={})),function(e){e.isPartner=async function(){return m("GET",d("/is-partner"))},e.createPartner=async function(e){return m("POST",d("/partner"),e)},e.getStats=async function(e,t,n){return m("GET",h("/stats",e,t,n))},e.getReport=async function(e,t){return m("GET",h("/report",e,t))},e.getReportCSV=async function(e,t){return m("GET",h("/report-csv",e,t))},e.getHistory=async function(){return m("GET",d("/history"))},e.getConversionReport=async function(e,t){return m("GET",h("/conversion-report",e,t))},e.getSettings=async function(){return m("GET",d("/settings"))},e.postSettings=async function(e){return m("POST",d("/settings"),e)},e.addClick=async function(e){return m("POST",`${i}/analytics/`,e)},e.postIRSForm=async function(e){const t=d("/irs-form"),n=new FormData;n.append("form",e);const i=new Headers({accept:"application/json"})
;return fetch(t,{method:"POST",credentials:"include",headers:i,body:n}).then((e=>e.json()))}}(u||(u={}))},819470:(e,t,n)=>{n.d(t,{createReferralWelcome:()=>s,getReferralParams:()=>a});var i=n(501437);function s(){return Promise.all([n.e(94807),n.e(22666),n.e(62253),n.e(92191),n.e(9817),n.e(92108),n.e(68992),n.e(73151),n.e(33199),n.e(61298),n.e(967),n.e(36953),n.e(27781),n.e(43508),n.e(48767),n.e(962),n.e(23127),n.e(3139),n.e(745),n.e(8658),n.e(90680),n.e(40254),n.e(36057)]).then(n.bind(n,846734)).then((e=>e.createReferralWelcomeDialog()))}function a(){const e=(0,i.getUrlParams)(),t=e.share_your_love,n=e.aff_id;if(n&&n.length<=32){const t={aff_id:n,target_link:`${window.location.origin}${window.location.pathname}`};return[{key:"source",maxLength:64},{key:"aff_sub",maxLength:64},{key:"url_id",maxLength:256},{key:"file_id",maxLength:256},{key:"aff_sub2",maxLength:64},{key:"aff_sub3",maxLength:64},{key:"aff_unique1",maxLength:64},{key:"aff_click_id",maxLength:64}].forEach((n=>{const i=n.key;e[i]&&e[i].length<=n.maxLength&&(t[i]=e[i])})),{key:"direct_affiliate_params",params:t}}return t&&t.length<=150?{key:"_referralProgramId",params:t}:null}}}]);