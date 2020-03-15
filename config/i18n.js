// Only one item MUST have the "default: true" key

module.exports = {
  de: {
    default: true,
    path: `de`,
    locale: `de-CH`,
    dateFormat: `DD.MM.YYYY`,
    siteLanguage: `de`,
    ogLanguage: `de_CH`,
    defaultTitle: `i18n mit Gatsby nutzen`,
    defaultDescription: `Gatsby Beispielseite, die MDX und i18n (frei von dependencies) nutzt`,
  },
  fr: {
    path: `fr`,
    locale: `fr-CH`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `fr`,
    ogLanguage: `en_CH`,
    defaultTitle: `Using i18n with Gatsby`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
  },
  it: {
    path: `it`,
    locale: `it-CH`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `it`,
    ogLanguage: `it_CH`,
    defaultTitle: `Using i18n with Gatsby`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
  },
  en: {
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `Using i18n with Gatsby`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
  },
}
