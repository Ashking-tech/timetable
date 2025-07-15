


const timetable = {
  Monday: [
    { start: "09:00", end: "11:00", subject: "AI LAB(SSS)", room: "LAB 313" },
    { start: "11:15", end: "12:15", subject: "DELD (XYZ)", room: "337" },
    { start: "12:15", end: "01:15", subject: "OS (ABN)", room: "337" },
    { start: "02:00", end: "03:00", subject: "AI (SSS)", room: "337" },
    { start: "03:00", end: "05:00", subject: "DSL", room: "314" }
  ],
  Tuesday: [
    { start: "09:00", end: "11:00", subject: "CEP (ARN)", room: "Project Lab 231" },
    { start: "11:15", end: "12:15", subject: "DS (ABC)", room: "337" },
    { start: "12:15", end: "01:15", subject: "OS (ARN)", room: "337" },
    { start: "02:00", end: "03:00", subject: "AI (SSS)", room: "337" },
    { start: "03:00", end: "04:00", subject: "LIBRARY VISIT", room: "NA" },
  ],
  Wednesday: [
    { start: "09:00", end: "11:00", subject: "DSL(ABC)", room: "DS LAB 314" },
    { start: "11:15", end: "12:15", subject: "GFM", room: "NA" }, // Defaulting to 337 as no specific room was mentioned for GFM
    { start: "12:15", end: "01:15", subject: "OS (ABN)", room: "337" },
    { start: "02:00", end: "03:00", subject: "GFM", room: "NA" },
    { start: "03:00", end: "04:00", subject: "DM (PVN)", room: "337" }, 
    { start: "04:00", end: "05:00", subject: "DELD", room: "337" }
  ],
  Thursday: [
    { start: "09:00", end: "11:00", subject: "CEP", room: "Software Lab 334" },
    { start: "11:15", end: "12:15", subject: "UHV (PQR)", room: "337" },
    { start: "12:15", end: "01:15", subject: "DM (PVN)", room: "337" },
    { start: "02:00", end: "03:00", subject: "EEM (PQR)", room: "337" },
    { start: "03:00", end: "04:00", subject: "AI (SSS)", room: "337" },
    { start: "04:00", end: "05:00", subject: "DS(ABC)", room: "337" }
  ],
  Friday: [
    { start: "09:00", end: "11:00", subject: "EEM (PQR)", room: "336" },
    { start: "11:15", end: "12:15", subject: "DS (ABC)", room: "337" },
    { start: "12:15", end: "01:15", subject: "UHV (PQR)", room: "337" },
    { start: "02:00", end: "03:00", subject: "AI", room: "337" }, // Defaulting to 337
    { start: "03:00", end: "04:00", subject: "CEP", room: "NA" }, // Defaulting to 337
  ],
};


function getCurrentLecture() {
    const now = new Date();

   
    const day = now.toLocaleString("en-US", { weekday: "long" });

   
    const time = now.toTimeString().slice(0, 5); // e.g. "13:45"

    const todaySchedule = timetable[day] || [];

    for (let lecture of todaySchedule) {
        if (time >= lecture.start && time < lecture.end) {
            return lecture;
        }
    }
    console.log(now)
    console.log(day)
    console.log(time)
    return null;
}
getCurrentLecture()





function getLectureData(day, time) {
  const todaySchedule = timetable[day] || [];

  let current = null;
  let next = null;

  for (let i = 0; i < todaySchedule.length; i++) {
    const lec = todaySchedule[i];
    if (time >= lec.start && time < lec.end) {
      current = lec;
      next = todaySchedule[i + 1] || null;
      break;
    }
    if (!current && time < lec.start) {
      next = lec;
      break;
    }
  }

  return { current, next };
}


window.onload = () => {
  const now = new Date();
  const day = now.toLocaleString("en-US", { weekday: "long" });
  const time = now.toTimeString().slice(0, 5); // HH:MM

  const { current, next } = getLectureData(day, time);

  document.getElementById("subject").textContent = current ? current.subject : "No class";
  document.getElementById("room").textContent = current ? current.room : "--";
  document.getElementById("time").textContent = current ? `${current.start} – ${current.end}` : "--";

  document.getElementById("next-class").textContent = next
    ? `Next: ${next.subject} (${next.start})`
    : "🎉 Done for the day!";
};


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('✅ Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.log('❌ Service Worker registration failed:', error);
      });
  });
}
