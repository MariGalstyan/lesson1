export default function Action() {
    return (
        <div className="Action">
        <button onClick={this.sethandlePlusCount}>+</button>
        <button onClick={this.sethandleMinusCount}>-</button>
        </div>
    )
}