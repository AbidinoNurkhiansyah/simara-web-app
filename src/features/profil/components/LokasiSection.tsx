import { Clock } from "lucide-react";
import { contactInfoList, operationalHours } from "../constants";
import { Card } from "@/components/ui/card";

export function LokasiSection() {
  return (
    <section className="container-custom space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">
          Lokasi Kantor KUA
        </h2>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed">
          Anda dapat berkunjung langsung ke kantor operasional kami di jam
          dinas atau menghubungi kami melalui peta interaktif berikut.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Detail Alamat Fisik */}
        <div className="lg:col-span-4 p-8 text-left flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <h3 className="font-nunito font-extrabold text-lg text-primary border-b border-gray-100 pb-3">
              Informasi Kontak
            </h3>
            <div className="space-y-4">
              {contactInfoList.map((contact, idx) => {
                const Icon = contact.icon;
                return (
                  <div key={idx} className="flex gap-3">
                    <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="font-roboto text-sm text-text-primary">
                      <p className="font-bold">{contact.title}</p>
                      <p className="text-text-secondary mt-0.5">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex flex-row items-center gap-3">
            <Clock className="w-5 h-5 text-primary" />
            <div className="font-roboto text-xs text-text-secondary text-left">
              <p className="font-bold text-primary">{operationalHours.title}</p>
              {operationalHours.schedule.map((time, idx) => (
                <p key={idx}>{time}</p>
              ))}
            </div>
          </Card>
        </div>

        {/* Google Map Iframe */}
        <div className="lg:col-span-8 h-80 sm:h-96 lg:h-auto rounded-3xl overflow-hidden shadow-lg border border-gray-150 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.70939143626913!2d107.3046829!3d-6.3063436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977c3a733af8f%3A0xf597a5a216080521!2sKUA%20Kec.%20Karawang%20Barat!5e0!3m2!1sen!2sid!4v1782277575608!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Lokasi KUA Karawang Barat"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}
