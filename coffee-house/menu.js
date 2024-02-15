document.addEventListener(
    'DOMContentLoaded',
    document.querySelector('body').classList.add('appear')
  );
  
  (function underline() {
    if (window.location.href.includes('menu')) {
      document.querySelector('.menu').classList.add('selected');
    }
  })();
  
  const tabs = document.querySelectorAll('.menu__btn'),
    tabsContent = document.querySelectorAll('.menu__category-container');
  
  tabs.forEach(switchCategory);
  
  function switchCategory(tab) {
    tab.addEventListener('click', function() {
      if (!tab.classList.contains('active')) {
        tabs.forEach(el => el.classList.remove('active'));
        tab.classList.add('active');
        tabsContent.forEach(el => el.classList.remove('grid', 'appear'))
        document.querySelector(tab.dataset.id).classList.add('grid', 'appear');
      }
    })
  };