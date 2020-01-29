import './game.scss';

const MAX_WIDTH = 400;
const MIN_WIDTH = 320;

function getHeight(width: number): number {
    if (width > MAX_WIDTH) {
        return MAX_WIDTH;
    }
    if (width < MIN_WIDTH) {
        return MIN_WIDTH;
    }
    return width;
}

function setHeight(element: HTMLElement): void {
    const width = document.documentElement.clientWidth;
    const height = getHeight(width);
    element.style.height = `${height}px`;
}

const games = document.querySelectorAll('.game');
games.forEach((el: HTMLElement) => {
    setHeight(el);
    window.addEventListener("resize", () => setHeight(el));
});

export {
    getHeight
};
