import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

interface IProps{
  rgb:number[],
  weight:number,
  index:number,
  hexColor:string

}
const SingleColor:React.FC<IProps> = ({ rgb, weight, index,hexColor}) => {
  const [alert, setAlert] = useState(false)
  const bcg  = rgb.join(',')
  const hex = rgbToHex(rgb[0],rgb[1],rgb[2])
  const hexValue = `#${hexColor}`
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
