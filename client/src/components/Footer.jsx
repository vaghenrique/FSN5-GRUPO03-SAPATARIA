import { NavLink } from "react-router-dom";

const itens = [
  {nome: "Início", id: 1},
   {nome: "Vitrine", id: 2},
   {nome: "Carrinho", id: 3},
  ]

  const socials = [
    {nome: "Facebook", id: 1, link: "https://www.facebook.com/avantiatlantico", icon: "facebook-f"},
    {nome: "Twitter", id: 2, link: "https://x.com/ifceoficial", icon: "twitter"},
    {nome: "Instagram", id: 3, link: "https://www.instagram.com/avanti.ia", icon: "instagram"},
  ]

const Footer = () => {
  return (
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#233ed2" }}
      >
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              {itens.map((itens) => (
                  <div className="col-md-2" key={itens.id}>
                    <h6 className="text-uppercase font-weight-bold">
                      <NavLink to={itens.nome === "Início" ? "/" : `/${itens.nome.toLowerCase()}`} className="text-white">
                        {itens.nome}
                      </NavLink>
                    </h6>
                  </div>
                )
              )}
            </div>
          </section>

          <hr className="my-5" />

          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                Na FSN5 Store, você encontra uma seleção incrível de produtos variados para facilitar o seu dia a dia e transformar sua rotina. Com qualidade, preços imbatíveis e novidades sempre à vista, somos o destino certo para quem busca variedade e praticidade. Venha nos visitar e descubra o que temos de especial hoje para você! 🚀🛍️
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mb-5">
            {socials.map((socials) => (
              <a
                href={socials.link}
                className="text-white me-4"
                aria-label={socials.nome}
                key={socials.id}
              >
                <i className={`fab fa-${socials.icon}`}></i>
              </a>
            ))}
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © Desenvolvido por: <a className="text-white" href="https://github.com/vaghenrique/FSN5-GRUPO03-SAPATARIA">Equipe 03 - FSN5.</a>
        </div>
      </footer>
  );
};

export default Footer;