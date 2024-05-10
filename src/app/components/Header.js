"use client"
import React from 'react'
import Image from 'next/image'
import Nav from './Nav'
import style from '@/app/styles/common.module.css'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Quality Check', href: '/qualitycheck'},
  { name: 'Vision', href: '/vision', },
  { name: 'Mission', href: '#' },
  { name: 'Services', href: '/services' },
  { name: 'Certificates', href: '/certificates' },
]
const callsToAction = [
  { name: 'test', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav id="nav" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        <Link className="-m-1.5 p-1.5" href='/'><Image className="md:w-[169px] lg:w-[169px] xl:h-[52px] xl:w-[169px] sm:w-[60px] sm:h-[40px]" src='/logo.png' width={100} height={52} alt='logo'/></Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-between items-center">
        <Popover.Group className="menu hidden lg:flex lg:gap-x-12">
        <Link className="raleway text-lg leading-6 text-gray-900" href='/'>Home</Link>
        <Link className="raleway text-lg leading-6 text-gray-900" href='/products'>Product</Link>
        
           <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 raleway text-lg leading-6 text-gray-900">
            <a className="relative" href="/company">Company</a>
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400 raleway text-lg" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-[57px] z-10 mt-1 w-screen max-w-md overflow-hidden bg-white  ring-1 ring-gray-900/5 p-0">
                <div className="p-4">
                  {company.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                     
                      <div className="flex-auto">
                        <a href={item.href} className="block raleway text-lg font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
               
              </Popover.Panel>
            </Transition>
          </Popover>       
          <Link className="raleway text-lg leading-6 text-gray-900 mr-1.5" href='/becomeseller'>Become a seller</Link>
          
        </Popover.Group>
        
          <a href="#" className="border-sky-300 border-2 p-2 raleway text-lg leading-6 text-gray-900 leading-6">
            Log in 
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Link className="-m-1.5 p-1.5" href='/'><Image className="h-8 w-auto" src='/logo.png' width={169} height={52} alt='logo'/></Link>
              
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                    
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...company, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                
                <Link className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50" href='/Company'>Company</Link>
               
                <Link
                  href="/becomeseller"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Become a seller 
                </Link>
                
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}