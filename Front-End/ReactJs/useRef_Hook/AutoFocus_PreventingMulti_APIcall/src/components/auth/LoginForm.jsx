import { useRef, useState, useEffect } from "react";
import { loginUser } from "../../services/authAPI";

function LoginForm() {
  const emailRef = useRef(null); 
  const isSubmittingRef = useRef(false); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;

    setLoading(true);

    try {
      await loginUser({ email: e.target.email.value, password: e.target.password.value });
      alert("Login Successful!");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login Failed!");
    } finally {
      isSubmittingRef.current = false;
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-80 p-6 mx-auto mt-20 bg-gray-100 rounded-lg shadow-md"
    >
      <input
        type="email"
        name="email"
        ref={emailRef}
        placeholder="Enter Email"
        className="p-2 border rounded-md"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        className="p-2 border rounded-md"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className={`p-2 rounded-md text-white ${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
	  <hr />
	  <p className="text-center text-gray-500 text-sm">test email is: test@example.com</p>
	  <p className="text-center text-gray-500 text-sm">test password is: 123456</p>
    </form>
  );
}

export default LoginForm;
