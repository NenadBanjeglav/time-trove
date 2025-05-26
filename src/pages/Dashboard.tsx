import { useState } from 'react'

import { Card } from '../components/atoms/card/Card'
import { Dropdown } from '../components/atoms/dropdown/Dropdown'
import { ConfirmDialog } from '../components/molecules/confirm-dialog/ConfirmDialog'
import { companyTypeOptions } from '../constants/companyType'
import { languages } from '../constants/languages'
import type { ChipStatus } from '../components/atoms/chip/chip.types'

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

      <Card borderColor="primary" maxWidth="37.5rem" maxHeight="37.5rem">
        <h2>Reusable Card</h2>
        <p>This is a customizable card component.</p>
      </Card>

      <ConfirmDialog
        status={ChipStatus.SUCCESS}
        title="Are you sure?"
        description="This action makes you 100$."
        primaryActionLabel="Confirm"
        secondaryActionLabel="Cancel"
        onPrimaryAction={() => console.log('confirmed')}
        onSecondaryAction={() => console.log('canceled')}
        loading={false}
      />

      <ConfirmDialog
        status={ChipStatus.DANGER}
        title="Delete this task?"
        description="This action is permanent and cannot be undone."
        primaryActionLabel="Delete"
        secondaryActionLabel="Cancel"
        onPrimaryAction={() => console.log('confirmed')}
        onSecondaryAction={() => console.log('canceled')}
        loading={false}
      />

      <ConfirmDialog
        status={ChipStatus.DANGER}
        title="Delete this task?"
        description="This action is permanent and cannot be undone."
        primaryActionLabel="Delete"
        secondaryActionLabel="Cancel"
        onPrimaryAction={() => console.log('confirmed')}
        onSecondaryAction={() => console.log('canceled')}
        loading={false}
      />
    </div>
  )
}
