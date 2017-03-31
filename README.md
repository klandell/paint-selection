# Paint Selection
[![npm](https://img.shields.io/npm/v/paint-selection.svg)](https://www.npmjs.com/package/paint-selection)
[![David](https://img.shields.io/david/klandell/paint-selection.svg)](https://david-dm.org/klandell/paint-selection)
[![David](https://img.shields.io/david/dev/klandell/paint-selection.svg)](https://david-dm.org/klandell/paint-selection?type=dev)
[![npm](https://img.shields.io/npm/l/paint-selection.svg)](https://github.com/klandell/paint-selection/blob/master/LICENSE)

A simple utility function for adding creating a material design ripple effect

### Features
#### paintSelection
Type `Function`
Adds a material design ripple effect to currentTarget of an event

**Parameters**
* **e** - Type `Event`, Required `True` - The click event for the element to be painted
* **color** - Type `String`, Required `False` - The color to paint the element. Defaults to `#A239CA`.

### CSS classes used by Paint Selection
* ps-ink
* ps-ink-animate
* s-ink-ripple (keyframes)

### Example usage in React
```javascript
import React from 'react';
import paintSelection from 'paint-selection';

export default class Foo extends React.Component {
    onClick(e) {
        paintSelection(e, '#4717F6');
        // handle click event
    }

    render() {
        return (
            <div className="btn" onClick={e => this.onClick(e)}>
                <a>foo</a>
            </div>
        );
    }
}
```

### Example sass for containing the ripple within the button
```sass
div.btn {
    position: relative;
    overflow: hidden;

    a {
        position: relative;
        overflow: hidden;
    }
}
```
