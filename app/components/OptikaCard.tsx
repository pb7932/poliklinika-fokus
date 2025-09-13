import React from 'react'

const OptikaCard = ({title, icon, description}) => {
  return (
    <div
                  key={title}
                  className="bg-cyan-700 rounded-xl shadow-lg p-6 max-w-md
                             hover:shadow-xl transition"
                >
                  <div className="flex justify-center mb-4">
                    {icon}
                  </div>
                  <h2 className="text-xl font-semibold text-center mb-2 text-white">
                    {title}
                  </h2>
                  <p className="text-gray-200 text-center">{description}</p>
                </div>
  )
}

export default OptikaCard