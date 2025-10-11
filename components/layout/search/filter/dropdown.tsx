'use client';

import { Listbox, Transition } from '@headlessui/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { ListItem } from '.';
import { FilterItem } from './item';

export default function FilterItemDropdown({ list }: { list: ListItem[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState<ListItem | null>(null);

  useEffect(() => {
    const current = list.find((listItem) => {
      return (
        ('path' in listItem && pathname === listItem.path) ||
        ('slug' in listItem && searchParams.get('sort') === listItem.slug)
      );
    });
    setActive(current || list[0]);
  }, [pathname, list, searchParams]);

  if (!active) {
    return null;
  }

  return (
    <div className="relative w-full">
      <Listbox value={active} onChange={setActive}>
        <div className="relative">
          <Listbox.Button className="flex w-full items-center justify-between rounded-sm border border-black/30 px-4 py-2 text-sm dark:border-white/30">
            <span>{active.title}</span>
            <ChevronDownIcon className="h-4" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-40 mt-1 w-full overflow-auto rounded-b-md bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-black">
              {list.map((item, i) => (
                <Listbox.Option key={i} value={item} as={Fragment}>
                  {({ active, selected }) => (
                    <li
                      className={`cursor-pointer ${active ? 'bg-blue-100' : ''}`}
                    >
                      <FilterItem item={item} />
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}