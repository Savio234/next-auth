"use client";
import React, { useEffect } from "react";
import styles from "./ModalElement.module.css";

const ModalElement = (props: any) => {
  const handleClose = () => {
    props.onClose();
  };
  useEffect(() => {
    document.body.style.overflow = props.isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [props.isOpen]);
  return (
    <div>
      {props.isOpen && (
        <div className={`${styles.overlay} ${props.className}`} onClick={handleClose}>
          <div className={`${styles.modalbody} ${props.bodyClass}`}
            onClick={(e) => e.stopPropagation()}
          >
            {props.children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalElement;
