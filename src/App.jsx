import { useEffect, useState } from 'react';

import Navbar from './components/navigation/Navbar';
import DiagnosisSection from './components/diagnostic-section/DiagnosisSection';
import PatientDataSection from './components/patient-data-section/PatientDataSection';
import PatientList from './components/patient-list/PatientList';
import Loader from './components/Loader';

function App() {
  const [patients, setPatients] = useState([]);
  const [jessicaData, setJessicaData] = useState(null);
  const [loading, setLoading] = useState(true);

  const username = import.meta.env.VITE_APP_USERNAME;
  const password = import.meta.env.VITE_APP_PASSWORD;
  const authToken = btoa(`${username}:${password}`);

  const getPatients = async () => {
    const response = await fetch(
      'https://fedskillstest.coalitiontechnologies.workers.dev',
      {
        headers: {
          Authorization: `Basic ${authToken}`,
        },
      },
    );
    const data = await response.json();
    setPatients(data);
    setLoading(false);
  };

  useEffect(() => {
    getPatients();
  }, []);

  useEffect(() => {
    const jessica = patients.find(
      (patient) => patient.name === 'Jessica Taylor',
    );
    setJessicaData(jessica);
  }, [patients]);

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="w-full pt-10 flex justify-center">
          <Loader loading={loading} />
        </div>
      ) : (
        <main className="xl:w-[97%] min-[1600px]:w-[1564px] mx-auto px-1 grid grid-cols-4 gap-x-5">
          <PatientList patients={patients} />
          {jessicaData && (
            <>
              <DiagnosisSection patientData={jessicaData} />
              <PatientDataSection patientData={jessicaData} />
            </>
          )}
        </main>
      )}
    </>
  );
}

export default App;
