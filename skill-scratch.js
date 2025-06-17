
function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);





document.querySelector('.matchButton').addEventListener('click', function() {
  // User ke input le lo
  const userSkill = document.getElementById('skillInput').value.trim();
  const learnSkill = document.getElementById('learnInput').value.trim();
  
  // Validation: agar input khali hai to kuch mat karo
  if (!userSkill || !learnSkill) {
    alert("Please enter both your skill and the skill you want to learn.");
    return;
  }
  
  // Profiles data (dummy database)
  const dummyProfiles = [
    { name: "Ravi Kumar", skill: "Python Development", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Priya Sharma", skill: "Graphic Designing", img: "https://randomuser.me/api/portraits/women/45.jpg" },
    { name: "Amit Verma", skill: "Digital Marketing", img: "https://randomuser.me/api/portraits/men/76.jpg" },
    { name: "Sana Sheikh", skill: "Public Speaking", img: "https://randomuser.me/api/portraits/women/65.jpg" },
    { name: "Rohit Singh", skill: "JavaScript Developer", img: "https://randomuser.me/api/portraits/men/52.jpg" }
  ];
  
  // Jo skill user seekhna chahta hai, usko match karo dummy profiles se
  const matchedProfiles = dummyProfiles.filter(profile => 
    profile.skill.toLowerCase().includes(learnSkill.toLowerCase())
  );

  const profilesGrid = document.getElementById('profilesGrid');
  
  // Pehle purane profiles hata do
  profilesGrid.innerHTML = '';

  // Agar match mil gaya
  if (matchedProfiles.length > 0) {
    matchedProfiles.forEach(profile => {
      const card = document.createElement('div');
      card.className = 'profileCard';
      card.innerHTML = `
        <img src="${profile.img}" alt="Profile Pic" class="profileImage">
        <div class="profileInfo">
          <h3 class="profileName">${profile.name}</h3>
          <p class="profileSkill">Skill: ${profile.skill}</p>
        </div>
      `;
      profilesGrid.appendChild(card);
    });
  } else {
    // Agar koi match nahi mila
    profilesGrid.innerHTML = '<p style="font-size:18px; color:#666;">No matching users found.</p>';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const matchButton = document.querySelector('.matchButton');
  const profilesGrid = document.getElementById('profilesGrid');

  const dummyProfiles = [
    { name: "Ravi Kumar", skill: "Python Development", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Priya Sharma", skill: "Graphic Designing", img: "https://randomuser.me/api/portraits/women/45.jpg" },
    { name: "Amit Verma", skill: "Digital Marketing", img: "https://randomuser.me/api/portraits/men/76.jpg" },
    { name: "Sana Sheikh", skill: "Public Speaking", img: "https://randomuser.me/api/portraits/women/65.jpg" },
    { name: "Rohit Singh", skill: "JavaScript Developer", img: "https://randomuser.me/api/portraits/men/52.jpg" }
  ];

  matchButton.addEventListener('click', function() {
    const learnSkill = document.getElementById('learnInput').value.trim().toLowerCase();
    profilesGrid.innerHTML = ''; // Clear old profiles

    if (learnSkill === '') {
      alert('Please enter the skill you want to learn.');
      return;
    }

    // Find matching profiles
    const matchedProfiles = dummyProfiles.filter(profile =>
      profile.skill.toLowerCase().includes(learnSkill)
    );

    if (matchedProfiles.length > 0) {
      matchedProfiles.forEach(profile => {
        const card = document.createElement('div');
        card.className = 'profileCard';
        card.innerHTML = `
          <img src="${profile.img}" alt="Profile Pic" class="profileImage">
          <div class="profileInfo">
            <h3 class="profileName">${profile.name}</h3>
            <p class="profileSkill">Skill: ${profile.skill}</p>
          </div>
        `;
        profilesGrid.appendChild(card);
      });
    } else {
      profilesGrid.innerHTML = '<p style="font-size:18px; color:#666;">No matching users found.</p>';
    }
  });
});




// Quiz Game Logic
function startQuizGame() {
  document.getElementById('quiz-game').style.display = 'block';
  document.getElementById('quiz-card').style.display = 'none';
}

function checkQuizAnswer(answer) {
  if (answer === 'Paris') {
      alert('Correct Answer!');
  } else {
      alert('Wrong Answer. Try Again!');
  }
}

// Puzzle Game Logic
function startPuzzleGame() {
  document.getElementById('puzzle-game').style.display = 'block';
  document.getElementById('puzzle-card').style.display = 'none';
}

function solvePuzzle() {
  alert('Puzzle Solved! Congrats!');
}

// Memory Match Game Logic
function startMemoryGame() {
  document.getElementById('memory-game').style.display = 'block';
  document.getElementById('memory-card').style.display = 'none';
}

function startMemoryMatch() {
  alert('Start Matching! Try to remember the cards.');
}

// Riddle Game Logic
function startRiddleGame() {
  document.getElementById('riddle-game').style.display = 'block';
  document.getElementById('riddle-card').style.display = 'none';
}

function checkRiddleAnswer(answer) {
  if (answer === 'M') {
      alert('Correct Answer!');
  } else {
      alert('Wrong Answer! Try Again.');
  }
}

// Close Game Logic
function closeGame(gameType) {
  document.getElementById(gameType + '-game').style.display = 'none';
  document.getElementById(gameType + '-card').style.display = 'block';
}






  const cursor = document.querySelector(".dot-cursor");

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  const speed = 0.05; // kam value = zyada lag

  // Mouse position track
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animate cursor dot with delay
  function animateCursor() {
    const dx = mouseX - currentX;
    const dy = mouseY - currentY;

    currentX += dx * speed;
    currentY += dy * speed;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Links & interactive elements
  const targets = document.querySelectorAll("a, button, .hover-target");

  targets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(5)";
      cursor.style.backgroundColor = "white";
      cursor.style.mixBlendMode = "difference";
    });

    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursor.style.backgroundColor = "black";
      cursor.style.mixBlendMode = "normal";
    });
  });





const speeds = [0.4, 0.7, 0.8, 0.2];


    for (let col = 1; col <= 4; col++) {
      const container = document.getElementById(`col${col}`);
      for (let i = 1; i <= 6; i++) {
        const img = document.createElement('img');
        img.src = `images/${(col - 1) * 6 + i}.jpg`;
        img.alt = `Image ${(col - 1) * 6 + i}`;
        container.appendChild(img);
      }
    }

    const imageTracks = document.querySelectorAll('.image-track');
    let currentScroll = 0;

    function animate() {
      const scrollY = window.scrollY;
      currentScroll += (scrollY - currentScroll) * 0.05; // smoother and slower

      imageTracks.forEach((track, index) => {
        track.style.transform = `translateY(-${currentScroll * speeds[index]}px)`;
      });

      requestAnimationFrame(animate);
    }

    animate();