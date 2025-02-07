<img src="./docs/banner-docs.png">

# Astro Masonry

> A zero-dependency responsive masonry layout component for Astro with minimal setup.

- **Zero setup required**: Works out of the box
- **Fully responsive**: Configure columns for any breakpoint
- **View Transitions**: Support for Astro’s built-in transitions
- **Highly customizable**: Apply custom classes to container and columns
- **Zero dependencies**: Pure vanilla JavaScript
- **Minimal client JS**: Small runtime footprint
- **Performance-first**: Optimized for speed and efficiency

[Demo](https://astro-masonry.vercel.app/)

## Motivation
Most masonry layout libraries are either JavaScript-heavy or framework-dependent, making them suboptimal for Astro. This Astro-native component stays within the Astro ecosystem (avoiding unnecessary frameworks) and works seamlessly with Astro's `<Image/>` component, providing built-in image optimization and preventing Cumulative Layout Shift (CLS).

## Installation

```bash
npm install astro-masonry
```

## Usage

```astro
---
import { Masonry } from 'astro-masonry';
---

<Masonry
  breakpointCols={{
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }}
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Masonry>
```

## Props

| Prop             | Type                                            | Default                       | Description                                |
|------------------|-------------------------------------------------|-------------------------------|--------------------------------------------|
| `breakpointCols` | `number \| Record<number \| "default", number>` | `2`                           | Number of columns at different breakpoints |
| `class`          | `string`                                        | `"astro-masonry-grid"`        | CSS class for the container                |
| `columnClass`    | `string`                                        | `"astro-masonry-grid_column"` | CSS class for columns                      |
| `sortByHeight`   | `boolean`                                       | `false`                       | Sort items by height for balanced layout   |

## Breakpoints

You can specify different column counts for different screen widths:

```typescript
{
  default: 4, // Default column count
  1100: 3,    // 3 columns at viewport width <= 1100px
  700: 2,     // 2 columns at viewport width <= 700px
  500: 1      // 1 column at viewport width <= 500px
}
```

## Styling

The component includes minimal styling for the grid layout. You can customize the appearance by overriding the default classes:

```css
.astro-masonry-grid {
  /* Your custom styles */
  /* You will need to add display: flex */
}

.astro-masonry-grid_column {
  /* Your custom column styles */
}
```

Alternatively, you can apply custom classes directly on the component. This is very useful if you use Tailwind.

```astro
<Masonry
  breakpointCols={3}
  class="flex gap-4 px-4"
  columnClass=""
>
</Masonry>
```

## Height-based Sorting

Enable `sortByHeight` to create a more balanced layout by placing items in the column with the least height

> ⚠️ **Note**: This option breaks the original items order to achieve a more balanced layout height distribution.

```astro
<Masonry
  ...
  sortByHeight={true}
>
</Masonry>
```

## Example

```astro
---
import { Masonry } from "../../../src/index";
import { Image } from "astro:assets";
---

<Masonry
  breakpointCols={{
    default: 4,
    1200: 3,
    700: 2,
    500: 1,
  }}
  class="flex gap-4 px-4"
  columnClass=""
>
  {
    [...Array(40)].map((_, i) => (
      <Image
        src={`https://picsum.photos/1200/${Math.floor(Math.random() * (1200 - 600 + 1) + 600)}`}
        alt=""
        inferSize
        class="w-full mb-4"
      />
    ))
  }
</Masonry>

```

## Credits
This component is heavily inspired by [react-masonry-css](https://github.com/paulcollett/react-masonry-css), essentially serving as an Astro-native port that brings the same elegant simplicity.

## License

MIT © [Olivier Estévez](https://github.com/OlivierEstevez)