//Libs
import { Route, Routes, Navigate, HashRouter } from "react-router-dom"

//Layouts
import { DefaultLayout } from "./ui/layouts/DefaultLayout"

//Pages
import { Home } from "./ui/pages/Home"

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <DefaultLayout /> }>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
