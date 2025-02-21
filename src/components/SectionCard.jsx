const SectionCard = () => {
  const sections = [
    {
      title: "성격 유형 검사",
      description: "자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.",
    },
    {
      title: "성격 유형 이해",
      description: "다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.",
    },
    {
      title: "팀 평가",
      description: "팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.",
    },
  ];

  return (
    <ul className="flex justify-center gap-6 mt-8">
      {sections.map((section, index) => (
        <li
          key={index}
          className="bg-white shadow-lg rounded-xl p-6 w-64 text-center border">
          <h3 className="text-lg font-bold mb-2">
            {section.title}
          </h3>
          <p className="text-sm text-gray-600">
            {section.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default SectionCard;