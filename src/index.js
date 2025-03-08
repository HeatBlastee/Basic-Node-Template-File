const {SerConfig, Logger} = require('./config');
const express = require('express');
const apiRoutes = require('./routes');

const app = express();

app.use('/api',apiRoutes)

app.listen(SerConfig.PORT, () => {
    console.log(`Server is running on port ${SerConfig.PORT}`);
    Logger.info(`Server is running on port ${SerConfig.PORT}`,"root",{label:"Server"});
});