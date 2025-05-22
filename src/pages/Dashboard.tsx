import { useState } from 'react'

import { Dropdown } from '../components/atoms/dropdown/Dropdown'
import { RadioButton } from '../components/atoms/radio-button/RadioButton'
import { companyTypeOptions } from '../constants/companyType'
import { languages } from '../constants/languages'

export const Dashboard = () => {
  const [locale, setLocale] = useState(languages[0].value)
  const [companyType, setCompanyType] = useState(companyTypeOptions[0].value)

  const [selected, setSelected] = useState('low')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>
      <div>
        <Dropdown options={languages} value={locale} onChange={setLocale} />
      </div>

      <div>
        <Dropdown
          options={companyTypeOptions}
          value={companyType}
          size="large"
          onChange={setCompanyType}
        />
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <RadioButton checked={selected === 'low'} onChange={() => setSelected('low')} />
        <RadioButton checked={selected === 'medium'} onChange={() => setSelected('medium')} />
        <RadioButton checked={selected === 'high'} onChange={() => setSelected('high')} />
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <RadioButton error checked={selected === 'low'} onChange={() => setSelected('low')} />
        <RadioButton
          disabled
          checked={selected === 'medium'}
          onChange={() => setSelected('medium')}
        />
      </div>
    </div>
  )
}
