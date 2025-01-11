import React from "react";

export function Home() {
  return (
    <main>
      <h3>I'm rendered by React</h3>
      <my-counter>
        <div class="counter-wrapper">
          <div class="counter-display">
            <span>Count: </span>
            <span data-target="my-counter:value">0</span>
          </div>
          <div class="counter-controls">
            <button data-target="my-counter:decrement" class="counter-button">
              -
            </button>
            <button data-target="my-counter:increment" class="counter-button">
              +
            </button>
          </div>
        </div>
      </my-counter>
      <p>But interactivity is powered by Svete Runes!</p>
    </main>
  );
}
