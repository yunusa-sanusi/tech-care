import Patient from './Patient';

import searchIcon from 'assets/svg/search.svg';
import image from 'assets/png/Layer 8.png';

const PatientList = () => {
  return (
    <section className="w-full h-auto bg-primary rounded-xl col-span-1 relative py-4 pr-1">
      <div className="flex justify-between items-center px-4">
        <h2 className="font-extrabold text-xl">Patients</h2>
        <img src={searchIcon} alt="search icon" className="w-[18px] h-[18px]" />
      </div>

      <div className="mt-4 overflow-y-auto">
        <Patient patientName={'John Doe'} patientImage={image} />
        <Patient patientName={'Emily Williams'} patientImage={image} />
        <Patient patientName={'Jane Doe'} patientImage={image} />
      </div>
    </section>
  );
};
export default PatientList;
