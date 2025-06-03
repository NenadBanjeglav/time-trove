import { useTranslation } from 'react-i18next'
import { FiMoon, FiSun } from 'react-icons/fi'

import { useThemeMode } from '../../../ThemeModeProvider'
import { TRANSLATION_KEYS as T } from '../../../constants/translationKeys'

import { SliderBackground, SliderWrapper, ToggleButton, ToggleWrapper } from './themeToggle.styles'

export const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useThemeMode()
  const { t } = useTranslation()

  return (
    <ToggleWrapper>
      <ToggleButton
        selected={themeMode === 'light'}
        onClick={() => themeMode !== 'light' && toggleTheme()}
      >
        <FiMoon />
        {t(T.THEME.LIGHT)}
      </ToggleButton>
      <ToggleButton
        selected={themeMode === 'dark'}
        onClick={() => themeMode !== 'dark' && toggleTheme()}
      >
        <FiSun />
        {t(T.THEME.DARK)}
      </ToggleButton>
      <SliderWrapper $themeMode={themeMode}>
        <SliderBackground layout transition={{ type: 'spring', damping: 15, stiffness: 250 }} />
      </SliderWrapper>
    </ToggleWrapper>
  )
}
