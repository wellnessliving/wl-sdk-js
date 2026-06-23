/**
 * Possible types of the custom fields: text, checkbox, radio buttons, etc.
 *
 * <b>!!! BE ATTENTIVE !!!</b>
 *
 * When you add a new field type, do not forget to test synchronization with electronic mail list managers. Search for
 * other constants in this class. You need to add your new constant in bulk places where other constants are found.
 */
function RsFieldTypeSid()
{
  // Empty constructor.
}

/**
 * Checkbox field. The `s_value` for this type of field can be 1 if checkbox is checked and 0 otherwise.
 *
 * @type {number}
 */
RsFieldTypeSid.CHECKBOX = 2;

/**
 * General field. Has its own format.
 *
 * @type {number}
 */
RsFieldTypeSid.GENERAL = 5;

/**
 * Radio buttons.
 *
 * @type {number}
 */
RsFieldTypeSid.RADIO = 4;

/**
 * Drop-down menu.
 *
 * @type {number}
 */
RsFieldTypeSid.SELECT = 3;

/**
 * One line text field.
 *
 * @type {number}
 */
RsFieldTypeSid.TEXT = 1;
