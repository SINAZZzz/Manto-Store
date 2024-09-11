import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({ mobile: "", name: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    let newErrors = { mobile: "", name: "" };

    // چک کردن اینکه شماره موبایل وارد شده است یا نه
    if (!mobile) {
      newErrors.mobile = "لطفا شماره موبایل را وارد کنید";
      formIsValid = false;
    }

    // چک کردن اینکه اسم وارد شده است یا نه
    if (!name) {
      newErrors.name = "لطفا اسم را وارد کنید";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      navigate('/');
    }
  };

  return (
    <>
      <div
        className="flex h-[100vh] flex-1 flex-col justify-center px-6 pb-[12rem] lg:px-8"
      >
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                شماره موبایل
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  autoComplete="mobile"
                  maxLength={11}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.mobile && (
                  <p className="mt-2 text-sm text-red-600">{errors.mobile}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                اسم
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ثبت نام
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            اگر قبلا ثبت نام کردی{" "}
            <Link to="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              از اینجا وارد شو
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
