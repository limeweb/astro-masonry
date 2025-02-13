export {default as Masonry}  from "./components/Masonry.astro";

export interface MasonryProps {
  /**
   * Define the number of columns at different breakpoints
   * @example
   * {
   *   default: 4,
   *   1200: 3,
   *   700: 2,
   *   500: 1
   * }
   */
  breakpointCols?: number | Record<number | "default", number>;

  /**
   * CSS class name for the masonry container
   * @default "astro-masonry-grid"
   */
  className?: string;

  /**
   * CSS class name for each column in the grid
   * @default "astro-masonry-grid_column"
   */
  columnClassName?: string;

  /**
   * Enable height-based item sorting for balanced columns
   * @warning This breaks the original items order
   * @default false
   */
  sortByHeight?: boolean;

  /**
   * Enable console logging of the masonry component events
   * @default false
   */
  debug?: boolean;
}