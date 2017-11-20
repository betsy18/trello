window.addEventListener('load', function() {
  var text = document.getElementById('text');
  var containerList = document.getElementById('container-list');
  var icon = document.getElementById('icon');
  var containerHomework = document.getElementById('container-homework');
  var form = document.getElementById('form');
  var title = document.getElementById('title');

  text.addEventListener('click', function(event) {
    containerList.classList.add('form-click');
    var btnSave = document.createElement('button');
    btnSave.textContent = 'Guardar';
    containerList.appendChild(btnSave);
    btnSave.classList.add('button');
    icon.classList.add('icon');
    containerList.appendChild(icon);

    btnSave.addEventListener('click', function() {
      title.textContent = text.value;
      containerHomework.appendChild(title);
      containerHomework.classList.add('form-click');
      containerList.classList.add('display');
      containerList.classList.remove('form-click');
      console.log(containerList);
    });
  });
});