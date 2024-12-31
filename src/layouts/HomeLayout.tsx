import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

type Props = {}

const HomeLayout = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout