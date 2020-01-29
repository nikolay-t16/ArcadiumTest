import GameModel from "./GameModel";
import GameView from "./GameView";

class GameController {
    public gameModel: GameModel;
    public gameView: GameView;
    public difficultControl: NodeListOf<HTMLElement>;
    public startBtn: HTMLElement;
    public gameCells: HTMLElement;

    constructor(
        gameModel: GameModel,
        gameView: GameView,
        difficultControl: NodeListOf<HTMLElement>,
        startBtn: HTMLElement,
        gameCells: HTMLElement) {
        this.gameModel = gameModel;
        this.gameView = gameView;
        this.difficultControl = difficultControl;
        this.startBtn = startBtn;
        this.gameCells = gameCells;
        this.initHandlers();
    }

    public initHandlers(): void {
        this.startBtn.addEventListener('click', () => this.onStartGameClick());
        this.gameCells.childNodes.forEach((el:HTMLElement) => {
            el.addEventListener('click', this.onCellClick);
        });
    }

    public onStartGameClick(): void {
        console.log('onStartGameClick');
    }

    public onCellClick(e:MouseEvent): void {
        // @ts-ignore
        const parent = e.currentTarget.parentElement as HTMLElement;
        let num = -1;
        parent.childNodes.forEach((el, i) => {
            if(el === e.currentTarget) {
                num = i;
            }
        });
        if(num -1) {
            console.log('Произошла непредвиденная ошибка');
            return;
        }
        const res = this.gameModel.cellClick(num);

        if(res === -1) {
            console.log('Игра не активна или поле уже занято');
            return;
        }

    }
}

export default GameController;