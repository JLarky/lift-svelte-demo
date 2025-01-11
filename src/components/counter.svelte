<script module lang="ts">
  import { liftSvelte } from '@lift-html/svelte';
  import { findTarget } from '@lift-html/incentive';

  liftSvelte('my-counter', {
    init(onCleanup) {
      // use incentive to get referenced to existing HTML elements
      const valueEl = findTarget(this, 'value');
      const incrementBtn = findTarget(this, 'increment');
      const decrementBtn = findTarget(this, 'decrement');

      // use rune for our state
      let count = $state(0);
      // Update display whenever count changes
      $effect(() => {
        valueEl.textContent = `${count}`;
      });

      // Create AbortController for cleanup
      const controller = new AbortController();
      onCleanup(() => controller.abort());

      // Add click handlers with abort signal
      const signal = controller.signal;
      incrementBtn.addEventListener('click', () => count++, { signal });
      decrementBtn.addEventListener('click', () => count--, { signal });
    }
  });
</script>
