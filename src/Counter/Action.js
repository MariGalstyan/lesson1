const Action = ({sethandlePlusCount, sethandleMinusCount}) => {
    return (
        <div>
          <button onClick={sethandlePlusCount}>+</button>
          <button onClick={sethandleMinusCount}>-</button>
        </div>
    )
}
export default Action;