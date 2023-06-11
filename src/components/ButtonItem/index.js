import './index.css'

const ButtonItem = props => {
  const {buttonDetails, btnChanged, isActive} = props
  const {displayText, tabId} = buttonDetails

  const changeBtn = () => {
    btnChanged(tabId)
  }

  const activeBtnTab = isActive ? 'btnColor' : ''

  return (
    <>
      <li className="btnList">
        <button
          type="button"
          onClick={changeBtn}
          className={`btnItem ${activeBtnTab}`}
        >
          {displayText}
        </button>
      </li>
    </>
  )
}

export default ButtonItem
