/**
 * CS Response code class.
 * See Nuvei/doc/OMNI_Channel_ISO20022_V2.38.pdf 7.3.11.
 *
 * Last used ID: 20
 */
function Thoth_PayProcessor_Nuvei_Code_CSResponseSid()
{
  // Empty constructor.
}

/**
 * Service has been successfully provided.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.APPROVED = 1;

/**
 * Transaction cannot be cancelled.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.CANNOT_CANCEL = 2;

/**
 * Service is declined.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.DECLINED = 3;

/**
 * Device is busy.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.DEVICE_BUSY = 4;

/**
 * Duplicate transmission.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.DUPLICATE_TRANSMISSION = 5;

/**
 * Invalid identification data for the sender.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.INITIATING_PARTY = 6;

/**
 * Invalid envelope of the message.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.INVALID_MESSAGE = 7;

/**
 * Type of message the recipient receives is unknown or unsupported.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.MESSAGE_TYPE = 8;

/**
 * NO Ticket/Emtpy.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.NO_TICKET = 9;

/**
 * Invalid message: At least one of the data element or data structure is not present, the format, or the content of one data element or one data structure is not correct.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.PARSING_ERROR = 10;

/**
 * Version of the protocol couldn't be supported by the recipient.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.PROTOCOL_VERSION = 11;

/**
 * Invalid identification data for the receiver.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.RECIPIENT_PARTY = 12;

/**
 * Ticket is locked.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.TICKET_LOCKED = 13;

/**
 * Timeout error.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.TIMEOUT_ERROR = 14;

/**
 * Transaction has been cancelled.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.TRANSACTION_CANCELLED = 16;

/**
 * There is an unfinish transactions.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.TRANSACTION_IN_PROCESS = 15;

/**
 * Transaction has been cancelled.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.TRANSACTION_NOT_FOUND = 17;

/**
 * Not possible to process the message, for instance the security module is unavailable, the hardware is unavailable, or there is a problem of resource.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.UNABLE_TO_PROCESS = 18;

/**
 * No relationship between register and terminal.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.UNMAPPED = 19;

/**
 * Transaction with unadjusted tip.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Code_CSResponseSid.UN_ADJUSTED_TIP = 20;
