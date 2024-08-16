//Libs
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"

//Layouts
import { DefaultLayout } from "./ui/layouts/DefaultLayout"

//Pages
import { Home } from "./ui/pages/Home"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <DefaultLayout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/sobre" element={ <Home /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
