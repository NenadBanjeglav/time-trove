import { useState } from 'react'
import { Navigate, useOutletContext } from 'react-router-dom'

import { Card } from '../components/atoms/card/Card'
import { Dropdown } from '../components/atoms/dropdown/Dropdown'
import { ConfirmDialog } from '../components/molecules/confirm-dialog/ConfirmDialog'
import { DialogVariant } from '../components/molecules/confirm-dialog/confirmDialog.types'
import { PageStateContainer } from '../components/organisms/page-state-container/PageStateContainer'
import { companyTypeOptions } from '../constants/companyType'
import { languages } from '../constants/languages'
import { useAppStatus } from '../contexts/AppStatusContext'

type LayoutContext = { navHeight: number }

export const Dashboard = () => {
  const { navHeight } = useOutletContext<LayoutContext>()
  const { maintenance } = useAppStatus()

  const [locale, setLocale] = useState(languages[0].value)
  const [companyType, setCompanyType] = useState(companyTypeOptions[0].value)

  const isLoading = false
  const data: number[] = []
  const error = false

  const handleClick = () => {
    if (error) {
      console.log('Retrying fetch...')
    } else if (!data.length) {
      console.log('Opening add task modal...')
    }
  }

  if (maintenance) return <Navigate to="/maintenance" replace />

  return (
    <PageStateContainer
      navHeight={navHeight}
      isLoading={isLoading}
      error={error}
      isEmpty={!data.length}
      onClick={handleClick}
    >
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
        variant={DialogVariant.SUCCESS}
        title="Are you sure?"
        description="This action makes you 100$."
        primaryActionLabel="Confirm"
        onPrimaryAction={() => console.log('confirmed')}
        loading={false}
      />

      <ConfirmDialog
        variant={DialogVariant.DANGER}
        title="Delete this task?"
        description="This action is permanent and cannot be undone."
        primaryActionLabel="Delete"
        secondaryActionLabel="Cancel"
        onPrimaryAction={() => console.log('confirmed')}
        onSecondaryAction={() => console.log('canceled')}
        loading={false}
      />

      <ConfirmDialog
        variant={DialogVariant.DANGER}
        title="Delete this task?"
        description="This action is permanent and cannot be undone."
        primaryActionLabel="Delete"
        secondaryActionLabel="Cancel"
        onPrimaryAction={() => console.log('confirmed')}
        onSecondaryAction={() => console.log('canceled')}
        loading={false}
      />
    </PageStateContainer>
  )
}
