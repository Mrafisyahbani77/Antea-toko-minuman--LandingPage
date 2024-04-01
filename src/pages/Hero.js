import Image from 'next/image';
import Antea from '../Image/antea2.jpg';
import logo from '../Image/logo.png';

export default function Hero() {
  return (
    <div className="bg-gray-400 flex flex-col md:flex-row md:items-center md:justify-center">
      <div className="md:max-w-md mx-auto text-center md:text-left">
        <header>
          <h1 className="font-semibold">Hallo Antea</h1>
          <p>hdoiajdoaodoqodownqondoqmd jsahcioahsodhaiodoe</p>
        </header>
      </div>
      <div className="md:max-w-lg">
        <Image
          src={Antea}
          alt="Antea"
          className="rounded-full py-2 size-72 px-2"
        />
      </div>
    </div>
  );
}
