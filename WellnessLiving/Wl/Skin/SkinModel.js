/**
 * Gets skin data.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Skin_SkinModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_skin";

  /**
   * Skin fields to save.
   * Key is full name of the skin field, it is separated string containing field name and element name.
   *
   * Value is new field value.
   *
   * @post post
   * @type {*[]}
   */
  this.a_field = undefined;

  /**
   * Skin data.
   *
   * @get result
   * @type {*[]}
   */
  this.a_skin = undefined;

  /**
   * A list of skin types.
   *
   *
   *
   * Last used ID: 21.
   *
   * Values:
   * - 19 (`AI_AGENT`): Ai Agent web-chat.
   * - 13 (`APPLICATION`): Application skin.
   * - 7 (`APPOINTMENT`): Appointment booking wizard.
   * - 21 (`CATALOG_FOREIGN`): Online store widget.
   * - 8 (`ENROLLMENT`): Event enrollment wizard widget.
   * - 17 (`FITBUILDER`): Fitbuilder widget.
   * - 9 (`LEAD`): Skin for lead tracking form.
   * - 20 (`LEAD_FOREIGN`): Skin for lead tracking form from microservice.
   * - 10 (`MOBILE_SCHEDULE`): Mobile schedule version.
   * - 16 (`RESOURCE`): Asset booking wizard.
   * - 4 (`REVIEW_LIST`): Review list widget.
   * - 15 (`SCHEDULE_DESIGN`): General schedule design appearance.
   * - 18 (`SCHEDULE_FOREIGN`): Foreign schedule widget on react language.
   * - 1 (`SCHEDULE_LIST`): Schedule list widget.
   * - 14 (`SCHEDULE_STANDARD`): Standard version of schedule.
   *
   *   This skin is the same as {@link RsSkinSid} except that design can not be changed, only standard
   *   settings can be used.
   * - 12 (`STAFF`): Staff widget.
   * - 11 (`STORE`): Online store widget.
   *
   * @get result
   * @type {number}
   */
  this.id_skin = undefined;

  /**
   * Skin key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_skin = "";

  /**
   * URL to the main page of the widget.
   *
   * @get result
   * @type {string}
   */
  this.url_skin = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Skin_SkinModel);

/**
 * @inheritDoc
 */
Wl_Skin_SkinModel.prototype.config=function()
{
  return {"a_field":{"a_field":{"post":{"post":true}},"a_skin":{"get":{"result":true}},"id_skin":{"get":{"result":true}},"k_skin":{"get":{"get":true},"post":{"get":true}},"url_skin":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Skin_SkinModel.instanceGet
 * @param {string} k_skin Skin key.
 * @returns {Wl_Skin_SkinModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets skin data.
 *
 * Returns the skin settings and the main widget page URL for the given skin key.
 *
 * @function
 * @name Wl_Skin_SkinModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves the specified skin fields.
 *
 * Applies the given field values to the skin data and logs the change when any field value has
 * actually changed.
 *
 * @function
 * @name Wl_Skin_SkinModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
