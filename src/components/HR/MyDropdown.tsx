import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

export function MyDropdown() {
  const navigate = useNavigate();
  const logout = () => {
    navigate('/zaloguj', { replace: true });
  };
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className="inline-flex w-full justify-center rounded-md bg-HRblack bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
          font-light"
          >
            Mateusz Kowalski
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-HRblack shadow-lg ring-1 ring-HRblack ring-opacity-5 focus:outline-none font-light">
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={`${
                    active ? 'text-HRwhite hover:animate-pulse' : 'text-HRwhite'
                  } group flex w-full items-center px-2 py-2 text-sm`}
                >
                  Konto
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={logout}
                  type="button"
                  className={`${
                    active ? 'text-HRwhite hover:animate-pulse' : 'text-HRwhite'
                  } group flex w-full items-center px-2 py-2 text-sm`}
                >
                  Wyloguj
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
