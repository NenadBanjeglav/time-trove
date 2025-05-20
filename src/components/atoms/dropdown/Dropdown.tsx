import { useState, type FC, type SVGProps } from 'react'

import { CheckIcon } from '../../../assets/icons/CheckIcon'
import { ChevronDown } from '../../../assets/icons/ChevronDown'
import { ChevronUp } from '../../../assets/icons/ChevronUp'
import { useOutsideClick } from '../../../hooks/useOutsideClick'
import { Icon } from '../icon/Icon'
import { Text } from '../text/Text'

import { DropdownWrapper, TriggerButton, Menu, MenuItem, IconWrapper } from './dropdown.styles'

export type DropdownOption = {
  label: string
  value: string
  icon?: FC<SVGProps<SVGSVGElement>>
}
type DropdownProps = {
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
  size?: 'small' | 'large'
}

export const Dropdown = ({ options, value, onChange, size = 'small' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useOutsideClick<HTMLDivElement>(() => setIsOpen(false))

  const selected = options.find(opt => opt.value === value)

  const handleSelect = (val: string) => {
    onChange(val)
    setIsOpen(false)
  }

  return (
    <DropdownWrapper ref={ref} $size={size}>
      <TriggerButton onClick={() => setIsOpen(prev => !prev)} $size={size}>
        {selected && (
          <IconWrapper>
            {selected.icon && (
              <Icon icon={selected.icon} pallete="neutral" color="hue500" iconSize="small" />
            )}
            <Text as="span" fontSize="base" fontWeight={isOpen ? 'medium' : 'regular'}>
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
        <Menu $size={size}>
          {options.map(option => {
            const isActive = option.value === value
            return (
              <MenuItem key={option.value} onClick={() => handleSelect(option.value)}>
                <IconWrapper>
                  {option.icon && (
                    <Icon icon={option.icon} pallete="neutral" color="hue500" iconSize="small" />
                  )}
                  <Text as="span" fontSize="base" fontWeight={isActive ? 'medium' : 'regular'}>
                    {option.label}
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
