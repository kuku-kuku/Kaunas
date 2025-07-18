import React from 'react';

export default function AmziausGrupes() {
  const grupes = [
    {
      pavadinimas: 'U9',
      metai: '2015 / 2016',
      vyrTreneris: 'Gabrielius Zagurskas',
      treneriai: ['Lukas Sipavičius', 'Tomas Macelis'],
    },
    {
      pavadinimas: 'U7',
      metai: '2017 / 2018',
      vyrTreneris: 'Ernestas Bernota',
      treneriai: ['Tomas Macelis'],
    },
    {
      pavadinimas: 'U5',
      metai: '2019 / 2020',
      vyrTreneris: 'Lukas Sipavičius',
      treneriai: [],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-center mb-12 text-black">
        Treniruojamos amžiaus grupės
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {grupes.map((g, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all p-6"
          >
            <h2 className="text-2xl font-bold text-[#007bb5] mb-2">{g.pavadinimas}</h2>
            <p className="text-gray-700 mb-3">
              <span className="font-medium">Gimimo metai:</span> {g.metai}
            </p>
            <p className="text-gray-800 mb-3">
              <span className="font-medium">Vyr. treneris:</span> {g.vyrTreneris}
            </p>

            {g.treneriai.length > 0 && (
              <div>
                <p className="font-medium text-gray-800 mb-1">Kiti treneriai:</p>
                <ul className="list-disc list-inside text-gray-700">
                  {g.treneriai.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
