/**
 * Retrieves a list of user's notification settings.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Setting_SettingModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * Whether email notifications related to purchases, contracts, and other activity in a client's account are enabled.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_account_management_email = true;

  /**
   * Whether sms notifications related to purchases, contracts, and other activity in a client's account are enabled.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_account_management_sms = true;

  /**
   * Whether email notifications related to news and updates from the business regarding their services, availability and promotions are enabled.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_news_and_updates_email = true;

  /**
   * Whether sms notifications related to news and updates from the business regarding their services, availability and promotions are enabled.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_news_and_updates_sms = true;

  /**
   * Whether email notifications related to the services a client has booked are enabled.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_schedule_and_reminders_email = true;

  /**
   * Whether sms notifications related to the services a client has booked are enabled.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_schedule_and_reminders_sms = true;

  /**
   * ID of current business.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * ID of a user to show information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Setting_SettingModel);

/**
 * @inheritDoc
 */
Wl_Profile_Setting_SettingModel.prototype.config=function()
{
  return {"a_field": {"is_account_management_email": {"get": {"result": true},"post": {"post": true}},"is_account_management_sms": {"get": {"result": true},"post": {"post": true}},"is_news_and_updates_email": {"get": {"result": true},"post": {"post": true}},"is_news_and_updates_sms": {"get": {"result": true},"post": {"post": true}},"is_schedule_and_reminders_email": {"get": {"result": true},"post": {"post": true}},"is_schedule_and_reminders_sms": {"get": {"result": true},"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Setting_SettingModel.instanceGet
 * @param {string} uid ID of a user to show information for.
 * @param {string} k_business ID of current business.
 * @returns {Wl_Profile_Setting_SettingModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */