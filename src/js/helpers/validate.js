const regexp = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{4,}$/,
};

/**
 * Check user input with regexp
 * @param {HTMLInputElement} element
 * @returns {Boolean}
 */
export function validate(element) {
  if (!element.hasAttribute("data-required")) return true;

  return regexp[element.dataset.required].test(element.value);
}
