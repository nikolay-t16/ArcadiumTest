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
        this.onStartGameClick();
    }

    public initHandlers(): void {
        this.startBtn.addEventListener('click', () => this.onStartGameClick());
        this.gameCells.childNodes.forEach((el:HTMLElement) => {
            el.addEventListener('click', this.onCellClick);
        });
    }

    public onStartGameClick(): void {
        let dif = 0;
        this.difficultControl.forEach((el: HTMLInputElement)=>{
            if(el.checked) {
                dif = +el.value;
            }
        });
        this.gameModel.startGame(dif);
        this.gameView.startGame();
    }

    public onCellClick = (e:MouseEvent) => {
        // @ts-ignore
        const num = e.currentTarget.dataset.num;
        const res = this.gameModel.cellClick(num);

        if(res === -1) {
            console.log('Игра не активна или поле уже занято');
            return;
        }

        this.gameView.setCell(num, res);
        this.gameModel.checkWiner();
    }
}

export default GameController;