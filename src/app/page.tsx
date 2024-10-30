import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-foreground bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-foreground/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Servicio Técnico</h1>
          <address>
            <p>Avenida la Fontana</p>
            <p>Miraflores, Lima - Perú</p>
          </address>
          <p>
            <time>9:00 am</time> - <time>18:00 pm</time>
          </p>
          <Link href="tel:999888777" className="hover:underline">
            Llamar al 999 888 777
          </Link>
        </div>
      </main>
    </div>
  );
}
