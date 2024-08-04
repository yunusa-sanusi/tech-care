import Patient from './Patient';

import searchIcon from 'assets/svg/search.svg';

const PatientList = ({ patients }) => {
  return (
    <section className="w-full h-auto bg-primary rounded-xl col-span-1 relative py-4 pr-1">
      <div className="flex justify-between items-center px-4">
        <h2 className="font-extrabold text-xl">Patients</h2>
        <img src={searchIcon} alt="search icon" className="w-[18px] h-[18px]" />
      </div>

      <div className="mt-4 overflow-y-auto">
        {patients.map((patient) => {
          return (
            <Patient
              key={patient.phone_number}
              patientName={patient.name}
              patientImage={patient.profile_picture}
              patientGender={patient.gender}
              patientAge={patient.age}
            />
          );
        })}
      </div>
    </section>
  );
};
export default PatientList;
