import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Articles from './components/Articles'
import Article from './components/Article'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/:topic?" element={<Articles />}></Route>
        <Route path="/articles/:article_id" element={<Article />}></Route>
      </Routes>
    </>
  )
}

export default App
