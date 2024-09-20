import NavButton from '@/components/NavButton'
import logo from '@/public/logo.svg'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import {flushSync} from 'react-dom'

const menuVariants = {
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
    },
  },
  hide: {
    opacity: 0,
    transition: {
      type: 'spring',
    },
  },
} as const

export interface WebUIProps {
  children: React.ReactNode
  isAppStarted: boolean
  isPageOpened: boolean
  showMenu: boolean
  showHeader: boolean
  onMoveArchivePage: () => void
}

const WebUI = ({children, isAppStarted, showHeader, showMenu, onMoveArchivePage}: WebUIProps) => {
  const [useNavAnimation, setUseNavAnimation] = useState(false)

  return (
    <div>
      <motion.header
        initial={'show'}
        animate={showHeader ? 'show' : 'hide'}
        className="fixed left-0 right-0 top-0 z-20 flex h-[8.25rem] flex-none items-center"
        variants={menuVariants}
      >
        <nav className="mx-auto flex w-full max-w-[64rem] items-center justify-between">
          <Link
            href={{
              pathname: '/about',
            }}
            shallow
            passHref
          >
            <NavButton>ABOUT</NavButton>
          </Link>
          <Link href={'/'} shallow legacyBehavior>
            <Image src={logo} width={218} height={46} alt="Dokkebi Park logo" />
          </Link>
          <Link
            href={{
              pathname: '/archive',
            }}
            shallow
            passHref
            legacyBehavior
          >
            <NavButton>ARCHIVE</NavButton>
          </Link>
        </nav>
      </motion.header>
      <main className="relative flex h-[36rem] w-[64rem] items-center justify-center">
        <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center">
          {children}
          {isAppStarted && (
            <>
              <motion.button
                className="absolute bottom-6 left-6 h-[9.375rem] w-[9.375rem] bg-[url('/club.png')] bg-cover bg-center transition-transform hover:scale-110"
                animate={showMenu ? 'show' : 'hide'}
                variants={menuVariants}
                onClick={async () => {
                  flushSync(() => {
                    setUseNavAnimation(true)
                  })
                  await onMoveArchivePage()
                  setUseNavAnimation(false)
                }}
              >
                <span className="opacity-0">!</span>
              </motion.button>
              <motion.button
                className="absolute bottom-6 right-6 h-[9.375rem] w-[9.375rem] bg-[url('/dict.png')] bg-cover bg-center grayscale transition-transform"
                animate={showMenu ? 'show' : 'hide'}
                variants={menuVariants}
              >
                <span className="opacity-0">!</span>
              </motion.button>
            </>
          )}
        </div>
        {/* <NavPage show={router.query.pageName === 'about'}>
          <About />
        </NavPage> */}
      </main>
    </div>
  )
}

export default WebUI
