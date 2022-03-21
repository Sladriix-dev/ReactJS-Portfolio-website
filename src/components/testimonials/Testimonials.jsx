import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Nicolas Zaccour',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: AVTR2,
    name: 'Sophie Tabourin',
    review: "Kévin est une personne qui se révèle dans la difficultée. D'un naturel calme et autononme il saura vous surprendre face à sa persévérance et sa réussite. Qans limite, il ne se fiwe pas d'objectif car c'est pour lui, une barrière qui se ferme à un champ des possibles du monde de la créativité."
  },
  {
    avatar: AVTR3,
    name: 'David Chemla',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: AVTR4,
    name: 'Cédric Le Liorzou', 
    review: "Avec l'aide de Kévin, nous avons obtenu d'énormes progrès concernant nos résultats au niveau de notre trafic web. Suite à une fréquentation en hausse et innatendu de notre activité en ligne, nos infrastructuers web n'étaient pas suffisantes et prêtes à ce changement. Grâce à lui, nous avons pu développer et adapter nos besoins en conséquences afin de proposer le meilleur service possible à nos clients."
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials