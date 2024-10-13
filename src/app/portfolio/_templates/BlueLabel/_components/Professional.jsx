import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Professional({ professional }) {
  return (
    <section>
      <h2 className="text-3xl font-serif font-bold text-blue-100 mb-4">
        Experiência Profissional
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {professional.map((job, index) => (
          <Card
            key={index}
            className="bg-blue-800 shadow-lg hover:scale-105 transition-transform"
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold">{job.company}</CardTitle>
              <p className="text-lg text-blue-300 italic">{job.role}</p>
              <p className="text-sm text-blue-400">
                {job.startDate} - {job.endDate ? job.endDate : "Presente"}
              </p>
            </CardHeader>
            <CardContent className="text-blue-200 mt-4">
              <p>{job.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
