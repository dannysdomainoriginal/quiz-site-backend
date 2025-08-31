process.on('uncaughtException', err => {
        console.error(`There was an uncaught error: ${err}`)
        process.exit(1)
    })

    // extra error handler from chatgpt
    process.on('unhandledRejection', err => {
        console.error('Unhandled Rejection:', err);
        process.exit(1);
    });