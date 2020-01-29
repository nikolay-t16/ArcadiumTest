import 'normalize.css';
import './index.scss';
import '../components/difficult-controls/difficult-controls.ts';
import '../components/game/game.ts';
// @ts-ignore
import gameInit from '../game/GameApp.ts';

const difficultControl = document.querySelectorAll<HTMLElement>('.difficult-controls__item-input');
const startBtn = document.querySelectorAll<HTMLElement>('.app__start-btn');
const gameCells = document.querySelectorAll<HTMLElement>('.game');
if (difficultControl.length && startBtn.length && gameCells.length) {
    gameInit(difficultControl, startBtn[0], gameCells[0]);
}
