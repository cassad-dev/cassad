'use client'

import React, { useState } from "react";
import Image from "next/image";
import bgImage from "../public/home2.jpg";
import NavBar from "./ui/navbar/NavBar";
import Footer from "./ui/Footer";
import Link from "next/link";
import ContactForm from "./ui/ContactForm";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">

      {/* NAVBAR */}
      <NavBar />

      <title>Cassad</title>
      <meta name="description" content="Servicios inmobiliarios y legales" />

      <meta property="og:url" content="https://www.cassad.com.mx/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cassad" />
      <meta property="og:description" content="Servicios inmobiliarios y legales" />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/3873af4a-fb44-458c-8ec6-b4c42c34d151.png?token=JRD39n-3y9VodF4Q_XpaaWuW7VEBpXrGlo5v0Ak4NsU&height=630&width=1200&expires=33247349113" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="cassad.com.mx" />
      <meta property="twitter:url" content="https://www.cassad.com.mx/" />
      <meta name="twitter:title" content="Cassad" />
      <meta name="twitter:description" content="Servicios inmobiliarios y legales" />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/3873af4a-fb44-458c-8ec6-b4c42c34d151.png?token=JRD39n-3y9VodF4Q_XpaaWuW7VEBpXrGlo5v0Ak4NsU&height=630&width=1200&expires=33247349113" />

      {/* FOTO background y TEXTO */}
      <section
        className="bg-center bg-no-repeat bg-blend-multiply bg-slate-600 bg-cover"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundColor: "rgba(12, 64, 104, 0.8)",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundAttachment: "fixed",
          // opacity: "0.5",
          height: "70vh",
        }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center flex flex-col items-center justify-center h-full">
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
            Expertos en soluciones <span className="text-slate-400">legales</span> e <span className="text-slate-400">inmobiliarias</span>
          </h1>
          <p className="text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Nos diferenciamos en estrategias y soluciones de diagnóstico inmobiliario para ayudar a los clientes en situaciones personales y problemáticas de negocio.
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


      {/* Barra CONTACTO */}
      <div className="w-full mx-auto px-6">
        <section>
          <div className="px-6 md:px-12 bg-slate-200 rounded-xl">
            <div
              className="block px-6 py-4 md:px-12 mt-[-50px]">

              {/* bigger screens */}
              <div className="hidden md:block">

                <div className="flex items-center justify-center mx-auto text-center lg:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-8 w-8 text-primary mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <h6 className="font-medium">Monterrey, México</h6>

                  <p className="mx-10">|</p>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-8 w-8 text-primary mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <h6 className="font-medium">mmca@cassad.com.mx</h6>
                </div>

              </div>

              {/* smaller screens */}
              <div className="block md:hidden">

                <div className="mx-auto py-3 text-center lg:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="mx-auto mb-4 h-8 w-8 text-primary dark:text-primary-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <h6 className="font-medium">Monterrey, México</h6>
                </div>

                <hr className="bg-slate-400 h-0.5 my-2" />

                <div className="mx-auto py-3 text-center lg:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="mx-auto mb-4 h-8 w-8 text-primary dark:text-primary-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <h6 className="font-medium">contacto@cassad.com.mx</h6>
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

            <div className="w-full px-10 md:px-20 text-center mx-auto lg:text-left lg:w-6/12 lg:flex lg:items-center">
              <div className="hero-content">
                <Image
                  src="/logos/logo_azul.png"
                  alt="logo azul"
                  className="mb-8 mx-auto lg:mx-0"
                  height={130}
                  width={390}
                />
                {/* <h1 className="mb-10 text-6xl font-bold tracking-tight">
                  Administración <br /> en el ámbito <br /><span className="text-mainAzul-100">legal</span> y <span className="text-mainAzul-100">tecnológico</span>
                </h1> */}
                <p className="mb-8 max-w-[480px] text-lg md:text-xl text-body-color mx-auto lg:mx-0">
                  Cassad ofrece soluciones integrales en servicios inmobiliarios y legales con más de 10 años de experiencia. Destacamos en gestión de propiedades, negociación de contratos y protección de activos. Nos diferenciamos por la atención personalizada y calidad excepcional.                </p>
                <ul className="flex flex-wrap mx-auto justify-center lg:justify-normal">
                  <li>
                    <Link
                      href="/servicios"
                      className="inline-flex items-center justify-center rounded-md bg-mainAzul-100 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-500 lg:px-7 mb-3 xl:mb-0"
                    >
                      Ver servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/conocenos"
                      className="inline-flex items-center justify-center rounded-md border border-gray-900 px-5 py-3 ml-2 text-center text-base font-medium text-gray-900 hover:bg-gray-300 lg:px-7"
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
                      Conócenos
                    </Link>
                  </li>
                </ul>
                <div className="clients pt-16">
                  <h6 className="mb-6 flex items-center text-md font-normal text-body-color justify-center lg:justify-normal">
                    Algunos de nuestros clientes:
                  </h6>

                  <div className="flex space-x-4">

                    <a className="flex w-full items-center justify-center">
                      <img src={'/logos/believebytere-logo.png'} alt="Logo Believe By Tere" className="h-16 object-contain" />
                    </a>

                    <a className="flex w-full items-center justify-center">
                      <img src={'/logos/fanatiker-logo.png'} alt="Logo Fanatiker" className="h-16 object-contain" />
                    </a>

                    <a className="flex w-full items-center justify-center">
                      <img src={'/logos/grupolomex-logo.png'} alt="Logo Grupo Lomex" className="h-16 object-contain" />
                    </a>

                  </div>
                </div>
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
      {/* <section className="bg-slate-200 py-6 lg:py-6">
        <div className="container mx-auto">

          <h2 className="my-6 text-4xl font-bold text-center">Clientes</h2>

          <div className="mb-3">
            <hr className="w-12 mx-auto" style={{ border: 'none', height: '8px', background: '#0c4068' }} />
          </div>

          <div className="flex flex-wrap ">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">

                <div
                  className="mx-4 flex w-[150px] items-center justify-center py-4 2xl:w-[180px]"
                >
                  <img src={"/logos/believebytere-logo.png"} alt={"Believe by Tere logo"} className="w-full" />
                </div>

                <div
                  className="mx-4 flex w-[150px] items-center justify-center py-4 px-4 2xl:w-[180px]"
                >
                  <img src={"/logos/fanatiker-logo.png"} alt={"Fanatiker logo"} className="w-full" />
                </div>

                <div
                  className="mx-4 flex w-[150px] items-center justify-center py-4 2xl:w-[180px]"
                >
                  <img src={"/logos/grupolomex-logo.png"} alt={"Grupo Lomex logo"} className="w-full" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* SERVICIOS */}
      <div className="bg-gray-100">
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
                    Descubre los servicios que ofrecemos para ti.
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
                    <h5 className="mb-4 text-lg font-semibold">
                      Administración de Propiedades
                    </h5>
                    <p>
                      Gestión integral de propiedades, incluyendo cobro de rentas, resguardo de documentos y asesoría legal.
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
                    <h5 className="mb-4 text-lg font-semibold">
                      Representación de Propietarios
                    </h5>
                    <p>
                      Defensa de los intereses de los propietarios en negociaciones y contratos.
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
                    <h5 className="mb-4 text-lg font-semibold">
                      Soluciones Inmobiliarias
                    </h5>
                    <p>
                      Estrategias innovadoras para optimizar el valor y el rendimiento de las propiedades.
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
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                        stroke="currentColor" className="h-7 w-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-4 text-lg font-semibold">
                      Renegociación de Contratos
                    </h5>
                    <p>
                      Renegociación de términos y condiciones para obtener los mejores beneficios.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                      </svg>

                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-4 text-lg font-semibold">
                      Protección de Escrituras
                    </h5>
                    <p>
                      Garantía de seguridad y legalidad en la documentación de propiedades.
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
                        stroke="currentColor" className="h-7 w-7">  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                      </svg>

                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-4 text-lg font-semibold">
                      Investigación de Propiedades
                    </h5>
                    <p>
                      Análisis exhaustivo de propiedades y alertas inmobiliarias para prevenir riesgos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>
      </div>


      {/* Form CONTACTO */}
      {/* https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644 */}
      <ContactForm />


      {/* FOOTER */}
      <Footer />

    </main>
  );
}
