const toggleColorModeChoice = function(set_to){
  if (set_to == 'auto'){
    set_to = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' == 'dark'
  }
  const allDivs = document.querySelectorAll('.color-mode-choice')
  allDivs.forEach((div) => {
    div.classList.add('d-none')
    if (div.matches('.color-mode-' + set_to + '-visible')){
      div.classList.remove('d-none')
    }
  })
};

// Grab the checkbox and label elements
const toggle = document.getElementById('theme-toggle');
const html = document.getElementById('html');

const initialTheme = html.getAttribute('data-bs-theme');
if (initialTheme === 'auto') {
  setTheme(getSystemTheme());
}
else {
  if (initialTheme === 'dark')
    toggle.checked = true;

  setTheme(initialTheme);
}

// Listen for checkbox state change
toggle.addEventListener('change', function () {
  // Determine theme based on checkbox state
  const newTheme = this.checked ? 'dark' : 'light';

  setTheme(newTheme);
});


// Function to get system preference
function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
  // Set the new theme on the <html> tag
  html.setAttribute('data-bs-theme', theme);

  // Set the new theme on the aria toggle
  toggle.setAttribute("aria-label", theme);

  // Adjust the toggle
  toggle.checked = (theme === 'dark');

  toggleColorModeChoice(theme);
}


