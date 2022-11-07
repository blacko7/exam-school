export default function CustomCounter({ state, dispatch }) {
    return (
      <div className="counter--container">
        <h1>Custom Counter</h1>
        <p>Count: {state.count}</p>
        <input type="number" value={state.count} onChange={(e) => dispatch({ type: "set", valued: e })} />
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    );
  }