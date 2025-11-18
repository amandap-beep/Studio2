// Loads badge status from localStorage and updates the UI

const badges = [
  { id: "badge1", key: "mission1" },
  { id: "badge2", key: "mission2" },
  { id: "badge3", key: "mission3" },
  { id: "badge4", key: "mission4" },
  { id: "badge5", key: "mission5" }
];

badges.forEach(badge => {
  const unlocked = localStorage.getItem(badge.key);

  const badgeElement = document.getElementById(badge.id);

  if (unlocked === "true") {
    badgeElement.classList.add("unlocked");
  } else {
    badgeElement.classList.add("locked");
  }
});
