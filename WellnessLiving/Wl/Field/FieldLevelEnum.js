/**
 * Level at which a client profile field is asked at a given collection entry point.
 */
class Wl_Field_FieldLevelEnum
{
    /**
     * The field is not asked at this entry point.
     *
     * @type {number}
     */
    static DONT_ASK = 1;

    /**
     * The field is asked, but a value is not required.
     *
     * @type {number}
     */
    static OPTIONAL = 2;

    /**
     * The field is asked, and a value is required.
     *
     * @type {number}
     */
    static REQUIRED = 3;
}