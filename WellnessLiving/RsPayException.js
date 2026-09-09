/**
 * An exception that is thrown in a case of a payment error.
 *
 * Last used ID: 165.
 */
function RsPayException()
{
  // Empty constructor.
}

/**
 * Invalid ABA number chosen.
 *
 * @type {number}
 */
RsPayException.ABAN_EMPTY = 58;

/**
 * Invalid ABA number chosen.
 *
 * @type {number}
 */
RsPayException.ABAN_INVALID = 57;

/**
 * User Authentication Failed.
 *
 * Gateway rejected username and/or password.
 *
 * @type {number}
 */
RsPayException.ACCESS_AUTHENTICATE = 160;

/**
 * Authentication token is not valid.
 *
 * @type {number}
 */
RsPayException.ACCESS_TOKEN_INVALID = 181;

/**
 * Account payment entry method is empty.
 *
 * @type {number}
 */
RsPayException.ACCOUNT_ENTRY_EMPTY = 63;

/**
 * Account holder type is empty.
 *
 * @type {number}
 */
RsPayException.ACCOUNT_HOLDER_EMPTY = 64;

/**
 * Account name is empty.
 *
 * @type {number}
 */
RsPayException.ACCOUNT_NAME_EMPTY = 59;

/**
 * Account name is too long.
 *
 * @type {number}
 */
RsPayException.ACCOUNT_NAME_LONG = 60;

/**
 * Account number is empty.
 *
 * @type {number}
 */
RsPayException.ACCOUNT_NUMBER_EMPTY = 61;

/**
 * Account number invalid.
 *
 * @type {number}
 */
RsPayException.ACCOUNT_NUMBER_INVALID = 67;

/**
 * Account number is too long.
 *
 * @type {number}
 */
RsPayException.ACCOUNT_NUMBER_LONG = 62;

/**
 * Account number is too short.
 *
 * @type {number}
 */
RsPayException.ACCOUNT_NUMBER_SHORT = 66;

/**
 * Account owner name does not equal billing name.
 *
 * @type {number}
 */
RsPayException.ACCOUNT_OWNER_DOES_NOT_MATCH = 182;

/**
 * Account owner is empty.
 *
 * @type {number}
 */
RsPayException.ACCOUNT_OWNER_EMPTY = 69;

/**
 * Account name is too long.
 *
 * @type {number}
 */
RsPayException.ACCOUNT_OWNER_LONG = 70;

/**
 * Account type is empty.
 *
 * @type {number}
 */
RsPayException.ACCOUNT_TYPE_EMPTY = 65;

/**
 * ACH check type or account type is invalid.
 *
 * @type {number}
 */
RsPayException.ACH_ACCOUNT_TYPE = 185;

/**
 * ACH: Account Closed.
 *
 * @type {number}
 */
RsPayException.ACH_E02 = 198;

/**
 * ACH: No Account / Unable to Locate Account.
 *
 * @type {number}
 */
RsPayException.ACH_E03 = 199;

/**
 * ACH: Invalid Account Number.
 *
 * @type {number}
 */
RsPayException.ACH_E04 = 200;

/**
 * ACH: Unauthorized Debit to Consumer Account Using Corporate SEC Code.
 *
 * @type {number}
 */
RsPayException.ACH_E05 = 201;

/**
 * ACH: Authorization Revoked by Customer.
 *
 * @type {number}
 */
RsPayException.ACH_E07 = 202;

/**
 * ACH: Payment Stopped.
 *
 * @type {number}
 */
RsPayException.ACH_E08 = 203;

/**
 * ACH: Customer Advises Originator Not Known / Not Authorized.
 *
 * @type {number}
 */
RsPayException.ACH_E10 = 204;

/**
 * ACH: Customer Advises Entry Not in Accordance with Authorization.
 *
 * @type {number}
 */
RsPayException.ACH_E11 = 205;

/**
 * ACH: RDFI Not Qualified to Participate.
 *
 * @type {number}
 */
RsPayException.ACH_E13 = 206;

/**
 * ACH: Representative Payee Deceased or Unable to Continue.
 *
 * @type {number}
 */
RsPayException.ACH_E14 = 207;

/**
 * ACH: Beneficiary or Account Holder Deceased.
 *
 * @type {number}
 */
RsPayException.ACH_E15 = 208;

/**
 * ACH: Account Frozen.
 *
 * @type {number}
 */
RsPayException.ACH_E16 = 209;

/**
 * ACH: Invalid Account Number under Questionable Circumstances.
 *
 * @type {number}
 */
RsPayException.ACH_E17 = 210;

/**
 * ACH: Non-Transaction Account.
 *
 * @type {number}
 */
RsPayException.ACH_E20 = 211;

/**
 * ACH: Corporate Customer Advises Not Authorized.
 *
 * @type {number}
 */
RsPayException.ACH_E29 = 212;

/**
 * ACH: Invalid Image.
 *
 * @type {number}
 */
RsPayException.ACH_E92 = 213;

/**
 * ACH: Non-Negotiable.
 *
 * @type {number}
 */
RsPayException.ACH_E93 = 214;

/**
 * ACH: Breach of Warranty.
 *
 * @type {number}
 */
RsPayException.ACH_E95 = 215;

/**
 * ACH: Counterfeit / Forgery.
 *
 * @type {number}
 */
RsPayException.ACH_E96 = 216;

/**
 * ACH: Refer to Maker.
 *
 * @type {number}
 */
RsPayException.ACH_E97 = 217;

/**
 * Insufficient funds.
 *
 * Available balance is not sufficient to cover the amount of the debit entry.
 *
 * @type {number}
 */
RsPayException.ACH_R01 = 124;

/**
 * Bank account closed.
 *
 * Previously active account has been closed by the customer of RDFI.
 *
 * @type {number}
 */
RsPayException.ACH_R02 = 125;

/**
 * No bank account/unable to locate account.
 *
 * Account number does not correspond to the individual identified in the entry, or the account number designated is
 * not an open account.
 *
 * @type {number}
 */
RsPayException.ACH_R03 = 126;

/**
 * Invalid bank account number.
 *
 * Account number structure is not valid.
 *
 * @type {number}
 */
RsPayException.ACH_R04 = 127;

/**
 * Unauthorized Debit to Consumer Account Using Corporate SEC Code.
 *
 * @type {number}
 */
RsPayException.ACH_R05 = 128;

/**
 * Returned per ODFI request.
 *
 * ODFI requested the RDFI to return the entry.
 *
 * @type {number}
 */
RsPayException.ACH_R06 = 129;

/**
 * Authorization revoked by customer.
 *
 * Receiver has revoked authorization.
 *
 * @type {number}
 */
RsPayException.ACH_R07 = 130;

/**
 * Payment stopped.
 *
 * Receiver of a recurring debit has stopped payment of an entry.
 *
 * @type {number}
 */
RsPayException.ACH_R08 = 131;

/**
 * Uncollected funds.
 *
 * Collected funds are not sufficient for payment of the debit entry.
 *
 * @type {number}
 */
RsPayException.ACH_R09 = 132;

/**
 * Customer advises not authorized.
 *
 * Receiver has advised RDFI that originator is not authorized to debit his bank account.
 *
 * @type {number}
 */
RsPayException.ACH_R10 = 133;

/**
 * Check truncation entry return.
 *
 * To be used when returning a check truncation entry.
 *
 * @type {number}
 */
RsPayException.ACH_R11 = 134;

/**
 * Branch sold to another RDFI.
 *
 * RDFI unable to post entry destined for a bank account maintained at a branch sold to another financial institution.
 *
 * @type {number}
 */
RsPayException.ACH_R12 = 135;

/**
 * RDFI not qualified to participate.
 *
 * Financial institution does not receive commercial ACH entries.
 *
 * @type {number}
 */
RsPayException.ACH_R13 = 136;

/**
 * Representative payee deceased or unable to continue in that capacity.
 *
 * The representative payee authorized to accept entries on behalf of a beneficiary is either deceased or unable to
 * continue in that capacity.
 *
 * @type {number}
 */
RsPayException.ACH_R14 = 137;

/**
 * Beneficiary or bank account holder.
 *
 * (Other than representative payee) deceased* - (1) the beneficiary entitled to payments is deceased or (2) the bank
 * account holder other than a representative payee is deceased.
 *
 * @type {number}
 */
RsPayException.ACH_R15 = 138;

/**
 * Bank account frozen.
 *
 * Funds in bank account are unavailable due to action by RDFI or legal order.
 *
 * @type {number}
 */
RsPayException.ACH_R16 = 139;

/**
 * File record edit criteria.
 *
 * Fields rejected by RDFI processing (identified in return addenda).
 *
 * @type {number}
 */
RsPayException.ACH_R17 = 140;

/**
 * Improper effective entry date.
 *
 * Entries have been presented prior to the first available processing window for the effective date.
 *
 * @type {number}
 */
RsPayException.ACH_R18 = 141;

/**
 * Amount field error.
 *
 * Improper formatting of the amount field.
 *
 * @type {number}
 */
RsPayException.ACH_R19 = 142;

/**
 * Non-payment bank account.
 *
 * Entry destined for non-payment bank account defined by reg.
 *
 * @type {number}
 */
RsPayException.ACH_R20 = 143;

/**
 * Invalid company ID number.
 *
 * The company ID information not valid (normally CIE entries).
 *
 * @type {number}
 */
RsPayException.ACH_R21 = 144;

/**
 * Invalid individual ID number.
 *
 * Individual ID used by receiver is incorrect (CIE entries).
 *
 * @type {number}
 */
RsPayException.ACH_R22 = 145;

/**
 * Credit entry refused by receiver.
 *
 * Receiver returned entry because minimum or exact amount not remitted, bank account is subject to litigation, or
 * payment represents an overpayment, originator is not known to receiver or receiver has not authorized this credit
 * entry to this bank account.
 *
 * @type {number}
 */
RsPayException.ACH_R23 = 146;

/**
 * Duplicate entry.
 *
 * RDFI has received a duplicate entry.
 *
 * @type {number}
 */
RsPayException.ACH_R24 = 147;

/**
 * Addenda error.
 *
 * Improper formatting of the addenda record information.
 *
 * @type {number}
 */
RsPayException.ACH_R25 = 148;

/**
 * Mandatory field error.
 *
 * Improper information in one of the mandatory fields.
 *
 * @type {number}
 */
RsPayException.ACH_R26 = 149;

/**
 * Trace number error.
 *
 * Original entry trace number is not valid for return entry; or addenda trace numbers do not correspond with entry
 * detail record.
 *
 * @type {number}
 */
RsPayException.ACH_R27 = 150;

/**
 * Transit routing number check digit error.
 *
 * Check digit for the transit routing number is incorrect.
 *
 * @type {number}
 */
RsPayException.ACH_R28 = 151;

/**
 * Corporate customer advises not authorized.
 *
 * RDFI has been notified by corporate receiver that debit entry of originator is not authorized.
 *
 * @type {number}
 */
RsPayException.ACH_R29 = 152;

/**
 * RDFI not participant in check truncation program.
 *
 * Financial institution not participating in automated check safekeeping application.
 *
 * @type {number}
 */
RsPayException.ACH_R30 = 153;

/**
 * Permissible return entry (CCD and CTX only).
 *
 * RDFI has been notified by the ODFI that it agrees to accept a CCD or CTX return entry.
 *
 * @type {number}
 */
RsPayException.ACH_R31 = 154;

/**
 * RDFI non-settlement.
 *
 * RDFI is not able to settle the entry.
 *
 * @type {number}
 */
RsPayException.ACH_R32 = 155;

/**
 * Return of XCK entry.
 *
 * RDFI determines at its sole discretion to return an XCK entry; an XCK return entry may be initiated by midnight of
 * the sixtieth day following the settlement date if the XCK entry.
 *
 * @type {number}
 */
RsPayException.ACH_R33 = 156;

/**
 * Limited participation RDFI.
 *
 * RDFI participation has been limited by a federal or state supervisor.
 *
 * @type {number}
 */
RsPayException.ACH_R34 = 157;

/**
 * Return of improper debit entry.
 *
 * ACH debit not permitted for use with the CIE standard entry class code (except for reversals).
 *
 * @type {number}
 */
RsPayException.ACH_R35 = 158;

/**
 * ACH: Return of Improper Credit Entry.
 *
 * @type {number}
 */
RsPayException.ACH_R36 = 218;

/**
 * ACH: Source Document Presented for Payment.
 *
 * @type {number}
 */
RsPayException.ACH_R37 = 219;

/**
 * ACH: Stop Payment on Source Document.
 *
 * @type {number}
 */
RsPayException.ACH_R38 = 220;

/**
 * ACH: Improper Source Document.
 *
 * @type {number}
 */
RsPayException.ACH_R39 = 221;

/**
 * ACH: Return of ENR Entry by Federal Government Agency.
 *
 * @type {number}
 */
RsPayException.ACH_R40 = 222;

/**
 * ACH: Invalid Transaction Code.
 *
 * @type {number}
 */
RsPayException.ACH_R41 = 223;

/**
 * ACH: Routing Number / Check Digit Error.
 *
 * @type {number}
 */
RsPayException.ACH_R42 = 224;

/**
 * ACH: Invalid DFI Account Number.
 *
 * @type {number}
 */
RsPayException.ACH_R43 = 225;

/**
 * ACH: Invalid Individual ID Number / Identification.
 *
 * @type {number}
 */
RsPayException.ACH_R44 = 226;

/**
 * ACH: Invalid Individual Name / Company Name.
 *
 * @type {number}
 */
RsPayException.ACH_R45 = 227;

/**
 * ACH: Invalid Representative Payee Indicator.
 *
 * @type {number}
 */
RsPayException.ACH_R46 = 228;

/**
 * ACH: Duplicate Enrollment.
 *
 * @type {number}
 */
RsPayException.ACH_R47 = 229;

/**
 * ACH: State Law Affecting RCK Acceptance.
 *
 * @type {number}
 */
RsPayException.ACH_R50 = 230;

/**
 * ACH: Item is Ineligible, Notice Not Provided, etc.
 *
 * @type {number}
 */
RsPayException.ACH_R51 = 231;

/**
 * ACH: Stop Payment on Item (Adjustment Entries).
 *
 * @type {number}
 */
RsPayException.ACH_R52 = 232;

