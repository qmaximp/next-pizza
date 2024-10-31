import { Categories, Container } from '@/components/shared'
import { Title } from '@/components/shared/Title'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='All pizzas' size='lg' className='font-extrabold' />
				<Categories />
			</Container>
		</>
	)
}
