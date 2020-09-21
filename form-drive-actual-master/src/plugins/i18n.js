import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': require('../locales/en.json'),
    'de': require('../locales/de.json')
};
const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'de',
    messages,
});

export default {
    messages,
    i18n
};