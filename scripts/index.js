const [options, menuToggle] = [document.querySelectorAll('header li'), document.querySelector('#menuToggle')];
options.forEach(cur => cur.addEventListener('click', e => menuToggle.checked = false));