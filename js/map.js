const missionButtons = document.querySelectorAll('.mission-btn');

// Initialize unlocked missions if not set
if(!localStorage.getItem('unlockedMissions')) {
  localStorage.setItem('unlockedMissions', JSON.stringify(['mission1']));
}

const unlocked = JSON.parse(localStorage.getItem('unlockedMissions'));

missionButtons.forEach(btn => {
  const mission = btn.getAttribute('data-mission');
  const missionKey = mission.replace('.html', '');
  
  if(!unlocked.includes(missionKey)) {
    btn.disabled = true;
    btn.innerText += " (Locked)";
  }

  btn.addEventListener('click', () => {
    window.location.href = mission;
  });
});
