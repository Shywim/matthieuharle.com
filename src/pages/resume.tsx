import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { Badge, BadgeList } from '../components/Badge'
import { Card, CardBody } from '../components/Card'
import Layout from '../components/layout'

const resume = {
  skills: {
    expert: [
      { label: 'JavaScript/TypeScript', color: '#faedcb' },
      { label: 'React', color: '#caf0f8' },
      { label: 'React Native', color: '#caf0f8' },
      { label: 'Node.JS', color: '#c7f9cc' },
    ],
    master: [
      { label: 'PHP', color: '#dfe7fd' },
      { label: 'Go', color: '#caf0f8' },
      { label: 'Docker', color: '#bbdefb' },
      { label: 'Java', color: '#ffccd5' },
      { label: 'Android', color: '#d8f3dc' },
    ],
    familiar: [
      { label: 'Kotlin', color: '#fed9b7' },
      { label: 'Python', color: '#c7f9cc' },
      { label: 'Elixir', color: '#cbc0d3' },
      { label: 'C#', color: '#c7f9cc' },
    ],
  },
  experience: [
    {
      period: 'Depuis 11/2019',
      title: 'Développeur Full Stack; DevOps; Gérant, YADA, Amiens',
      description: [
        "Formation de l'équipe sur les technologies utilisées",
        "Mise en place des projets et onboarding de l'équipe",
        "Gestion des serveurs de l'entreprise et mises en place des applications et outils pour l'équipe",
      ],
      tags: [
        'React',
        'React Native',
        'TypeScript',
        'PHP',
        'Laravel',
        'PostgreSQL',
        'Docker',
        'Kotlin',
        'Swift',
        'Objective-C',
        'Java',
      ],
      waves: [
        {
          color: '#FCBF00',
          path: 'M0,64 L60,101.3 C120,139,240,213,360,256 C480,299,600,309,720,217.3 C840,125,960,131,1080,155.3 C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z',
        },
        {
          color: '#F29168',
          path: 'M0,192 L60,192 C120,192,240,172,360,158 C480,144,600,236,720,266.7 C840,277,960,267,1080,218.7 C1200,171,1320,85,1380,60 L1440,30 L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z',
        },
      ],
    },
    {
      period: '01/2018 à 09/2019',
      title: 'Développeur Full Stack en stage alterné, YOUCOM, Amiens',
      description: [
        'Création et mise en ligne de sites HTML et WordPress',
        'Suite du développement du CRM sur-mesure commencé en auto-entrepreneur',
        "Renfort pour une entreprise tierce sur le développement d'une application de gestion d'organisations autogérées (React+redux-saga)",
      ],
      tags: [
        'React',
        'Next.js',
        'Node.js',
        'PHP',
        'WordPress',
        'PostgreSQL',
        'Docker',
      ],
      waves: [
        {
          color: '#9053be',
          path: 'M0,64L60,85.3C120,107,240,149,360,144C480,139,600,85,720,96C840,107,960,181,1080,224C1200,267,1320,277,1380,282.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z',
        },
        {
          color: '#FB6E37',
          path: 'M0,288L60,288C120,288,240,288,360,288C480,288,600,288,720,266.7C840,245,960,203,1080,192C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z',
        },
      ],
    },
    {
      period: '01/2016 à 01/2020',
      title: 'Développeur Full Stack, auto-entrepreneur, Amiens',
      description: [
        "Développement d'applications Android natives + leur backend en PHP (Slim)",
        "Création d'un CRM sur-mesure avec React et Node.js & PostgreSQL pour le backend",
      ],
      tags: [
        'React',
        'Node.js',
        'PHP',
        'Android',
        'Java',
        'PostgreSQL',
        'Docker',
      ],
      waves: [
        {
          color: '#2596be',
          path: 'M0,256L60,229.3C120,203,240,149,360,160C480,171,600,245,720,234.7C840,224,960,128,1080,96C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z',
        },
        {
          color: '#EEEEE4',
          path: 'M0,32L60,69.3C120,107,240,181,360,224C480,267,600,277,720,261.3C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z',
        },
      ],
    },
    {
      period: '06/2016 à 08/2016',
      title: 'Développeur en stage, YOUCOM, Amiens',
      description: [
        "Développement d'une application Android proposant des services pour animaux",
        "Formation d'autres stagiaires au développement Android",
        'Réalisation du backend avec Node.js',
      ],
      tags: ['Android', 'Java', 'Node.js', 'PostgreSQL'],
      waves: [
        {
          color: '#FB6E37',
          path: 'M0,128L60,128C120,128,240,128,360,106.7C480,85,600,43,720,69.3C840,96,960,192,1080,234.7C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z',
        },
        {
          color: '#9053be',
          path: 'M0,224L60,240C120,256,240,288,360,272C480,256,600,192,720,149.3C840,107,960,85,1080,106.7C1200,128,1320,192,1380,224L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z',
        },
      ],
    },
  ],
  education: [
    {
      period: '2013 à 2019',
      title:
        'Master Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE)',
      school: 'Université de Picardie Jules Verne, Amiens',
    },
    {
      period: '2013',
      title: 'Baccalauréat Scientifique',
      school: 'Lycée Robert de Luzarches, Amiens',
    },
  ],
  interests: [
    { label: '📸 Photographie', color: '#d8e2dc' },
    { label: '🚲 Voyages à Vélo', color: '#faedcd' },
    { label: '🌱 Permaculture & Écologie', color: '#e9edc9' },
    { label: '🐷 Éthique Animale', color: '#f5ccab' },
  ],
  projects: [
    {
      title: 'Voices of Aliénor',
      period: '2021',
      description: [
        'Une application web permettant d\'organiser toutes les données liées à un jeu de rôle "papier" : fiches personnages, joueurs, monstres, cartes... Ainsi que d\'enregistrer des éléments de narration et de les jouer via un bot Discord pour les séances à distance.',
        'Créée avec Laravel et Livewire, puis migrée vers API Platform.',
      ],
      tags: [
        { label: 'React', color: '#caf0f8' },
        { label: 'PHP', color: '#dfe7fd' },
        { label: 'Go', color: '#caf0f8' },
        { label: 'Docker', color: '#bbdefb' },
      ],
      pictures: 'alienor',
    },
    {
      title: 'PokéScan',
      period: '2016',
      description: [
        "PokéScan était une application Android permettant d'avoir de meilleures indications sur la position des Pokémons environnant dans Pokémon Go, le radar inclu à la sortie du jeu étant très limité.",
        "L'utilisateur pouvait recevoir des notifications si des pokémons étaient à promixité de lui, selon sa préférence de distance. Il pouvait aussi afficher une carte par dessus le jeu, à l'aide d'une bulle à la Facebook Messenger.",
      ],
      tags: [
        { label: 'Android', color: '#d8f3dc' },
        { label: 'PHP', color: '#dfe7fd' },
      ],
      pictures: 'pokescan',
    },
    {
      title: 'La Boite à Antoine Daniel',
      period: '2014 à 2016',
      description: [
        'Une application Android regroupant environ 500 extraits sonores des vidéos du vidéaste Antoine Daniel.',
        "C'est en développant cette application que j'ai le plus progressé. J'ai appris et mis en oeuvre beaucoup de patterns classiques de programmation, ainsi qu'explorer le code source d'Android. C'est aussi ma première fois avec les APIs REST, les sons étant téléchargés à part de l'application pour pouvoir plus facilement les mettre à jour et indépendamment, ainsi que réduire la taille de l'application elle-même.",
      ],
      tags: [
        { label: 'Android', color: '#d8f3dc' },
        { label: 'PHP', color: '#dfe7fd' },
      ],
      pictures: 'bad',
    },
  ],
}

