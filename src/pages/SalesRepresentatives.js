import React from "react";
import Button from "../components/Button";
import SaleRepresentativeCard from "../components/SaleRepresentativeCard";
import Map from "../components/Map";

let saleRepresntative = [
  {
    name: "Cindy Castro",
    location: "Salt Lake, UT",
    email: "cindyc@carstro.com",
    hours: "8:00am - 5:00pm",
    phone: "385-354-1824",
    image:
      "https://media.licdn.com/dms/image/C4D03AQH52yLOl5cr2Q/profile-displayphoto-shrink_400_400/0/1624946869183?e=1676505600&v=beta&t=JOVSrsRDJeI8OFmDSbOt3rM7_vsvgTU1ozkZaXDpNEY",
  },

  {
    name: "Andres Castro",
    location: "Rexburg, ID",
    email: "guevaracastroandres@gmail.com",
    hours: "8:00am - 5:00pm",
    phone: "2087603945",
    image:
      "https://media.licdn.com/dms/image/C5603AQG0WZ0LYEGlhg/profile-displayphoto-shrink_400_400/0/1603579950379?e=1676505600&v=beta&t=fPY6ElAj0p28s-tILBo45NqQAri8QXp6INuSZRcTTQE",
  },

  {
    name: "Kevin Castro",
    location: "Denver, CO",
    email: "kevin@gmail.com",
    hours: "8:00am - 5:00pm",
    phone: "12354353454",
    image:
      "https://media.licdn.com/dms/image/D5603AQGwGhhpYxo1-Q/profile-displayphoto-shrink_400_400/0/1664410456785?e=1676505600&v=beta&t=0DSq5nP7PQklpje6QGodpMq6klPJnhK44rUo7ekv5Uw",
  },

  {
    name: "Ignacio Villar ",
    location: "Los Angeles. LA",
    email: "ignacio@gmail.com",
    hours: "8:00am - 5:00pm",
    phone: "12354353454",
    image:
      "https://media.licdn.com/dms/image/D4E35AQEnqE5PgDgTvg/profile-framedphoto-shrink_400_400/0/1634319087952?e=1671775200&v=beta&t=PcFfngmRaKUScQl9PMZGKepveistnT-0DtfBzUke8oQ",
  },
];

function SalesRepresentatives() {
  return (
    <main className="salesRepresentatives_main">
      <h1 className="main_h1">Sales Representatives</h1>
      <div className="salesRepresentatives_main_div">
        <section className="main_section_representatives">
          <div>
            <ul id="salesRepresentatives_ul">
              {saleRepresntative.map((item) => (
                <SaleRepresentativeCard {...item} />
              ))}
            </ul>
          </div>
        </section>
        <section className="main_section_map">
          <h2 className="salesRepresentatives_section_h2"> Find your Dealer</h2>
          <Map />
        </section>
      </div>
    </main>
  );
}

export default SalesRepresentatives;
