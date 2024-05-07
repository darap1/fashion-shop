import { FC } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { menu } from './menu.data';

const Navbar: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.navbar}>
				<Link href='/'>
					<h1 className={styles.h1}>Ecommers</h1>
				</Link>
				<nav className={styles.nav}>
					{menu.map((item) => (
						<div>item</div>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
