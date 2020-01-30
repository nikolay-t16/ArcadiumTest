// @ts-ignore
import GameModel from "./GameModel.ts";
// @ts-ignore
import GameView from "./GameView.ts";

class GameController {

    public gameModel: GameModel;
    public gameView: GameView;
    public startBtn: HTMLElement;
    public gameCells: HTMLElement;

    constructor(
        gameModel: GameModel,
        gameView: GameView,
        startBtn: HTMLElement,
        gameCells: HTMLElement) {
        this.gameModel = gameModel;
        this.gameView = gameView;
        this.startBtn = startBtn;
        this.gameCells = gameCells;
        this.initHandlers();
    }

    public initHandlers(): void {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.gameCells.childNodes.forEach((el: HTMLElement) => {
            el.addEventListener('click', this.onCellClick);
        });
    }

    public startGame(): void {
        this.gameModel.startGame();
        this.gameView.startGame();
    }

    public onCellClick = (e: MouseEvent): void => {
        // @ts-ignore
        const cellNum = +e.currentTarget.dataset.num;
        const moveResult = this.makeMove(cellNum);
        if (!moveResult) {
            return;
        }

        const gameStatus = this.gameModel.checkWiner(true);
        if (gameStatus !== GameModel.STATUS_CONTINUE) {
            this.stopGame(gameStatus);
            return;
        }
        this.computerMove();

    };

    protected computerMove() {
        const computerCellNum = this.gameModel.makeComputerMove();
        this.makeMove(computerCellNum, false);
        const gameStatus = this.gameModel.checkWiner(false);
        if (gameStatus !== GameModel.STATUS_CONTINUE) {
            this.stopGame(gameStatus);
        }
    }



    protected stopGame(status: number): void {
        this.gameView.endGame(status);
    }

    protected makeMove(cellNum: number, isPlayer: boolean = true): boolean {
        const cellClickResponse = this.gameModel.cellClick(cellNum, isPlayer);

        if (!cellClickResponse) {
            console.log('Игра не активна или поле уже занято');
            return false;
        }

        this.gameView.setCell(cellNum, isPlayer);
        return true;
    }
}

export default GameController;