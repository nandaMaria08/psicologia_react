

import React, { useState } from "react";

function SpecialistsPage() {
  const specialists = [
    {
      name: "Dr. João Silva",
      role: "Psicólogo",
      experience: "5 anos",
      schedule: [
        { day: "Segunda-feira", times: ["09:00", "11:00", "15:00"] },
        { day: "Quarta-feira", times: ["10:00", "14:00", "16:00"] },
      ],
    },
    {
      name: "Dra. Ana Costa",
      role: "Terapeuta",
      experience: "3 anos",
      schedule: [
        { day: "Terça-feira", times: ["08:00", "10:00", "14:00"] },
        { day: "Quinta-feira", times: ["09:00", "13:00", "15:00"] },
      ],
    },
    {
      name: "Dr. Carlos Oliveira",
      role: "Psiquiatra",
      experience: "10 anos",
      schedule: [
        { day: "Segunda-feira", times: ["10:00", "12:00", "16:00"] },
        { day: "Sexta-feira", times: ["09:00", "11:00", "14:00"] },
      ],
    },
  ];

  const [selectedSpecialist, setSelectedSpecialist] = useState(null);

  const handleScheduleClick = (specialist) => {
    setSelectedSpecialist(specialist);
  };

  const closeModal = () => {
    setSelectedSpecialist(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-blue-800 text-4xl font-bold mb-8">Nossos Especialistas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialists.map((specialist, index) => (
          <div
            key={index}
            className="bg-blue-800 text-white p-4 rounded-lg flex flex-col items-center"
          >
            <div className="bg-gray-300 w-24 h-24 rounded-full mb-4"></div>
            <h2 className="text-xl font-bold mb-2">{specialist.name}</h2>
            <p>{specialist.role}</p>
            <p>{specialist.experience}</p>
            <button
              className="mt-4 bg-yellow-300 text-blue-800 py-2 px-4 rounded"
              onClick={() => handleScheduleClick(specialist)}
            >
              Atendimentos
            </button>
          </div>
        ))}
      </div>

    
      {selectedSpecialist && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-blue-800 text-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">{selectedSpecialist.name}</h2>
            <p className="mb-4">Horários disponíveis:</p>
            <div className="space-y-4">
              {selectedSpecialist.schedule.map((slot, index) => (
                <div key={index}>
                  <h3 className="font-bold">{slot.day}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {slot.times.map((time, idx) => (
                      <button
                        key={idx}
                        className="bg-yellow-300 text-blue-800 py-1 px-3 rounded hover:bg-yellow-400 transition"
                        onClick={() =>
                          alert(`Você marcou um horário com ${selectedSpecialist.name} às ${time} na ${slot.day}.`)
                        }
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="mt-6 bg-red-500 py-2 px-4 rounded hover:bg-red-600 transition w-full"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpecialistsPage;
