import { create } from "zustand";
import { persist } from "zustand/middleware";

// 유저 정보를 로컬스토리지에 저장한다.
// 정보가 있으면 로그인상태 없으면 로그아웃 상태
// 계산해서 나오는건 상태값으로 쓰지말자.
// persist를 이용해서 전역으로 사용하면서 로컬스토리에 저장 삭제를 할수있다.

const useAuthStore = create(
  persist(
    (set) => ({
      user: null, // 초기 상태
      login: (user) => set({ user }), // 유저 정보 저장
      logout: () => set({ user: null }) // 유저 정보 삭제
    }),
    {
      name: "auth-storage", // 로컬스토리지에 키값으로 저장 될 이름
    }
  )
)

export default useAuthStore;