import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
import transEng from "./translation/eng.json";
import transGer from "./translation/ger.json";
import transFre from "./translation/fre.json";
import transHin from "./translation/hin.json";  

i18n.use(XHR).use(LanguageDetector).init({
    debug:true,
    lng:"eng",
    fallbackLng:"eng",
    keySeparator:false,
    interpolation: {
        escapeValue: false // react already safes from xss
    },
    resources: {
        eng: {
          translations: transEng
        },
        ger: {
          translations: transGer
        },
        fre: {
          translations: transFre
        },
        hin: {
          translations: transHin
        }
    },
    ns: ["translations"],
    defaultNS: "translations"
});
export default i18n;