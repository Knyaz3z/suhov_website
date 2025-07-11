import './FormApl.scss';
import {useEffect, useState} from "react";
import {IMaskInput} from "react-imask";

function FormApl({head}) {
    const [aplValue, setAplValue] = useState({
        name: '',
        tel: '',
        email: '',
        msg: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        tel: '',
        email: '',
        msg: '',
    });

    const [touched, setTouched] = useState({
        name: false,
        tel: false,
        email: false,
        msg: false,
    });

    function validatePhone(phone) {
        const cleanPhone = phone.replace(/\D/g, '');
        return cleanPhone.length === 11;
    }

    function validate() {
        const newErrors = {
            name: '',
            tel: '',
            email: '',
            msg: '',
        };
        let isValid = true;

        // name validation
        if (aplValue.name.length < 2) {
            newErrors.name = touched.name ? 'Имя должно быть минимум 2 символа!' : '';
            isValid = false;
        }

        // phone validation
        if (!validatePhone(aplValue.tel)) {
            newErrors.tel = touched.tel ? 'Ошибка в номере телефона' : '';
            isValid = false;
        }

        // email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(aplValue.email)) {
            newErrors.email = touched.email ? 'Ошибка в email!' : '';
            isValid = false;
        }

        // message validation
        if (aplValue.msg.length > 500) {
            newErrors.msg = touched.msg ? 'Сообщение не должно превышать 500 символов' : '';
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
        }));
    };

    const handlePhoneAccept = (value) => {
        setAplValue(prev => ({
            ...prev,
            tel: value,
        }));
    };

    const handleBlur = (field) => {
        if (!touched[field]) {
            setTouched(prev => ({
                ...prev,
                [field]: true,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mark all fields as touched on submit
        setTouched({
            name: true,
            tel: true,
            email: true,
            msg: true,
        });

        if (validate()) {
            // Отправка данных
            console.log('Форма отправлена:', aplValue);
        }
    };

    useEffect(() => {
        validate();
    }, [aplValue, touched]);

    return (
        <form noValidate className='services__apl' onSubmit={handleSubmit}>
            {head && (
                <p>Оставьте заявку и мы с вами свяжемся</p>
            )}

            <div className="form-group">
                <input
                    name="name"
                    value={aplValue.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    type="text"
                    placeholder='Ваше имя'
                    className={errors.name && touched.name ? 'error' : ''}
                />
                {errors.name && touched.name && (
                    <span className="form__error">{errors.name}</span>
                )}
            </div>

            <div className="form-group">
                <IMaskInput
                    name="tel"
                    mask="+{7} (000) 000-00-00"
                    radix="."
                    value={aplValue.tel}
                    unmask={true}
                    onAccept={handlePhoneAccept}
                    onBlur={() => handleBlur('tel')}
                    placeholder='Номер телефона'
                    className={`services__apl-input ${errors.tel && touched.tel ? 'error' : ''}`}
                />
                {errors.tel && touched.tel && (
                    <span className="form__error">{errors.tel}</span>
                )}
            </div>

            <div className="form-group">
                <input
                    name="email"
                    value={aplValue.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    type="email"
                    placeholder='Email'
                    className={errors.email && touched.email ? 'error' : ''}
                />
                {errors.email && touched.email && (
                    <span className="form__error">{errors.email}</span>
                )}
            </div>

            <div className="form-group">
                <input
                    name="msg"
                    value={aplValue.msg}
                    onChange={handleChange}
                    onBlur={() => handleBlur('msg')}
                    type="text"
                    placeholder='Сообщение'
                    className={errors.msg && touched.msg ? 'error' : ''}
                />
                {errors.msg && touched.msg && (
                    <span className="form__error">{errors.msg}</span>
                )}
            </div>

            <button type="submit">Отправить заявку</button>
        </form>
    );
}

export default FormApl;