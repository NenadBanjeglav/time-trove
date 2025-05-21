import { useState } from 'react'

import { Dropdown } from '../components/atoms/dropdown/Dropdown'
import { companyTypeOptions } from '../constants/companyType'
import { languages } from '../constants/languages'

export const Dashboard = () => {
  const [locale, setLocale] = useState(languages[0].value)
  const [companyType, setCompanyType] = useState(companyTypeOptions[0].value)

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
    </div>
  )
}
