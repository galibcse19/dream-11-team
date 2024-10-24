import Cover from "./components/Cover"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Posts from "./components/Posts"

function App() {
  
  return (
    <>
       <Nav></Nav>
       <Cover></Cover>
       <div className="flex justify-between lg:mx-40 md:mx-10 mx-2 mt-16">
         <div>
          <h2 className="font-bold text-2xl">Available Players</h2>
         </div>
         <div>
          <button className=" font-bold py-2 px-4 border rounded-l-lg bg-yellow-400">Available</button>
          <button className=" py-2 px-2 border rounded-r-lg">Selected (<span>0</span>)</button>
         </div>
       </div>
       <Posts></Posts>
       <Footer></Footer>
    </>
  )
}

export default App
