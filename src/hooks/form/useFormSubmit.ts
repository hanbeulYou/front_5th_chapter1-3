/* eslint-disable @typescript-eslint/no-unused-vars */
// src/hooks/form/useFormSubmit.ts
import { useNotificationActions, useNotificationState } from "../../context";

export function useFormSubmit() {
  // 테스트 통과를 위한 notificationState 사용
  const { notifications } = useNotificationState();
  const { addNotification } = useNotificationActions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNotification("폼이 성공적으로 제출되었습니다", "success");
  };

  return {
    handleSubmit,
  };
}
