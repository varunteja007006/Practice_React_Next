import { TOAST_CONFIG } from "@/constants/TOASTS";

const { toast } = require("@/components/ui/use-toast");

export const TOAST_REQUEST_FAIL = () =>
  toast({
    variant: TOAST_CONFIG.FAILED_REQUEST.VARIANT,
    title: TOAST_CONFIG.FAILED_REQUEST.TITLE,
    description: TOAST_CONFIG.FAILED_REQUEST.DESCRIPTION,
    duration: TOAST_CONFIG.FAILED_REQUEST.DURATION,
  });

/**
 * Toast to trigger when response fails with some error messages
 * @param {string | null} title Title to show in the toast
 * @param {string | null} description Description to show in the toast
 * @param {number | null} duration The amount of time to show toast
 * @returns {void} Triggers a response failed toast (Red Color)
 */
export const TOAST_RESPONSE_FAIL = (
  title = null,
  description = null,
  duration = null
) =>
  toast({
    variant: TOAST_CONFIG.FAILED_RESPONSE.VARIANT,
    title: title || TOAST_CONFIG.FAILED_RESPONSE.TITLE,
    description: description || TOAST_CONFIG.FAILED_RESPONSE.DESCRIPTION,
    duration: duration || TOAST_CONFIG.FAILED_RESPONSE.DURATION,
  });
/**
 *
 * @param {string | null} title
 * @param {string | null} description
 * @param {number | null} duration
 * @returns {void}
 */
export const TOAST_SUCCESS = (
  title = null,
  description = null,
  duration = null
) =>
  toast({
    variant: TOAST_CONFIG.SUCCESS.VARIANT,
    title: title || TOAST_CONFIG.SUCCESS.TITLE,
    description: description || TOAST_CONFIG.SUCCESS.DESCRIPTION,
    duration: duration || TOAST_CONFIG.SUCCESS.DURATION,
  });
/**
 *
 * @param {string | null} title
 * @param {string | null} description
 * @param {number | null} duration
 * @returns {void}
 */
export const TOAST_ERROR = (
  title = null,
  description = null,
  duration = null
) =>
  toast({
    variant: TOAST_CONFIG.ERROR.VARIANT,
    title: title || TOAST_CONFIG.ERROR.TITLE,
    description: description || TOAST_CONFIG.ERROR.DESCRIPTION,
    duration: duration || TOAST_CONFIG.ERROR.DURATION,
  });
