

class GameModel {
    readonly VAL_X = 1;
    readonly VAL_O = 0;

    protected cellsMap: Map<number, number> = new Map();

    protected isActive = false;

    public cellClick(num: number, isHuman: boolean = true ): number {
        if (!this.isActive) {
            return -1;
        }
    }
}

export default GameModel;