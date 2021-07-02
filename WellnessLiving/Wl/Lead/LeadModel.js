/**
 * Entry point to "Lead capture" widget.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Lead_LeadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of user's fields to save.
   * Keys - primary keys in {@link \RsFieldSql} table, values - field values.
   *
   * @post post
   * @type {{}}
   */
  this.a_field_data = [];

  /**
   * List of profile fields in business. See {@link \RsSkinDataLead::_fieldDataLoad()} for details.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_field_list = undefined;

  /**
   * Skin data. See {@link \RsSkinData::skin()} for details.
   *
   * @get result
   * @type {{}}
   */
  this.a_skin = undefined;

  /**
   * Business key.
   * Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Skin key.
   * Empty to use system default skin.
   * Primary key in {@link \RsSkinSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_skin = "0";

  /**
   * Text for captcha test.
   *
   * @post post
   * @type {string}
   */
  this.s_captcha = "";

  /**
   * Captured user. Primary key in {@link \PassportLoginSql} table.
   *
   * @post result
   * @type {string}
   */
  this.uid = undefined;

  /**
   * URL to captcha image if it is necessary to enter captcha. Empty string otherwise.
   *
   * @get result
   * @type {string}
   */
  this.url_captcha = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Lead_LeadModel);

/**
 * @inheritDoc
 */
Wl_Lead_LeadModel.prototype.config=function()
{
  return {"a_field": {"a_field_data": {"post": {"post": true}},"a_field_list": {"get": {"result": true}},"a_skin": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_skin": {"get": {"get": true},"post": {"get": true}},"s_captcha": {"post": {"post": true}},"uid": {"post": {"result": true}},"url_captcha": {"get": {"result": true}}}};
};