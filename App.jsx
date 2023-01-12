import React from "react";
import Rend1 from "./components/Render1";

function App() {
  const [isAdult, setIsAdult] = React.useState(true)
  const [isAdmin, setIsAdmin] = React.useState(false)
  let text = 'text5235'
  let text2 = <p>текст</p>  
  let text_1 = <p>текст1</p>
  let text_2 = <p>текст2</p>

  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>        
      </ul>

      

      <p className='p1'>Hello</p>
      <p className='p2'>Hello</p>
      <p className='p3'>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <input type="text" /> <br />
      <input type="text" /> <br />
      <input type="text" /> <br />
      <input type="text" /> <br />
      <input type="text" /> <br />
      <table><th><td></td></th><th><td></td></th><th><td></td></th></table>




      {/* 1-задание */}

      <h1>Вам есть 18 лет?</h1>
      <button onClick={() => setIsAdult(true)}>Да</button>
      <button onClick={() => setIsAdult(false)}>Нет</button>

      {isAdult ? <p>18</p> : <p>меньше 18</p>}


      {/* 2-задание */}
      <h1>Admin</h1>
      
      <button onClick={() => setIsAdmin(true)}>Да</button>
      <button onClick={() => setIsAdmin(false)}>Нет</button>

      {isAdmin ? <div><p>18</p> <p>18</p> <p>18</p></div> : <p>Вы не админ</p>}

      {/* 3-задание */}
      <Rend1 />

      {/* 4-задание */}
      <Rend1 text = {text} />

      {/* 5-задание */}
      <Rend1 text2 = {text2} />

      {/* 6-задание */}
      <Rend1 text2 = {text_1} />
      <Rend1 text2 = {text_2} />
    </div>

    
  );
}

export default App;