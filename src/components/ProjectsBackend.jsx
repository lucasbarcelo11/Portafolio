export default function ProjectsBackend() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-gray-200">
        Proyectos Backend
      </h1>
      <p className="text-center py-8 dark:text-gray-200">
        Proyectos realizados con JavaScript, Nodejs, Express, PostgreSQL,
        Sequelize.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <div className="relative flex items-center justify-center h-auto w-full bg-white shadow-xl shadow-gray-400 rounded-xl ">
          <div
            className="rounded/xl  h-24 flex flex-col gap-5 text-center"
          >
            <h3 className="text-xl">E-Commerce</h3>
            <a href="https://github.com/lucasbarcelo11/e-commerce-nodejs" target='blank' className="border-solid border-2 border-black rounded-lg">Link a GitHub</a>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-auto w-full bg-white shadow-xl shadow-gray-400 rounded-xl ">
          <div
            className="rounded/xl h-24 flex flex-col gap-5 text-center"
          >
            <h3 className="text-xl">MovieApp</h3>
            <a href="https://github.com/lucasbarcelo11/MovieApp" target='blank' className="border-solid border-2 border-black rounded-lg">Link a GitHub</a>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-auto w-full bg-white shadow-xl shadow-gray-400 rounded-xl ">
          <div
            className="rounded/xl h-24 flex flex-col gap-5 text-center"
          >
            <h3 className="text-xl">User-Crud</h3>
            <a href="https://github.com/lucasbarcelo11/user-crud" target='blank' className="border-solid border-2 border-black rounded-lg">Link a GitHub</a>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-auto w-full bg-white shadow-xl shadow-gray-400 rounded-xl ">
          <div
            className="rounded/xl h-24 flex flex-col gap-5 text-center"
          >
            <h3 className="text-xl">VerificationApp</h3>
            <a href="https://github.com/lucasbarcelo11/verification-app" target='blank' className="border-solid border-2 border-black rounded-lg">Link a GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}
