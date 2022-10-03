
const map = new Map();

map.set('name', 'Ivan')
.set(42, 'Ответ на любой вопрос в жизни')
.set(true, false)
.set({}, 'Объект')
.set(function() {}, 'Функция')

for (let [key,value] of map){
      console.log('Ключ- '+ key, ', значение- ' + value);
}

