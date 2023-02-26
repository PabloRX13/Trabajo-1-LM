let title = prompt('Introduce el título de la página:');
let subTitle = prompt('Introduce el subtítulo de la página:');
let content = '';

while (true) {
  let option = prompt('¿Quieres crear un párrafo o una lista? (p / l) o para terminar deja en blanco');

  if (option === 'p') {
    let paragraph = prompt('Introduce el contenido del párrafo:');
    content += '<p>' + paragraph + '</p>';
  } else if (option === 'l') {
    let listType = prompt('¿Quieres crear una lista ordenada o desordenada? (ol / ul)');
    let listItems = '';

    while (true) {
      let item = prompt('Introduce un elemento de la lista (deja en blanco para terminar):');

      if (item === '') {
        break;
      }

      listItems += '<li>' + item + '</li>';
    }

    if (listType === 'ol') {
      content += '<ol>' + listItems + '</ol>';
    } else if (listType === 'ul') {
      content += '<ul>' + listItems + '</ul>';
    }
  } else {
    alert('Aquí tiene su página web');
    break;
  }
}

let body = document.querySelector('body');
body.innerHTML += '<h1>' + title + '</h1>';
body.innerHTML += '<h2>' + subTitle + '</h2>';
body.innerHTML += content;