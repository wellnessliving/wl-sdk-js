/**
 * Different types of conversion behavior: when and how it should be converted.
 */
function Wl_Login_Promotion_Convert_ConvertWhenSid()
{
  // Empty constructor.
}

/**
 * Purchase Option converts one day after the scheduled expiration date and the client is charged for the new purchase option.
 *
 * @type {number}
 */
Wl_Login_Promotion_Convert_ConvertWhenSid.EXPIRATION_PAID = 1;

/**
 * Purchase Option converts now and the client is not charged for the new Purchase Option.
 *
 * @type {number}
 */
Wl_Login_Promotion_Convert_ConvertWhenSid.NOW_FREE = 2;

/**
 * Purchase Option converts now and the client is changed for the new Purchase Option.
 *
 * @type {number}
 */
Wl_Login_Promotion_Convert_ConvertWhenSid.NOW_PAID = 3;

/**
 * Purchase Option converts on the specified date and the client is charged for the new Purchase Option.
 *
 * @type {number}
 */
Wl_Login_Promotion_Convert_ConvertWhenSid.SCHEDULE_PAID = 4;
