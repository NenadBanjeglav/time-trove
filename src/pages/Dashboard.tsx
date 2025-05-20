import { useSearchParams } from 'react-router-dom'

import { Pagination } from '../components/molecules/pagination/Pagination'
import { PAGE_SIZE } from '../constants/constants'

const allItems = Array.from({ length: 120 }, (_, i) => ({
  id: i + 1,
  name: `Task ${i + 1}`,
}))

export const Dashboard = () => {
  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get('page') || '1')

  const start = (page - 1) * PAGE_SIZE
  const paginatedItems = allItems.slice(start, start + PAGE_SIZE)
  return (
    <div>
      <div>
        <h2>My Tasks</h2>

        <ul>
          {paginatedItems.map(task => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>

        <Pagination count={allItems.length} />
      </div>
    </div>
  )
}
