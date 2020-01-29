import './game.scss';

const MAX_WIDTH = 400;
const MIN_WIDTH = 320;

function setHeight(element: HTMLElement): void {
    const width = document.documentElement.clientWidth;
    if (width > MAX_WIDTH) {
        element.style.height = `${MAX_WIDTH}px`;
        return;
    }
    if (width < MIN_WIDTH) {
        element.style.height = `${MIN_WIDTH}px`;
        return;
    }
    element.style.height = `${width}px`;
}

const games = document.querySelectorAll('.game');
games.forEach((el: HTMLElement) => {
    setHeight(el);
    window.addEventListener("resize", () => setHeight(el));
});
