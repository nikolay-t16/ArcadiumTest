class GameModel {
    public static readonly STATUS_CONTINUE: number = 0;
    public static readonly STATUS_TIE: number = 1;
    public static readonly STATUS_PLAYER_WIN: number = 2;
    public static readonly STATUS_COMPUTER_WIN: number = 3;
    public static readonly CELL_COUNT = 9;

    protected cellsMap: Map<number, boolean> = new Map();

    protected isActive = true;


    /**
     *
     * @param num
     * @param isPlayer
     * @param _cellsMap
     * @return boolean
     */
    public cellClick(num: number, isPlayer: boolean = true, _cellsMap: Map<number, boolean> = this.cellsMap): boolean {

        if (!this.isActive || _cellsMap.has(num)) {
            return false;
        }
        _cellsMap.set(num, isPlayer);
        return true;
    }

    public startGame(): void {
        this.isActive = true;
        this.cellsMap = new Map();
    }

    public checkWiner(isPlayer: boolean, _cellsMap: Map<number, boolean> = this.cellsMap): number {
        if(_cellsMap.size < 5)
            return GameModel.STATUS_CONTINUE;

        return GameModel.STATUS_CONTINUE;
    }

    public makeComputerMove(_cellsMap: Map<number, boolean> = this.cellsMap): number {
        const randMax: number = GameModel.CELL_COUNT - _cellsMap.size;
        const random: number = +this.randomInteger(0, randMax);
        let j: number = 0;
        for (let i: number = 0; i < GameModel.CELL_COUNT; i++) {
            if (!_cellsMap.has(i)) {
                if (j === random) {
                    return i;
                }
                j++;
            }
        }
        // то чего не должно произойти;
        return -1;
    }

    /**
     * Код с learn javascript
     * @param min
     * @param max
     */
    protected randomInteger(min: number, max: number): number {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

}

export default GameModel;