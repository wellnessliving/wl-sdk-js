/**
 * An endpoint that creates a new location in the business or edits a specified location.
 * Access to this endpoint is logged with specified permissions. It can also be accessed by guests during the
 * registration process for new businesses (see {@link Wl_Business_BusinessModel.sessionKey()}).
 *
 * Field <tt>k_business</tt> is required.
 * Other fields are optionally if the location should be edited. This means if a field is not specified it is not be changed.
 * If <tt>k_location</tt> is not specified that new location will be created. In this case <tt>k_city</tt>,
 * <tt>text_address</tt> and <tt>text_title</tt> are required.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_LocationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The key of the business.
   * This field is required.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The key of the city.
   * This field is required for creating a new location.
   *
   * @post post
   * @type {?string}
   */
  this.k_city = null;

  /**
   * The key of the location.
   * This will be `null` if it's being used to create a new location.
   *
   * @post post,result
   * @type {?string}
   */
  this.k_location = null;

  /**
   * The key of the time zone.
   * This field is optional.
   *
   * @post post
   * @type {?string}
   */
  this.k_timezone = null;

  /**
   * The address of the location.
   * This field is required for creating a new location.
   *
   * @post post
   * @type {?string}
   */
  this.text_address = null;

  /**
   * The mail address.
   *
   * @post post
   * @type {?string}
   */
  this.text_email = null;

  /**
   * The phone number.
   *
   * @post post
   * @type {?string}
   */
  this.text_phone = null;

  /**
   * The postal code.
   *
   * @post post
   * @type {?string}
   */
  this.text_postal = null;

  /**
   * The title of the location.
   * This field is required for creating a new location.
   *
   * @post post
   * @type {?string}
   */
  this.text_title = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_LocationModel);

/**
 * @inheritDoc
 */
Wl_Location_LocationModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"post": true}},"k_city": {"post": {"post": true}},"k_location": {"post": {"post": true,"result": true}},"k_timezone": {"post": {"post": true}},"text_address": {"post": {"post": true}},"text_email": {"post": {"post": true}},"text_phone": {"post": {"post": true}},"text_postal": {"post": {"post": true}},"text_title": {"post": {"post": true}}}};
};