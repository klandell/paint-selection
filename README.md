# Paint Selection
A simple utility function for adding creating a material design ripple effect

Example usage in React
```javascript
import React from 'react';
import paintSelection from 'paint-selection';

export default class Foo extends React.Component {
    onClick(e) {
        paintSelection(e);
        // handle click event
    }

    render() {
        return (
            <div class="btn"
                onClick={e => this.onClick(e)}>
                <a>foo</a>
            </div>
        );
    }
}
```

Example sass for styling the ripple
```sass
$ui-color-1: #0E0B16;
$ui-color-2: #A239CA;

div.btn {
    position: relative;
    overflow: hidden;

    a {
        position: relative;
        overflow: hidden;
    }
}

.ink {
    display: block;
    position: absolute;
    background: rgba($ui-color-2, 0.5);
    border-radius: 100%;
    transform: scale(0);

    &.animate {
        animation: ripple 0.65s linear;
    }
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
```
