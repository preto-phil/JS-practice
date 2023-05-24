function dropdown() {
  const dropDownMenu = document.getElementById('dropdown');
  const dropDownItems = document.getElementById('dd-items');
  dropDownMenu.addEventListener('click', () => {
    if (dropDownItems.style.display === 'none') {
      dropDownItems.style.display = 'block';
    } else {
      dropDownItems.style.display = 'none';
    }
  });
}

dropdown();

