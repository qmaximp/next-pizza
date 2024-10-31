import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui'
import { Container } from './Container'

interface Props {
	className?: string
}

export const Headers: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				{/* left part */}
				<div className='flex items-center gap-4'>
					<Image src='/logo.png' width={35} height={35} alt='Logo' />
					<div>
						<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
						<p className='text-sm text-gray-400 leading-3'>
							вкусней уже некуда
						</p>
					</div>
				</div>
				{/* right  part */}
				<div className='flex items-center gap-3'>
					<Button variant='outline'>
						<User size={16} />
						Войти
					</Button>
				</div>
			</Container>
		</header>
	)
}

export default Headers
