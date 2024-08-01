import Navbar from './components/navigation/Navbar';
import DiagnosisSection from './components/diagnostic-section/DiagnosisSection';
import PatientDataSection from './components/patient-data-section/PatientDataSection';
import PatientList from './components/patient-list/PatientList';

function App() {
  return (
    <>
      <Navbar />
      <main className="xl:w-[97%] min-[1600px]:w-[1564px] h-[72px] mx-auto px-1 grid grid-cols-4 gap-x-5">
        <PatientList />
        <DiagnosisSection />
        <PatientDataSection />
      </main>
    </>
  );
}

export default App;
