document.getElementById("toggleBtn").onclick = function() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("main").classList.toggle("active");
};

document.getElementById("closeBtn").onclick = function() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("main").classList.toggle("active");
};


function back(){
    window.history.back();
}

function shopnow() {
      const targetSection = document.getElementById('target-section');
      targetSection.scrollIntoView({ behavior: 'smooth' });
}