interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open : boolean) => boolean | void;
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    
    <div className={`modal ${modalOpen ? "modal-open" : ""}`} role="dialog">
      
      <div className="modal-box">
        {children}
        {/* modal-action is class inn daisyUI  */}
        <div className="modal-action">
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
