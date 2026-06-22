import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-4 lg:px-[130px] ${className}`}>
      {children}
    </div>
  )
}
