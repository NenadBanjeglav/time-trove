import { useState } from 'react'

import { Dropdown } from '../components/atoms/dropdown/Dropdown'
import { companyTypeOptions } from '../constants/companyType'
import { languages } from '../constants/languages'
import { Card } from '../components/atoms/card/Card'
import { ConfirmDialog } from '../components/molecules/confirmDialog/ConfirmDialog'
import { ChipStatus } from '../components/atoms/chip/chip.types'

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

      <ConfirmDialog
        status={ChipStatus.SUCCESS}
        title="Are you sure?"
        description="This action makes you 100$."
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        onConfirm={() => console.log('confirmed')}
        onCancel={() => console.log('canceled')}
        loading={false}
      />

      <ConfirmDialog
        status={ChipStatus.DANGER}
        title="Delete this task?"
        description="This action is permanent and cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={() => console.log('confirmed')}
        onCancel={() => console.log('canceled')}
        loading={false}
      />

      <ConfirmDialog
        status={ChipStatus.DANGER}
        title="Delete this task?"
        description="This action is permanent and cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={() => console.log('confirmed')}
        onCancel={() => console.log('canceled')}
        loading={false}
      />
    </div>
  )
}
