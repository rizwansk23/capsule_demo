import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

const App = () => {
  return (
    <div className='w-full h-fit  bg-[#181717]  '>
      <div className=' h-full'>
      <Page1/>
      </div>
      <div className=' h-fit'>
      <Page2/>
      </div>

    </div>
  )
}

export default App
