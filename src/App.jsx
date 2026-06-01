import { useState } from "react";
import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const profile = {
    name: "Johannes Triestanto",
    job: "Notaris",
    birthDate: "2001-06-15",
    avatar:
      "https://png.pngtree.com/png-clipart/20230520/original/pngtree-hand-draw-person-avatar-icon-png-image_9166166.png",
  };

  const movies = [
    {
      title: "Inception",
      img: "https://upload.wikimedia.org/wikipedia/id/9/91/Inception_poster.jpg",
    },
    {
      title: "Interstellar",
      img: "https://upload.wikimedia.org/wikipedia/id/b/bc/Interstellar_film_poster.jpg",
    },
    {
      title: "Avengers: Endgame",
      img: "https://upload.wikimedia.org/wikipedia/id/0/0d/Avengers_Endgame_poster.jpg",
    },
    {
      title: "The Batman",
      img: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500",
    },
    {
      title: "Spider-Man",
      img: "https://upload.wikimedia.org/wikipedia/id/7/74/Spider-Man547.jpg",
    },
  ];

  const getAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();

    if (
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  const getZodiac = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
      return "♈ Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
      return "♉ Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
      return "♊ Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
      return "♋ Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
      return "♌ Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
      return "♍ Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
      return "♎ Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
      return "♏ Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
      return "♐ Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
      return "♑ Capricorn";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
      return "♒ Aquarius";

    return "♓ Pisces";
  };

  const showZodiac = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      {/* PROFILE CARD */}
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="avatar"
          />

          <div className="profile-title">
            <h1>{profile.name}</h1>
          </div>
        </div>

        <div className="profile-info">
          <div className="info-item">
            <span>👤 Nama</span>
            <strong>{profile.name}</strong>
          </div>

          <div className="info-item">
            <span>💼 Pekerjaan</span>
            <strong>{profile.job}</strong>
          </div>

          <div className="info-item">
            <span>🎂 Tanggal Lahir</span>
            <strong>{profile.birthDate}</strong>
          </div>

          <div className="info-item">
            <span>🎯 Umur</span>
            <strong>{getAge(profile.birthDate)} Tahun</strong>
          </div>

          <div className="info-item">
            <span>✨ Zodiac</span>
            <strong>{getZodiac(profile.birthDate)}</strong>
          </div>
        </div>

        <button
          className="zodiac-btn"
          onClick={showZodiac}
        >
           Cek Zodiac
        </button>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div
          className="popup-overlay"
          onClick={closePopup}
        >
          <div
            className="popup-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-icon">
              ✨
            </div>

            <h2>Zodiac Kamu</h2>

            <p>
              Halo <strong>{profile.name}</strong>
            </p>

            <div className="zodiac-result">
              {getZodiac(profile.birthDate)}
            </div>

            <button
              className="close-btn"
              onClick={closePopup}
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* MOVIES */}
      <div className="section-title">
        <h2>🎬 Film Favorit Saya</h2>
        <p>Top 5 Movies of All Time</p>
      </div>

      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div
            className="movie-card"
            key={index}
          >
            <img
              src={movie.img}
              alt={movie.title}
            />

            <div className="movie-content">
              <h3>{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;