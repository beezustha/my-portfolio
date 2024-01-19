const Experience = () => {
  const companies = [
    {
      name: "Infodevelopers Pvt Ltd",
      address: "Sanepa, Lalitpur",
    },
    {
      name: "Hamrobazar Pvt Ltd",
      address: "Thapathali, Kathmandu",
    },
    {
      name: "Code Himalaya Pvt Ltd",
      address: "Kupondole, Kathmandu",
    },
  ];

  return (
    <section name="experience" className="" id="experience">
      {companies.map((company) => {
        return (
          <>
            <ul>
              <li>{company.name}</li>
              <li>{company.address}</li>
            </ul>
          </>
        );
      })}
    </section>
  );
};

export default Experience;
