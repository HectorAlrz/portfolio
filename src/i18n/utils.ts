import { labels, languageList } from "./ui";

const defaultLang = "en"

export function useTranslations(lang: keyof typeof labels) {
  return function translate(key: keyof typeof labels[typeof defaultLang]) {
    return labels[lang][key] || labels[defaultLang][key];
  }
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languageList) return lang as keyof typeof languageList;
  return defaultLang;
}
