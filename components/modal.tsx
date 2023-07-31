"use client";
import { FC } from "react";
import InfoModal from "./info-modal";
import useInfoModalStore from "@/hooks/useInfoModal";

interface ModalProps {}

const Modal: FC<ModalProps> = ({}) => {
  const { isOpen, onClose } = useInfoModalStore();

  return <InfoModal visible={isOpen} onClose={onClose} />;
};

export default Modal;
