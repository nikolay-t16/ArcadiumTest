class GameView {

    protected gameCells: HTMLElement;

    constructor(gameCells: HTMLElement) {
        this.gameCells = gameCells;
    }

    public setCell(num: number, res: number): void {
        this.gameCells.children[num].textContent = res.toString();
    }

    public startGame(): void {
        this.gameCells.childNodes.forEach((el:HTMLElement) => el.textContent = '');
    }

}

export default GameView;