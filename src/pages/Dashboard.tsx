import { Dropdown } from '../components/atoms/dropdown/Dropdown'
import { languages } from '../constants/languages'

export const Dashboard = () => {
  return (
    <div>
      <Dropdown languages={languages} />
    </div>
  )
}
