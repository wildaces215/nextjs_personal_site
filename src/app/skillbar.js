const SkillBar = ({ skill, percentage }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-black">{skill}</span>
        <span className="text-sm font-medium text-blue-700 dark:text-black">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
  
  const SkillsSection = () => {
    const skills = [
      { name: "Manual Testing", level: 90 },
      { name: "Test Automation", level: 75 },
      { name: "Test Case Writing", level: 85 },
      { name: "Bug Tracking", level: 80 },
      { name: "Agile Methodologies", level: 70 },
      { name: "API Testing", level: 65 },
      { name: "Performance Testing", level: 60 },
      { name: "SQL", level: 55 },
      { name: "Python", level: 75 },
      { name: "Cybersecurity Awareness", level: 45 },
    ];
  
    return (
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-b-800 mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} percentage={skill.level} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillsSection;