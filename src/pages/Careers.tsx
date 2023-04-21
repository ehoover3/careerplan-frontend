import { useState, useEffect } from "react";
import allCareers from "../data/careers.json";
import CareersNavbar from "../features/careers/CareersNavbar";
import Footer from "../layouts/Footer";
import CareersTable from "../features/careers/CareersTable";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Careers() {
  const [careersList, setCareersList] = useState(allCareers);
  const [favorites, setFavorites] = useLocalStorage<any[]>("careerFavorites", []);
  const [filter, setFilter] = useState<string>("All Careers");

  useEffect(() => {
    if (filter === "All Careers") setCareersList(allCareers);
    else {
      let filteredCareers = allCareers.filter((career) => career.industries.includes(filter));
      setCareersList(filteredCareers);
    }
  }, [filter]);

  return (
    <div className='CareersContainer'>
      <CareersNavbar setFilter={setFilter} />
      <CareersTable careersList={careersList} favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
}
