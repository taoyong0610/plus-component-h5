import Vue from 'vue';
import store from './stores/';
import router from './routers/';
// import FastClick from 'fastclick'
import TimeAgo from 'vue-timeago';

import modal from './plugins/modal';
import imgLazy from './plugins/imgLazy';
import imgCropper from './plugins/imgCropper';
import messageToast from './plugins/messageToast';

import './util/rem';
/* h5 调试 */
// import './util/console';
import './style/index.less';

// Filters
import * as filters from './filters';

/** Ajax */
import Ajax from './http';

/** common components */
import vIcon from './components/common/vIcons'; /* Icons */
import btnSwitch from './components/common/btnSwitch'; /* btnSwitch 按钮 */
import badge from './components/common/badge'; /* Badge 徽标 */
import fullSpin from './components/FullSpin';  /* 全屏加载动画 */
import userAvatar from './components/common/userAvatar'; /* Avatar 用户头像组件 */
import loadMore from './components/loadMore/loadMore';

const components = [vIcon, btnSwitch, badge, userAvatar, loadMore, fullSpin];

components.forEach(component => {
    Vue.component(component.name, component);
});

Vue.config.productionTip = false;

Vue.prototype.$http = Ajax; /* Ajax */
Vue.use(modal); /* 弹层 */
Vue.use(imgLazy); /* 图片懒加载 */
Vue.use(imgCropper); /* 图片裁剪 */
Vue.use(messageToast); /* 消息提示 */

Vue.prototype.$MessageBundle = filters.plusMessageFirst;


for(const k in filters) {
    Vue.filter(k, filters[k]);
}

Vue.use(TimeAgo, {
    name: 'timeago',
    locale: 'zh-CN',
    locales: {
        'zh-CN': require('vue-timeago/locales/zh-CN.json')
    }
});

/* 此处留一坑 */
// if('addEventListener' in document) {
//     document.addEventListener('DOMContentLoaded', function() {
//         FastClick.attach(document.body);
//     }, false);
// }

new Vue({
    store,
    router,
    data: {
        show_modal: false
    },
    directives: {},
}).$mount('#app');