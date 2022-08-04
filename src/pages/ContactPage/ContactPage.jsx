import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { UilPhone, UilEnvelope, UilClock } from '@iconscout/react-unicons';

const ContactPage = () => {
	const form = useRef();
	let [text, setText] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_ygvo9uq',
				'template_9s6ik0p',
				form.current,
				'0csyyDoAvSk6zYIpC'
			)
			.then(
				(result) => {
					console.log(result.text);
					setText('Cảm ơn bạn đã ủng hộ chúng tôi!');
				},
				(error) => {
					console.log(error.text);
					setText('Không gửi được. Mời bạn thử lại!');
				}
			);
	};
	return (
		<div className="wrapper-contact">
			<div className="contact">
				<div className="contact__form">
					<div className="contact__form__title">
						Liên hệ chúng tôi
					</div>
					<div className="contact__form__sub">
						Sự ủng hộ của bạn là động lực cho chúng tôi
					</div>
					<form ref={form} onSubmit={sendEmail}>
						<label>Name</label>
						<input type="text" name="user_name" />
						<label>Email</label>
						<input type="email" name="user_email" />
						<label>Message</label>
						<textarea name="message" />
						<div className="text">
							<span>{text}</span>
						</div>
						<div className="button">
							<button type="submit">Gửi ngay</button>
						</div>
					</form>
				</div>

				<div className="contact__info">
					<div className="contact__info__title">
						Thông tin liên hệ
					</div>
					<ul className="contact__info__list">
						<li className="contact__info__list__item">
							<p>
								<UilPhone />
							</p>
							<span>0334 127 xxx</span>
						</li>
						<li className="contact__info__list__item">
							<p>
								<UilEnvelope />
							</p>
							<span>ngthanhtin60@gmail.com</span>
						</li>
						<li className="contact__info__list__item">
							<p>
								<UilClock />
							</p>
							<span>6:00 - 22:00</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
