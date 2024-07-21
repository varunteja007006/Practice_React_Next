import { TOAST_CONFIG } from "@/constants/TOASTS";
import { toast } from "../ui/use-toast";

const createToast = (options) => {
  toast({
    variant: options.variant,
    title: options.title,
    description: options.description,
    duration: options.duration,
  });
};

export const SuccessToast = (options) => {
  createToast({
    variant: TOAST_CONFIG.SUCCESS.VARIANT,
    title: options?.title || TOAST_CONFIG.SUCCESS.TITLE,
    description: options?.description || TOAST_CONFIG.SUCCESS.DESCRIPTION,
    duration: options?.duration || TOAST_CONFIG.SUCCESS.DURATION,
  });
};

export const ErrorToast = (options) => {
  createToast({
    variant: TOAST_CONFIG.ERROR.VARIANT,
    title: options?.title || TOAST_CONFIG.ERROR.TITLE,
    description: options?.description || TOAST_CONFIG.ERROR.DESCRIPTION,
    duration: options?.duration || TOAST_CONFIG.ERROR.DURATION,
  });
};

export const ReqFailedToast = (options) => {
  createToast({
    variant: TOAST_CONFIG.FAILED_REQUEST.VARIANT,
    title: options?.title || TOAST_CONFIG.FAILED_REQUEST.TITLE,
    description:
      options?.description || TOAST_CONFIG.FAILED_REQUEST.DESCRIPTION,
    duration: options?.duration || TOAST_CONFIG.FAILED_REQUEST.DURATION,
  });
};

export const ResFailedToast = (options) => {
  createToast({
    variant: TOAST_CONFIG.FAILED_RESPONSE.VARIANT,
    title: options?.title || TOAST_CONFIG.FAILED_RESPONSE.TITLE,
    description:
      options?.description || TOAST_CONFIG.FAILED_RESPONSE.DESCRIPTION,
    duration: options?.duration || TOAST_CONFIG.FAILED_RESPONSE.DURATION,
  });
};

export const GetFailedToast = (options) => {
  createToast({
    variant: TOAST_CONFIG.GET_FAILED.VARIANT,
    title: options?.title || TOAST_CONFIG.GET_FAILED.TITLE,
    description: options?.description || TOAST_CONFIG.GET_FAILED.DESCRIPTION,
    duration: options?.duration || TOAST_CONFIG.GET_FAILED.DURATION,
  });
};
