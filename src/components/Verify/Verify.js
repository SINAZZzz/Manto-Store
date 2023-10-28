// :):
import { Button } from "@material-tailwind/react";
import Logo from "../../assets/img/LogooT.jpg";

import { Link } from "react-router-dom";

export default function Verify() {
  let timeLeft = 100;

  function countdown() {
    timeLeft--;
    document.getElementById("seconds").innerHTML = String(timeLeft);
    if (timeLeft > 0) {
      setTimeout(countdown, 1000);
    } else {
      document.getElementById("resend").disabled = String("");
      document.getElementById("resend").style.opacity = "100%";
    }
  }

  setTimeout(countdown, 1000);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-[12rem] lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-32 w-auto" src={Logo} alt="Your Company" />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                کد پیامکی
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  autoComplete="mobile"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                تایید کد
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            می تونی بعد از <span id="seconds">100</span> ثانیه دوباره درخواست کد
            بدی{" "}
            <Link to="/SignIn">
              <button
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 opacity-50"
                id="resend"
                disabled={"disabled"}
              >
                دوباره ارسال کن
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