/**
 * ACH: Item and ACH Entry Presented for Payment.
 *
 * @type {number}
 */
RsPayException.ACH_R53 = 233;

/**
 * ACH: Misrouted Return.
 *
 * @type {number}
 */
RsPayException.ACH_R61 = 234;

/**
 * ACH: Incorrect Trace Number.
 *
 * @type {number}
 */
RsPayException.ACH_R62 = 235;

/**
 * ACH: Incorrect Dollar Amount.
 *
 * @type {number}
 */
RsPayException.ACH_R63 = 236;

/**
 * ACH: Incorrect Individual Identification.
 *
 * @type {number}
 */
RsPayException.ACH_R64 = 237;

/**
 * ACH: Incorrect Transaction Code.
 *
 * @type {number}
 */
RsPayException.ACH_R65 = 238;

/**
 * ACH: Incorrect Company Identification.
 *
 * @type {number}
 */
RsPayException.ACH_R66 = 239;

/**
 * ACH: Duplicate Return.
 *
 * @type {number}
 */
RsPayException.ACH_R67 = 240;

/**
 * ACH: Untimely Return.
 *
 * @type {number}
 */
RsPayException.ACH_R68 = 241;

/**
 * ACH: Multiple Errors.
 *
 * @type {number}
 */
RsPayException.ACH_R69 = 242;

/**
 * ACH: Permissible Return Entry Not Accepted.
 *
 * @type {number}
 */
RsPayException.ACH_R70 = 243;

/**
 * ACH: Misrouted Dishonored Return.
 *
 * @type {number}
 */
RsPayException.ACH_R71 = 244;

/**
 * ACH: Untimely Dishonored Return.
 *
 * @type {number}
 */
RsPayException.ACH_R72 = 245;

/**
 * ACH: Timely Original Return.
 *
 * @type {number}
 */
RsPayException.ACH_R73 = 246;

/**
 * ACH: Corrected Return.
 *
 * @type {number}
 */
RsPayException.ACH_R74 = 247;

/**
 * ACH: Return Not a Duplicate.
 *
 * @type {number}
 */
RsPayException.ACH_R75 = 248;

/**
 * ACH: No Errors Found.
 *
 * @type {number}
 */
RsPayException.ACH_R76 = 249;

/**
 * ACH: IAT Entry Coding Error.
 *
 * @type {number}
 */
RsPayException.ACH_R80 = 250;

/**
 * ACH: Non-Participant in IAT Program.
 *
 * @type {number}
 */
RsPayException.ACH_R81 = 251;

/**
 * ACH: Invalid Foreign Receiving DFI Identification.
 *
 * @type {number}
 */
RsPayException.ACH_R82 = 252;

/**
 * ACH: Foreign Receiving DFI Unable to Settle.
 *
 * @type {number}
 */
RsPayException.ACH_R83 = 253;

/**
 * ACH: Entry Not Processed by Gateway.
 *
 * @type {number}
 */
RsPayException.ACH_R84 = 254;

/**
 * ACH: Incorrectly Coded Outbound International Payment.
 *
 * @type {number}
 */
RsPayException.ACH_R85 = 255;

/**
 * ACH payment method is not supported by processor.
 *
 * @type {number}
 */
RsPayException.ACH_SUPPORT = 105;

/**
 * ACH error: uncollected.
 *
 * @type {number}
 */
RsPayException.ACH_UNCOLLECTED = 123;

/**
 * Invalid payment address chosen.
 *
 * @type {number}
 */
RsPayException.ADDRESS_INVALID = 39;

/**
 * Chosen payment address does not exist.
 *
 * @type {number}
 */
RsPayException.ADDRESS_NX = 40;

/**
 * Disagreement with the Payment Agreement.
 *
 * @type {number}
 */
RsPayException.AGREEMENT_DISAGREE = 176;

/**
 * Amount was unexpectedly changed during the purchase process.
 * This means that `rs_pay_transaction` amount and pay processor transaction amount differs.
 *
 * @type {number}
 */
RsPayException.AMOUNT_CHANGE = 179;

/**
 * Sum of amounts for all individual payment sources does not equal the total expected amount.
 *
 * @type {number}
 */
RsPayException.AMOUNT_CONSOLIDATE = 35;

/**
 * Total package price can't be divided equally between package items without loosing cents.
 * The calculated amount of one of item in the package has more than two digits after the decimal point in result.
 *
 * @type {number}
 */
RsPayException.AMOUNT_CONSOLIDATE_PACKAGE = 191;

/**
 * Amount is invalid.
 *
 * @type {number}
 */
RsPayException.AMOUNT_INVALID = 34;

/**
 * Total price of cart greater than {@link \RsPayAmount::TOTAL_MAX}.
 *
 * @type {number}
 */
RsPayException.AMOUNT_TOTAL = 75;

/**
 * Amount equals zero.
 *
 * @type {number}
 */
RsPayException.AMOUNT_ZERO = 32;

/**
 * AVS verification failed. Postal code or address are invalid.
 *
 * @type {number}
 */
RsPayException.AVS = 14;

/**
 * Invalid bank account ID.
 *
 * @type {number}
 */
RsPayException.BANK_ACCOUNT_INVALID = 79;

/**
 * Bank account ID does not exist.
 *
 * @type {number}
 */
RsPayException.BANK_ACCOUNT_NX = 80;

/**
 * Bank state branch is empty.
 *
 * @type {number}
 */
RsPayException.BSB_EMPTY = 77;

/**
 * Bank state branch is invalid.
 *
 * @type {number}
 */
RsPayException.BSB_INVALID = 78;

/**
 * This business is a lost customer.
 *
 * @type {number}
 */
RsPayException.BUSINESS_CHURN = 173;

/**
 * Client must call issuer for further information.
 *
 * @type {number}
 */
RsPayException.CALL = 17;

/**
 * Element which should be paid with this payment has been canceled and payment should be blocked.
 *
 * @type {number}
 */
RsPayException.CANCELED = 177;

/**
 * Card data is valid, but you can not pay with it (e.g. hold placed on card).
 *
 * @type {number}
 */
RsPayException.CARD_DECLINE = 5;

/**
 * Invalid payment card chosen.
 *
 * @type {number}
 */
RsPayException.CARD_INVALID = 42;

/**
 * No such card issuer.
 *
 * @type {number}
 */
RsPayException.CARD_ISSUER_INVALID = 184;

/**
 * Card over limit.
 *
 * @type {number}
 */
RsPayException.CARD_LIMIT = 73;

/**
 * Payment card nickname is empty.
 *
 * @type {number}
 */
RsPayException.CARD_NAME_EMPTY = 46;

/**
 * Payment card nickname is too long.
 *
 * @type {number}
 */
RsPayException.CARD_NAME_LONG = 47;

/**
 * The customer’s bank has declined the transaction as the credit card number has failed a security check, or the
 * funds have been frozen or depleted. The customer should use an alternate credit card.
 *
 * @type {number}
 */
RsPayException.CARD_NOT_HONOR = 71;

/**
 * Insufficient funds available.
 *
 * @type {number}
 */
RsPayException.CARD_NSF = 72;

/**
 * Chosen payment card does not exist.
 *
 * @type {number}
 */
RsPayException.CARD_NX = 43;

/**
 * User has chosen payment card but he had no such rights.
 *
 * @type {number}
 */
RsPayException.CARD_SELECT = 44;

/**
 * Card unsupported.
 *
 * @type {number}
 */
RsPayException.CARD_UNSUPPORTED = 190;

/**
 * Comment for payment method too long.
 *
 * The maximum length of comment string is {@link \RsPayTransaction::COMMENT_LENGTH} characters.
 *
 * @type {number}
 */
RsPayException.COMMENT_LONG = 99;

/**
 * Can't connect to payment gateway.
 *
 * @type {number}
 */
RsPayException.CONNECT = 8;

/**
 * Unsupported country.
 *
 * @type {number}
 */
RsPayException.COUNTRY_UNSUPPORTED = 164;

/**
 * Gift card belongs to a foreign business.
 *
 * @type {number}
 */
RsPayException.COUPON_BUSINESS = 55;

/**
 * Invalid payment card chosen.
 *
 * @type {number}
 */
RsPayException.COUPON_CURRENCY = 54;

/**
 * Coupon is inactive.
 *
 * @type {number}
 */
RsPayException.COUPON_INACTIVE = 97;

/**
 * Coupon code is invalid (invalid length, or invalid characters encountered).
 *
 * @type {number}
 */
RsPayException.COUPON_INVALID = 51;

/**
 * Invalid payment card chosen.
 *
 * @type {number}
 */
RsPayException.COUPON_NX = 52;

/**
 * Coupon is redeemed already.
 *
 * @type {number}
 */
RsPayException.COUPON_REDEEM = 53;

/**
 * Card credentials (number, csc, month, year) change ability is disabled. E.g. payment processor may not support
 * money authorization, so we can not change card credentials.
 *
 * @type {number}
 */
RsPayException.CREDENTIAL_SUPPORT = 76;

/**
 * Invalid card security code (CSC).
 *
 * @type {number}
 */
RsPayException.CSC_EMPTY = 21;

/**
 * Invalid card security code (CSC).
 *
 * @type {number}
 */
RsPayException.CSC_INVALID = 2;

/**
 * Card is expired.
 *
 * @type {number}
 */
RsPayException.DATE_EXPIRE = 24;

/**
 * Card is inactive.
 *
 * @type {number}
 */
RsPayException.DATE_INACTIVE = 163;

/**
 * Invalid Expiration Date.
 *
 * @type {number}
 */
