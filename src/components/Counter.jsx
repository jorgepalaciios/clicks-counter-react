import '../styles/Counter.css'

export default function Counter ({clicksNumber, }) {
  return(
    <div className='counter'>
      {clicksNumber}
    </div>
  )
}