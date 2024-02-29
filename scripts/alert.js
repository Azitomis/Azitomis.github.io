function detectDevTools() {
  debugger;
  if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
      alert("Please close Developer Tools.");
      window.location.reload();
  }
}

detectDevTools();

window.addEventListener('resize', detectDevTools);
