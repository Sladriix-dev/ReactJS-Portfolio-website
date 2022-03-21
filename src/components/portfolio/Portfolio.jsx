import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My personal portfolio website with ReactJS',
    github: 'https://github.com/Sladriix-dev/portfolio-website',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Reservation website for a restaurant in PHP',
    github: 'https://github.com/Sladriix-dev/Restoo'
  },
  {
    id: 3,
    image: IMG3,
    title: 'A mobile application with an online chat system with React Native',
    github: 'https://github.com/Sladriix-dev'
  },
  {
    id: 4,
    image: IMG4,
    title: 'A simple and effective Simon game in Javascript',
    github: 'https://github.com/Sladriix-dev/Simon-Game'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Adoption site with a shopping cart system and a whole admin part with Symfony',
    github: 'https://github.com/dxchml/Symfony'
  },
  {
    id: 6,
    image: IMG6,
    title: 'A dashboard gathering useful information for an agency and its clients (IN PROGRESS)',
    github: 'https://github.com/Sladriix-dev/my-dashboard'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio