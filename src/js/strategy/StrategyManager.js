class StrategyManager {
    constructor() {
        this._strategy = null;
    }

    set strategy(strategy) {
        this._strategy = strategy;
    }

    get strategy() {
        return this._strategy;
    }

    manipulate(strategy) {
        return this.strategy.manipulate(strategy);
    }
}