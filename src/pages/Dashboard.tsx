import { Pagination } from '../components/molecules/pagination/Pagination'

const allItems = Array.from({ length: 120 }, (_, i) => ({
  id: i + 1,
  name: `Task ${i + 1}`,
}))

export const Dashboard = () => {
  return (
    <div>
      <div>
        <Pagination count={allItems.length} />
      </div>
    </div>
  )
}
