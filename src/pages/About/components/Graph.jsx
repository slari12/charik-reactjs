import React from "react";
import Logo from "../../../assets/charik-logo-transparent.webp";

export default function Graph() {
  return (
    <div className="bg-white pt-[70px] pb-[90px]">
      <div className="container">
        <div className=" content_section">
          <p className="section_text mb-[24px] text-center">Timeline</p>
          <h1 className="lg:text-[55px] font-bold section_title text-center">
            A Charik's Story
          </h1>
          <div className="title_divider"></div>
        </div>
        <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {/* item1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#f53f71] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-[20px] border border-slate-200 shadow">
              <div className="flex gap-[15px] lg:items-center">
                <div>
                  <div className="font-bold text-slate-900">
                    HubSpot Partnership
                  </div>
                  <time className="font-caveat font-medium text-[#f53f71]">
                    August 2016
                  </time>

                  <div className="text-slate-500">
                    Jimmy (our Founder and CEO) start his journey as a HubsPot
                    Partner and rapidly evolve as one of the top 20 HubSpot
                    Partner WorldWide.
                  </div>
                </div>
                <div className="hidden_h5">
                  <img
                    src="https://143432284.fs1.hubspotusercontent-eu1.net/hub/143432284/hubfs/INBOUND-2016-HUBSPOT-BOSTON-min.jpeg?width=1000&name=INBOUND-2016-HUBSPOT-BOSTON-min.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* item2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#f53f71] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded-[20px] bg-white p-4  border border-slate-200 shadow">
              <div className="flex lg:items-center gap-[10px]">
                <div>
                  <div className="font-bold text-slate-900">Charik V1.0</div>
                  <time className="font-caveat font-medium text-[#f53f71]">
                    April 2023
                  </time>

                  <div className="text-slate-500">
                    A select group of customers placed their trust in us, and
                    together we collaborated to create the inaugural version of
                    our product.
                  </div>
                </div>
                <div className="hidden_h5">
                  <img
                    className="w-[660px] rounded-[16px]"
                    src="https://143432284.fs1.hubspotusercontent-eu1.net/hub/143432284/hubfs/illustration%20keypeole%20plus.jpg?width=1000&name=illustration%20keypeole%20plus.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* item3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#f53f71] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  bg-white p-4 rounded-[20px] border border-slate-200 shadow">
              <div className="flex items-center">
                <div>
                  <div className="font-bold text-slate-900">
                    Public Launch of Charik
                  </div>
                  <time className="font-caveat font-medium text-[#f53f71]">
                    December 2023
                  </time>

                  <div className="text-slate-500">
                    Launching our first website and introducing the release of
                    our cutting-edge sales intelligence software.
                  </div>
                </div>
                <div className="hidden_h5">
                  <img className="w-[360px]" src={Logo} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* item4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#f53f71] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-[20px] border border-slate-200 shadow">
              <div className="flex items-center gap-[20px]">
                <div>
                  <div className="font-bold text-slate-900">
                    Startup Alpha at WebSummit Qatar
                  </div>
                  <time className="font-caveat font-medium text-[#f53f71]">
                    February 2023
                  </time>

                  <div className="text-slate-500">
                    We are delighted to have been selected as one of the 100
                    startups invited to participate in the inaugural WebSummit
                    in Qatar.
                  </div>
                </div>
                <div className="hidden_h5 ">
                  <img
                    className="w-[360px] rounded-[16px]"
                    src="https://143432284.fs1.hubspotusercontent-eu1.net/hub/143432284/hubfs/WS%20QATAR%20Startup%20charik-min.jpg?width=6750&name=WS%20QATAR%20Startup%20charik-min.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* item5 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#f53f71] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  bg-white p-4 rounded-[20px] border border-slate-200 shadow">
              <div className="flex items-center gap-[20px]">
                <div>
                  <div className="font-bold text-slate-900">Charik V2.0</div>
                  <time className="font-caveat font-medium text-[#f53f71]">
                    April 2024
                  </time>

                  <div className="text-slate-500">
                    One year post v1.0, we are proud to unveil our latest
                    Website and Software update designed to enhance the
                    utilization of sales intelligence for HubSpot Users.
                  </div>
                </div>
                <div className="hidden_h5">
                  <img
                    className="w-[560px] rounded-[16px]"
                    src="https://143432284.fs1.hubspotusercontent-eu1.net/hub/143432284/hubfs/charik%20app%20v2%20keypeople-min.jpg?width=1876&name=charik%20app%20v2%20keypeople-min.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* item6 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#f53f71] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded-[20px] bg-white p-4  border border-slate-200 shadow">
              <div className="flex items-center gap-[20px]">
                <div>
                  <div className="font-bold text-slate-900">
                    Launching the Partner Program
                  </div>
                  <time className="font-caveat font-medium text-[#f53f71]">
                    May 2024
                  </time>

                  <div className="text-slate-500">
                    Establishing a network of HubSpot experts eager to deliver
                    productivity enhancements to their clients.
                  </div>
                </div>
                <div className="hidden_h5">
                  <img
                    className="w-[360px] rounded-[16px]"
                    src="https://www.charik.fr/hs-fs/hubfs/peacock-program-partners.jpeg?width=1000&name=peacock-program-partners.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* item7 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#f53f71] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  bg-white p-4 rounded-[20px] border border-slate-200 shadow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">
                    Start your Sales Intelligence Journey
                  </div>
                  <time className="font-caveat font-medium text-[#f53f71]">
                    Why not today?
                  </time>

                  <div className="text-slate-500">
                    Speed up the process of closing deals.
                  </div>
                </div>
                <div className="hidden_h5">
                  <img
                    className="w-[200px] rounded-[16px]"
                    src="https://143432284.fs1.hubspotusercontent-eu1.net/hub/143432284/hubfs/Day%201%20card%20isolated%20on%20white%20background.jpeg?width=1000&name=Day%201%20card%20isolated%20on%20white%20background.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
