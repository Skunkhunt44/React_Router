
import AppCss from './App.module.css'



function App() {  
  

  return (
    <>
    <div className={AppCss.container}>
         
          <main className={AppCss.content}>
            <h1 className='font-[800] text-[32px]'>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement.
               Rent the perfect van to make your perfect road trip.</p>
               <button className={AppCss.btn}>Find your van</button>
          </main>          
    </div>
     
    </>
  )
}

export default App
