import { create } from "zustand";

export interface ModalStoreInterface {
  movieId?: string;
  isOpen: boolean;
  onOpen: (movieId: string) => void;
  onClose: () => void;
}

const useInfoModalStore = create<ModalStoreInterface>((set) => ({
  movieId: undefined,
  isOpen: false,
  onOpen: (movieId: string) => set({ isOpen: true, movieId }),
  onClose: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModalStore;
