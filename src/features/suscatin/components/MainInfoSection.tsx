import { suscatinInfo } from "../constants";

export function MainInfoSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-custom">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-text-primary text-center">
            Tentang Program Suscatin
          </h2>
          <div className="space-y-4 text-justify">
            {suscatinInfo.map((paragraph, index) => (
              <p
                key={index}
                className="font-roboto text-text-secondary text-sm md:text-base leading-relaxed indent-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
