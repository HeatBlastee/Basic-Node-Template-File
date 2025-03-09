const {SerConfig, Logger} = require('./config');
const express = require('express');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',apiRoutes)

app.listen(SerConfig.PORT, () => {
    console.log(`Server is running on port ${SerConfig.PORT}`);
    Logger.info(`Server is running on port ${SerConfig.PORT}`,"root",{label:"Server"});
});