import {
  createContext,
  createRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import LoginWrapper from "../components/loginWrapper";

const AuthContext = createContext({});

const contextRef = createRef();

export function AuthProvider({ authService, children }) {
  const [user, setUser] = useState(undefined);
  console.log("user", user);

  useImperativeHandle(contextRef, () => (user ? user.token : undefined));

  useEffect(() => {
    authService.me().then(setUser).catch(console.error);
  }, [authService]);

  const signUp = useCallback(
    async (password, name, email) =>
      authService.signup(password, name, email).then((user) => setUser(user)),
    [authService]
  );

  const logIn = useCallback(
    async (email, password) =>
      authService.login(email, password).then((user) => setUser(user)),
    [authService]
  );

  const logout = useCallback(
    async () => authService.logout().then(() => setUser(undefined)),
    [authService]
  );

  const context = useMemo(
    () => ({
      user,
      signUp,
      logIn,
      logout,
    }),
    [user, signUp, logIn, logout]
  );

  return (
    <AuthContext.Provider value={context}>
      {user ? (
        children
      ) : (
        <div>
          <LoginWrapper onSignUp={signUp} goLogin={logIn} />
        </div>
      )}
    </AuthContext.Provider>
  );
}

export class AuthErrorEventBus {
  listen(callback) {
    this.callback = callback;
  }
  notify(error) {
    this.callback(error);
  }
}

export default AuthContext;
export const fetchToken = () => contextRef.current;
export const useAuth = () => useContext(AuthContext);
