import po from './assets/i18n/po.json'
import en from './assets/i18n/en.json'
import es from './assets/i18n/es.json'
import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n);

export default new VueI18n({
    locale: localStorage.getItem('lang') || 'en',
    messages: {
        en: en,
        po: po,
        es: es
    }
});