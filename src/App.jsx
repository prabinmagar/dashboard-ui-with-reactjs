import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';

function App() {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default App
