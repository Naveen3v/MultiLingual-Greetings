import './index.css'

const GreetingList = props => {
  const {greetDetails} = props
  const {id, imageUrl, imageAltText} = greetDetails
  return (
    <>
      <li className="greetList">
        <img src={imageUrl} alt={imageAltText} className="listImage" />
      </li>
    </>
  )
}

export default GreetingList
