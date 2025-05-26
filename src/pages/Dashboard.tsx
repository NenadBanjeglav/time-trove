import { useState } from 'react'

import { Card } from '../components/atoms/card/Card'
import { Card } from '../components/atoms/card/Card'
import { Dropdown } from '../components/atoms/dropdown/Dropdown'
import { companyTypeOptions } from '../constants/companyType'
import { languages } from '../constants/languages'

export const Dashboard = () => {
  const [locale, setLocale] = useState(languages[0].value)
  const [companyType, setCompanyType] = useState(companyTypeOptions[0].value)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>
      <Card>
        <Dropdown options={languages} value={locale} onChange={setLocale} />
      </Card>

      <Card>
        <Dropdown
          options={companyTypeOptions}
          value={companyType}
          size="large"
          onChange={setCompanyType}
        />
      </Card>

      <Card borderColor="primary" maxWidth="600px" maxHeight="600px">
        <h2>Reusable Card</h2>
        <p>This is a customizable card component.</p>
      </Card>
    </div>
  )
}
