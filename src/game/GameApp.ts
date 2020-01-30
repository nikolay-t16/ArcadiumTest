// @ts-ignore
import GameController from './GameController.ts';
// @ts-ignore
import GameModel from './GameModel.ts';
// @ts-ignore
import GameView from './GameView.ts';


function gameInit(startBtn: HTMLElement, gameCells: HTMLElement) {
    const gameModel = new GameModel();
    const gameView = new GameView(gameCells);

    const gameController = new GameController(
        gameModel,
        gameView,
        startBtn,
        gameCells,
    );

}


export default gameInit;