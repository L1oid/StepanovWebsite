const express = require('express');
const app = express();
const ExcelJS = require('exceljs');


const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Ваш server.js
app.post('/submit-data', async (req, res) => {
    try {
        const { lastName, inicial, password, address, count, select1, select2, deliveryType, invoice, additionalInfo } = req.body;

        if (password !== "1234567Zxc") {
            return res.status(401).send('Неверный пароль');
        }

        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile('eggs.xlsx');
        const worksheet = workbook.getWorksheet(1);

        const newRow = worksheet.addRow([lastName, inicial, address, count, select1, select2, deliveryType, invoice, additionalInfo]);

        await workbook.xlsx.writeFile('eggs.xlsx');

        res.status(200).send('Данные успешно добавлены в Excel файл.');
    } catch (error) {
        console.error('Ошибка:', error);
        res.status(500).send('Произошла ошибка при обработке вашего запроса.');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});