var shax = prompt('Введите Любую цифру от 0 до 100')

if (shax <= 18 && shax > 0) {
    console.log('Ты трус');
    alert('Ты трус')
}else if(shax > 18 && shax <= 36) {
    console.log('Ты красавчик');
    alert('Ты красавчик')
}else if(shax > 36 && shax <= 50) {
    console.log('Ты умник');
    alert('Ты умник')
}else if(shax > 50 && shax <= 72) {
    console.log('Ты тупой');
    alert('Ты тупой')
}else if(shax > 72 && shax <= 81) {
    console.log('ты интересный человек');
    alert('ты интересный человек')
}else if(shax > 81 && shax <= 100) {
    console.log('пиздабол');
    alert('пиздабол')
}else  {
    console.log('Ошибка');
    alert('Ошибка')
}