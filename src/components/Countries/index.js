import './index.css'

const Countries = props => {
  const {eachCountry, updateList} = props
  const {name, isVisited} = eachCountry

  const onClickVisitBtn = () => {
    updateList(eachCountry)
  }

  return (
    <li className="country-list-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button
          className="visit-button"
          onClick={onClickVisitBtn}
          type="button"
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default Countries
