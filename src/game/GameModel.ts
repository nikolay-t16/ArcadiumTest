type CellsType = Map<number, boolean>;

interface CheckDiagonalLineWinnerType {
    cellNum: number,
    isPlayer: boolean,
    _cellsMap: CellsType,
    _getWinStatus: Function,
    _isCellChecked: Function
}

interface CheckLineWinnerType extends CheckDiagonalLineWinnerType{
    isRow: boolean,
}

class GameModel {
    public static readonly STATUS_CONTINUE: number = 0;
    public static readonly STATUS_TIE: number = 1;
    public static readonly STATUS_PLAYER_WIN: number = 2;
    public static readonly STATUS_COMPUTER_WIN: number = 3;
    public static readonly CELL_COUNT = 9;

    protected cellsMap: CellsType = new Map();

    protected isActive = true;

    /**
     *
     * @param num
     * @param isPlayer
     * @param _cellsMap
     * @return boolean
     */
    public cellClick(num: number, isPlayer: boolean = true, _cellsMap: CellsType = this.cellsMap): boolean {

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

    public checkWiner(
        isPlayer: boolean,
        _cellsMap: CellsType = this.cellsMap,
        _isCellChecked = this.isCellChecked,
        _getWinStatus = this.getWinStatus
    ): number {
        if (_cellsMap.size < 5) {
            return GameModel.STATUS_CONTINUE;
        }
        this.isActive = false;
        for (let i = 0; i < GameModel.CELL_COUNT; i++) {
            if (_isCellChecked(i, isPlayer, _cellsMap)) {
                // проверка строк
                if (i % 3 === 0) {
                    const check = this.checkLineWinner(
                        {
                            cellNum: i,
                            isPlayer,
                            isRow: true,
                            _cellsMap,
                            _getWinStatus,
                            _isCellChecked
                        }
                    );
                    if (check != GameModel.STATUS_CONTINUE) {
                        return check
                    }
                }
                // проверка столбцов
                if (i < 3) {
                    const check = this.checkLineWinner(
                        {
                            cellNum: i,
                            isPlayer,
                            isRow: false,
                            _cellsMap,
                            _getWinStatus,
                            _isCellChecked
                        }
                    );
                    if (check != GameModel.STATUS_CONTINUE) {
                        return check
                    }
                }
                // проверка диаганалей
                if (i === 0 || i === 2) {
                    const check = this.checkDiagonalWinner(
                        {
                            cellNum: i,
                            isPlayer,
                            _cellsMap,
                            _getWinStatus,
                            _isCellChecked
                        }
                    );
                    if (check != GameModel.STATUS_CONTINUE) {
                        return check
                    }
                }
            }
        }
        if (_cellsMap.size === 9) {
            return GameModel.STATUS_TIE;
        }
        this.isActive = true;
        return GameModel.STATUS_CONTINUE;
    }

    protected checkLineWinner(options: CheckLineWinnerType): number {
        const {
            cellNum,
            isPlayer,
            isRow,
            _cellsMap = this.cellsMap,
            _getWinStatus = this.getWinStatus,
            _isCellChecked = this.isCellChecked
        } = options;
        const delta = isRow ? 1 : 3;
        const secondCellNum = cellNum + 1 * delta;
        const thirdCellNum = cellNum + 2 * delta;
        if (_isCellChecked(secondCellNum, isPlayer, _cellsMap) && _isCellChecked(thirdCellNum, isPlayer, _cellsMap)) {
            return _getWinStatus(isPlayer);
        }
        return GameModel.STATUS_CONTINUE;
    }

    protected checkDiagonalWinner(options: CheckDiagonalLineWinnerType): number {
        const {
            cellNum,
            isPlayer,
            _cellsMap = this.cellsMap,
            _getWinStatus = this.getWinStatus,
            _isCellChecked = this.isCellChecked
        } = options;
        const delta = - cellNum;
        const secondCellNum = cellNum + 4  + delta;
        const thirdCellNum = cellNum + 8 + 2 * delta;
        if (_isCellChecked(secondCellNum, isPlayer, _cellsMap) && _isCellChecked(thirdCellNum, isPlayer, _cellsMap)) {
            return _getWinStatus(isPlayer);
        }
        return GameModel.STATUS_CONTINUE;
    }

    protected isCellChecked(cellNum: number, isPlayer: boolean, _cellsMap: CellsType = this.cellsMap) {
        return _cellsMap.has(cellNum) && _cellsMap.get(cellNum) === isPlayer;
    }

    protected getWinStatus(isPlayer: boolean): number {
        return isPlayer ? GameModel.STATUS_PLAYER_WIN : GameModel.STATUS_COMPUTER_WIN;
    }

    public makeComputerMove(_cellsMap: CellsType = this.cellsMap): number {
        const randMax: number = GameModel.CELL_COUNT - _cellsMap.size - 1;
        const random: number = this.randomInteger(0, randMax);

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
