/**
 * Gets information about businesses where given user is a staff member.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_BusinessAccessModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The businesses the staff member belongs to.
   * Note that this field is here for backwards compatibility.
   *
   * @get result
   * @type {string[]}
   */
  this.a_business = undefined;

  /**
   * @typedef {{}} Wl_Business_BusinessAccessModel_a_business_data
   * @property {number} id_region List of available data center regions.
   * @property {string} k_business The business key.
   * @property {string} text_office_address The business address.
   * @property {string} text_title The business title.
   * @property {string} url_logo The business logo URL. This will be empty if the business hasn't added a logo.
   */

  /**
   * The list of accessible businesses with their corresponding data. Each value is an array with the next structure:
   *
   * @get result
   * @type {Wl_Business_BusinessAccessModel_a_business_data[]}
   */
  this.a_business_data = undefined;

  /**
   * This will be `true` if the API is being used from the backend. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * The staff member's Facebook ID. This won't be empty if the staff member is logging in with Facebook.
   * This will be empty if the UID is already known or the staff member is logging in another way.
   *
   * @get get
   * @type {string}
   */
  this.s_facebook_id = "";

  /**
   * The staff member's Microsoft key.
   * This won't be empty if the staff member is logging in with Microsoft.
   *
   * @get get
   * @type {string}
   */
  this.s_microsoft_id = "";

  /**
   * The staff member's Apple authorization code. This won't be empty if the staff member is logging in with Apple.
   * This will be empty if the UID is already known or the staff member is logging in another way.
   *
   * @get get
   * @type {string}
   */
  this.text_authorization_apple = "";

  /**
   * The Google Plus user ID. This won't be empty if the staff member is logging in with Google.
   * This will be empty if the UID is already known or the staff member is logging in another way.
   *
   * @get get
   * @type {string}
   */
  this.text_google_plus = "";

  /**
   * The staff member's email to determine their UID. This won't be empty if the staff member is logging in with email or with Google.
   * This will be empty if the UID is already known or the staff member is logging in another way.
   *
   * @get get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * User key. Empty if user is not logged in, but their authorization data is known.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  /**
   * The staff member key, determined by their email. This will be empty if the UID isn't empty.
   *
   * @get result
   * @type {string}
   */
  this.uid_mail = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_BusinessAccessModel);

/**
 * @inheritDoc
 */
Wl_Business_BusinessAccessModel.prototype.config=function()
{
  return {"a_field":{"a_business":{"get":{"result":true}},"a_business_data":{"get":{"result":true}},"is_backend":{"get":{"get":true}},"s_facebook_id":{"get":{"get":true}},"s_microsoft_id":{"get":{"get":true}},"text_authorization_apple":{"get":{"get":true}},"text_google_plus":{"get":{"get":true}},"text_mail":{"get":{"get":true}},"uid":{"get":{"get":true}},"uid_mail":{"get":{"result":true}}}};
};

/**
 * Gets information about businesses where given user is a staff member.
 *
 * Used during staff login to determine which businesses the user can access. Accepts identity via UID
 * or any supported social login identifier, then returns the matching list of businesses to display
 * on the business selection screen. In backend mode, franchisee locations and IP access restrictions
 * are also evaluated.
 *
 * @function
 * @name Wl_Business_BusinessAccessModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
