import React from "react";

export function Home() {
  return (
    <main>
      <h3>I'm rendered by React</h3>
      <my-counter>
        <div className="counter-wrapper">
          <div className="counter-display">
            <span>Count: </span>
            <span data-target="my-counter:value">0</span>
          </div>
          <div className="counter-controls">
            <button
              type="button"
              data-target="my-counter:decrement"
              className="counter-button"
            >
              -
            </button>
            <button
              type="button"
              data-target="my-counter:increment"
              className="counter-button"
            >
              +
            </button>
          </div>
        </div>
      </my-counter>
      <p>But interactivity is powered by Svete Runes!</p>
    </main>
  );
}
