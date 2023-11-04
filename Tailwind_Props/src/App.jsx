
import './App.css'
import Card from './components/Card'

function App() {
  let User={
    username:"Anil",
    email:"anil@abc.com",
    password:"123"
  }
  const desc = "The MacBook Air is a lightweight and compact laptop by Apple, known for its sleek design and portability. It features a high-resolution Retina display, impressive battery life, and is powered by Apple's custom M1 chip, providing excellent performance for a wide range of tasks. It's favored for its thin profile, comfortable keyboard, and premium build quality, making it a popular choice for users seeking a balance between performance and portability."
  return (
    <>
      <h1 className='bg-red-400 text-black p4-rounded mb-4' >Tailwind testing</h1>
      <Card user={User} description={desc}/>
      <Card user={User}  />
      
    </>
  )
}

export default App
