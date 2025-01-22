import { useRef, useState } from "react";
import logoFull from "./assets/images/logo-full.svg";
import logoMark from "./assets/images/logo-mark.svg";
import "./App.css";
import AvatarInput from "./components/AvatarInput";
import TextInput from "./components/TextInput";
import infoIcon from "./assets/images/icon-info.svg";
import githubIcon from "./assets/images/icon-github.svg";
import ticket from "./assets/images/pattern-ticket.svg";

function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [avatarError, setAvatarError] = useState(
    "Upload your photo (JPG or PNG, max size: 500KB)"
  );

  const inputRef = useRef(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
    if (value) {
      setFirstNameError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value || validateEmail(value)) {
      setEmailError('');
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (value) {
      setUsernameError('');
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 500 * 1024) {
        // 500KB size limit
        setAvatarError("File too large. Please upload a photo under 500kb.");
        return;
      }
      setAvatarError("Upload your photo (JPG or PNG, max size: 500KB)");
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setAvatar(null);
  };

  console.log(avatar);

  const handleChangeImage = (e) => {
    e.preventDefault();
    console.log(inputRef.current); // Check if the ref is properly attached
    if (inputRef.current) {
      console.log("Opening file selector...");
      inputRef.current.value= "";
      inputRef.current.click();
    } else {
      console.error("inputRef is not properly attached");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!firstName) {
      setFirstNameError("Please enter your full name.");
      hasError = true;
    } else {
      setFirstNameError("");
    }

    if (!email) {
      setEmailError("Please enter your email address.");
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!username) {
      setUsernameError("Please enter your GitHub username.");
      hasError = true;
    } else {
      setUsernameError("");
    }

    if (!avatar) {
      setAvatarError("Upload your photo (JPG or PNG, max size: 500KB)");
      hasError = true;
    }

    if (!hasError) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="relative m-auto min-h-screen font-inconsolata text-neutral-0 bg-[url('/background-mobile.png')] sm:bg-tablet-bg md:bg-desktop-bg bg-cover bg-center bg-no-repeat">
      <div className="bg-pattern-lines bg-cover bg-no-repeat">
        <div className="absolute top-4 right-0 size-28 sm:size-5/12 bg-squiggly-top bg-no-repeat bg-contain bg-right-top"></div>
        <div className="absolute bottom-0 left-0 size-48 sm:size-9/12 bg-squiggly-mobile sm:bg-squiggly-desktop bg-no-repeat bg-contain bg-left-bottom"></div>
        <div className="pt-8 mx-4 sm:m-auto relative z-10 flex flex-col items-center justify-center min-h-screen sm:max-w-screen-md">
          <img src={logoFull} className="size-1/3 w-52 h-8 mb-8" alt="logo" />
          {!isSubmitted ? (
            <section className="flex flex-col items-center justify-center">
              <h1 className="font-extrabold text-2xl mb-5 text-center mx-4 md:text-5xl">
                Your Journey to Coding Conf 2025 Starts Here!
              </h1>
              <h2 className="text-lg text-center text-neutral-300 mx-4">
                Secure your spot at next year's biggest coding conference.
              </h2>
              <form
                className="w-full max-w-sm mt-8 flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                {/* <input type="file"></input> */}
                <AvatarInput
                  avatar={avatar}
                  avatarError={avatarError}
                  handleFileChange={handleFileChange}
                  handleRemoveImage={handleRemoveImage}
                  handleChangeImage={handleChangeImage}
                  inputRef={inputRef}
                />
                <TextInput
                  label="Full Name"
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  error={firstNameError}
                  infoIcon={infoIcon}
                />
                <TextInput
                  label="Email Address"
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={emailError}
                  infoIcon={infoIcon}
                />

                <TextInput
                  label="Github Username"
                  id="username"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  error={usernameError}
                  infoIcon={infoIcon}
                />
                <button
                  type="submit"
                  className="capitalize p-2 w-full mt-2 mb-16 bg-orange-500 rounded-lg text-neutral-900 font-bold text-xl hover:bg-orange-700 hover:shadow-[inset_0_-4px_0_rgba(255,255,255,0.3)] focus:outline-none focus:ring focus:ring-orange-500 focus:ring-opacity-50 focus:outline focus:outline-inset-2 focus:outline-neutral-200 ring-neutral-900 ring-inset shadow-md transition duration-150 ease-in-out"
                >
                  Generate my ticket
                </button>
              </form>
            </section>
          ) : (
            <section className="flex flex-col items-center justify-center mb-36">
              {/* ticket section  */}
              <h1 className="font-extrabold text-2xl mb-5 text-center mx-4 md:text-5xl">
                Congratulations,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-start to-gradient-end">
                  {" "}
                  {firstName}!
                </span>{" "}
                Your ticket is ready.
              </h1>
              <p className="text-lg text-center text-neutral-300 mx-4 max-w-md">
                We've emailed your ticket to{" "}
                <span className="text-orange-700"> {email}</span> and will send
                updates in the run up to the event.
              </p>
              {/* ticket */}
              <div className="relative flex flex-col items-center justify-center my-12">
                <img
                  src={ticket}
                  className="w-full sm:w-max h-max mx-auto"
                  alt="logo"
                />
                <div className="absolute top-0 left-0 sm:left-0 w-full h-full grid grid-cols-5 items-center justify-between gap-3 grow">
                  <div className="flex flex-col col-start-1 col-span-4 items-start justify-between w-full h-full py-6 px-4 sm:p-12">
                    {/* logo and event info */}
                    <div className="flex items-start justify-start gap-2">
                      <img src={logoMark} className="size-6"></img>
                      <div>
                        <h2 className="text-neutral-0 text-lg/4 sm:text-2xl/4 pb-1">
                          Coding Conf
                        </h2>
                        <p className="text-neutral-400 text-xs sm:text-base">
                          Jan 31, 2025 / Austin TX
                        </p>
                      </div>
                    </div>
                    {/* Ticket Holder info  */}
                    <div className="flex items-start justify-center gap-2">
                      <img src={avatar} className="size-8 rounded-md"></img>
                      <div>
                        <h3 className="text-base/4 sm:text-2xl/4 text-neutral-200">
                          {firstName}
                        </h3>
                        <div className="text-neutral-400 text-xs flex items-center gap-1">
                          <img src={githubIcon} className="size-4"></img>
                          <p className="text-neutral-400 text-xs sm:text-base"> @{username}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center basis-1/6">
                    <h3 className="text-neutral-400 text-xs sm:text-base -rotate-90 ">
                      60910#
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
