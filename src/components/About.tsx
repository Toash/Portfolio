export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex-grow w-full flex flex-col items-center text-center">

          {/* sm:text-4xl text-3xl - response font size */}
          <h1 className="sm:text-5xl text-4xl font-medium text-white mb-4 mt-16">
            Hi, I'm Justin Ho.
          </h1>
          <p className="mb-8">I have experience creating various applications, including full stack, video games, and more.</p>
        </div>
      </div>
    </section>
  );
}
