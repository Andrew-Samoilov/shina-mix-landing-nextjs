import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-full text-center">
      <h1>Сторінка не знайдена</h1>
      <p className="md:mb-8 text-lg">
        Нажаль, за цією адресою сторінки не існує або вона була переміщена.
      </p>
      <Link href="/"
        className="btn btn-sm md:btn-lg btn-primary hover:no-underline "
      >
        На головну
      </Link>
    </section>
  );
}
