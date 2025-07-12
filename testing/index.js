const timetable = {
  Monday: [
    { start: "09:00", end: "10:00", subject: "AL & DS", room: "LAB 313" },
    { start: "10:00", end: "11:00", subject: "SDL", room: "LAB 314" },
    { start: "11:15", end: "12:15", subject: "DELD", room: "337" },
    { start: "12:15", end: "01:15", subject: "OS", room: "337" },
    { start: "02:00", end: "03:00", subject: "AI", room: "337" },
    { start: "03:00", end: "04:00", subject: "CPDPW/VV + ML LAB", room: "336" },
  ],

  Tuesday: [
    { start: "09:00", end: "10:00", subject: "AL & DS", room: "LAB 313" },
    { start: "10:00", end: "11:00", subject: "SDL", room: "LAB 314" },
    { start: "11:15", end: "12:15", subject: "DS/ABC", room: "337" },
    { start: "12:15", end: "01:15", subject: "OS", room: "337" },
    { start: "02:00", end: "03:00", subject: "AI", room: "337" },
    { start: "03:00", end: "04:00", subject: "DM/PQRS", room: "337" },
  ],

  Wednesday: [
    { start: "09:00", end: "10:00", subject: "AL & DS", room: "LAB 313" },
    { start: "10:00", end: "11:00", subject: "SDL", room: "LAB 314" },
    { start: "11:15", end: "12:15", subject: "GFM", room: "337" },
    { start: "12:15", end: "01:15", subject: "OS", room: "337" },
    { start: "02:00", end: "03:00", subject: "AI", room: "337" },
    { start: "03:00", end: "04:00", subject: "DM/PQRS", room: "337" },
    { start: "04:00", end: "05:00", subject: "DELD", room: "337" },
  ],

  Thursday: [
    { start: "11:15", end: "12:15", subject: "UHV", room: "337" },
    { start: "12:15", end: "01:15", subject: "DS/ABC", room: "337" },
    { start: "02:00", end: "03:00", subject: "UHV", room: "337" },
    { start: "03:00", end: "04:00", subject: "EEM", room: "337" },
    { start: "04:00", end: "05:00", subject: "AI", room: "337" },
  ],

  Friday: [
    { start: "09:00", end: "10:00", subject: "UHV", room: "337" },
    { start: "10:00", end: "11:00", subject: "DS/ABC", room: "337" },
    { start: "11:15", end: "12:15", subject: "UHV", room: "337" },
    { start: "12:15", end: "01:15", subject: "EEM", room: "337" },
    { start: "02:00", end: "03:00", subject: "AI", room: "337" },
    { start: "03:00", end: "04:00", subject: "DS/ABC", room: "337" },
    { start: "04:00", end: "05:00", subject: "GFM / CEP", room: "337" },
  ],
};

function getLectureData(day, time) {
  const lectures = timetable[day] || [];
  let current = null;
  let next = null;

  for (let i = 0; i < lectures.length; i++) {
    const lec = lectures[i];
    if (time >= lec.start && time < lec.end) {
      current = lec;
      next = lectures[i + 1] || null;
      break;
    }
    if (time < lec.start) {
      next = lec;
      break;
    }
  }

  return { current, next };
}

function runTest() {
  const day = document.getElementById("test-day").value;
  const time = document.getElementById("test-time").value;

  const { current, next } = getLectureData(day, time);

  document.getElementById("subject").textContent = current ? current.subject : "No class";
  
  document.getElementById("room").textContent = current ? current.room : "--";
  document.getElementById("time").textContent = current ? `${current.start} – ${current.end}` : "--";
  document.getElementById("next-class").textContent = next
    ? `Next: ${next.subject} (${next.start})`
    : "🎉 Done for the day!";
}
document.addEventListener('DOMContentLoaded', runTest);
