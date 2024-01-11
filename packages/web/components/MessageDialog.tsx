import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { createContext } from "@/libs/create-context";
import * as React from "react";
import { useRef, useState } from "react";

export interface MessageDialogContext {
  dialogs: (MessageDialogProps & { dialogId: number })[];
  createDialog: (dialog: MessageDialogProps) => number;
  removeDialog: (dialogId?: number) => void;
}

const [MessageDialogContextProvider, useMessageDialogContext] =
  createContext<MessageDialogContext>();

export const useMessageDialog = () => {
  const ctx = useMessageDialogContext();

  return {
    openDialog: ctx.createDialog,
    closeDialog: ctx.removeDialog,
  };
};

export interface MessageDialogProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialog> {
  title: React.ReactNode;
  description?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  confirmLabel?: React.ReactNode;
  hideCancel?: boolean;
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export interface AlertDialogProviderProps {
  children: React.ReactNode;
}

export const MessageDialogProvider = ({
  children,
}: AlertDialogProviderProps) => {
  const dialogKeyRef = useRef(0);
  const [dialogs, setDialogs] = useState<
    (MessageDialogProps & { dialogId: number })[]
  >([]);

  const createDialog = (dialog: MessageDialogProps) => {
    const dialogId = dialogKeyRef.current++;
    setDialogs((dialogs) => [...dialogs, { ...dialog, open: true, dialogId }]);

    return dialogId;
  };

  const removeDialog = (dialogId?: number) => {
    if (!dialogId) {
      setDialogs((dialogs) => dialogs.slice(0, dialogs.length - 1));
    }
    setDialogs((dialogs) => {
      let nextDialogs = dialogs;

      if (!dialogId) {
        nextDialogs = dialogs.slice(0, dialogs.length - 1);
      } else {
        nextDialogs = dialogs.filter((d) => d.dialogId !== dialogId);
      }

      return nextDialogs;
    });
  };

  return (
    <MessageDialogContextProvider
      value={{
        dialogs,
        createDialog,
        removeDialog,
      }}
    >
      {children}
      {dialogs.map(({ dialogId, ...dialogProps }) => {
        return (
          <MessageDialog
            key={dialogId}
            onClose={() => removeDialog(dialogId)}
            {...dialogProps}
          />
        );
      })}
    </MessageDialogContextProvider>
  );
};

export const MessageDialog = ({
  title,
  description,
  cancelLabel = "취소",
  confirmLabel = "확인",
  hideCancel,
  onClose,
  onCancel,
  onConfirm,
  ...props
}: MessageDialogProps) => {
  return (
    <AlertDialog {...props}>
      <AlertDialogContent
        onEscapeKeyDown={() => {
          onClose?.();
        }}
      >
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {!hideCancel && (
            <AlertDialogCancel onClick={onCancel ?? onClose}>
              {cancelLabel}
            </AlertDialogCancel>
          )}
          <AlertDialogAction onClick={onConfirm ?? onClose}>
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
