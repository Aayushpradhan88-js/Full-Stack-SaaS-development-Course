import './App.css'

// JSX yeutaa markdown language hoo react le banako hoina. JSX yeuta HTML jastaa hoo. Yo yeutaa opensource library hoo jun react le integrate gareko matra hoo

//Component - component le JSX return garxa yedi return gardaaina bhane tio function ho yaa tq aru kehi kura hoo tra JSX hoina.
function App() { //App() - component ko naam hoo
  // return bhanda bahiraa lekhinee code JavaScript code hoo jaha logic huru hunxa
  let name = "aayush";


  return ( //UI ma kehi kura dekhaunu xa bhane return ma lekhinxaa JSX ani return bhitra JS ko logic lekhnaa mildaainaa
    <>
     <h1>
      Hello 
      {name} 
      {/* { } - JavaScript ko variable access garnaa ko lagi yesari garnee, calculation garnaa ko lagi */}
      </h1>
    </>
  )
}

//function
function app(a, b) {
  return a+b
}

app(1,2);

export default App
