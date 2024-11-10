import { blackLabelFont } from "..";

export default function Professional({ professional }) {
  return (
    <section>
      <h2 className={`text-4xl font-bold text-gray-100 mb-6 ${blackLabelFont}`}>
        Experiência Profissional
      </h2>
      <div className="space-y-8">
        {professional?.map((job, index) => (
          <div key={index} className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {job.company}
                </h3>
                <p className="text-lg text-gray-400 italic">{job.role}</p>
                <p className="text-sm text-gray-500">
                  {job.startDate} - {job.endDate ? job.endDate : "Presente"}
                </p>
              </div>
            </div>
            <p className="text-gray-300">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
