fetch('assets/particleconfig.json')
  .then(data => data.json())
  .then(json => {
    particlesJS('particles', json);  
  });