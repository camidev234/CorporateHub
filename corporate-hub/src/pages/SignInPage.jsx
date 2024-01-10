import { RegisterUser } from "../components/RegisterUser";

export const SignInPage = () => {
  return (
    <section className="signInPage">
      <div 
       className="title w-[100%] h-32 flex justify-center items-center text-white"
      >
        <h1 className="text-3xl">Registra tu empresa</h1>
      </div>
      <div className="h-auto">
        <RegisterUser />
      </div>
    </section>
  );
};
