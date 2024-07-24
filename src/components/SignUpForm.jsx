import React, { useState } from 'react';
import CustomInput from './CustomInput';
import asset7 from '../assets/images/Asset7.png';
function SignUpForm() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const [otpErrorMessage, setOtpErrorMessage] = useState(null);

    const handleChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);

        if (submitted) {
            validatePhoneNumber(value);
        }
    };

    const validatePhoneNumber = (value) => {
        if (!value.startsWith('09')) {
            setErrorMessage('شماره تلفن باید با 09 شروع شود.');
            console.log("errorMessage", errorMessage)
        } else if (value.length !== 11) {
            setErrorMessage('شماره تلفن باید 11 رقم باشد.');
            console.log("errorMessage", errorMessage)
        } else {
            setErrorMessage(null);
            setSubmitted(true);
        }
    };

    const validateOtpCode = (value) => {
        if (value !== '12345') {
            setOtpErrorMessage('کد تایید اشتباه است.');
        } else {
            setOtpErrorMessage(null);
            setSubmitted(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validatePhoneNumber(phoneNumber);
        setOtpCode('');
    };

    const handleOtpSubmit = (event) => {
        event.preventDefault();
        validateOtpCode(otpCode);

        if (!otpErrorMessage) {

            setOtpCode('');
            setPhoneNumber('');

        }
    };

    return (
        <div className='flex flex-col text-white items-center justify-center mx-4 w-[1140px] h-[512px] pb-10'
            style={{
                backgroundImage: `url(${asset7})`,
                backgroundSize: ' 100% 90%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'cover',
            }}
        >
            {!submitted ? (
                <>
                    <h3 className='text-yellow text-2xl py-12'>
                        در کمتــــــر از 5 دقــــــــیــیــــــقــــــه  <br />
                        ترید حـــــــرفه‌ای رو شروع کنین
                    </h3>
                    <form className='flex flex-col gap-y-2' onSubmit={handleSubmit}>
                        <CustomInput
                            label="شماره موبایل :"
                            type="tel"
                            id="phoneNumber"
                            onChange={handleChange}
                            value={phoneNumber}
                            placeholder="09123456789"
                            errorMessage={errorMessage}
                        />
                        <button type='submit' className='bg-red w-[320px] h-[48px] text-white px-4 py-2  mx-4 rounded-[10px] hover:bg-rose-800 '>
                            شروع کن
                        </button>
                        <h4 className='text-center'>چگونه ریپل دریافت کنیم</h4>
                    </form>
                </>
            ) : (
                <>
                    <p className='text-yellow text-[20px] py-6'>
                        لطفا کد تایید ارسال شده را وارد کنین <br />
                        تا به صفحه‌ی ثبت نام منتقل شوید
                    </p>
                    <p className='text-white py-6 w-[330px] text-center'>
                        به ازای هر تراکنش تا سقف ۱۰۰ ریبل هم <br />
                        می‌تونین هدیه بگیرین
                    </p>
                    <form className='flex flex-col gap-y-2' onSubmit={handleOtpSubmit}>
                        <CustomInput
                            type="number"
                            id="otpCode"
                            onChange={(e) => setOtpCode(e.target.value)}
                            value={otpCode}
                            placeholder="- - - - - - "
                            errorMessage={otpErrorMessage}
                        />
                        <button type='submit' className='bg-red w-[330px] h-[48px] text-white px-4 py-2 rounded-[10px] hover:bg-rose-800 '>
                            تایید و شروع ثبت نام
                        </button>
                        <div className='flex'>
                            <p className='text-white py-6 ' > کد را دریافت نکرده اید؟  </p>
                            <p className='text-gray-400 py-6 px-4'>ارسال مجدد</p>
                        </div>
                        <p className='text-gray-400 text-sm text-center'>00:24</p>
                        <p className='text-center' >چگونه ریپل دریافت کنیم؟</p>
                    </form>
                </>
            )}
        </div>
    );
}

export default SignUpForm;
