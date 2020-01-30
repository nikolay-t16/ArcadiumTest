import 'normalize.css';
import './index.scss';
import '../components/game/game.ts';
// @ts-ignore
import gameInit from '../game/GameApp.ts';

const startBtn = document.querySelectorAll<HTMLElement>('.app__start-btn');
const gameCells = document.querySelectorAll<HTMLElement>('.game');
if (startBtn.length && gameCells.length) {
    gameInit(startBtn[0], gameCells[0]);
}
