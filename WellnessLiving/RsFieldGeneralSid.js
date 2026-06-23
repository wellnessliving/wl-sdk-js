/**
 * List of general fields in user's profile.
 *
 * The term "field" is not equal to "input". A field can contain multiple inputs, e.g. the "birthday" field contains 3
 * selects (day, month, year). All fields listed in this sid (except manual fields) have class that process them.
 *
 * Manual fields have only constant in this sid. They have no associated class and processed separately in view, e.g.
 * user email/password field that has its own widget.
 *
 *
 *
 * Last used ID: 16.
 */
function RsFieldGeneralSid()
{
  // Empty constructor.
}

/**
 * Set of fields to choose address.
 *
 * @type {number}
 */
RsFieldGeneralSid.ADDRESS = 9;

/**
 * Set of fields to choose birthday date.
 *
 * @type {number}
 */
RsFieldGeneralSid.BIRTHDAY = 7;

/**
 * Gender field.
 *
 * @type {number}
 */
RsFieldGeneralSid.GENDER = 8;

/**
 * Image.
 *
 * @type {number}
 */
RsFieldGeneralSid.IMAGE = 13;

/**
 * Home location.
 *
 * @type {number}
 */
RsFieldGeneralSid.LOCATION = 10;

/**
 * Block with login information (email and password).
 *
 * @type {number}
 */
RsFieldGeneralSid.LOGIN = 3;

/**
 * Member ID.
 *
 * @type {number}
 */
RsFieldGeneralSid.MEMBER = 11;

/**
 * First name.
 *
 * @type {number}
 */
RsFieldGeneralSid.NAME_FIRST = 2;

/**
 * Last name.
 *
 * @type {number}
 */
RsFieldGeneralSid.NAME_LAST = 1;

/**
 * Cell phone number.
 *
 * @type {number}
 */
RsFieldGeneralSid.PHONE_CELL = 4;

/**
 * Home phone number.
 *
 * @type {number}
 */
RsFieldGeneralSid.PHONE_HOME = 5;

/**
 * Work phone number + ext.
 *
 * @type {number}
 */
RsFieldGeneralSid.PHONE_WORK = 6;

/**
 * Referred by.
 *
 * @type {number}
 */
RsFieldGeneralSid.REFERRER = 12;

/**
 * Client status (client/member types). System default client/member types see {@link Wl_Login_Type_SystemSid}.
 *
 * @type {number}
 */
RsFieldGeneralSid.STATUS = 14;

/**
 * Timezone field.
 *
 * @type {number}
 */
RsFieldGeneralSid.TIMEZONE = 15;

/**
 * Vaccination status. See {@link Wl_Login_Member_VaccinationStatus_VaccinationStatusSid}.
 *
 * @type {number}
 */
RsFieldGeneralSid.VACCINATION_STATUS = 16;
