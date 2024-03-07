'use client'

import React, { useState } from "react";
import Image from "next/image";
import bgImage from "../public/home2.jpg";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">

      {/* NAVBAR */}
      <NavBar />


      {/* FOTO background y TEXTO */}
      <section
        className="bg-center bg-no-repeat bg-blend-multiply bg-slate-600"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          // backgroundSize: "cover",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          // opacity: "0.5",
          height: "70vh",
        }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center flex flex-col items-center justify-center h-full">
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
            Administración en el ámbito <span className="text-slate-400">legal</span> y <span className="text-slate-400">tecnológico</span>          </h1>
          <p className="text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum suscipit tenetur eligendi aut. Labore, veniam a ex quia magni soluta quos ipsam eos aut?
          </p>
          {/* <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-mainAzul-100 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
              Get started
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Learn more
            </a>
          </div> */}
        </div>
      </section>


      {/* CONTACTO */}
      <div className="w-full mx-auto md:px-6 bg-slate-200">
        <section>
          <div className="px-6 md:px-12">
            <div
              className="block rounded-lg px-6 py-12 md:px-12">
              <div className="grid gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                <div className="mx-auto mb-6 text-center lg:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <h6 className="font-medium">Monterrey, México</h6>
                </div>

                <div className="mx-auto mb-6 text-center lg:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <h6 className="font-medium">contacto@cassad.com</h6>
                </div>

                <div className="mx-auto mb-6 text-center md:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <h6 className="font-medium">+52 (81) 1669 0664</h6>
                </div>

                <div className="mx-auto text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                  <h6 className="font-medium">Tax ID: 273 384</h6>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>


      {/* HERO con FOTO */}
      <div className="relative pb-[110px] pt-16">
        <div className="">
          <div className="flex flex-wrap">

            <div className="w-full px-20 text-center mx-auto lg:text-left lg:w-6/12 lg:flex lg:items-center">
              <div className="hero-content">
                <Image
                  src="/logos/logo_azul.png"
                  alt="logo azul"
                  className="mb-8 mx-auto lg:mx-0"
                  height={130}
                  width={390}
                ></Image>
                {/* <h1 className="mb-10 text-6xl font-bold tracking-tight">
                  Administración <br /> en el ámbito <br /><span className="text-mainAzul-100">legal</span> y <span className="text-mainAzul-100">tecnológico</span>
                </h1> */}
                <p className="mb-8 max-w-[480px] text-xl text-body-color mx-auto lg:mx-0">
                  Nos diferenciamos en soluciones y opiniones de diagnóstico profundo y oportuno con responsabilidad multidisciplinarias, conectando con los clientes de una manera emocional y sentido de pertenencia.
                </p>
                <ul className="flex flex-wrap mx-auto justify-center lg:justify-normal">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md bg-mainAzul-100 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-500 lg:px-7 mb-3 lg:mb-0"
                    >
                      Ver servicios
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-blue-500"
                    >
                      <span className="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                      Explorar propiedades
                    </a>
                  </li>
                </ul>
                {/* <div className="clients pt-16">
                  <h6 className="mb-6 flex items-center text-md font-normal text-body-color justify-center lg:justify-normal">
                    Algunos de nuestros clientes:
                  </h6>

                  <div className="flex space-x-4">

                    <a href={'#'} className="flex w-full items-center justify-center">
                      <img src={'https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg'} alt="brand image" className="h-10 w-full" />
                    </a>

                    <a href={'#'} className="flex w-full items-center justify-center">
                      <img src={'https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg'} alt="brand image" className="h-10 w-full" />
                    </a>

                    <a href={'#'} className="flex w-full items-center justify-center">
                      <img src={'https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg'} alt="brand image" className="h-10 w-full" />
                    </a>

                  </div>
                </div> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-6/12 mx-auto">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="/home.jpg"
                    alt="hero"
                    className="lg:ml-auto rounded-lg mx-auto"
                    style={{ borderTopLeftRadius: "100px", width: "90%" }}
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#0c4068" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#0c4068" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#0c4068" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#0c4068" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#0c4068" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#0c4068" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#0c4068" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#0c4068" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#0c4068" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#0c4068" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#0c4068" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#0c4068" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#0c4068" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#0c4068" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#0c4068" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#0c4068" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#0c4068" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#0c4068" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#0c4068" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#0c4068" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#0c4068" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#0c4068" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#0c4068" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#0c4068" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#0c4068" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* CLIENTES */}
      <section className="bg-slate-200 py-6 lg:py-6">
        <div className="container mx-auto">

          <h2 className="my-6 text-4xl font-bold text-center">Clientes</h2>

          <div className="mb-3">
            <hr className="w-12 mx-auto" style={{ border: 'none', height: '8px', background: '#0c4068' }} />
          </div>

          <div className="flex flex-wrap ">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <a
                  href={'#'}
                  className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
                >
                  <img src={"/logos/logo1.png"} alt={"Brand Image"} className="w-full" />
                </a>
                <a
                  href={'#'}
                  className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
                >
                  <img src={"/logos/logo2.png"} alt={"Brand Image"} className="w-full" />
                </a>
                <a
                  href={'#'}
                  className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
                >
                  <img src={"/logos/logo3.png"} alt={"Brand Image"} className="w-full" />
                </a>
                <a
                  href={'#'}
                  className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
                >
                  <img src={"/logos/logo4.png"} alt={"Brand Image"} className="w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SERVICIOS */}
      <div className="container my-24 mx-auto px-6">
        <section className="text-center">

          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[510px] text-center mb-10">
                <span className="mb-2 block text-2xl font-semibold text-primary">
                  Nuestros Servicios
                </span>
                <h2 className="mb-3 text-4xl lg:text-5xl font-bold leading-[1.2] text-dark">
                  Lo que ofrecemos
                </h2>
                <p className="text-base text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <hr className="w-16 mx-auto" style={{ border: 'none', height: '8px', background: '#0c4068' }} />
          </div>

          <div className="grid lg:grid-cols-3 lg:gap-x-12 lg:mb-14">

            <div className="mb-12 lg:mb-0">
              <div
                className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:text-mainAzul-100 hover:cursor-pointer">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full p-4 text-primary shadow-md" style={{ backgroundColor: 'rgba(12,64,104,0.2)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-7 w-7">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Support 24/7</h5>
                  <p>
                    Laudantium totam quas cumque pariatur at doloremque hic quos
                    quia eius. Reiciendis optio minus mollitia rerum labore
                    facilis inventore voluptatem ad, quae quia sint.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 lg:mb-0">
              <div
                className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:text-mainAzul-100 hover:cursor-pointer">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full p-4 text-primary shadow-md" style={{ backgroundColor: 'rgba(12,64,104,0.2)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-7 w-7">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Safe and solid</h5>
                  <p>
                    Eum nostrum fugit numquam, voluptates veniam neque quibusdam
                    ullam aspernatur odio soluta, quisquam dolore animi mollitia a
                    omnis praesentium, expedita nobis!
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 lg:mb-0">
              <div
                className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:text-mainAzul-100 hover:cursor-pointer">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full p-4 text-primary shadow-md" style={{ backgroundColor: 'rgba(12,64,104,0.2)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-7 w-7">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Extremely fast</h5>
                  <p>
                    Enim cupiditate, minus nulla dolor cumque iure eveniet facere
                    ullam beatae hic voluptatibus dolores exercitationem? Facilis
                    debitis aspernatur amet nisi?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 lg:gap-x-12">

            <div className="mb-12 lg:mb-0">
              <div
                className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:text-mainAzul-100 hover:cursor-pointer">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full p-4 text-primary shadow-md" style={{ backgroundColor: 'rgba(12,64,104,0.2)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-7 w-7">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Support 24/7</h5>
                  <p>
                    Laudantium totam quas cumque pariatur at doloremque hic quos
                    quia eius. Reiciendis optio minus mollitia rerum labore
                    facilis inventore voluptatem ad, quae quia sint.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 lg:mb-0">
              <div
                className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:text-mainAzul-100 hover:cursor-pointer">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full p-4 text-primary shadow-md" style={{ backgroundColor: 'rgba(12,64,104,0.2)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-7 w-7">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Safe and solid</h5>
                  <p>
                    Eum nostrum fugit numquam, voluptates veniam neque quibusdam
                    ullam aspernatur odio soluta, quisquam dolore animi mollitia a
                    omnis praesentium, expedita nobis!
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:text-mainAzul-100 hover:cursor-pointer">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full p-4 text-primary shadow-md" style={{ backgroundColor: 'rgba(12,64,104,0.2)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="h-7 w-7">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Extremely fast</h5>
                  <p>
                    Enim cupiditate, minus nulla dolor cumque iure eveniet facere
                    ullam beatae hic voluptatibus dolores exercitationem? Facilis
                    debitis aspernatur amet nisi?
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>


      {/* <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[510px] text-center mb-10">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Nuestros Servicios
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]">
                  Lo que ofrecemos
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white p-10 shadow-lg hover:shadow-2xl md:px-7 xl:px-10 hover:cursor-pointer hover:text-mainAzul-100">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-mainAzul-100">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.0375 1.2374C11.8125 -0.393851 2.92503 5.7374 1.29378 14.9624C0.450029 19.4061 1.46253 23.9624 4.05003 27.6749C6.63753 31.4436 10.5188 33.9186 14.9625 34.7624C15.975 34.9311 16.9875 35.0436 18 35.0436C26.0438 35.0436 33.2438 29.2499 34.7625 21.0374C36.3938 11.8124 30.2625 2.9249 21.0375 1.2374ZM32.2313 20.5874C32.175 21.0374 32.0625 21.4874 31.95 21.8811L19.2375 17.0999V3.5999C19.6875 3.65615 20.1375 3.7124 20.5313 3.76865C28.4063 5.1749 33.6375 12.7124 32.2313 20.5874ZM16.7063 3.5999V16.7624H3.60003C3.65628 16.3124 3.71253 15.8624 3.76878 15.4124C4.95003 8.83115 10.4063 4.10615 16.7063 3.5999ZM15.4125 32.2311C11.5875 31.5561 8.32503 29.4186 6.13128 26.2124C4.66878 24.1311 3.82503 21.7124 3.60003 19.2374H17.775L31.05 24.2436C28.2938 29.9811 21.9375 33.4686 15.4125 32.2311Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="mb-[14px] text-2xl font-semibold text-dark">
                  Refreshing Design
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white p-10 shadow-lg hover:shadow-2xl md:px-7 xl:px-10 hover:cursor-pointer hover:text-mainAzul-100">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-mainAzul-100">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.89195 14.625C10.9995 10.1252 13.769 7.875 18.1996 7.875C24.8458 7.875 25.6765 12.9375 28.9996 13.7812C31.2151 14.3439 33.1535 13.5002 34.815 11.25C33.7075 15.7498 30.9379 18 26.5073 18C19.8611 18 19.0304 12.9375 15.7073 12.0938C13.4918 11.5311 11.5535 12.3748 9.89195 14.625ZM1.58423 24.75C2.69174 20.2502 5.46132 18 9.89195 18C16.5381 18 17.3689 23.0625 20.692 23.9062C22.9075 24.4689 24.8458 23.6252 26.5073 21.375C25.3998 25.8748 22.6302 28.125 18.1996 28.125C11.5535 28.125 10.7227 23.0625 7.39963 22.2188C5.18405 21.6561 3.24576 22.4998 1.58423 24.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="mb-[14px] text-2xl font-semibold text-dark">
                  Based on Tailwind CSS
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white p-10 shadow-lg hover:shadow-2xl md:px-7 xl:px-10 hover:cursor-pointer hover:text-mainAzul-100">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-mainAzul-100">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2063 1.9126H5.0625C3.15 1.9126 1.575 3.4876 1.575 5.4001V12.5438C1.575 14.4563 3.15 16.0313 5.0625 16.0313H12.2063C14.1188 16.0313 15.6938 14.4563 15.6938 12.5438V5.45635C15.75 3.4876 14.175 1.9126 12.2063 1.9126ZM13.2188 12.6001C13.2188 13.1626 12.7688 13.6126 12.2063 13.6126H5.0625C4.5 13.6126 4.05 13.1626 4.05 12.6001V5.45635C4.05 4.89385 4.5 4.44385 5.0625 4.44385H12.2063C12.7688 4.44385 13.2188 4.89385 13.2188 5.45635V12.6001Z"
                      fill="white"
                    />
                    <path
                      d="M30.9375 1.9126H23.7937C21.8812 1.9126 20.3062 3.4876 20.3062 5.4001V12.5438C20.3062 14.4563 21.8812 16.0313 23.7937 16.0313H30.9375C32.85 16.0313 34.425 14.4563 34.425 12.5438V5.45635C34.425 3.4876 32.85 1.9126 30.9375 1.9126ZM31.95 12.6001C31.95 13.1626 31.5 13.6126 30.9375 13.6126H23.7937C23.2312 13.6126 22.7812 13.1626 22.7812 12.6001V5.45635C22.7812 4.89385 23.2312 4.44385 23.7937 4.44385H30.9375C31.5 4.44385 31.95 4.89385 31.95 5.45635V12.6001Z"
                      fill="white"
                    />
                    <path
                      d="M12.2063 19.8564H5.0625C3.15 19.8564 1.575 21.4314 1.575 23.3439V30.4877C1.575 32.4002 3.15 33.9752 5.0625 33.9752H12.2063C14.1188 33.9752 15.6938 32.4002 15.6938 30.4877V23.4002C15.75 21.4314 14.175 19.8564 12.2063 19.8564ZM13.2188 30.5439C13.2188 31.1064 12.7688 31.5564 12.2063 31.5564H5.0625C4.5 31.5564 4.05 31.1064 4.05 30.5439V23.4002C4.05 22.8377 4.5 22.3877 5.0625 22.3877H12.2063C12.7688 22.3877 13.2188 22.8377 13.2188 23.4002V30.5439Z"
                      fill="white"
                    />
                    <path
                      d="M30.9375 19.8564H23.7937C21.8812 19.8564 20.3062 21.4314 20.3062 23.3439V30.4877C20.3062 32.4002 21.8812 33.9752 23.7937 33.9752H30.9375C32.85 33.9752 34.425 32.4002 34.425 30.4877V23.4002C34.425 21.4314 32.85 19.8564 30.9375 19.8564ZM31.95 30.5439C31.95 31.1064 31.5 31.5564 30.9375 31.5564H23.7937C23.2312 31.5564 22.7812 31.1064 22.7812 30.5439V23.4002C22.7812 22.8377 23.2312 22.3877 23.7937 22.3877H30.9375C31.5 22.3877 31.95 22.8377 31.95 23.4002V30.5439Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="mb-[14px] text-2xl font-semibold text-dark">
                  100+ Components
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white p-10 shadow-lg hover:shadow-2xl md:px-7 xl:px-10 hover:cursor-pointer hover:text-mainAzul-100">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-mainAzul-100">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.2625 10.6312C27.1688 7.36875 22.8375 5.34375 18 5.34375C8.60626 5.34375 1.01251 12.9937 1.01251 22.3875C1.01251 25.0312 1.63126 27.6187 2.75626 29.925C2.92501 30.2625 3.20626 30.4875 3.54376 30.6C3.65626 30.6 3.71251 30.6562 3.82501 30.6562C3.82501 30.6562 3.82501 30.6562 3.88126 30.6562C3.88126 30.6562 3.88126 30.6562 3.93751 30.6562C3.99376 30.6562 4.05001 30.6562 4.10626 30.6562C4.21876 30.6562 4.38751 30.6 4.50001 30.5437L6.80626 29.4187C7.42501 29.1375 7.70626 28.35 7.36876 27.7312C7.03126 27.1125 6.30001 26.8312 5.68126 27.1687L4.55626 27.7312C3.88126 26.1 3.60001 24.3562 3.54376 22.5562H5.90626C6.58126 22.5562 7.20001 21.9937 7.20001 21.2625C7.20001 20.5312 6.63751 19.9687 5.90626 19.9687H3.71251C4.10626 17.4937 5.17501 15.2437 6.69376 13.3875L8.71876 15.4125C8.94376 15.6375 9.28126 15.8062 9.61876 15.8062C9.95626 15.8062 10.2938 15.6937 10.5188 15.4125C11.025 14.9062 11.025 14.1187 10.5188 13.6125L8.43751 11.5312C10.6875 9.5625 13.5563 8.2125 16.7625 7.9875V11.4187C16.7625 12.0937 17.325 12.7125 18.0563 12.7125C18.7313 12.7125 19.35 12.15 19.35 11.4187V7.9875C22.5 8.26875 25.425 9.5625 27.675 11.5312L26.1 13.1062C25.5938 13.6125 25.5938 14.4 26.1 14.9062C26.325 15.1312 26.6625 15.3 27 15.3C27.3375 15.3 27.675 15.1875 27.9 14.9062L29.4188 13.3875C30.9375 15.2437 31.95 17.4937 32.4 19.9687H30.2063C29.5313 19.9687 28.9125 20.5312 28.9125 21.2625C28.9125 21.9937 29.475 22.5562 30.2063 22.5562H32.5688C32.5688 24.3562 32.2313 26.1 31.5563 27.7875L30.4313 27.225C29.8125 26.8875 29.025 27.1687 28.7438 27.7875C28.4625 28.4062 28.6875 29.1937 29.3063 29.475L31.6125 30.6C31.7813 30.7125 32.0063 30.7125 32.175 30.7125C32.175 30.7125 32.175 30.7125 32.2313 30.7125C32.2313 30.7125 32.2313 30.7125 32.2875 30.7125C32.7375 30.7125 33.1875 30.4312 33.4125 30.0375C34.5938 27.7312 35.1563 25.0875 35.1563 22.5C35.0438 17.8312 33.1875 13.6687 30.2625 10.6312Z"
                      fill="white"
                    />
                    <path
                      d="M21.4313 19.3499L17.6625 22.1624C16.9875 22.2749 16.3688 22.6687 15.975 23.2312C15.9188 23.3437 15.8625 23.3999 15.8063 23.5124L15.6938 23.6249H15.75C15.1313 24.8062 15.4688 26.2687 16.5938 27.1124C17.7188 27.8999 19.2375 27.7874 20.1375 26.8312H20.1938L20.25 26.7187C20.3063 26.6624 20.4188 26.5499 20.475 26.4374C20.925 25.8749 21.0375 25.1437 20.9813 24.4687L22.4438 19.9687C22.6125 19.4624 21.9375 19.0124 21.4313 19.3499Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="mb-[14px] text-2xl font-semibold text-dark">
                  Speed Optimized
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white p-10 shadow-lg hover:shadow-2xl md:px-7 xl:px-10 hover:cursor-pointer hover:text-mainAzul-100">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-mainAzul-100">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.0937 21.8251L29.6437 21.6001L30.2062 21.2626C31.3312 20.5876 31.95 19.4063 31.95 18.0563C31.95 16.7626 31.2187 15.5813 30.0937 14.9063L28.9125 14.2313L30.2062 13.4438C31.3312 12.7688 31.95 11.5876 31.95 10.2376C31.95 8.94385 31.2187 7.7626 30.0937 7.14385L19.9125 1.4626C18.7875 0.843848 17.3812 0.843848 16.3125 1.4626L5.84999 7.5376C4.72499 8.2126 4.04999 9.39385 4.04999 10.6876C4.04999 11.9813 4.72499 13.2188 5.84999 13.8376L7.08749 14.5688L5.84999 15.3001C4.72499 15.9751 4.04999 17.1563 4.04999 18.4501C4.04999 19.7438 4.72499 20.9813 5.84999 21.6001L6.35624 21.8813L5.84999 22.1626C4.72499 22.8376 3.99374 24.0188 3.99374 25.3126C3.99374 26.6626 4.66874 27.8438 5.79374 28.4626L16.1437 34.4813C16.7062 34.8188 17.325 34.9876 18 34.9876C18.675 34.9876 19.35 34.8188 19.9125 34.4251L30.2625 28.1251C31.3875 27.4501 32.0062 26.2688 32.0062 24.9188C31.95 23.6251 31.275 22.4438 30.0937 21.8251ZM6.52499 10.6876C6.52499 10.5188 6.58124 10.0126 7.08749 9.73135L17.55 3.65635C17.8875 3.43135 18.3375 3.43135 18.675 3.65635L28.9125 9.3376C29.4187 9.61885 29.475 10.1251 29.475 10.2938C29.475 10.4626 29.4187 10.9688 28.9125 11.3063L18.6187 17.6626C18.2812 17.8876 17.8312 17.8876 17.4375 17.6626L7.08749 11.6438C6.58124 11.3626 6.52499 10.8563 6.52499 10.6876ZM7.08749 17.4938L9.56249 16.0313L16.1437 19.8563C16.7062 20.1938 17.325 20.3626 18 20.3626C18.675 20.3626 19.35 20.1938 19.9125 19.8001L26.4375 15.8063L28.8562 17.1563C29.3625 17.4376 29.4187 17.9438 29.4187 18.1126C29.4187 18.2813 29.3625 18.7876 28.8562 19.1251L18.6187 25.4251C18.2812 25.6501 17.8312 25.6501 17.4375 25.4251L7.08749 19.4063C6.58124 19.1251 6.52499 18.6188 6.52499 18.4501C6.52499 18.2813 6.58124 17.7751 7.08749 17.4938ZM28.9125 25.9876L18.6187 32.3438C18.2812 32.5688 17.8312 32.5688 17.4375 32.3438L7.08749 26.3251C6.58124 26.0438 6.52499 25.5376 6.52499 25.3688C6.52499 25.2001 6.58124 24.6938 7.08749 24.4126L8.83124 23.4001L16.2 27.6751C16.7625 28.0126 17.3812 28.1813 18.0562 28.1813C18.7312 28.1813 19.4062 28.0126 19.9687 27.6188L27.225 23.1751L28.9125 24.0751C29.4187 24.3563 29.475 24.8626 29.475 25.0313C29.475 25.2001 29.4187 25.7063 28.9125 25.9876Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="mb-[14px] text-2xl font-semibold text-dark">
                  Fully Customizable
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white p-10 shadow-lg hover:shadow-2xl md:px-7 xl:px-10 hover:cursor-pointer hover:text-mainAzul-100">
                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-mainAzul-100">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.725 16.3124C4.89375 16.3124 5.11875 16.2562 5.2875 16.1999L11.5312 14.0062C12.2062 13.7812 12.5437 13.0499 12.3187 12.3749C12.0937 11.6999 11.3625 11.3624 10.6875 11.5874L6.80625 12.9374C8.6625 8.0999 13.3875 4.8374 18.7875 4.8374C24.6938 4.8374 29.8125 8.7749 31.275 14.3999C31.4437 15.0749 32.1187 15.4687 32.7937 15.2999C33.4687 15.1312 33.8625 14.4562 33.6938 13.7812C31.95 7.03115 25.8187 2.30615 18.7312 2.30615C12.4312 2.30615 6.8625 6.01865 4.55625 11.5874L3.375 8.2124C3.15 7.5374 2.41875 7.1999 1.74375 7.4249C1.06875 7.6499 0.73125 8.38115 0.95625 9.05615L3.09375 15.1874C3.43125 15.9187 4.05 16.3124 4.725 16.3124Z"
                      fill="white"
                    />
                    <path
                      d="M34.9312 27.9562L32.625 21.9375C32.4562 21.5437 32.175 21.2062 31.7812 21.0375C31.3875 20.8687 30.9375 20.8687 30.5437 21.0375L24.3562 23.3999C23.6812 23.6249 23.4 24.3562 23.625 25.0312C23.85 25.7062 24.5813 25.9875 25.2563 25.7625L29.1375 24.3C26.8875 28.4062 22.5 31.1062 17.6062 31.1062C12.0375 31.1062 7.14375 27.6187 5.4 22.4437C5.175 21.7687 4.44375 21.4312 3.825 21.6562C3.15 21.8812 2.8125 22.6124 3.0375 23.2312C5.11875 29.4187 10.9687 33.5812 17.6062 33.5812C23.4 33.5812 28.6312 30.375 31.275 25.425L32.5688 28.8562C32.7375 29.3625 33.2437 29.6437 33.75 29.6437C33.9187 29.6437 34.0312 29.6437 34.2 29.5312C34.875 29.3625 35.1562 28.6312 34.9312 27.9562Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="mb-[14px] text-2xl font-semibold text-dark">
                  Regular Updates
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section> */}


      {/* FOOTER */}
      <Footer />

    </main>
  );
}
