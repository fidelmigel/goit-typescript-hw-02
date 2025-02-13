import s from "./ErrorMessage.module.css";

interface ErrorMessageProp {
  message: string;
}
const ErrorMessage: React.FC<ErrorMessageProp> = ({ message }) => {
  return (
    <div className={s.div}>
      <p className={s.p}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
