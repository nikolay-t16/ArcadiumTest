import GameController from './GameController.ts';
import GameModel from './GameModel.ts';
import GameView from './GameView.ts';


function gameInit(difficultControl: NodeListOf<HTMLElement>, startBtn: HTMLElement, gameCells: HTMLElement) {
    const gameModel = new GameModel();
    const gameView = new GameView(gameCells);

    const gameController = new GameController(
        gameModel,
        gameView,
        difficultControl,
        startBtn,
        gameCells,
    );

}


export default gameInit;