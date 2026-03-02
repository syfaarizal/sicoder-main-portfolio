import { Toast, ToastType } from '../types';

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: number) => void;
}

const icons: Record<ToastType, string> = {
  success: 'fas fa-check-circle',
  error: 'fas fa-exclamation-circle',
  warning: 'fas fa-exclamation-triangle',
  info: 'fas fa-info-circle',
};

const titles: Record<ToastType, string> = {
  success: 'Success', error: 'Error', warning: 'Warning', info: 'Info',
};

const colors: Record<ToastType, string> = {
  success: '#10B981', error: '#EF4444', warning: '#F59E0B', info: 'var(--primary-color)',
};

export default function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`toast ${toast.type}`}
          onClick={() => onRemove(toast.id)}
          role="alert"
          aria-live="assertive"
        >
          <div className="toast-header">
            <i className={icons[toast.type]} style={{ color: colors[toast.type] }}></i>
            <div className="toast-title">{titles[toast.type]}</div>
          </div>
          <div className="toast-body">{toast.message}</div>
        </div>
      ))}
    </div>
  );
}
