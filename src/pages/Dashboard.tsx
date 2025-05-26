import { useState } from 'react'

import { ChipSize, ChipStatus } from '../components/atoms/chip/chip.types'
import { Dropdown } from '../components/atoms/dropdown/Dropdown'
import { RadioGroup } from '../components/molecules/radioGroup/RadioGroup'
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
      <div>
        <RadioGroup
          name="priority"
          value={selected}
          onChange={setSelected}
          options={[
            { label: 'Low', value: 'low', status: ChipStatus.SUCCESS },
            { label: 'Medium', value: 'medium', status: ChipStatus.WARNING },
            { label: 'High', value: 'high', status: ChipStatus.DANGER },
          ]}
          size={ChipSize.Large}
        />
      </div>
    </div>
  )
}
