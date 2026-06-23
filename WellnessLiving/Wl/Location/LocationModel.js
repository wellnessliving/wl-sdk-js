/**
 * Creates new location or edits the existing location.
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
  this.k_business = "";

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
  return {"a_field":{"k_business":{"post":{"post":true}},"k_city":{"post":{"post":true}},"k_location":{"post":{"post":true,"result":true}},"k_timezone":{"post":{"post":true}},"text_address":{"post":{"post":true}},"text_email":{"post":{"post":true}},"text_phone":{"post":{"post":true}},"text_postal":{"post":{"post":true}},"text_title":{"post":{"post":true}}}};
};

/**
 * Creates new location or edits the existing location.
 *
 * When `k_location` is omitted, creates a new location requiring `k_city`,
 * `text_address`, and `text_title`.
 * When `k_location` is provided, updates only the supplied fields of the existing location.
 * Returns the key of the created or updated location.
 *
 * @function
 * @name Wl_Location_LocationModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
