require('./index.scss');

/**
 * A utility function that adds a span to create a material design ripple effect
 * @param  {Event} e - The click event for the element to be painted
 * @param  {Object} config - Configuration settings for the ripple
 * @param  {String} config.color - The color for the ripple
 * @param  {Float} config.duration - The time duration for the ripple in seconds
 */
export default function paintSelection(e, { color = '#A239CA', duration = 0.3 } = {}) {
    const currentTarget = e.currentTarget;
    const max = Math.max(currentTarget.clientWidth, currentTarget.clientHeight);
    const dur = `${duration}s`;
    let ink = currentTarget.querySelector('.ps-ink');

    if (!ink) {
        ink = document.createElement('span');
        Object.assign(ink.style, {
            height: `${max}px`,
            width: `${max}px`,
            background: color,
            '-webkit-animation-duration': dur,
            '-moz-animation-duration': dur,
            '-ms-animation-duration': dur,
            '-o-animation-duration': dur,
            'animation-duration': dur,
        });
        ink.classList.add('ps-ink');
        currentTarget.insertBefore(ink, currentTarget.firstChild);
    }

    ink.classList.remove('ps-ink-animate');
    Object.assign(ink.style, {
        top: `${e.pageY - currentTarget.offsetTop - (max / 2)}px`,
        left: `${e.pageX - currentTarget.offsetLeft - (max / 2)}px`,
    });
    ink.classList.add('ps-ink-animate');

    setTimeout(() => ink.classList.remove('ps-ink-animate'), (duration * 1000));
}
