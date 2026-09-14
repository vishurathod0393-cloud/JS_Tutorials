const companyNames = [
  "AcmeCorp",
  "Vertex",
  "Northwind",
  "Lumina",
  "Cobalt",
  "Helios",
];

function Logos() {
  return (
    <section className="logos" aria-label="Trusted by companies">
      <div className="container reveal">
        <p className="logos-label">Trusted by fast-moving teams at</p>
        <ul className="logos-list">
          {companyNames.map((name) => (
            <li key={name} className="logo-wordmark">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Logos;