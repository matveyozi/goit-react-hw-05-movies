import { ContainerStyled } from 'components/Container/Container.styled'
import Header from '../Header/Header'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import css from './css.module.scss'


export default function Layout() {
	return (
		<>
			<Header />
				<main>
			<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
			</Suspense>
				</main>
			<hr />
			<footer className={css.footer}>
				<ContainerStyled>
					<h1>
						Links:
					</h1>
					<ul className={css.social}>
						<li>
							<a href='https://www.linkedin.com/in/matviy-antipin/' target="_blank" rel='noopener nofollow noreferrer'>
							<FaLinkedin/>

							</a>
						</li>
						<li>
							<a href='https://github.com/matveyozi' target="_blank" rel='noopener nofollow noreferrer'>
							<FaGithub/>

							</a>
						</li>
						<li>
							<a href='https://telegram.me/matviyozi' target="_blank" rel='noopener nofollow noreferrer'>
							<FaTelegram/>
							</a>
						</li>
						<li>
							<a href='mailto:antipin.m9971@gmail.com' target="_blank" rel='noopener nofollow noreferrer'>
								Email
							</a>
						</li>
					</ul>
				</ContainerStyled>
			</footer>
		</>
	)
}
