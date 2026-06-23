/**
 * Returns field data.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Progress_Field_Edit_FieldModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of field measurement. See {@link Wl_Member_Progress_Field_MeasurementSid}.
   *
   * @get result
   * @type {number[]}
   */
  this.a_measurement = undefined;

  /**
   * A list of field type. See {@link Wl_Member_Progress_Field_TypeSid}.
   *
   * @get result
   * @type {number[]}
   */
  this.a_type = undefined;

  /**
   * List of progress log fields.
   *
   * Last used ID: 14.
   *
   * Values:
   * - 6 (`ABDOMEN`): Abdomen field.
   * - 3 (`ARMS`): Arms field.
   * - 2 (`BLOOD_PRESSURE`): Blood pressure field.
   * - 11 (`BODY_FAT`): Body fat field.
   * - 4 (`BUST`): Bust field.
   * - 9 (`HEIGHT`): Height of the client.
   * - 7 (`HIPS`): Client hips size.
   * - 14 (`LONG_TERM_GOALS`): Long term goals.
   * - 1 (`PRE_WORKOUT_HEART_RATE`): Pre workout heart rate.
   * - 12 (`PROGRESS_PICTURE`): Progress picture.
   * - 13 (`SHORT_TERM_GOALS`): Short term goals.
   * - 8 (`THIGHS`): THIGHS
   * - 5 (`WAIST`): Waist
   * - 10 (`WEIGHT`): Client weight.
   *
   * @get result
   * @type {number}
   */
  this.id_field = undefined;

  /**
   * Possible measurement units of the progress fields values.
   *
   * Values:
   * - 7 (`BEATS_PER_MINUTE`): Value in beats per minutes.
   * - 1 (`CENTIMETRES`): Value in centimeters.
   * - 3 (`FEET`): Value in feet.
   * - 11 (`FEET_AND_INCHES`): Value in feet and inches.
   * - 9 (`GRAMS`): Value in grams.
   * - 4 (`INCHES`): Value in inches.
   * - 5 (`KILOGRAMS`): Value in kilograms.
   * - 2 (`METRES`): Value in metres.
   * - 12 (`METRES_AND_CENTIMETRES`): Value in metres and centimetres.
   * - 8 (`MMHG`): Value in mmHG.
   * - 10 (`PERCENTAGES`): Value in percentages.
   * - 6 (`POUNDS`): Value in pounds.
   *
   * @get result
   * @post post
   * @see Wl_Member_Progress_Field_MeasurementSid
   * @type {number}
   */
  this.id_measurement_unit = 0;

  /**
   * Possible types of the progress fields values.
   *
   * Lase used id: 5.
   *
   * Values:
   * - 2 (`DECIMAL`): Value is decimal.
   * - 5 (`IMAGE`): Value is image.
   * - 3 (`PERCENTAGE`): Value is percentage.
   * - 4 (`STRING`): Value is string.
   * - 1 (`WHOLE_NUMBER`): Value is whole number.
   *
   * @get result
   * @post post
   * @see Wl_Member_Progress_Field_TypeSid
   * @type {number}
   */
  this.id_type = 0;

  /**
   * Whether field is active and should be displayed on page.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_active = false;

  /**
   * Whether this field is public. If this field is set to `false`, this field is not visible to clients.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_public = false;

  /**
   * Whether field value is required for clients.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_require = false;

  /**
   * Whether field value is required for staffs.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_require_staff = false;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Field key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_field = "";

  /**
   * Field title.
   * Only titles of the custom progress fields can be changed.
   *
   * `null` If default title should be used.
   *
   * @get result
   * @post post,result
   * @type {?string}
   */
  this.text_title = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Progress_Field_Edit_FieldModel);

/**
 * @inheritDoc
 */
Wl_Member_Progress_Field_Edit_FieldModel.prototype.config=function()
{
  return {"a_field":{"a_measurement":{"get":{"result":true}},"a_type":{"get":{"result":true}},"id_field":{"get":{"result":true}},"id_measurement_unit":{"get":{"result":true},"post":{"post":true}},"id_type":{"get":{"result":true},"post":{"post":true}},"is_active":{"get":{"result":true},"post":{"post":true}},"is_public":{"get":{"result":true},"post":{"post":true}},"is_require":{"get":{"result":true},"post":{"post":true}},"is_require_staff":{"get":{"result":true},"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_field":{"get":{"get":true},"post":{"get":true}},"text_title":{"get":{"result":true},"post":{"post":true,"result":true}}}};
};

/**
 * Returns field data.
 *
 * Loads the configuration of the specified progress field for the given business, including its type,
 * measurement unit, visibility settings, and title, and populates the result properties accordingly.
 *
 * @function
 * @name Wl_Member_Progress_Field_Edit_FieldModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves field data.
 *
 * Updates the configuration of the specified progress field, validating measurement unit, type, and title
 * constraints before persisting the changes. Logs the change when the field data is modified.
 *
 * @function
 * @name Wl_Member_Progress_Field_Edit_FieldModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