const ResumePage = ({ data }) => (
  <Layout>
    <div className="resume">
      <Card style={{ width: 'auto' }}>
        <CardBody>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div style={{ flex: 1, maxWidth: 500 }}>
              <h1>CV : Développeur Full Stack dans les Hauts-de-France</h1>
              <h2>Matthieu Harlé</h2>
              <p>Amiens, Valenciennes, Lille, Picardie, Nord-Pas-de-Calais</p>
              <p>
                <a href="mailto:bonjour@matthieuharle.com">
                  bonjour@matthieuharle.com
                </a>
              </p>
            </div>
            <div style={{ flex: 1, maxWidth: 500 }}>
              <BadgeList>
                <Badge
                  href="https://github.com/Shywim"
                  style={{ backgroundColor: '#e6e6e6' }}
                  goal="github"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub | Shywim
                </Badge>
                <Badge
                  href="https://gitlab.com/Shywim"
                  style={{ backgroundColor: '#fed9b7' }}
                  goal="gitlab"
                >
                  <FontAwesomeIcon icon={faGitlab} color="#E24329" /> GitLab |
                  Shywim
                </Badge>
              </BadgeList>
              <p className="resume-abstract">
                Mes expériences m'ont amené à évoluer dans une grande variété
                d'environnements de travail. Mon expertise comprend le
                développement, la maintenance d’application web et mobiles, que
                ça soit le frontend ou le backend, ainsi que la mise en place
                d’outils et de processus pour aider et faciliter le
                développement.
              </p>
            </div>
          </div>
        </CardBody>
      </Card>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <div className="resume-column">
          <h2 className="resume-section-title">Expérience</h2>
          {resume.experience.map((experience, index) => (
            <Card key={index}>
              <CardBody>
                <h3 className="resume-period">{experience.period}</h3>
                <h4 className="resume-title">{experience.title}</h4>
                <ul className="resume-key-points">
                  {experience.description.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              </CardBody>
              <div className="resume-waves">
                <svg
                  height="100%"
                  width="100%"
                  preserveAspectRatio="none"
                  className="resume-wave"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill={experience.waves[0].color}
                    fillOpacity="0.5"
                    d={experience.waves[0].path}
                  ></path>
                </svg>
                <svg
                  height="100%"
                  width="100%"
                  preserveAspectRatio="none"
                  className="resume-wave"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill={experience.waves[1].color}
                    fillOpacity="0.7"
                    d={experience.waves[1].path}
                  ></path>
                </svg>
              </div>
            </Card>
          ))}
        </div>

        <div className="resume-column">
          <h2 className="resume-section-title">Compétences</h2>
          <Card>
            <CardBody>
              <h3 className="resume-skill-title">Expertise</h3>
              <BadgeList>
                {resume.skills.expert.map((skill, index) => (
                  <Badge style={{ backgroundColor: skill.color }} key={index}>
                    {skill.label}
                  </Badge>
                ))}
              </BadgeList>

              <h3 className="resume-skill-title">Maitrise</h3>
              <BadgeList>
                {resume.skills.master.map((skill, index) => (
                  <Badge style={{ backgroundColor: skill.color }} key={index}>
                    {skill.label}
                  </Badge>
                ))}
              </BadgeList>

              <h3 className="resume-skill-title">Familié</h3>
              <BadgeList>
                {resume.skills.familiar.map((skill, index) => (
                  <Badge style={{ backgroundColor: skill.color }} key={index}>
                    {skill.label}
                  </Badge>
                ))}
              </BadgeList>
            </CardBody>
          </Card>

          <h2 className="resume-section-title">Centres d'intérêts</h2>
          <Card>
            <CardBody>
              <BadgeList>
                {resume.interests.map((interest, index) => (
                  <Badge
                    style={{ backgroundColor: interest.color }}
                    key={index}
                  >
                    {interest.label}
                  </Badge>
                ))}
              </BadgeList>
            </CardBody>
          </Card>

          <h2 className="resume-section-title">Formation</h2>
          {resume.education.map((experience, index) => (
            <Card key={index}>
              <CardBody>
                <h3 className="resume-period">{experience.period}</h3>
                <h4 className="resume-title">{experience.title}</h4>
                <p className="resume-title">{experience.school}</p>
              </CardBody>
            </Card>
          ))}

          <div id="projects">
            <h2 className="resume-section-title">Projets</h2>
            {resume.projects.map((project, index) => (
              <SimpleReactLightbox key={index}>
                <SRLWrapper
                  options={{
                    buttons: {
                      showAutoplayButton: false,
                      showDownloadButton: false,
                    },
                    caption: {
                      showCaption: false,
                    },
                  }}
                  callbacks={{
                    onSlideChange: () => {
                      window.plausible('project-screen-view')
                    },
                  }}
                >
                  <Card>
                    <CardBody>
                      <h3 className="resume-period">{project.period}</h3>
                      <h4 className="resume-title">{project.title}</h4>
                      <BadgeList>
                        {project.tags.map((tag, index) => (
                          <Badge
                            style={{ backgroundColor: tag.color }}
                            key={index}
                          >
                            {tag.label}
                          </Badge>
                        ))}
                      </BadgeList>
                      {project.description.map((d, index) => (
                        <p key={index} style={{ textAlign: 'justify' }}>
                          {d}
                        </p>
                      ))}
                      {data.allFile.nodes
                        .filter(
                          (file) => project.pictures === file.sourceInstanceName
                        )
                        .sort((file) => file.name)
                        .map((file) => (
                          <a key={file.name} href={file.publicURL}>
                            <GatsbyImage
                              image={file.childImageSharp.gatsbyImageData}
                              alt={file.name}
                              style={{
                                width: 150,
                                height: 150,
                                objectFit: 'cover',
                              }}
                            />
                          </a>
                        ))}
                    </CardBody>
                  </Card>
                </SRLWrapper>
              </SimpleReactLightbox>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allFile(sort: { fields: name, order: ASC }) {
      nodes {
        name
        sourceInstanceName
        publicURL
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`

export default ResumePage
