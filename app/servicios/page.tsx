'use client'
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";

export default function Servicios() {
    return (
        <main className="flex min-h-screen flex-col">

            {/* NAVBAR */}
            <NavBar />


            {/* HERO */}
            <div className="bg-gray-100 dark:bg-transparent">
                <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center text-gray-800 dark:text-white font-black leading-7 md:leading-10">
                            Nuestros <span className="text-mainAzul-100">Servicios</span>
                        </h1>
                        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">A professonal website drives sales. Create a beautiful website to impress and engage new customers and establish your business online </p>
                    </div>
                    {/* <div className="flex justify-center items-center">
                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</button>
                        <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Live Demo</button>
                    </div> */}
                </div>
            </div>


            {/* SERVICES */}
            <div className="relative overflow-hidden pt-16 pb-32 space-y-24">
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mainAzul-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            className="h-8 w-8 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                        Natural Language Processing (NLP):
                                    </h2>
                                    <p className="mt-4 text-lg text-slate-500">
                                        The AI product utilizes advanced NLP algorithms to understand and interpret human language,
                                        enabling it to accurately process and analyze text-based inputs.
                                    </p>
                                    <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-mainAzul-100 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-800 hover:bg-blue-800 hover:ring-blue-900"
                                            href="/login">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img loading="lazy" width="647" height="486"
                                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style={{ color: 'transparent' }} src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mainAzul-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            className="h-8 w-8 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                        Sentiment Analysis:
                                    </h2>
                                    <p className="mt-4 text-lg text-slate-500">
                                        The product has built-in sentiment analysis capabilities, allowing it to determine the
                                        sentiment (positive, negative, or neutral) expressed in text or customer feedback.
                                    </p>
                                    <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-mainAzul-100 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-800 hover:bg-blue-800 hover:ring-blue-900"
                                            href="/login">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style={{ color: 'transparent' }} src="https://images.unsplash.com/photo-1599134842279-fe807d23316e">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mainAzul-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            className="h-8 w-8 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                        Natural Language Generation (NLG):
                                    </h2>
                                    <p className="mt-4 text-lg text-slate-500">
                                        The AI product can generate human-like written content, summaries, or reports based on
                                        structured data or analysis results.
                                    </p>
                                    <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-mainAzul-100 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-800 hover:bg-blue-800 hover:ring-blue-900"
                                            href="/login">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img loading="lazy" width="646" height="485"
                                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style={{ color: 'transparent' }}
                                    src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <Footer />
        </main>
    );
}