import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary'

const base =
  'inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-xl font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'

const variants: Record<Variant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary:
    'border border-gray-300 text-gray-900 bg-white hover:bg-gray-50',
}

type CommonProps = {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string
    target?: string
    rel?: string
  }

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = 'primary', children, className = '', ...rest } = props
  const classes = `${base} ${variants[variant]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...linkRest } = rest as ButtonAsLink
    const isExternal = href.startsWith('http')
    if (isExternal) {
      return (
        <a href={href} className={classes} {...linkRest}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
