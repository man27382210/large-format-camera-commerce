import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="border-b border-gray-200 py-6">
          <Disclosure.Button className="flex w-full items-center justify-between text-gray-900">
            <span className="text-lg font-medium">{title}</span>
            <ChevronDownIcon
              className={`h-5 w-5 transition-transform ${
                open ? 'rotate-180' : ''
              }`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="pt-4 text-gray-500">
              {children}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default Accordion;