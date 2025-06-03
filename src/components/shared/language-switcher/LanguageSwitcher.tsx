import { useTranslation } from 'react-i18next'

import { languages } from '../../../constants/languages'
import { Dropdown } from '../../atoms/dropdown/Dropdown'

export const LanguageSwitcher = () => {
  const { i18n: i18nInstance } = useTranslation()

  const handleLanguageChange = (lang: string) => {
    i18nInstance.changeLanguage(lang)
  }

  return (
    <Dropdown
      options={languages}
      value={i18nInstance.language}
      onChange={handleLanguageChange}
      size="small"
    />
  )
}
