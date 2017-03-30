# Paint Selection
A simple utility function for adding creating a material design ripple effect

### function arguments
##### e
Type `Event`, Required `True`
The click event for the element to be painted

##### color
Type `String`, Required `False`
The color to paint the element. Defaults to `#A239CA`.

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
