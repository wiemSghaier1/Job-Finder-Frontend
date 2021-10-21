import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

const LanguagePicker = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState()
    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.className);
        setLang(e.target.className);
    }
    const getLanguage = () => {
        return i18n.language ||
            (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
            'en';
    };
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'fr', name: 'Frensh' },
    ]
    const options = languages.map(language => {
        if (language.code != lang) {
            return <li key={language.code} onClick={handleChangeLanguage}><div value={language.code} className={language.code} ></div></li>
        }
    });
    useEffect(() => {

        setLang(getLanguage())
    }, [])
    return (
        <div className="lang">
            <div
                className={lang}
            >
            </div>
            <ul className="dropdown" >
                {options}
            </ul>
        </div>
    )
}
export default LanguagePicker;