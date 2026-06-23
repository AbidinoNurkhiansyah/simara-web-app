import { steps } from "../constants";

export function AlurPendaftaranSection() {
  return (
    <section id="alur-nikah" className="bg-white py-12 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
            Alur Pendaftaran Nikah
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Panduan lengkap tata cara administrasi dan pendaftaran nikah resmi
            di wilayah kerja Kantor Urusan Agama Kecamatan Karawang Barat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col text-left group">
              {/* Header: Number and Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-accent font-nunito font-bold flex-shrink-0 shadow-md">
                  {step.id}
                </div>
                <h3 className="font-nunito font-extrabold text-lg text-text-primary group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
              </div>

              {/* Circular Image Placeholder */}
              <div className="h-30 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description List */}
              <div className="space-y-2 text-text-secondary text-sm font-roboto flex-grow">
                {step.desc.map((item, idx) => (
                  <div key={idx} className="flex gap-2">
                    <span className="font-bold text-gray-400 select-none">
                      {idx + 1}.
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
