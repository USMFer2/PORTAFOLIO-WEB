let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Nutrientes que componen los alimentos, e implica los procesos que suceden en tu cuerpo después de que ingieres alimento, es decir la obtención, asimilación y digestión de los nutrimientos por el organismo.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

