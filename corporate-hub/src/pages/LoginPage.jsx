import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
  return (
    <section className="login w-full h-[87vh] flex flex-col justify-center items-center">
      <section className="w-[28%] p-4 pt-9 flex gap-11 flex-col bg-gray-800 rounded-lg">
        <article className="title flex justify-center items-center">
          <h1 className="text-white text-3xl">Iniciar Sesion</h1>
        </article>
        <LoginForm />
      </section>
    </section>
  );
};
