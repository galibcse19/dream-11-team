import { useState } from "react";
import Cover from "./components/Cover"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Posts from "./components/Posts"
import Select from "./components/Select";
import { toast } from "react-toastify";

function App() {

  const [activeButton, setActiveButton] = useState('btn-1');
  const [freeCoin, setFreeCoin] = useState(0);
  const [palyer, setPalyer] = useState([]);


  const handleAddMorePlayer =()=>{
    setActiveButton('btn-1')
  }

  const ClaimFreeCredit = ()=>{
     setFreeCoin((prevFreeCoin) => prevFreeCoin + 50000)
     toast.success('Credit Added to your Account',{position:"top-center"})
  }
  
  const specificPlayerInfo =(post)=>{
    const isExist = palyer.find(existPlayer => existPlayer.playerId === post.playerId)
    if(!isExist){
      if(palyer.length < 6 ){
        if(freeCoin >= post.biddingPrice){
          setPalyer([...palyer,post]);
          setFreeCoin((prevFreeCoin) => prevFreeCoin - post.biddingPrice)
          toast.success(`Congrates !! ${post.name} is now in your squad`,{position:"top-center"})
        }
        else{
          toast.error('Not enough money to buy this player.Claim some Credit',{position:"top-center"})
        }
        
      }
      else{
        toast.error('Squad is Already full',{position:"top-center"})
      }
    }
    else{
      toast.error('Player already Selected',{position:"top-center"})
    }
    
  }
  console.log(palyer.length);

  const handleDelete = (show)=>{
     const playerAfterDelete = palyer.filter(a=> a.playerId !== show.playerId)
     setPalyer(playerAfterDelete)
     toast.warn('Player removed')
  }

  return (
    <>
       <Nav value={freeCoin}></Nav>
       <Cover ClaimFreeCredit={ClaimFreeCredit}></Cover>
       <div className="flex justify-between lg:mx-40 md:mx-10 mx-2 mt-16">
         <div>
          <h2 className="font-bold text-2xl">
          {activeButton === 'btn-1' ? 'Available Players' : `Selected Players (${palyer.length}/6)`}
          </h2>
         </div>
          <div>
            <button id="btn-1" onClick={() => setActiveButton('btn-1')} className={`font-bold py-2 px-4 border rounded-l-lg ${
                activeButton === 'btn-1' ? 'bg-yellow-400' : ''
              }`}>Available</button>

            <button id="btn-2" onClick={() => setActiveButton('btn-2')}  className={`py-2 px-2 border rounded-r-lg ${
                activeButton === 'btn-2' ? 'bg-yellow-400' : ''
              }`}>Selected (<span>{palyer.length}</span>)</button>
          </div>
       </div>
       {activeButton === 'btn-1' ? <Posts specificPlayerInfo={specificPlayerInfo} /> : <Select palyer={palyer} handleDelete={handleDelete} handleAddMorePlayer={handleAddMorePlayer} />}
       <Footer></Footer>
    </>
  )
}

export default App
