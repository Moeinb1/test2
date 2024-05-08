import Image from 'next/image'

const Logo = () => {
    return (
        <Image
            alt='logo'
            height={150}
            width={150}
            src={'/img/logo.png'}
            className='object-contain'
        />
    )
}

export default Logo
