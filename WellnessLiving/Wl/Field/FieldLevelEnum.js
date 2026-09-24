/**
 * Level at which a client profile field is asked at a given collection entry point.
 *
 * Last used ID: 3.
 */
function Wl_Field_FieldLevelEnum()
{
  // Empty constructor.
}

/**
 * The field is not asked at this entry point.
 *
 * @type {number}
 */
Wl_Field_FieldLevelEnum.DONT_ASK = 1;

/**
 * The field is asked, but a value is not required.
 *
 * @type {number}
 */
Wl_Field_FieldLevelEnum.OPTIONAL = 2;

/**
 * The field is asked, and a value is required.
 *
 * @type {number}
 */
Wl_Field_FieldLevelEnum.REQUIRED = 3;
