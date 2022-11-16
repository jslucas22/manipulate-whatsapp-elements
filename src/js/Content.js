setInterval(() => {
    //================================================> 
    const strategyManager = new StrategyManager();
    const buttonStrategy = new ButtonStrategy();
    const canvasStrategy = new CanvasStrategy();
    const downloadStrategy = new DownloadStrategy();
    const encaminharMensagemStrategy = new EncaminharMensagemStrategy();
    const imagemStrategy = new ImagemStrategy();
    const linkStrategy = new LinkStrategy();
    //================================================>

    strategyManager.strategy = buttonStrategy;
    strategyManager.manipulate();

    strategyManager.strategy = buttonStrategy;
    strategyManager.manipulate();

    strategyManager.strategy = canvasStrategy;
    strategyManager.manipulate();

    strategyManager.strategy = downloadStrategy;
    strategyManager.manipulate();

    strategyManager.strategy = encaminharMensagemStrategy;
    strategyManager.manipulate();

    strategyManager.strategy = imagemStrategy;
    strategyManager.manipulate();

    strategyManager.strategy = linkStrategy;
    strategyManager.manipulate();
}, 300);