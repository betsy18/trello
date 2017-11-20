window.addEventListener('load', function() {
  // declarando los elementos a utilizar
  var text = document.getElementById('text');
  var containerList = document.getElementById('container-list');
  var icon = document.getElementById('icon');
  var containerHomework = document.getElementById('container-homework');
  var form = document.getElementById('form');
  var title = document.getElementById('title');

  // evento click para la lista
  text.addEventListener('click', function(event) {
    containerList.classList.add('form-click');
    var btnSave = document.createElement('button');
    btnSave.textContent = 'Guardar';
    containerList.appendChild(btnSave);
    btnSave.classList.add('button');
    icon.classList.add('icon');
    containerList.appendChild(icon);

    // evento click para las tareas
    btnSave.addEventListener('click', function() {
      btnSave.hidden = true;
      text.hidden = true;
      text.classList.add('display');
      title.textContent = text.value;
      containerHomework.appendChild(title);
      containerHomework.classList.add('form-click');
      var newText = document.createElement('p');
      newText.textContent = 'Añadir una tarea';
      containerHomework.appendChild(newText);
      containerList.classList.remove('form-click');

      // Creacion del contenedor de las tareas
      newText.addEventListener('click', function() {
        newText.hidden = true;
        var textArea = document.createElement('textarea');
        var btnAdd = document.createElement('button');
        textArea.classList.add('textarea');
        containerHomework.appendChild(textArea);
        containerHomework.appendChild(btnAdd);
        btnAdd.classList.add('button');
        btnAdd.textContent = 'Añadir';

        // Creacion de la lista de tareas
        btnAdd.addEventListener('click', function() {
          var taks = document.createElement('p');
          taks.textContent = textArea.value;
          containerHomework.insertBefore(taks, textArea);
          textArea.value = '';
        });
      });
    });
  });
});