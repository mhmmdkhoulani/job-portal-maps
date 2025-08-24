import { useEffect, useState } from "react";
import Container from "./UI/Container";

function Vacancies() {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:4000/api/vacancies");
      const result = await res.json();
      setVacancies(result.data);
    }
    getData();
  }, []);
  return (
    <div className="py-[50px]">
      <Container>
        <h1 className="text-5xl font-medium mb-10">Most Popular Vacancies</h1>
        <div className="grid grid-cols-4 gap-6">
          {vacancies.map((vacancy) => (
            <div key={vacancy.id}>
              <a
                className="text-lg font-medium hover:text-primary-500 hover:underline transtion duration-300"
                href=""
              >
                {vacancy.name}
              </a>
              <p className="text-sm text-gray-500">
                {vacancy.openPositions} Open Positions
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Vacancies;
