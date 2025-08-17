// Fake API simulation
export const loginUser = async (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === "test@example.com" && credentials.password === "123456") {
        resolve({ message: "Login success", token: "abc123" });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1500);
  });
};
