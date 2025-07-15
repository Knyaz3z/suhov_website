import './MainApl.scss'
import Button from "../../Button/Button";
import {useEffect, useState} from "react";
import {IMaskInput} from "react-imask";

function MainApl() {
    const [aplValue, setAplValue] = useState({
        name: '',
        tel: '',
        event: '',
        date: '',
        msg: '',
    })

    const [errors, setErrors] = useState({
        nameErr: '',
        telErr: '',
        eventErr: '',
        dateErr: '',
        msgErr: '',
    })

    const [touched, setTouched] = useState({
        name: false,
        tel: false,
        event: false,
        date: false,
        msg: false,
    })

    const [submitStatus, setSubmitStatus] = useState({
        success: false,
        message: '',
        show: false
    });

    function validatePhone(phone) {
        const cleanPhone = phone.replace(/\D/g, '');
        return cleanPhone.length === 11;
    }

    function validate() {
        const newErrors = {
            nameErr: '',
            telErr: '',
            eventErr: '',
            dateErr: '',
            msgErr: '',
        }
        let isValid = true

        if (aplValue.name.length < 2) {
            newErrors.nameErr = touched.name ? 'error-name' : '';
            isValid = false;
        }

        if (!validatePhone(aplValue.tel)) {
            newErrors.telErr = touched.tel ? 'error-tel' : '';
            isValid = false;
        }

        if (aplValue.event === '') {
            newErrors.eventErr = touched.event ? 'error-event' : '';
            isValid = false;
        }

        if (aplValue.date === '') {
            newErrors.dateErr = touched.date ? 'error-date' : '';
            isValid = false;
        }

        if (aplValue.msg.length > 500) {
            newErrors.msgErr = touched.msg ? 'error-msg' : '';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setAplValue(prev => ({
            ...prev,
            [name]: value,
        }))

        if (!touched[name]) {
            setTouched(prev => ({
                ...prev,
                [name]: true,
            }));
        }
    }

    const handlePhoneAccept = (value) => {
        setAplValue(prev => ({
            ...prev,
            tel: value,
        }))

        if (!touched.tel) {
            setTouched(prev => ({
                ...prev,
                tel: true,
            }));
        }
    }

    const handleBlur = (field) => {
        if (!touched[field]) {
            setTouched(prev => ({
                ...prev,
                [field]: true,
            }));
        }
        validate();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(prev => ({...prev, show: false}));

        setTouched({
            name: true,
            tel: true,
            event: true,
            date: true,
            msg: true,
        });

        if (validate()) {
            try {
                const response = await fetch('/send_main_form.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(aplValue),
                });

                const result = await response.json();

                if (result.success) {
                    setSubmitStatus({
                        success: true,
                        message: 'Заявка успешно отправлена!',
                        show: true
                    });

                    setAplValue({
                        name: '',
                        tel: '',
                        event: '',
                        date: '',
                        msg: '',
                    });
                    setTouched({
                        name: false,
                        tel: false,
                        event: false,
                        date: false,
                        msg: false,
                    });

                    setTimeout(() => {
                        setSubmitStatus(prev => ({...prev, show: false}));
                    }, 5000);
                } else {
                    setSubmitStatus({
                        success: false,
                        message: result.message || 'Ошибка при отправке формы',
                        show: true
                    });
                }
            } catch (error) {
                console.error('Ошибка:', error);
                setSubmitStatus({
                    success: false,
                    message: 'Произошла ошибка при отправке формы',
                    show: true
                });
            }
        }
    }

    useEffect(() => {
        validate();
    }, [aplValue, touched])

    return (
        <div className='main__application'>
            <div className="application__wrapper">
                <div className="application__inner container">
                    <form onSubmit={handleSubmit}>
                        {/* Уведомление об отправке */}
                        {submitStatus.show && (
                            <div className={`form__notification ${submitStatus.success ? 'success' : 'error'}`}>
                                {submitStatus.message}
                            </div>
                        )}

                        {/* Имя */}
                        <input
                            name="name"
                            value={aplValue.name}
                            onChange={handleChange}
                            onBlur={() => handleBlur('name')}
                            placeholder='Имя'
                            type="text"
                            className="application__inner-input"/>
                        <p className={`form__error ${errors.nameErr ? 'show' : null}`}>
                            {errors.nameErr && 'Имя должно быть минимум 2 символа!'}
                        </p>

                        {/* Телефон */}
                        <IMaskInput
                            name="tel"
                            mask="+{7} (000) 000-00-00"
                            radix="."
                            value={aplValue.tel}
                            unmask={true}
                            onAccept={handlePhoneAccept}
                            onBlur={() => handleBlur('tel')}
                            placeholder='Номер телефона'
                            className="application__inner-input"
                        />
                        <p className={`form__error ${errors.telErr ? 'show' : null}`}>
                            {errors.telErr && 'Ошибка в номере телефона'}
                        </p>

                        {/* Мероприятие */}
                        <select
                            name="event"
                            value={aplValue.event}
                            onChange={handleChange}
                            onBlur={() => handleBlur('event')}
                            className="application__inner-input">
                            <option value="" disabled hidden>Мероприятие</option>
                            <option value="Свадьба">Свадьба</option>
                            <option value="Корпоратив">Корпоратив</option>
                            <option value="День рождения">День рождения</option>
                            <option value="Другое">Другое</option>
                        </select>
                        <p className={`form__error ${errors.eventErr ? 'show' : null}`}>
                            {errors.eventErr && 'Выберите тип мероприятия'}
                        </p>

                        {/* Дата */}
                        <input
                            name="date"
                            value={aplValue.date}
                            onChange={handleChange}
                            onBlur={() => handleBlur('date')}
                            placeholder='Когда?'
                            type="date"
                            className="application__inner-input"/>
                        <p className={`form__error ${errors.dateErr ? 'show' : null}`}>
                            {errors.dateErr && 'Укажите дату мероприятия'}
                        </p>

                        {/* Сообщение */}
                        <input
                            name="msg"
                            value={aplValue.msg}
                            onChange={handleChange}
                            onBlur={() => handleBlur('msg')}
                            placeholder='Оставьте свою мысль - она дойдет'
                            type="text"
                            className="application__inner-input"/>
                        <p className={`form__error ${errors.msgErr ? 'show' : null}`}>
                            {errors.msgErr && 'Сообщение не должно превышать 500 символов'}
                        </p>

                        <Button
                            type="submit"
                            color='dark'
                            title='Создать атмосферу вместе'
                            size='small'
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MainApl