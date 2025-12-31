export default function AboutLocation() {
  return (
    <div className="my-4 bg-background md:px-5 lg:px-8">
      <div className="container py-28">
        <div className="flex flex-col gap-6">
          <p className="font-syne-mono text-3xl text-foreground/80 tracking-tight">
            Our Location
          </p>

          <div className="relative mx-auto w-full overflow-hidden rounded-lg">
            <iframe
              allowFullScreen
              className="aspect-video h-full w-full rounded-sm lg:min-h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.7548139437863!2d30.125355674356914!3d-1.949238838713868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca70feb2e6ae9%3A0x42c9567e13445a57!2sKimironko%20Market!5e0!3m2!1sen!2srw!4v1734010282439!5m2!1sen!2srw"
              title="Rathon Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