RsPayException.DATE_INVALID = 183;

/**
 * Month is invalid.
 *
 * @type {number}
 */
RsPayException.DATE_MONTH = 22;

/**
 * Multiple usage of this payment method is not allowed.
 *
 * @type {number}
 */
RsPayException.DATE_YEAR = 23;

/**
 * Duplicate transaction. Transaction data that is selected for comparison is payment gateway-specific.
 *
 * @type {number}
 */
RsPayException.DUPLICATE = 1;

/**
 * Error, caused by one of the following cases:
 * - fraud
 * - card is lost
 * - card is stolen
 *
 * @type {number}
 */
RsPayException.FRAUD = 168;

/**
 * Terminal that should be used for payment is not found.
 *
 * @type {number}
 */
RsPayException.HARDWARE_NOT_FOUND = 196;

/**
 * Informational field is not filled in.
 *
 * @type {number}
 */
RsPayException.INFO_EMPTY = 9;

/**
 * Informational field is too long.
 *
 * @type {number}
 */
RsPayException.INFO_LONG = 41;

/**
 * Minimum payment amount is less then {@link \Thoth\WlPay\Installment\InstallmentService::AMOUNT_FIRST}.
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_AMOUNT_MIN = 93;

/**
 * Installment plan: Number of payment is invalid.
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_COUNT_FORMAT = 85;

/**
 * Installment plan: Number of payment is too large.
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_COUNT_MAX = 87;

/**
 * Installment plan: Number of payment is too small (less then 2).
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_COUNT_MIN = 86;

/**
 * Installment date is not specified.
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_DATE_EMPTY = 81;

/**
 * Installment date format is invalid.
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_DATE_FORMAT = 82;

/**
 * Installment date is too deep in the future.
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_DATE_FUTURE = 84;

/**
 * Installment date is in the past (minimum is today).
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_DATE_PAST = 83;

/**
 * Installment plan: Duration of a period is not allowed.
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_DURATION_DISABLE = 91;

/**
 * Installment plan: Maximum total duration of installment plan is 100 years.
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_DURATION_MAX = 92;

/**
 * Installment plan: Duration of a period does not exist.
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_DURATION_NX = 90;

/**
 * Installment plan: Number of periods between two consecutive payments is invalid.
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_PERIOD_FORMAT = 88;

/**
 * Installment plan: Number of periods between two consecutive payments is too large.
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_PERIOD_MAX = 89;

/**
 * Template of installment plans: template is not selected.
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_TEMPLATE_EMPTY = 95;

/**
 * Template of installment plans: ID of the template does not exist.
 *
 * @type {number}
 */
RsPayException.INSTALLMENT_TEMPLATE_NX = 94;

/**
 * Internal errors that occurred in the browser (for example, some form data arrived to servers such that user should
 * not be able to enter it in the form).
 *
 * Differs from INTERNAL_SERVER in that errors of this type are not logged into error.log.
 *
 * @type {number}
 */
RsPayException.INTERNAL_BROWSER = 33;

/**
 * Security throttling error.
 *
 * It is shown as `internal-hit` to the user to make it harder to guess what does this error mean.
 *
 * @type {number}
 */
RsPayException.INTERNAL_HIT = 192;

/**
 * Internal merchant error.
 *
 * @type {number}
 */
RsPayException.INTERNAL_MERCHANT = 186;

/**
 * Some strange service error (e.g. invalid merchant data passed, data format).
 *
 * @type {number}
 */
RsPayException.INTERNAL_SERVER = 6;

/**
 * Payer email is required for payment, but empty.
 *
 * @type {number}
 */
RsPayException.MAIL_EMPTY = 175;

/**
 * The associated merchant account has been closed.
 *
 * @type {number}
 */
RsPayException.MERCHANT_ACCOUNT_CLOSED = 189;

/**
 * Invalid merchant data.
 *
 * @type {number}
 */
RsPayException.MERCHANT_INVALID = 7;

/**
 * Transaction was rejected by gateway.
 *
 * @type {number}
 */
RsPayException.MERCHANT_REJECT = 74;

/**
 * Merchant has invalid settings and does not return customer vault.
 *
 * One of the possible reasons - merchant with a name 'demo' should not be used.
 *
 * @type {number}
 */
RsPayException.MERCHANT_SETTINGS_VAULT = 166;

/**
 * User has no access to the specified payment method.
 * (You have no privileges to use this payment method.)
 *
 * @type {number}
 */
RsPayException.METHOD_ACCESS = 18;

/**
 * This method does not support authorization request.
 *
 * @type {number}
 */
RsPayException.METHOD_AUTHORIZE = 96;

/**
 * This payment method can not be used with this business.
 *
 * @type {number}
 */
RsPayException.METHOD_BUSINESS = 19;

/**
 * Multiple usage of this payment method is not allowed.
 *
 * @type {number}
 */
RsPayException.METHOD_MULTIPLE = 20;

