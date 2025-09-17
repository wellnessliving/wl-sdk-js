/**
 * Creates user profile with minimum fields.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_ProfileCreateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Date of the user's birthday in MySQL format.
   *
   * @post post
   * @type {string}
   */
  this.dt_birthday = "";

  /**
   * Gender ID.
   * One of the {@link Wl_Gender_GenderSid} constants.
   *
   * `0` if not specified.
   *
   * @post post
   * @type {number}
   */
  this.id_gender = 0;

  /**
   * Lead source ID.
   *
   * One of the {@link Wl_Mode_ModeSid} constants.
   * `0` if not specified.
   *
   * @post post
   * @type {number}
   */
  this.id_lead_source = 0;

  /**
   * Vaccination status ID.
   *
   * One of the {@link Wl_Login_Member_VaccinationStatus_VaccinationStatusSid} constants.
   *
   * `0` if not specified.
   *
   * @post post
   * @type {number}
   */
  this.id_vaccination_status = 0;

  /**
   * The key of the business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the lead source.
   *
   * Empty string if not specified.
   *
   * @post post
   * @type {string}
   */
  this.k_lead_source = "";

  /**
   * The key of the home location.
   *
   * @post post
   * @type {string}
   */
  this.k_location_home = "";

  /**
   * The address of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_address = "";

  /**
   * First name of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_firstname = "";

  /**
   * Last name of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_lastname = "";

  /**
   * Email of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_mail = "";

  /**
   * Phone of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_phone = "";

  /**
   * Home phone of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_phone_home = "";

  /**
   * Work phone of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_phone_work = "";

  /**
   * The key of the user.
   *
   * @post result
   * @type {string}
   */
  this.uid = "";

  /**
   * Referrer user key.
   *
   * Empty string if not specified.
   *
   * @post post
   * @type {string}
   */
  this.uid_referrer = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_ProfileCreateModel);

/**
 * @inheritDoc
 */
Wl_Profile_ProfileCreateModel.prototype.config=function()
{
  return {"a_field": {"dt_birthday": {"post": {"post": true}},"id_gender": {"post": {"post": true}},"id_lead_source": {"post": {"post": true}},"id_vaccination_status": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_lead_source": {"post": {"post": true}},"k_location_home": {"post": {"post": true}},"text_address": {"post": {"post": true}},"text_firstname": {"post": {"post": true}},"text_lastname": {"post": {"post": true}},"text_mail": {"post": {"post": true}},"text_phone": {"post": {"post": true}},"text_phone_home": {"post": {"post": true}},"text_phone_work": {"post": {"post": true}},"uid": {"post": {"result": true}},"uid_referrer": {"post": {"post": true}}}};
};