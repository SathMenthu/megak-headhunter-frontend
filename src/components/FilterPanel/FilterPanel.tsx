import React, { FormEvent } from 'react';
import { Checkbox } from './Checkbox';

interface Props {
  visible: boolean;
}

export function FilterPanel({ visible }: Props) {
  if (!visible) return null;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed inset-0 bg-[#0A0A0A] bg-opacity-10 flex justify-center items-center"
    >
      <div className="bg-black font-catamaran text-white p-5 w-[520px] h-[806px]">
        <div className="flex w-full justify-between mb-5">
          <h2 className="text-2xl font-bold">Filtrowanie</h2>
          <button
            type="button"
            className="bg-[#172A35] py-1 px-2.5 text-[#F7F7F7] font-medium text-sm"
          >
            Wyczyść wszystkie
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-5">
            <p className="text-sm mb-1.5 font-medium">Ocena przejścia kursu</p>
            <div>
              <Checkbox value="15" text="5" />
              <Checkbox value="14" text="4" />
              <Checkbox value="13" text="3" />
              <Checkbox value="12" text="2" />
              <Checkbox value="11" text="1" />
            </div>
          </div>
          <div className="mb-5">
            <p className="text-sm mb-1.5 font-medium">
              Ocena aktywności i zaangażowania w kursie
            </p>
            <div>
              <Checkbox value="25" text="5" />
              <Checkbox value="24" text="4" />
              <Checkbox value="23" text="3" />
              <Checkbox value="22" text="2" />
              <Checkbox value="21" text="1" />
            </div>
          </div>
          <div className="mb-5">
            <p className="text-sm mb-1.5 font-medium">
              Ocena kodu w projekcie własnym
            </p>
            <div>
              <Checkbox value="35" text="5" />
              <Checkbox value="34" text="4" />
              <Checkbox value="33" text="3" />
              <Checkbox value="32" text="2" />
              <Checkbox value="31" text="1" />
            </div>
          </div>
          <div className="mb-5">
            <p className="text-sm mb-1.5 font-medium">
              Ocena pracy w zespole Scrum
            </p>
            <div>
              <Checkbox value="45" text="5" />
              <Checkbox value="44" text="4" />
              <Checkbox value="43" text="3" />
              <Checkbox value="42" text="2" />
              <Checkbox value="41" text="1" />
            </div>
          </div>
          <div className="mb-5">
            <p className="text-sm mb-1.5 font-medium">
              Preferowane miejsce pracy
            </p>
            <div>
              <Checkbox value="remote" text="Praca zdalna" />
              <Checkbox value="office" text="Praca w biurze" />
            </div>
          </div>
          <div className="mb-5">
            <p className="text-sm mb-1.5 font-medium">
              Oczekiwany typ kontraktu
            </p>
            <div className="flex">
              <Checkbox value="checkbox-1" text="Umowa o pracę" />
              <Checkbox value="checkbox-2" text="B2B" />
              <Checkbox value="checkbox-3" text="Umowa zlecenie" />
              <Checkbox value="checkbox-4" text="Umowa o dzieło" />
            </div>
          </div>
          <div className="mb-5">
            <p className="text-sm mb-1.5 font-medium">
              Oczekiwane wynagrodzenie miesięczne netto
            </p>
            <div className="flex h-5 text-center">
              <p className="mr-2 text-[12px] leading-7">Od</p>
              <input
                type="number"
                placeholder="np. 1000zł"
                className="mr-3 placeholder:text-[12px] placeholder:text-[#7E7E7E] w-1/5 bg-[#292A2B] h-7 border-0 focus:ring-0"
              />
              <p className="mr-2 text-[12px] leading-7">Do</p>
              <input
                type="number"
                placeholder="np. 10000zł"
                className="placeholder:text-[12px] placeholder:text-[#7E7E7E] w-1/5 bg-[#292A2B] h-7 border-0 focus:ring-0"
              />
            </div>
          </div>
          <div className="flex flex-col  mb-5">
            <p className="text-sm mb-1.5 font-medium">
              Zgoda na odbycie bezpłatnych praktyk/stażu na początek
            </p>
            <label htmlFor="radio-yes" className="cursor-pointer">
              <input
                type="radio"
                name="radio"
                id="radio-yes"
                value="yes"
                className="mr-2 bg-transparent border-[#292A2B] cursor-pointer text-red-700 focus:ring-red-700 focus:ring-offset-0"
                required
              />
              Tak
            </label>
            <label htmlFor="radio-no" className="cursor-pointer">
              <input
                type="radio"
                name="radio"
                id="radio-no"
                value="no"
                className="mr-2 bg-transparent border-[#292A2B] cursor-pointer text-red-700 focus:ring-red-700 focus:ring-offset-0"
              />
              Nie
            </label>
          </div>
          <p className="text-sm mb-1.5 font-medium">
            Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu
          </p>
          <select className="bg-[#292A2B] text-[#7E7E7E] focus:ring-0 border-0 w-1/3">
            <option selected value="zeroMonths">
              0 miesięcy
            </option>
            <option>1 miesiąc</option>
            <option>3 miesiące</option>
            <option>6 miesięcy</option>
            <option>9 miesięcy</option>
            <option>12 miesięcy</option>
          </select>
          <div className="flex justify-end">
            <button type="submit" className="mr-5 p-1">
              Anuluj
            </button>
            <button
              type="submit"
              className="bg-[#E02735] px-2.5 py-1.5 text-base"
            >
              Pokaż wyniki
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
