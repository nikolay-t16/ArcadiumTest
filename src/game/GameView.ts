// @ts-ignore
import GameModel from './GameModel.ts';

class GameView {
    protected gameCells: HTMLElement;

    constructor(gameCells: HTMLElement) {
        this.gameCells = gameCells;
    }

    public setCell(num: number, isPlayer: boolean): void {
        if (this.gameCells.children.length > num) {
            this.gameCells.children[num].textContent = isPlayer.toString();
        } else {
            console.log(`num: ${num} - вне диапозона`);
        }
    }

    public startGame(): void {
        this.gameCells.childNodes.forEach((el: HTMLElement) => el.textContent = '');
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
