import { useTranslation } from 'react-i18next'
import { FiMoon, FiSun } from 'react-icons/fi'

import { TRANSLATION_KEYS as T } from '../../../constants/translationKeys'
import { useAppState } from '../../../stores/useAppStore'

import { SliderBackground, SliderWrapper, ToggleButton, ToggleWrapper } from './themeToggle.styles'

export const ThemeToggle = () => {
  const { t } = useTranslation()
  const themeMode = useAppState(state => state.themeMode)
  const toggleTheme = useAppState(state => state.toggleTheme)
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
        <SliderBackground
          layout
          initial={false}
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
        />
      </SliderWrapper>
    </ToggleWrapper>
  )
}
