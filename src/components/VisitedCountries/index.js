import './index.css'

const VisitedCountries = props => {
  const {eachVisited, removeVisitedItem} = props
  const {id, imageUrl, name} = eachVisited

  const onClickRemoveButton = () => {
    removeVisitedItem(id)
  }

  return (
    <li className="visited-list-item">
      <img className="thumbnail" src={imageUrl} alt="thumbnail" />
      <div className="name-remove-btn-cont">
        <p className="country-name">{name}</p>
        <button
          className="remove-button"
          onClick={onClickRemoveButton}
          type="button"
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
