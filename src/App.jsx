import Sidebar from "./components/sidebar/Sidebar"
import { Route , Routes } from "react-router-dom"
import Name from "./pages/name/Name"
import ApiPage from "./pages/ApiPage/ApiPage"
function App() {


return (
<div className="App">
  <div className="container-fluid">
    <div className='mainV'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Name/>}/>
        <Route path="/apiList" element={<ApiPage/>} /> 
      </Routes>
    </div>
  </div>
</div>
)
}

export default App