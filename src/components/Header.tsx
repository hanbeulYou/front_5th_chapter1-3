import {
  useThemeState,
  useThemeAction,
  useUserState,
  useUserActions,
} from "../context";
import { memo } from "../hocs";
import { renderLog } from "../utils";
import { Button } from "./common";

export const Header: React.FC = memo(() => {
  renderLog("Header rendered");
  const theme = useThemeState();
  const toggleTheme = useThemeAction();
  const user = useUserState();
  const { login, logout } = useUserActions();

  const handleLogin = () => {
    // 실제 애플리케이션에서는 사용자 입력을 받아야 합니다.
    login("user@example.com", "password");
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">샘플 애플리케이션</h1>
        <div className="flex items-center">
          <Button onClick={toggleTheme} className="mr-2">
            {theme === "light" ? "다크 모드" : "라이트 모드"}
          </Button>
          {user ? (
            <div className="flex items-center">
              <span className="mr-2">{user.name}님 환영합니다!</span>
              <Button onClick={logout} color="red">
                로그아웃
              </Button>
            </div>
          ) : (
            <Button onClick={handleLogin} color="green">
              로그인
            </Button>
          )}
        </div>
      </div>
    </header>
  );
});
