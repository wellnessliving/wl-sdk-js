/**
 * Statuses of payment intents.
 */
function Thoth_PayProcessor_StripeCom_PaymentIntentStatusSid()
{
  // Empty constructor.
}

/**
 * You may cancel a Payment Intent at any point before it is processing or succeeded. This invalidates the Payment Intent for future payment attempts, and cannot be undone. If any funds have been held, cancellation returns those funds.
 *
 * @type {number}
 */
Thoth_PayProcessor_StripeCom_PaymentIntentStatusSid.CANCELED = 7;

/**
 * Once required actions are handled, the Payment Intent moves to processing. While for some payment methods (e.g., cards) processing can be quick, other types of payment methods can take up to a few days to process.
 *
 * @type {number}
 */
Thoth_PayProcessor_StripeCom_PaymentIntentStatusSid.PROCESSING = 4;

/**
 * If the payment requires additional actions, such as authenticating with 3D Secure , the Payment Intent has a status of `requires_action`.
 *
 * @type {number}
 */
Thoth_PayProcessor_StripeCom_PaymentIntentStatusSid.REQUIRES_ACTION = 3;

/**
 * Requires capture.
 *
 * @type {number}
 */
Thoth_PayProcessor_StripeCom_PaymentIntentStatusSid.REQUIRES_CAPTURE = 6;

/**
 * After the customer provides their payment information, the Payment Intent is ready to be confirmed.
 *
 * @type {number}
 */
Thoth_PayProcessor_StripeCom_PaymentIntentStatusSid.REQUIRES_CONFIRMATION = 2;

/**
 * When the Payment Intent is created, it has a status of `requires_payment_method` until a payment method is attached.
 *
 * @type {number}
 */
Thoth_PayProcessor_StripeCom_PaymentIntentStatusSid.REQUIRES_PAYMENT_METHOD = 1;

/**
 * A Payment Intent with a status of succeeded means that the payment flow it is driving is complete.
 *
 * @type {number}
 */
Thoth_PayProcessor_StripeCom_PaymentIntentStatusSid.SUCCEEDED = 5;
