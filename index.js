require('./index.scss');

/**
 * A utility function that adds a span to create a material design ripple effect
 * @param  {Event} e - The click event for the element to be painted
 * @param  {String} [color='#A239CA'] - The color for the ripple
 */
export default function paintSelection(e, color = '#A239CA') {
    const currentTarget = e.currentTarget;
    const max = Math.max(currentTarget.clientWidth, currentTarget.clientHeight);
    let ink = currentTarget.querySelector('.ps-ink');

    if (!ink) {
        ink = document.createElement('span');
        ink.style.height = `${max}px`;
        ink.style.width = `${max}px`;
        ink.style.background = color;
        ink.classList.add('ps-ink');
        currentTarget.insertBefore(ink, currentTarget.firstChild);
    }

    ink.classList.remove('ps-ink-animate');
    ink.style.top = `${e.pageY - currentTarget.offsetTop - (max / 2)}px`;
    ink.style.left = `${e.pageX - currentTarget.offsetLeft - (max / 2)}px`;
    ink.classList.add('ps-ink-animate');

    setTimeout(() => ink.classList.remove('ps-ink-animate'), 650);
}
