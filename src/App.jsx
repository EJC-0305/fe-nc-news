import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Articles from './components/Articles'
import Article from './components/Article'
import Error from './components/Error'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Articles />}></Route>
        <Route path="/topics/:topic?" element={<Articles />}></Route>
        <Route path="/articles/:article_id" element={<Article />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  )
}

export default App
