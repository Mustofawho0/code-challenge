"use client";

import axios from "axios";
import { useEffect, useState } from "react";
// import Image from "next/image";

export default function OurTeamPage() {
  const [getTeam, setTeam] = useState({});

  const OurTeam = async () => {
    const team = await axios.get("https://randomuser.me/api/?results=5");
    setTeam(team.data);
  };

  useEffect(() => {
    OurTeam();
  }, []);

  return (
    <div>
      <section className="py-6 text-gray-800">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-8 p-4 sm:p-10">
          <h1 className="text-center text-4xl font-bold leading-none sm:text-5xl">
            Meet Our Team
          </h1>
          <h1 className="max-w-2xl text-center text-gray-600">
            Keberagaman kita adalah kekuatan, memungkinkan kita untuk memiliki
            pandangan yang komprehensif dalam setiap situasi.
          </h1>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {getTeam?.results?.map((value, index) => {
                return (
                  <div key={index}>
                    <div className="group relative">
                      <img
                        src={value.picture.large}
                        alt="picture"
                        loading="lazy"
                        width={500}
                        height={500}
                      />
                      <div className="absolute bottom-0 left-0 right-0 z-10 flex h-full items-center justify-center bg-black text-white opacity-0 duration-300 group-hover:opacity-80">
                        <div className="flex flex-col items-center justify-center py-2">
                          <p className="text-center text-sm">
                            {value.name.first} {value.name.last}
                          </p>
                          <p className="text-center text-sm">{value.email}</p>
                          <p className="text-center text-sm">{value.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
