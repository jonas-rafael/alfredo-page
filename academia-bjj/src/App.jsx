import { useState } from 'react'
import logo from './assets/logo.png'
import mascote from './assets/mascote.jpg'

const INSTAGRAM_URL = 'https://www.instagram.com/alfredojunior_escolabjj?exln=bnRkN3prdm5xaTc5'
const WHATSAPP_NUMBER = '558488382099'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=R.+Eng.+Luciano+Barros,+178,+São+Gonçalo+do+Amarante+-+RN,+59290-000,+Brasil'
const GOOGLE_MAPS_EMBED = 'https://maps.google.com/maps?q=R.+Eng.+Luciano+Barros,+178,+S%C3%A3o+Gon%C3%A7alo+do+Amarante+-+RN,+59290-000&t=&z=16&ie=UTF8&iwloc=&output=embed'
const TELEFONE = '+55 84 8838-2099'

function gerarLinkWhatsApp(mensagem) {
  const encoded = encodeURIComponent(mensagem)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

const BENEFICIOS = [
  {
    icon: '🥋',
    titulo: 'Defesa Pessoal Eficiente',
    descricao: 'Aprenda a arte suave: técnicas reais de alavanca e controle para dominar qualquer adversário, sem precisar usar de força bruta.'
  },
  {
    icon: '🔥',
    titulo: 'Condicionamento & Queima Calórica',
    descricao: 'Fortaleça a musculatura, ganhe flexibilidade e resistência cardiovascular enquanto alivia a ansiedade e o estresse.'
  },
  {
    icon: '🧠',
    titulo: 'Disciplina & Respeito (Infantil)',
    descricao: 'Aulas estruturadas que desenvolvem foco, autoconfiança, disciplina e respeito ao próximo dentro e fora do tatame.'
  },
  {
    icon: '🤝',
    titulo: 'Ambiente Acolhedor e Seguro',
    descricao: 'Estrutura limpa, tatame profissional e uma equipe que cuida de você desde o seu primeiro treino como faixa-branca.'
  }
]

const FAQS = [
  {
    pergunta: 'Nunca pratiquei artes marciais antes. Posso começar do zero?',
    resposta: 'Com certeza! A maioria dos nossos alunos começou sem nenhuma experiência prévia. O Professor Alfredo Junior acompanha cada etapa do seu aprendizado com atenção, respeitando o seu ritmo e nível de condicionamento físico.'
  },
  {
    pergunta: 'Como funciona a aula experimental gratuita?',
    resposta: 'A aula experimental é 100% gratuita e sem compromisso! É a melhor forma de você conhecer a escola, a didática do professor, sentir a energia do tatame e tirar todas as suas dúvidas antes de se matricular.'
  },
  {
    pergunta: 'Preciso comprar kimono antes da primeira aula?',
    resposta: 'Não! Para a aula experimental, basta vir com uma roupa leve de treino (bermuda sem zíper ou bolso rígido e camiseta, ou calça legging). Quando decidir treinar regularmente, nós orientamos onde e como adquirir o kimono ideal.'
  },
  {
    pergunta: 'A partir de qual idade as crianças podem iniciar?',
    resposta: 'Recebemos crianças a partir das turmas Infantil I e Infantil II. O Jiu-Jitsu estimula o desenvolvimento motor, ensina a lidar com frustrações, melhora a concentração e ajuda na sociabilidade de forma muito divertida.'
  },
  {
    pergunta: 'Qual a diferença entre os treinos GI e NO-GI?',
    resposta: 'O treino GI é o tradicional realizado com kimono, focado em estratégia, postura e pegadas no pano. O treino NO-GI é praticado sem kimono (com bermuda e rashguard), com ritmo mais ágil e pegadas focadas em articulações e controle corporal.'
  }
]

function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [abaHorario, setAbaHorario] = useState('todos')
  const [faqAberta, setFaqAberta] = useState(null)

  const toggleFaq = (index) => {
    setFaqAberta(faqAberta === index ? null : index)
  }

  const fecharMenu = () => setMenuAberto(false)

  const linkAulaGratis = gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental gratuita de Jiu-Jitsu.')

  return (
    <div className="app">
      {/* Top Banner de Destaque */}
      <div className="top-banner">
        <span>⚡ Matrículas Abertas em São Gonçalo do Amarante • Agende sua Aula Experimental Grátis ⚡</span>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#inicio" className="nav-brand" onClick={fecharMenu}>
            <img src={logo} alt="Alfredo Junior - Escola de Jiu-Jitsu" className="nav-logo" />
            <div className="brand-text">
              <span className="brand-name">Alfredo Junior</span>
              <span className="brand-tag">Escola de Jiu-Jitsu</span>
            </div>
          </a>

          <div className={`nav-menu ${menuAberto ? 'active' : ''}`}>
            <a href="#sobre" className="nav-link" onClick={fecharMenu}>Sobre</a>
            <a href="#beneficios" className="nav-link" onClick={fecharMenu}>Benefícios</a>
            <a href="#professor" className="nav-link" onClick={fecharMenu}>Professor</a>
            <a href="#horarios" className="nav-link" onClick={fecharMenu}>Horários</a>
            <a href="#duvidas" className="nav-link" onClick={fecharMenu}>Dúvidas</a>
            <a href="#contato" className="nav-link" onClick={fecharMenu}>Contato</a>
          </div>

          <div className="nav-actions">
            <a href={linkAulaGratis} className="btn-nav-cta" target="_blank" rel="noopener noreferrer">
              🥋 Aula Grátis
            </a>
            <a href={`tel:${TELEFONE}`} className="btn-telefone" title="Ligar para a academia">
              📞 {TELEFONE}
            </a>
          </div>

          <button
            className={`mobile-menu-btn ${menuAberto ? 'open' : ''}`}
            aria-label="Abrir menu"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="inicio">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot"></span> Turmas Infantil & Adulto
            </div>
            <h1 className="hero-title">
              Evolua Corpo e Mente no <span className="highlight-text">Jiu-Jitsu</span>
            </h1>
            <p className="hero-description">
              Aprenda a arte suave com o <strong>Professor Alfredo Junior</strong>.
              Treinos de defesa pessoal, disciplina e saúde para você e seus filhos em São Gonçalo do Amarante - RN.
            </p>

            <div className="hero-botoes">
              <a href={linkAulaGratis} className="btn btn-primary btn-grande" target="_blank" rel="noopener noreferrer">
                🥋 Agendar Aula Grátis
              </a>
              <a href="#horarios" className="btn btn-outline btn-grande">
                📅 Ver Horários
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Iniciante Amigável</span>
              </div>
              <div className="stat-divisor"></div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Faixas Etárias (Kids & Adultos)</span>
              </div>
              <div className="stat-divisor"></div>
              <div className="stat-item">
                <span className="stat-number">GI & NO-GI</span>
                <span className="stat-label">Com e Sem Kimono</span>
              </div>
            </div>

            <div className="hero-info">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <span className="info-label">Endereço</span>
                  <span className="info-value">R. Eng. Luciano Barros, 178 — São Gonçalo do Amarante</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="logo-wrapper">
              <img src={logo} alt="Logo Academia Alfredo Junior" className="hero-logo" />
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Conheça a escola</span>
          <div className="scroll-arrow">▼</div>
        </div>
      </header>

      {/* Sobre a Academia */}
      <section className="sobre" id="sobre">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Tradição & Respeito</span>
            <h2 className="section-title">Sobre Nossa Escola</h2>
            <div className="section-divisor"></div>
          </div>
          <div className="sobre-content">
            <div className="sobre-texto">
              <p className="lead">
                A <strong>Escola de Jiu-Jitsu Alfredo Junior</strong> nasceu com o propósito de transformar vidas através da disciplina marcial, do respeito mútuo e do fortalecimento físico e mental.
              </p>
              <p>
                Liderada pelo <strong>Professor Alfredo Junior</strong>, nossa academia oferece um espaço seguro, motivador e preparado para acolher famílias inteiras — desde os primeiros passos das crianças no tatame até adultos que buscam qualidade de vida e defesa pessoal.
              </p>
              <div className="sobre-selo">
                <span className="selo-icon">🛡️</span>
                <div>
                  <strong>Tatame Seguro & Higienizado</strong>
                  <p>Espaço planejado com foco na integridade física e conforto de todos os alunos.</p>
                </div>
              </div>
            </div>

            <div className="sobre-destaques">
              <div className="destaque-item">
                <div className="destaque-icon">🥋</div>
                <div className="destaque-texto">
                  <h4>Turmas Infantis (Kids & Juvenil)</h4>
                  <p>Foco no desenvolvimento motor, disciplina, respeito e combate ao bullying através da autoconfiança.</p>
                </div>
              </div>
              <div className="destaque-item">
                <div className="destaque-icon">🔥</div>
                <div className="destaque-texto">
                  <h4>Turmas Adultas (Iniciantes e Graduados)</h4>
                  <p>Aprenda defesa pessoal eficiente, elimine o estresse do dia a dia e conquiste condicionamento físico de atleta.</p>
                </div>
              </div>
              <div className="destaque-item">
                <div className="destaque-icon">🤝</div>
                <div className="destaque-texto">
                  <h4>Comunidade Unida</h4>
                  <p>Aqui no tatame ninguém treina sozinho: companheirismo e evolução coletiva em primeiro lugar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="beneficios" id="beneficios">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Por Que Praticar</span>
            <h2 className="section-title">O Que o Jiu-Jitsu Transforma em Você</h2>
            <div className="section-divisor"></div>
          </div>
          <div className="beneficios-grid">
            {BENEFICIOS.map((b, idx) => (
              <div key={idx} className="beneficio-card">
                <div className="beneficio-icon">{b.icon}</div>
                <h3 className="beneficio-titulo">{b.titulo}</h3>
                <p className="beneficio-desc">{b.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mascote */}
      <section className="mascote" id="professor">
        <div className="container">
          <div className="mascote-card">
            <div className="mascote-texto">
              <span className="section-tag light">Conheça o Professor</span>
              <h2 className="mascote-title">Um pouco sobre nosso Professor</h2>

              <div className="prof-creds">
                <span className="cred-chip">🥋 Faixa Preta de Jiu-Jitsu</span>
                <span className="cred-chip">📚 Professor de Matemática</span>
                <span className="cred-chip">🎓 Educador há 20+ anos</span>
              </div>

              <p className="bio-lead">
                Meu nome é <strong>Alfredo Junior</strong>. Ao longo da minha trajetória,
                descobri que ensinar vai muito além de transmitir conhecimentos:
                é contribuir para a formação de pessoas, desenvolver valores e transformar vidas.
              </p>

              <p>
                Foi com esse propósito que nasceu a <strong>Escola de Jiu-Jitsu Alfredo Junior</strong>,
                um espaço dedicado ao ensino da arte suave, à formação de cidadãos
                e ao desenvolvimento pessoal por meio do esporte.
              </p>

              <blockquote className="bio-destaque">
                “O Jiu-Jitsu Salva!”
              </blockquote>

              <p>
                Acredito que o jiu-jitsu é uma ferramenta poderosa para ensinar
                <strong> disciplina, respeito, responsabilidade, autocontrole,
                superação e autoconfiança</strong>. No tatame, cada aluno é incentivado
                a superar seus próprios desafios, respeitar seus colegas e compreender
                que as maiores conquistas são construídas com dedicação e perseverança.
              </p>

              <p>
                Nossa escola é um ambiente acolhedor, familiar e comprometido com o
                desenvolvimento de crianças, adolescentes e adultos — respeitando as
                individualidades e valorizando a evolução de cada aluno.
              </p>

              <p className="bio-missao">
                Mais do que formar atletas, nossa missão é formar pessoas melhores para a vida.
              </p>

              <div className="mascote-features">
                <div className="m-feat">✓ Disciplina</div>
                <div className="m-feat">✓ Respeito</div>
                <div className="m-feat">✓ Autoconfiança</div>
                <div className="m-feat">✓ Superação</div>
              </div>

              <p className="bio-fechamento">
                Seja bem-vindo à <strong>Alfredo Junior Escola de Jiu-Jitsu</strong>.
                Aqui, ensinamos muito além das técnicas — ensinamos valores que
                acompanham você dentro e fora do tatame.
              </p>

              <a href={linkAulaGratis} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Venha Treinar Conosco
              </a>
            </div>
            <div className="mascote-imagem">
              <img src={mascote} alt="Mascote da Academia Alfredo Junior" className="mascote-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Horários */}
      <section className="horarios" id="horarios">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Planeje Sua Semana</span>
            <h2 className="section-title">Grade de Horários dos Treinos</h2>
            <div className="section-divisor"></div>
            <p className="section-desc">
              Escolha a turma ideal para você ou seu filho. Toque em <strong>Agendar</strong> para reservar sua aula experimental.
            </p>
          </div>

          {/* Filtro de Abas */}
          <div className="horarios-tabs">
            <button
              className={`tab-btn ${abaHorario === 'todos' ? 'active' : ''}`}
              onClick={() => setAbaHorario('todos')}
            >
              🥋 Todas as Turmas
            </button>
            <button
              className={`tab-btn ${abaHorario === 'adulto' ? 'active' : ''}`}
              onClick={() => setAbaHorario('adulto')}
            >
              👨‍🦱 Adulto
            </button>
            <button
              className={`tab-btn ${abaHorario === 'infantil1' ? 'active' : ''}`}
              onClick={() => setAbaHorario('infantil1')}
            >
              👦 Infantil I
            </button>
            <button
              className={`tab-btn ${abaHorario === 'infantil2' ? 'active' : ''}`}
              onClick={() => setAbaHorario('infantil2')}
            >
              👦👦 Infantil II
            </button>
          </div>

          <div className="horarios-grid">
            {/* Adulto */}
            {(abaHorario === 'todos' || abaHorario === 'adulto') && (
              <div className="horario-card">
                <div className="horario-card-header">
                  <div className="card-badge">Turma Adulto</div>
                  <h3>👨‍🦱 Jiu-Jitsu Adulto</h3>
                  <p>Iniciantes e graduados</p>
                </div>
                <div className="horario-linhas">
                  <div className="horario-linha">
                    <span className="horario-dia">Segunda</span>
                    <div className="horario-detalhes">
                      <span className="horario-hora">20h</span>
                      <span className="tag-modalidade gi">GI (com kimono)</span>
                    </div>
                    <a href={gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental de Jiu-Jitsu Adulto para Segunda-feira às 20h (GI com kimono).')} className="btn-whatsapp-dia" target="_blank" rel="noopener noreferrer">Agendar</a>
                  </div>
                  <div className="horario-linha">
                    <span className="horario-dia">Terça</span>
                    <div className="horario-detalhes">
                      <span className="horario-hora">19h</span>
                      <span className="tag-modalidade nogi">NO-GI (sem kimono)</span>
                    </div>
                    <a href={gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental de Jiu-Jitsu Adulto para Terça-feira às 19h (No GI sem kimono).')} className="btn-whatsapp-dia" target="_blank" rel="noopener noreferrer">Agendar</a>
                  </div>
                  <div className="horario-linha">
                    <span className="horario-dia">Quarta</span>
                    <div className="horario-detalhes">
                      <span className="horario-hora">20h</span>
                      <span className="tag-modalidade gi">GI (com kimono)</span>
                    </div>
                    <a href={gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental de Jiu-Jitsu Adulto para Quarta-feira às 20h (GI com kimono).')} className="btn-whatsapp-dia" target="_blank" rel="noopener noreferrer">Agendar</a>
                  </div>
                  <div className="horario-linha">
                    <span className="horario-dia">Quinta</span>
                    <div className="horario-detalhes">
                      <span className="horario-hora">19h</span>
                      <span className="tag-modalidade nogi">NO-GI (sem kimono)</span>
                    </div>
                    <a href={gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental de Jiu-Jitsu Adulto para Quinta-feira às 19h (No GI sem kimono).')} className="btn-whatsapp-dia" target="_blank" rel="noopener noreferrer">Agendar</a>
                  </div>
                  <div className="horario-linha">
                    <span className="horario-dia">Sexta</span>
                    <div className="horario-detalhes">
                      <span className="horario-hora">20h</span>
                      <span className="tag-modalidade gi">GI (com kimono)</span>
                    </div>
                    <a href={gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental de Jiu-Jitsu Adulto para Sexta-feira às 20h (GI com kimono).')} className="btn-whatsapp-dia" target="_blank" rel="noopener noreferrer">Agendar</a>
                  </div>
                </div>
              </div>
            )}

            {/* Infantil I */}
            {(abaHorario === 'todos' || abaHorario === 'infantil1') && (
              <div className="horario-card">
                <div className="horario-card-header">
                  <div className="card-badge infantil">Turma Kids</div>
                  <h3>👦 Infantil I</h3>
                  <p>Iniciação lúdica e disciplina</p>
                </div>
                <div className="horario-linhas">
                  <div className="horario-linha">
                    <span className="horario-dia">Segunda</span>
                    <div className="horario-detalhes">
                      <span className="horario-hora">18h</span>
                      <span className="tag-modalidade gi">GI (com kimono)</span>
                    </div>
                    <a href={gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental de Jiu-Jitsu Infantil I para Segunda-feira às 18h (GI com kimono).')} className="btn-whatsapp-dia" target="_blank" rel="noopener noreferrer">Agendar</a>
                  </div>
                  <div className="horario-linha">
                    <span className="horario-dia">Quarta</span>
                    <div className="horario-detalhes">
                      <span className="horario-hora">18h</span>
                      <span className="tag-modalidade gi">GI (com kimono)</span>
                    </div>
                    <a href={gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental de Jiu-Jitsu Infantil I para Quarta-feira às 18h (GI com kimono).')} className="btn-whatsapp-dia" target="_blank" rel="noopener noreferrer">Agendar</a>
                  </div>
                  <div className="horario-linha">
                    <span className="horario-dia">Sexta</span>
                    <div className="horario-detalhes">
                      <span className="horario-hora">18h</span>
                      <span className="tag-modalidade gi">GI (com kimono)</span>
                    </div>
                    <a href={gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental de Jiu-Jitsu Infantil I para Sexta-feira às 18h (GI com kimono).')} className="btn-whatsapp-dia" target="_blank" rel="noopener noreferrer">Agendar</a>
                  </div>
                </div>
              </div>
            )}

            {/* Infantil II */}
            {(abaHorario === 'todos' || abaHorario === 'infantil2') && (
              <div className="horario-card">
                <div className="horario-card-header">
                  <div className="card-badge infantil">Turma Juvenil</div>
                  <h3>👦👦 Infantil II</h3>
                  <p>Desenvolvimento técnico & foco</p>
                </div>
                <div className="horario-linhas">
                  <div className="horario-linha">
                    <span className="horario-dia">Segunda</span>
                    <div className="horario-detalhes">
                      <span className="horario-hora">19h</span>
                      <span className="tag-modalidade gi">GI (com kimono)</span>
                    </div>
                    <a href={gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental de Jiu-Jitsu Infantil II para Segunda-feira às 19h (GI com kimono).')} className="btn-whatsapp-dia" target="_blank" rel="noopener noreferrer">Agendar</a>
                  </div>
                  <div className="horario-linha">
                    <span className="horario-dia">Terça</span>
                    <div className="horario-detalhes">
                      <span className="horario-hora">18h</span>
                      <span className="tag-modalidade nogi">NO-GI (sem kimono)</span>
                    </div>
                    <a href={gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental de Jiu-Jitsu Infantil II para Terça-feira às 18h (No GI sem kimono).')} className="btn-whatsapp-dia" target="_blank" rel="noopener noreferrer">Agendar</a>
                  </div>
                  <div className="horario-linha">
                    <span className="horario-dia">Quarta</span>
                    <div className="horario-detalhes">
                      <span className="horario-hora">19h</span>
                      <span className="tag-modalidade gi">GI (com kimono)</span>
                    </div>
                    <a href={gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental de Jiu-Jitsu Infantil II para Quarta-feira às 19h (GI com kimono).')} className="btn-whatsapp-dia" target="_blank" rel="noopener noreferrer">Agendar</a>
                  </div>
                  <div className="horario-linha">
                    <span className="horario-dia">Quinta</span>
                    <div className="horario-detalhes">
                      <span className="horario-hora">18h</span>
                      <span className="tag-modalidade nogi">NO-GI (sem kimono)</span>
                    </div>
                    <a href={gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental de Jiu-Jitsu Infantil II para Quinta-feira às 18h (No GI sem kimono).')} className="btn-whatsapp-dia" target="_blank" rel="noopener noreferrer">Agendar</a>
                  </div>
                  <div className="horario-linha">
                    <span className="horario-dia">Sexta</span>
                    <div className="horario-detalhes">
                      <span className="horario-hora">19h</span>
                      <span className="tag-modalidade gi">GI (com kimono)</span>
                    </div>
                    <a href={gerarLinkWhatsApp('Olá, Professor Alfredo Junior! Gostaria de agendar uma aula experimental de Jiu-Jitsu Infantil II para Sexta-feira às 19h (GI com kimono).')} className="btn-whatsapp-dia" target="_blank" rel="noopener noreferrer">Agendar</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dúvidas Frequentes (FAQ) */}
      <section className="faq-section" id="duvidas">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Tire Suas Dúvidas</span>
            <h2 className="section-title">Perguntas Frequentes</h2>
            <div className="section-divisor"></div>
            <p className="section-desc">
              Tudo o que você precisa saber antes de pisar no tatame pela primeira vez.
            </p>
          </div>

          <div className="faq-container">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${faqAberta === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <button className="faq-question">
                  <span>{faq.pergunta}</span>
                  <span className="faq-icon">{faqAberta === idx ? '−' : '+'}</span>
                </button>
                {faqAberta === idx && (
                  <div className="faq-answer">
                    <p>{faq.resposta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Contato e Localização com Mapa */}
      <section className="contato" id="contato">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Onde Estamos</span>
            <h2 className="section-title">Venha Fazer uma Visita</h2>
            <div className="section-divisor"></div>
          </div>

          <div className="contato-grid">
            <div className="contato-card destaque-whatsapp">
              <div className="card-icon">💬</div>
              <h3>WhatsApp Direto</h3>
              <p>Converse diretamente com o Professor Alfredo Junior para agendar sua aula.</p>
              <a href={linkAulaGratis} className="btn btn-primary btn-bloco" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </div>

            <div className="contato-card">
              <div className="card-icon">📸</div>
              <h3>Instagram Oficial</h3>
              <p>Acompanhe fotos e vídeos das graduações, treinos e novidades da academia.</p>
              <a href={INSTAGRAM_URL} className="btn btn-outline-dark btn-bloco" target="_blank" rel="noopener noreferrer">
                Seguir no Instagram
              </a>
            </div>

            <div className="contato-card">
              <div className="card-icon">📞</div>
              <h3>Telefone de Contato</h3>
              <p>Ligue ou envie mensagem para tirar qualquer dúvida sobre matrículas.</p>
              <a href={`tel:${TELEFONE}`} className="btn btn-outline-dark btn-bloco">
                {TELEFONE}
              </a>
            </div>

            <div className="contato-card">
              <div className="card-icon">📍</div>
              <h3>Localização</h3>
              <p>R. Eng. Luciano Barros, 178 — São Gonçalo do Amarante - RN</p>
              <a href={GOOGLE_MAPS_URL} className="btn btn-mapa btn-bloco" target="_blank" rel="noopener noreferrer">
                Abrir Rota no Google Maps
              </a>
            </div>
          </div>

          {/* Mapa Integrado */}
          <div className="mapa-wrapper">
            <iframe
              title="Localização da Academia Alfredo Junior BJJ"
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Pré-Footer */}
      <section className="cta-final">
        <div className="container">
          <div className="cta-final-box">
            <h2>Pronto para dar o seu primeiro passo no tatame?</h2>
            <p>Agende agora mesmo uma aula experimental gratuita para você ou seus filhos.</p>
            <a href={linkAulaGratis} className="btn btn-primary btn-grande" target="_blank" rel="noopener noreferrer">
              🥋 Quero Minha Aula Experimental Grátis
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <img src={logo} alt="Logo Alfredo Junior BJJ" className="footer-logo" />
          <div className="footer-info">
            <h4>Alfredo Junior • Escola de Jiu-Jitsu</h4>
            <p>R. Eng. Luciano Barros, 178 — São Gonçalo do Amarante - RN</p>
          </div>
          <div className="footer-redes">
            <a href={INSTAGRAM_URL} className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
            <span className="dot">•</span>
            <a href={WHATSAPP_URL} className="footer-link" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <span className="dot">•</span>
            <a href={GOOGLE_MAPS_URL} className="footer-link" target="_blank" rel="noopener noreferrer">Como Chegar</a>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Academia Alfredo Junior - Escola de Jiu-Jitsu. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Botão Flutuante de WhatsApp */}
      <a
        href={linkAulaGratis}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar aula experimental pelo WhatsApp"
      >
        <span className="float-ping"></span>
        <span className="float-icon">💬</span>
        <span className="float-text">Aula Grátis</span>
      </a>
    </div>
  )
}

export default App
