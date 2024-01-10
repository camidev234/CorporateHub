import logo from "../assets/img/logo.png";

export const Landing = () => {
  return (
    <section className="landing w-full h-full flex">
      <article className="logoLand w-[50%] h-[100%] flex justify-end items-center">
        <img src={logo} alt="logo" className="w-[63%]" />
      </article>
      <article className="text w-[50%] h-[100%] flex justify-center items-center pr-52">
        <h1 className="text-white text-lg">
          La información de empresas de este directorio procede de la base de
          datos de Informa Colombia, líder en información empresarial para la
          captación, análisis y gestión de clientes
        </h1>
      </article>
    </section>
  );
};
