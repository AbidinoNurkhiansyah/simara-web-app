export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/suscatin-hero.webp"
          alt="Suscatin"
          className="object-center"
        />
      </div>

      {/* Overlay for mobile readability if needed */}
      <div className="absolute inset-0 z-0 bg-white/40 md:hidden"></div>

      <div className="container-custom relative z-10 w-full pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-xl space-y-2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-accent tracking-tight drop-shadow-sm">
            Suscatin
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-accent drop-shadow-sm">
            Kursus Calon Pengantin
          </h2>

          <div className="pt-4 space-y-3">
            <p className="font-nunito text-xl md:text-2xl font-bold text-primary">
              Senin & Kamis 08:00 s/d 16:00
            </p>
            <div className="flex items-center gap-2.5  font-semibold text-sm md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 lg:w-6 lg:h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>KUA PUSAKA kecamatan Karawang Barat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
