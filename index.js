export default function paintSelection(e, { targetEl = 'ink', animCls = 'animate' } = {}) {
    const currentTarget = e.currentTarget;
    const max = Math.max(currentTarget.clientWidth, currentTarget.clientHeight);
    let ink = currentTarget.querySelector(`.${targetEl}`);

    if (!ink) {
        ink = document.createElement('span');
        ink.style.height = `${max}px`;
        ink.style.width = `${max}px`;
        ink.classList.add(targetEl);
        currentTarget.insertBefore(ink, currentTarget.firstChild);
    }

    ink.classList.remove(animCls);
    ink.style.top = `${e.pageY - currentTarget.offsetTop - (max / 2)}px`;
    ink.style.left = `${e.pageX - currentTarget.offsetLeft - (max / 2)}px`;
    ink.classList.add(animCls);

    setTimeout(() => ink.classList.remove(animCls), 650);
}
