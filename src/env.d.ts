/// <reference path="../.astro/types.d.ts" />

import type { Reactify, KnownElements } from "@lift-html/core";
declare global {
  namespace JSX {
    interface IntrinsicElements
      extends Reactify<
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
        KnownElements
      > {}
  }
}
