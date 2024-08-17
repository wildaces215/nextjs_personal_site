const ExperienceItem = ({ title, company, period, responsibilities }) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-lg text-gray-600">{company}</p>
      <p className="text-sm text-gray-500 mb-2">{period}</p>
      <ul className="list-disc pl-5">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  );
  
  const ExperienceSection = () => {
    const experiences = [
      {
        title: "QA Analyst",
        company: "Proctor Loan Protector",
        period: "January 2024- Present",
        responsibilities: [
          "Lead a team of 5 developers in creating scalable web applications",
          "Implemented microservices architecture, improving system efficiency by 30%",
          "Mentored junior developers and conducted code reviews"
        ]
      },
      {
        title: "QA Analyst/Senior Assoicate",
        company: "Infosys Limited",
        period: "July 2021 - August 2023",
        responsibilities: [
          "Developed and maintained multiple client-facing web applications",
          "Collaborated with UX designers to implement responsive designs",
          "Optimized database queries, reducing load times by 40%"
        ]
      }
    ];
  
    return (
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Experience</h2>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </section>
    );
  };
  
  export default ExperienceSection;