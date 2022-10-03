let x = 5
switch (typeof x) {
    case 'number':
        console.log('Это число');
        break;
    case 'string':
        console.log('Это строка');   
        break;
    case 'boolean':
        console.log('Это логический тип');
        break;
    default:
        console.log('Тип x не определён');
    }