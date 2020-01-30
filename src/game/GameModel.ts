class GameModel {
    readonly VAL_X = 1;
    readonly VAL_O = 0;

    protected cellsMap: Map<number, number> = new Map();

    protected isActive = false;

    protected dif = 0;

    protected getNewCellVal(isHuman: boolean): number {
        return isHuman ? this.VAL_X : this.VAL_O;
    }

    /**
     *
     * @param num
     * @param isHuman
     * @param _cellsMap
     * @return number -1 - занято, 0 - поставить 0, 1 - поставить x
     */
    public cellClick(num: number, isHuman: boolean = true, _cellsMap: Map<number, number> = this.cellsMap): number {

        if (!this.isActive || _cellsMap.has(num)) {
            return -1;
        }

        const newVal = this.getNewCellVal(isHuman);
        _cellsMap.set(num, newVal);

        return newVal;

    }

    public startGame(dif: number): void {
        this.isActive = true;
        this.dif = dif;
        this.cellsMap = new Map();
    }

    public checkWiner(_cellsMap: Map<number, number> = this.cellsMap): number {
        if(_cellsMap.size < 4)
            return -1;
    }

}

export default GameModel;