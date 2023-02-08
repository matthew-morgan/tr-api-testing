import React, { useState, useEffect } from 'react';

interface Person {
  name: string;
  [key: string]: any;
}

const People: React.FC = () => {
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(data => setPerson(data.results[0]))
      .catch(error => console.error(error));
  }, []);

  if (person === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{person.name}</h1>
    </div>
  );
};

export default People;
