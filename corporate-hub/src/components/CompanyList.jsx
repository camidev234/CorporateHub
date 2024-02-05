import { useContext, useState } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsStar, BsStarFill } from "react-icons/bs";

export const CompanyList = () => {
  const { searchResults } = useContext(GeneralContext);
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="text-white">
      <div className="title w-full h-20 flex justify-center items-center text-2xl">
        <h1>Empresas encontradas</h1>
      </div>
      <section className="list w-full pt-12 pb-12 flex justify-center items-center h-auto">
        <div className="co bg-gray-800 w-[50%] rounded-md p-4 flex flex-col shadow-md">
          {searchResults.map((company) => (
            <Link to={`/company/${company._id}`} key={company._id}>
              <article
                className="company mb-1 border-b border-gray-700 pt-2 pb-2 flex justify-between"
                key={company.id}
              >
                <div className="flex flex-col">
                  <h1 className="font-bold">{company.company_name}</h1>
                  <span className="text-sm text-gray-300">
                    Actividad: {company.principal_activity}
                  </span>
                  <span className="score flex gap-1">
                    {
                        stars.map((star, index) => {
                          if (star <= company.score) {
                            return <BsStarFill key={index} className="text-yellow-500 text-xs" />;
                          } else {
                            return <BsStar key={index} className=" text-xs"/>;
                          }
                        })
                    }
                  </span>
                </div>
                <div>
                  <button className="bg-green-500 p-1 rounded-md">
                    <BsEyeFill />
                  </button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