/**
 * Cardholder name is not typed in.
 *
 * @type {number}
 */
RsPayException.NAME_EMPTY = 25;

/**
 * Customer name is invalid (contains invalid characters).
 *
 * @type {number}
 */
RsPayException.NAME_INVALID = 106;

/**
 * Cardholder name is too long.
 *
 * @type {number}
 */
RsPayException.NAME_LONG = 26;

/**
 * Validation Rejection.
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_900 = 159;

/**
 * Not sufficient funds (debits only).
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_901 = 110;

/**
 * Payment stopped/recalled.
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_903 = 111;

/**
 * Post dated/stale dated.
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_904 = 112;

/**
 * Account closed.
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_905 = 113;

/**
 * Account transferred.
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_906 = 114;

/**
 * No chequing privileges.
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_907 = 115;

/**
 * Funds not cleared.
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_908 = 116;

/**
 * Payor/payee deceased.
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_910 = 117;

/**
 * Account frozen.
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_911 = 118;

/**
 * Invalid/incorrect account number.
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_912 = 119;

/**
 * Incorrect payor/payee name.
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_914 = 120;

/**
 * Refused by payor/payee.
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_915 = 121;

/**
 * No Return Agreement.
 *
 * This error code is specific for a case when Pay Safe is used within NMI.
 *
 * @type {number}
 */
RsPayException.NMI_PAYSAFE_998 = 122;

/**
 * Card number is not typed in.
 *
 * @type {number}
 */
RsPayException.NUMBER_EMPTY = 27;

/**
 * Card number is invalid.
 *
 * @type {number}
 */
RsPayException.NUMBER_INVALID = 30;

/**
 * Card number is too long.
 *
 * @type {number}
 */
RsPayException.NUMBER_LONG = 28;

/**
 * Card number is too long.
 *
 * @type {number}
 */
RsPayException.NUMBER_SHORT = 29;

/**
 * Some parameters client has provided are invalid.
 *
 * @type {number}
 */
RsPayException.PARAMETER = 4;

/**
 * Payment form is in passive mode.
 *
 * No payments can be performed in passive mode.
 *
 * @type {number}
 */
RsPayException.PASSIVE = 165;

/**
 * Error during authentication of the payer.
 *
 * Payer authentication is performed, for example, as a part of 3D Secure protocol.
 * This error may mean, for example, that SMS code that user has entered is invalid.
 *
 * @type {number}
 */
RsPayException.PAYER_AUTHENTICATION = 167;

/**
 * There is other process currently running to update payment. Failed to wait until it ends.
 *
 * @type {number}
 */
RsPayException.PAYMENT_UPDATE_LOCK = 174;

/**
 * Phone number is not specified on user account.
 *
 * Phone number may be required (for example, Direct Connect requires it for ACH transactions).
 *
 * @type {number}
 */
RsPayException.PHONE_EMPTY = 107;

/**
 * Phone number is invalid.
 *
 * @type {number}
 */
RsPayException.PHONE_INVALID = 178;

/**
 * Phone number is too long.
 *
 * @type {number}
 */
RsPayException.PHONE_LONG = 108;

/**
 * Transaction error returned by processor.
 *
 * May be caused by problems like:
 * unsuccessful authorization
 * unsuccessful payment
 * card requires PIN to be entered
 *
 * @type {number}
 */
RsPayException.PROCESSOR_ERROR = 98;

/**
 * Internal error at processor side has occurred.
 *
 * Example: "Host Communication Error" at Direct Connect.
 *
 * @type {number}
 */
RsPayException.PROCESSOR_INTERNAL = 109;

/**
 * Refund operation is applied too early.
 *
 * Some merchant processors may require some time to pass after transaction to refund it.
 *
 * @type {number}
 */
RsPayException.REFUND_EARLY = 50;

/**
 * Amount about to refund is larger then the current rest of the transaction.
 *
 * Current rest is either `rs_pay_transaction.f_amount` for transactions that was not refunded before,
 * or `rs_pay_transaction_refund.f_amount` for partially refunded transactions.
 *
 * @type {number}
 */
RsPayException.REFUND_REST = 49;

/**
 * Transaction can not be refunded because it is in an invalid status.
 *
 * Status of the transaction is stored in `rs_pay_transaction.id_pay_transaction_status`.
 *
 * Statuses where refund is allowed are defined by {@link RsPayTransactionStatusSid.refund()}.
 *
 * @type {number}
 */
RsPayException.REFUND_STATUS = 48;

/**
 * Invalid region chosen.
 *
 * @type {number}
 */
RsPayException.REGION_INVALID = 37;

/**
 * Chosen region does not exist.
 *
 * @type {number}
 */
RsPayException.REGION_NX = 38;

/**
 * Can not repeat purchase transaction. Reference data is expired and invalid now.
 *
 * @type {number}
 */
