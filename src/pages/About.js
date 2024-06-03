import React from 'react';
import './About.css'; // Создадим отдельный CSS файл для стилизации
import ava1 from '../images/ava2.jpg'; // Импортируйте изображения
import ava2 from '../images/ava1.jpg';


const teamMembers = [
  {
    name: 'Arsen Mollayev',
    role: 'CEO',
    avatar: ava1, // Используйте импортированные изображения
    instagram: 'https://www.instagram.com/amegxd/?hl=ru',
    about: 'Я родился 19 апреля 2005 года в Алмате. Являюсь студентом 2-го курса университета Нархоз специальности DMD. Люблю отдыхать, являюсь Главным тренером сборной Нархоз по Dota 2. DEP.CEO организации Narxoz Thunder'
  },
  {
    name: 'Ilnar Sultanov',
    role: 'CEO', // Исправил должность
    avatar: ava2, // Используйте импортированные изображения
    instagram: 'https://www.instagram.com/sultanov707_/?hl=ru',
    about: 'Я родился 16 ноября 2004 года в Алмате. Студент второго курса университета Нархоз специальности DMD. Увлекаюсь мотокроссом и автомобилями. Главный тренер сборной Нархоз по CS2. DEP.CEO организации Narxoz Thunder'
  }
];

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Приветствуем Вас на нашем сайте. Наш сайт является биржей криптовалют. Здесь вы можете покупать и продавать криптовалюту. Немного о нас:</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.avatar} alt={`${member.name}'s avatar`} className="avatar" />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <p>{member.about}</p> {/* Добавляем параграф "о себе" */}
            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="instagram-link">Instagram</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
