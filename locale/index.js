let VueI18n = require('vue-i18n');
let Vue = require('vue');

module.exports = {
    init() {
        let locales = {};

        locales.fr = requireLocale('fr');
        locales.en = requireLocale('en');

        return locales;
    },
    createI18n(language) {
        if (!Vue.default) {
            // Only use on server side.
            Vue.use(VueI18n);
        } else {
            Vue = Vue.default;
            VueI18n = VueI18n.default;
        }

        return new VueI18n({
            locale: language,
            silentTranslationWarn: true,
            fallbackLocale: 'fr',
            messages: this.init(),
        });
    },
};

function requireLocale(locale) {
    try {
        return require('./' + locale + '.json');
    } catch (e) {
        return false;
    }
}
