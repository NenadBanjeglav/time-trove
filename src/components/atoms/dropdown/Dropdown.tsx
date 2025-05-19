import { useEffect, useRef, useState, type FC, type SVGProps } from 'react'

import { CheckIcon } from '../../../assets/icons/CheckIcon'
import { ChevronDown } from '../../../assets/icons/ChevronDown'
import { ChevronUp } from '../../../assets/icons/ChevronUp'
import { Icon } from '../icon/Icon'
import { Text } from '../text/Text'

import { DropdownWrapper, TriggerButton, Menu, MenuItem, IconWrapper } from './dropdown.styles'

type LanguageOption = {
  label: string
  value: string
  icon: FC<SVGProps<SVGSVGElement>>
}

type DropdownProps = {
  languages: LanguageOption[]
}

export const Dropdown = ({ languages }: DropdownProps) => {
  const [selectedLocale, setSelectedLocale] = useState(languages[0]?.value)
  const [isOpen, setIsOpen] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const selected = languages.find(lang => lang.value === selectedLocale)

  const handleSelect = (locale: string) => {
    setSelectedLocale(locale)
    setIsOpen(false)
  }

  return (
    <DropdownWrapper ref={wrapperRef}>
      <TriggerButton onClick={() => setIsOpen(prev => !prev)}>
        {selected && (
          <IconWrapper>
            <Icon icon={selected.icon} pallete="neutral" color="hue500" iconSize="small" />
            <Text as="span" fontSize="base" fontWeight={isOpen ? 'regular' : 'semiBold'}>
              {selected.label}
            </Text>
          </IconWrapper>
        )}
        <Icon
          icon={isOpen ? ChevronUp : ChevronDown}
          pallete="neutral"
          color="hue500"
          iconSize="xSmall"
        />
      </TriggerButton>

      {isOpen && (
        <Menu>
          {languages.map(lang => {
            const isActive = lang.value === selectedLocale
            return (
              <MenuItem key={lang.value} onClick={() => handleSelect(lang.value)}>
                <IconWrapper>
                  <Icon icon={lang.icon} pallete="neutral" color="hue500" iconSize="small" />
                  <Text as="span" fontSize="base" fontWeight={isActive ? 'semiBold' : 'regular'}>
                    {lang.label}
                  </Text>
                </IconWrapper>

                {isActive && (
                  <Icon icon={CheckIcon} pallete="primary" color="hue200" iconSize="xSmall" />
                )}
              </MenuItem>
            )
          })}
        </Menu>
      )}
    </DropdownWrapper>
  )
}
