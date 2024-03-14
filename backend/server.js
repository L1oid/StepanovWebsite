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

app.post('/submit-data', async (req, res) => {
    try {
        const { lastName, inicial, password, address, count, select1, select2, deliveryType, invoice, additionalInfo } = req.body;

        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile('eggs.xlsx');
        const worksheet = workbook.getWorksheet(1);

        const newRow = worksheet.addRow([lastName, inicial, password, address, count, select1, select2, deliveryType, invoice, additionalInfo]);

        await workbook.xlsx.writeFile('eggs.xlsx');

        res.status(200).send('Data added to Excel file successfully.');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred while processing your request.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});