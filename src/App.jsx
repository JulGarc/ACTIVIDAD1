import { useState } from "react";

import "./App.css";
import { Card, Contador } from "./components";
const Infodata = [
  {
    title: "junior",
    description: "El Junior FC de Barranquilla, Jugara contra el Nacional FC",
    img: "https://th.bing.com/th/id/R.ace04d34cdb40120c2b7a891d5b0a2b8?rik=CXEr2o%2fMXGS5fg&pid=ImgRaw&r=0",
  },
  {
    title: "nacional",
    description: "akgfds fdsifsjdfij sdfisoq0eoq0e qe0q9eq0eq",
    img: "https://caracoltv.brightspotcdn.com/dims4/default/256be7a/2147483647/strip/true/crop/1000x716+0+0/resize/1000x716!/quality/90/?url=https%3A%2F%2Fcaracol-brightspot.s3-us-west-2.amazonaws.com%2Fassets%2Fbluradio%2Fbluradio-atleticonacional-foto-twitte.jpg",
  },
];

function App() {
  const info = [...Infodata];

  const [count, setCount] = useState(0);
  return (
    <>
      <section className="py-20 px-8 grid grid-cols-1 gap-24 border-solid border-2 rounded-md justify-items-center">
        <Card info={info[0]} state={true}/>
      </section>
      <section className="py-20 px-11 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-24 border-solid border-2 rounded-md justify-items-center">
        {[...Infodata, ...Infodata, ...Infodata].map((info) => (
          <Card key={info.title} count={count} info={info} />
        ))}
      </section>
      <section>
        <Contador count={count} setCount={setCount} />
      </section>
    </>
  );
}

export default App;
