// @ts-ignore
import GameModel from './GameModel.ts';

class GameView {
    protected readonly CLASS_ICON_O = 'game__cell_o';
    protected readonly CLASS_ICON_X = 'game__cell_x';

    protected gameCells: HTMLElement;

    constructor(gameCells: HTMLElement) {
        this.gameCells = gameCells;
    }

    public setCell(num: number, isPlayer: boolean): void {
        if (this.gameCells.children.length > num) {
            const iconClass = isPlayer ? this.CLASS_ICON_X : this.CLASS_ICON_O;
            this.gameCells.children[num].classList.add( iconClass );
        } else {
            console.log(`num: ${num} - вне диапозона`);
        }
    }

    public startGame(): void {
        this.gameCells.childNodes.forEach((el: HTMLElement) => {
            el.classList.remove(this.CLASS_ICON_X);
            el.classList.remove(this.CLASS_ICON_O);
        });
    }

    public endGame(status: number): void {
        switch (status) {
            case GameModel.STATUS_TIE:
                alert('Ничья');
                break;
            case GameModel.STATUS_COMPUTER_WIN:
                alert('Победил компьютер');
                break;
            case GameModel.STATUS_PLAYER_WIN:
                alert('Вы победили');
                break;
        }
    }

}

export default GameView;
