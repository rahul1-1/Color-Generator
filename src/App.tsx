import React, {  FormEvent, useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

interface IState {
  alpha:number,
  rgb:number[],
  type:string,
  weight:number,
  hex:string
}
function App() {
  const [cnt,setCnt] = useState<number>(10)
  const [color,setColor] = useState<string>('');
  const [error,setError] = useState<boolean>(false);
  const [list,setList] = useState<IState[]>(new Values('#f12052').all(cnt));
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      
      let colors = new Values(color).all(cnt)
      console.log("colors type ",typeof(colors))
      console.log("colors  ",colors)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
    console.log("hello")
  }

  return (
    <>
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={color}
          onChange={(e:React.ChangeEvent<HTMLInputElement>):void => setColor(e.target.value)}
          placeholder='#f12052'
          className={`${error ? 'error' : null}`}
        />
        
         <input
          type='number'
          value={cnt}
          onChange={(e:React.ChangeEvent<HTMLInputElement>):void => setCnt(parseInt(e.target.value)<1?10:parseInt(e.target.value))}
          placeholder='Enter a value'
          className="input2"
        />
        <button className='btn' type='submit'>
          submit
        </button>
      </form>
    </section>
    <section className='colors'>

      {list.map((color, index) => {
        return (
        
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
          
        )
      })}
    </section>
  </>
  )
}

export default App
