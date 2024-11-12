import Image from "next/image";
import Link from 'next/link';
import type { Metadata } from "next";

import DrugCard from "@/components/DrugCard";
export const metadata: Metadata = {
  title: "Doctors | Connecting Health Care",
  description: "Doctors Connecting Health Care",
};
export default async function DoctorsPage() {
  const apiURL = process.env.apiURL;
  let args = { limit: 12, offset: 0 }
  let response = await fetch(apiURL + '/public/doctor/getDoctors', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
  const data = await response.json();
  console.log(data);

  return (
    <section className="doctors-page">
      <div className="container mx-auto px-4 py-10 flex gap-4">

        <div className="w-1/4 bg-gray-800 text-white p-4">
          <h2 className="p-2 text-center h-screen flex items-center justify-center">Sidebar</h2>
        </div>
        <div className="w-3/4 px-4">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 doctors_grid">
            {data.doctors.map((item: any, index: number) => (

              <div className="d-container">
                <div className="d-head">
                  <h3 className="name"><Link href="">{item.name}</Link> <span className="verified"> </span> </h3>

                  <Link className="btn btn-success chambers-link" href=""> View Profile</Link>

                </div>
                <div className="d-body">
                  <div className="left-section">

                    <div className="qualification-container">
                      <div className="icon"> <span className="degree-icon"></span></div>
                      <div className="details">
                        <div className="qualification m-0">
                          MBBS, MS  (ENT) 																		</div>
                      </div>
                    </div>

                    <div className="speciality-container">
                      <div className="icon"> <span className="speciality-icon"></span></div>
                      <div className="details">
                        <div className="speciality m-0">
                          ENT																		</div>
                      </div>
                    </div>
                    <div className="designation-container">
                      <div className="icon">
                        <span className="designation-icon"></span>
                      </div>
                      <div className="details">
                        Specialist and Consultant
                        <address className="no-margin">
                          <h5 className="no-margin"><small>{item.address1}</small></h5>
                        </address>
                      </div>
                    </div>
                  </div>
                  <div className="right-section">
                    <div className="image">
                      <Image src='/doctor.png' height={100} width={100} alt={item.name} />
                    </div>
                  </div>
                  <div className="available_dates">
                    <Link href="">
                      <div id="closest_available_date_24880_1_61" className="closest_available_date">November 13, 2024 02:30PM-04:30PM</div>
                    </Link>
                    <Link href="">
                      <div id="closest_available_date_24880_1_61" className="closest_available_date">November 15, 2024 10:00AM-02:00PM</div></Link>															</div>
                </div>
                <div className="d-foot">
                  <Link className="link btn btn-primary btn-appointment" href="" target="_blank"> Book an appointment</Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>

  );
}
