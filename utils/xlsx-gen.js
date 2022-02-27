const xlsx = require('json-as-xlsx');

const generateBuffer = function (sheetName, columns, content) {

  console.log(columns);
  console.log(content);


    const settings = {
      writeOptions: {
        type: 'buffer',
        bookType: 'xlsx'
      }
    }

    console.log(settings);

    const xlsxData = [
        {
          sheet: sheetName,
          columns: columns,
          content: content
    }];

    const buffer = xlsx(xlsxData, settings)
    return buffer;
}

module.exports = generateBuffer;
