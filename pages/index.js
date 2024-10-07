import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sistema Interno WOW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1 className="title">Bem-vindo ao Sistema Interno WOW</h1>
        <p className="subtitle">Gerenciamento eficiente para tickets e usuários</p>
      </header>

      <main className="main">
        <div className="grid">
          <a href="/gerenciar-usuarios" className="card">
            <h3>Gerenciar Usuários &rarr;</h3>
            <p>Controle total sobre os usuários do sistema.</p>
          </a>

          <a href="/abrir-ticket" className="card">
            <h3>Abrir Ticket &rarr;</h3>
            <p>Submeta um novo ticket de suporte.</p>
          </a>

          <a href="/gerenciar-tickets" className="card">
            <h3>Gerenciar Tickets &rarr;</h3>
            <p>Gerencie tickets abertos, pendentes e resolvidos.</p>
          </a>

          <a href="/dashboard" className="card">
            <h3>Dashboard &rarr;</h3>
            <p>Visualize as métricas e o status dos tickets.</p>
          </a>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Sistema Interno WOW</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .header {
          text-align: center;
          margin-bottom: 50px;
        }

        .title {
          font-size: 2.5rem;
          color: #0070f3;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #555;
        }

        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
