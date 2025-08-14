'use client';
import { useEffect, useState } from 'react';
import { weeklyWeather } from '../../public/weather';

const page = () => {
	const [today, setToday] = useState(0);
	const [time, setTime] = useState('00:00');
	useEffect(() => {
		const dateFull = new Date();
		const todaysDate = dateFull.getDay().toString();

		const liveTime = setInterval(() => {
			const t = new Date();
			const hour = String(t.getHours()).padStart(2, '0');
			const minutes = String(t.getMinutes()).padStart(2, '0');
			const seconds = String(t.getSeconds()).padStart(2, '0');
			setTime(`${hour === '00' ? 12 : `${hour}`}:${minutes}`);
		}, 1000);

		setToday(Number(todaysDate));
		return () => clearInterval(liveTime);
	}, []);
	return (
		<div className='grid place-items-center'>
			<p className='alert text-4xl'>this is the page for the dashboard</p>
			{/* TIME */}
			<p className='text-8xl'>{time}</p>
			{/* WEATHER */}
			<div className=''>
				<ul className='flex flex-row gap-2 max-w-[95vw] overflow-scroll'>
					{weeklyWeather.map((day, index) => {
						const todayDate = index + 1;
						return (
							<li
								className={`card bg-base-200 card-sm ${
									todayDate === today ? 'border-sky-500 border-2' : ''
								}`}
								key={day.day}
							>
								<div className='card-body min-w-[10rem]'>
									<p className='capitalize text-2xl card-title'>{day.day}</p>
									<p>{day.conditions}</p>
									<p>{day.wind}</p>
									<p>
										<span className='opacity-90'>Wind: </span>
										{day.temp} mph
									</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			{/* TASKS */}
			<div className='mt-10'>
				<p className='text-2xl tracking-wider uppercase'>quote</p>
			</div>
			{/* QUOTE */}
		</div>
	);
};
export default page;