RsPayException.REPEAT_INVALID = 15;

/**
 * Error during request to service. In case we have not even got response.
 *
 * @type {number}
 */
RsPayException.REQUEST = 12;

/**
 * Too many requests.
 *
 * @type {number}
 */
RsPayException.REQUEST_THROTTLE = 172;

/**
 * Temporary service error. Repeat request.
 *
 * @type {number}
 */
RsPayException.RETRY = 3;

/**
 * Payment is blocked due security reasons (because payment amount is too large).
 *
 * @type {number}
 */
RsPayException.SECURITY_LARGE = 103;

/**
 * Only for test, when there is an error in the test that we cannot influence, for example: “server is not available”.
 *
 * @type {number}
 */
RsPayException.SKIP_IN_TESTS = 188;

/**
 * Stripe data is empty.
 *
 * @type {number}
 */
RsPayException.STRIPE_EMPTY = 31;

/**
 * Invalid data on magnetic stripe. Maybe some part does not exist.
 *
 * @type {number}
 */
RsPayException.STRIPE_INVALID = 16;

/**
 * Incorrect payment card type specified.
 *
 * @type {number}
 */
RsPayException.TENDER_TYPE_INVALID = 195;

/**
 * This recurrent payment token belongs to a different account of this merchant.
 *
 * Two cases may cause this problem:
 *
 * 1. Payment tokens were imported from a different Direct Connect account. This is not allowed. Payment tokens can
 * only be used within that account within which they were created.
 *
 * 2. User was added successfully. After that you have changed login and password to a different Direct Connect
 * account.
 *
 * For Paychoyce in the context of processing a transaction invalid card token can mean any of the following:
 *
 * 1. The token GUID supplied in the request is not a GUID (Very unlikely).
 *
 * 2. The token presented on the charge request does not exist in Paychoice V4 (This is the most likely case: the token wasn't migrated from V3).
 *
 * 3. The token presented on the charge request has been marked as Inactive/Expired (This is part of PCI compliance process to expire tokens that have not been used in 12 months - possible but not very likely).
 *
 * @type {number}
 */
RsPayException.TOKEN_ACCOUNT = 161;

/**
 * Payment token belongs to a different merchant processor.
 *
 * For example. Recurrent payment token was created by NMI.
 *
 * After that they have changed business merchant to use Direct Connect.
 *
 * Without this check, recurrent payment token in NMI format will be passed to a class that expects that  it was
 * created in Direct Connect format.
 *
 * This will lead to that:
 *
 * 1. There will be PHP notices about undefined index, because DC class will try to access fields that are not
 *     set by NMI.
 * 2. NULL will be sent as vault ID, this will lead to a failed transaction.
 *
 * @type {number}
 */
RsPayException.TOKEN_PROCESSOR = 162;

/**
 * Transaction does not exist. E.g. we want to make refund using nonexistent reference number.
 *
 * @type {number}
 */
RsPayException.TRANSACTION_NX = 13;

/**
 * Transaction is in unexpected status. For example, authorization process started but takes long time. While waiting
 * staff decided to cancel transaction. Void is done, transaction is in {@link RsPayTransactionStatusSid.VOID}
 * status. In the same time authorization process finishes, code expects transaction to be in
 * {@link RsPayTransactionStatusSid.AUTHORIZE_ACTIVE} status, but it is not. This can happen when transaction
 * is processed in several processes. For example, card swipe is initiated, but staff presses Cancel Transaction
 * button.
 *
 * @type {number}
 */
RsPayException.UNEXPECTED_TRANSACTION_STATUS = 187;

/**
 * If the user who pays through the account is a debtor.
 *
 * @type {number}
 */
RsPayException.USER_DEBTOR = 194;

/**
 * If access denied to an anonymous user.
 *
 * @type {number}
 */
RsPayException.USER_GUEST = 56;

/**
 * Error specific for payment processors that stores payer entity.
 * Means that payer entity with specified ID does not exist.
 *
 * @type {number}
 */
RsPayException.USER_NOT_FOUND = 197;

/**
 * Some unpredicted error happened during void on processor side.
 *
 * @type {number}
 */
RsPayException.VOID_ERROR = 193;

/**
 * Operation Void is not possible, it's too late to do it.
 *
 * @type {number}
 */
RsPayException.VOID_LATE = 180;

/**
 * Void operation can be done only for a total transaction amount and cannot be partial.
 *
 * @type {number}
 */
RsPayException.VOID_PARTIAL = 100;

/**
 * Void operation is restricted by rules of the system.
 *
 * @type {number}
 */
RsPayException.VOID_RESTRICT = 102;

/**
 * Void operation is not supported by the merchant processor.
 *
 * @type {number}
 */
RsPayException.VOID_SUPPORT = 101;

/**
 * Timeout waiting for settlement.
 *
 * @type {number}
 */
RsPayException.WAIT_TIMEOUT = 104;
